var util = require('../../utils/util.js')
var app = getApp();
var items = ['播放列表', '歌曲', '专辑', '演唱者']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.onBackgroundAudioStop(function () {
      that.setData({
        playing: false
      })
    })
    var that = this
    wx.request({
      url: app.globalData.getvkeyUrl,
      data: '',
      header: { 'Content-Type': 'json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        that.setData({
          vkey: res.data.key
        });
      },
      fail: function (res) { },
      complete: function (res) { },
    })
    wx.request({
      url: app.globalData.topListUrl,
      data: '',
      header: {'Content-Type': 'json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.processData(res.data);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    that.setData({
      actionSheetHidden: items,
      playing: true,
      playBar: app.globalData.playing
    })
  },

  processData: function (musicData) {
    var songlist = [];
    for (var index in musicData.songlist) {
      var song = musicData.songlist[index];
      var dataUrl = app.globalData.playUrlPre + song.data.strMediaMid + app.globalData.playUrlPost + this.data.vkey;
      var name = song.data.songname;
      var singer = song.data.singer[0].name;
      var mid = song.data.songmid;
      var coverImgUrl = app.globalData.coverImgUrlPre + song.data.albummid + app.globalData.coverImgUrlPost;
      var temp = {
        dataUrl: dataUrl,
        name: name,
        singer: singer,
        coverImgUrl: coverImgUrl
      };
      songlist.push(temp);
      this.setData({
        songList: songlist
      });
    }
  },

  playButtonTap: function () {
    var that = this

  },
  actionSheetTap: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

  play: function (event) {
    var that = this
    var res = that.data.songList[event.currentTarget.dataset.num]
    getApp().globalData.playing = res
    that.setData({
      playBar: res,
      playingSongsNum: event.currentTarget.dataset.num
    })
    wx.playBackgroundAudio({
      dataUrl: res.dataUrl,
      coverImgUrl: res.coverImgUrl,
      title: res.name + '——' + res.singer,
      complete: function (res) {
        that.setData({
          playing: true
        })
      }
    })
  },
  pause: function () {
    var that = this
    wx.pauseBackgroundAudio({
      success: function () {
        that.setData({
          playing: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})


// Page(pageObject)
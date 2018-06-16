//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData:{
    guid: "1830679348",
    getvkeyUrl: "http://base.music.qq.com/fcgi-bin/fcg_musicexpress.fcg?json=3&guid=1830679348&g_tk=938407465&loginUin=0&hostUin=0&format=json&inCharset=GB2312&outCharset=GB2312%C2%ACice=0&platform=yqq&jsonpCallback=&needNewCode=0",
    topListUrl: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018_16&topid=26&type=top&song_begin=0&song_num=30&g_tk=5381&json=MusicJsonCallbacktoplist&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",
    fasionListUrl: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018-04-28&topid=4&type=top&song_begin=0&song_num=30&g_tk=5381&jsonpCallback=MusicJsonCallbacktoplist&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",
    newListUrl: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018-04-28&topid=27&type=top&song_begin=0&song_num=30&g_tk=5381&jsonpCallback=MusicJsonCallbacktoplist&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",
    playUrlPre: "https://dl.stream.qqmusic.qq.com/M800",
    playUrlPost: ".mp3?guid=1830679348&uid=0&fromtag=53&vkey=",
    coverImgUrlPre: "https://y.gtimg.cn/music/photo_new/T002R300x300M000",
    coverImgUrlPost: ".jpg?max_age=2592000",
    lrcUrlPre: "https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?nobase64=1&callback=MusicJsonCallback_lrc&pcachetime=1523585110364&songmid=",
    lrcUrlPost: "&g_tk=5381&jsonpCallback=MusicJsonCallback_lrc&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",
    userInfo:null,
    playing:null,
    palyList:[{
      albummid: "000zFECL2iqwch", 
      songmid: "002lUqDY0GmcWj", 
      strMediaMid: "000TOO4v0AF3Bs", 
      name: "BINGBIAN病变 (女声版)", 
      singer: "鞠文娴"
    }]
  }
})

import interfaces from "./interfaces.js";
let request = (url, data, type) => new Promise((resolve, reject) => {
  console.log(data)
  wx.request({
    url: 'https://www.wanandroid.com' + url,
    data: data,
    method: type,//OPTIONS,GET,HEAD,POST,PUT,DELETE,TRANCE,CONNECT
    header: {
      'content-type': 'application/x-www-form-urlencoded', // 默认值
      "cookie": wx.getStorageSync("cookie")
    },
    success: function (res) {
      //success
      console.log(res);
      if (res.data.errorCode == 0) {
        if (url == interfaces.INTERFACE_USER_LOGIN || url == interfaces.INTERFACE_REGISTER) {
          wx.setStorageSync("cookie", res.header['Set-Cookie'])
        }
        resolve(res.data)
      } else {
        reject(res.data)
      }
    },
    fail: function (err) {
      //fail
      reject(err)
    },
    complete: function () {
      //complete
    }
  })
})

module.exports = {
  request
}
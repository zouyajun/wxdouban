
const app = getApp()

// 列表分页加载网络请求
function fetchResultItemList(type,pageIndex,pageSize,callback) {
  wx.request({
    url: app.globalData.uri + '/' + type,
    data: {
      start: pageIndex,
      count: pageSize
    },
    header: {
      'content-Type':'application/json'
    },
    success: function(res) {
      
      if(res.statusCode == 200) {
        console.log(res.data)
        callback(res.data)
      }
    }
  })
}

// 搜索分页加载网络请求
// function fetchSearchResultItemList(keyword,pageLocation,pageSize,callback) {
//   wx.request({
//     url: app.globalData.uri + '/search?q=' + keyword,
//     data: {
//       start: pageLocation,
//       count: pageSize
//     },
//     header: {
//       'Content-Type':'application/json'
//     },
//     success: function(res) {
//       if(res.statusCode == 200) {
//         console.log(res.data)
//         callback(res.data)
//       }
//     }
//   })
// }


// 注意这个地方的引用
module.exports = {
  fetchResultItemList: fetchResultItemList
  // fetchSearchResultItemList: fetchSearchResultItemList
}
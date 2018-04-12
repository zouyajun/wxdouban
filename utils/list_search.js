
// 获取全局实例对象
const app = getApp()

// 定义数据格式
// wxSearchData: {
//   value:''
// }


var _that = null;
var _goBackFunction = null;
var _fetchLoadMoreItemList = null;

// 初始化函数
function init(that, myGobackFunction, fetchLoadMoreItemList) {
  _that = that;
  _goBackFunction = myGobackFunction;
  _fetchLoadMoreItemList = fetchLoadMoreItemList;
}

// 搜索输入函数
function wxSearchInput(e) {
  var tempValue = e.detail.value;
  var tempData = _that.data.wxSearchData;
  tempData.value = tempValue;
  _that.setData({
    wxSearchData: tempData
  });
  console.log(tempValue)
}
// 搜索确认函数
function wxSearchConfirm(e) {
  var key = e.target.dataset.key;
  if(key == 'back') {
    _goBackFunction();
  } else {
    _that.setData({
      hasMore: false,
      pageLocation: 1,
      searchItemList: []
    });
    search(_that.data.wxSearchData.value)
  }
}
// 搜索清空函数
function wxSearchClear(e) {
  var tempData = _that.data.wxSearchData;
  tempData.value = '';
  _that.setData({
    wxSearchData: tempData
  })
}

// 搜索网络请求接口
function fetchResultItemList(keyword,pageLocation,pageSize,callBack) {
  wx.request({
    url: 'http://t.yushu.im/v2/movie/search?q=' + keyword,
    data: {
      start: pageLocation,
      count: pageSize
    },
    header: {
      'Content-Type':'application/json'
    },
    success: function(res) {
      callBack(res.data)
    }
  })
}

function search(inputValue) {
  if(inputValue && inputValue.length > 0) {
    var tempData = _that.data.wxSearchData;
    tempData.value = inputValue;
    _that.setData({
      wxSearchData: tempData
    });
    // 跳用加载更多函数
    _fetchLoadMoreItemList();
  }
}
// 导出
module.exports = {
  init:init,
  wxSearchInput: wxSearchInput,
  wxSearchConfirm: wxSearchConfirm,
  wxSearchClear: wxSearchClear,
  fetchResultItemList: fetchResultItemList,
}
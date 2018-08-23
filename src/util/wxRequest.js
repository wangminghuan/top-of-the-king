import wepy from 'wepy';
const wxRequest = async(params = {}, url) => {
    // tip.loading();
    wx.showLoading()
    let data = params.query || {};
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: {'Content-Type': 'application/json'},
    });
    wx.hideLoading();
    return res;
};


export default wxRequest
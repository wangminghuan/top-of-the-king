import wepy from 'wepy';
const wxRequest = async(params = {}, url) => {
    // tip.loading();
    let data = params.query || {};
    data.timestamp = (new Date()).getTime();
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/json' },
    });
    // tip.loaded();
    return res;
};


export default wxRequest
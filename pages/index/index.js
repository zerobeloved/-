// pages/index/index.js
import requests from '../../utils/requests'
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        // wx.request({
        //     url: 'http://localhost:3000/banner',
        //     data: {type: 2},
        //     success: (res) => {
        //       console.log("成功:", res)
        //     },
        //     fail: (err)=> {
        //       console.log("失败:", err)
        //     }
        //   })
        let bannerListData = await requests('/banner',{type: 2})
        let personalized = await requests('/personalized', {limitt: 10})
        this.setData({
            bannerListData:bannerListData.banners,
            personalizedData:personalized.result
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
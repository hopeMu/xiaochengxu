Page({
    onTap: function (event) {
        // wx.navigateTo({
        //     url:"../posts/post"
        // });
        //提轉到tab頁面面關閉所有非tab頁面
        wx.switchTab({
            url: "../posts/post"
        });
        
    }
})
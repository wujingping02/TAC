export default {
    data: {
        userInfo: {},// 用户信息，记录的用户的角色信息
        teacherHeadImageId: "bbe02401514443e0b0315b4274397981",
        teacherIntro: "",
        teacherName: "",
        parentPhotos: null
    },
    globalData: ['globalPropTest', 'ccc.ddd'],
    logMotto: function () {
        console.log(this.data.motto)
    },
    //默认 false，为 true 会无脑更新所有实例
    //updateAll: true
}
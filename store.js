export default {
    data: {
        userInfo: {},// 用户信息，记录的用户的角色信息
        valueInfo: {},// 表单信息，用户在页面上录入的信息
        courseList: [],// 课程列表
        classList: {}// 班级列表
    },
    globalData: ['globalPropTest', 'ccc.ddd'],
    logMotto: function () {
        console.log(this.data.motto)
    },
    //默认 false，为 true 会无脑更新所有实例
    //updateAll: true
}
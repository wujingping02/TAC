export default {
    data: {
        userInfo: {},// 用户信息，记录的用户的角色信息
        valueInfo: {},// 表单信息，用户在页面上录入的信息
        store_courseList: null,// 课程列表
        store_classList: null,// 班级列表
        store_addressList: null,// 机构地址列表
        store_clsRoomList: null,// 机构下的教室列表
        store_teacherList: null,// 机构下的教室列表
        store_assistantList: null,// 机构下的助教列表
        store_childrenList: null,// 家长子女信息
    },
    globalData: ['globalPropTest', 'ccc.ddd'],
    logMotto: function () {
        console.log(this.data.motto)
    },
    //默认 false，为 true 会无脑更新所有实例
    //updateAll: true
}
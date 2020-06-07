// 记录了所有接口的地址和mock数据
export default{
    "asdasdIsLogin" : {
        url : "https://asdasd/asdasd/isLogin",
        mockData : {
            code : "9",
            msg : "失败了",
            data : "",
            userId : "",
            token : "",
            newUserFlag : ""
        }
    },
    "courseList" : {
        url : "/course/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {name : "课程1"}
            ]
        }
    },
    "classList" : {
        url : "/institute/class/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {name : "班级1"}
            ]
        }
    },
}
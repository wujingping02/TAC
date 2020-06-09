// 记录了所有接口的地址和mock数据
export default{
    // 获取登录信息
    "userLogin" : {
        url : "/user/login",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : {
                name : "张三",
                phone : "13112341234",
                // 10 培训机构管理员
                // 20 助教
                // 30 教师
                // 40 家长
                userType : "40"
            },
            token : "123"
        }
    },
    // 首页获取课程列表
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
    // 获取班级列表
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
    // 获取课节列表
    "lessonList" : {
        url : "/institute/class/lesson/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {name : "课节1"}
            ]
        }
    },
    // 机构获取地址列表
    "addressList" : {
        url : "/institute/address/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {name : "地址1"}
            ]
        }
    },
    // 机构获取教室列表
    "classroomList" : {
        url : "/institute/classroom/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {name : "地址1"}
            ]
        }
    },
    // 老师和助教获取机构列表
    "relativeList" : {
        url : "/institute/relative/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {name : "机构1"}
            ]
        }
    },
    // 老师换补课列表
    "changeList" : {
        url : "/teacher/lesson/change/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {name : "换补课1"}
            ]
        }
    },
    // 家长查询子女信息
    "childrenList" : {
        url : "/parent/children/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {name : "子女1"}
            ]
        }
    },
    // 机构查询课程列表
    "courseList2" : {
        url : "/institute/course/list2",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {name : "课程1"}
            ]
        }
    }
}
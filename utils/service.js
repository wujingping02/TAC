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
                {
                    name : "英语1",
                    url : "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2137031589,1389711183&fm=11&gp=0.jpg",
                    sAge : "1",
                    eAge : "2",
                    address : "徐汇区宛平南路1109号",
                    price : "200",
                    orgImg : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592061513264&di=aaa15f42814931c75dd6ae677b84e18c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fa_auto%2Cc_cut%2Cx_36%2Cy_68%2Cw_416%2Ch_416%2Fimages%2F20200509%2Fd590572f9dd04ce0932ca5af0ea29fc4.jpeg",
                    orgName : "呵呵借款收到经安徽省登记哈数据库的好机会"
                },{
                    name : "英语2",
                    url : "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3233389117,473746678&fm=11&gp=0.jpg",
                    sAge : "2",
                    eAge : "3",
                    address : "徐汇区宛平南路1109号",
                    price : "200",
                    orgImg : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592061513264&di=aaa15f42814931c75dd6ae677b84e18c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fa_auto%2Cc_cut%2Cx_36%2Cy_68%2Cw_416%2Ch_416%2Fimages%2F20200509%2Fd590572f9dd04ce0932ca5af0ea29fc4.jpeg",
                    orgName : "呵呵借款收到经安徽省登记哈数据库的好机会"
                },{
                    name : "语文3",
                    url : "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1264197438,3434707790&fm=11&gp=0.jpg",
                    sAge : "3",
                    eAge : "4",
                    address : "徐汇区宛平南路1109号",
                    price : "200",
                    orgImg : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592061513264&di=aaa15f42814931c75dd6ae677b84e18c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fa_auto%2Cc_cut%2Cx_36%2Cy_68%2Cw_416%2Ch_416%2Fimages%2F20200509%2Fd590572f9dd04ce0932ca5af0ea29fc4.jpeg",
                    orgName : "呵呵借款收到经安徽省登记哈数据库的好机会"
                },{
                    name : "数学4",
                    url : "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=905759001,1131007225&fm=11&gp=0.jpg",
                    sAge : "4",
                    eAge : "5",
                    address : "徐汇区宛平南路1109号",
                    price : "500",
                    orgImg : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592061513264&di=aaa15f42814931c75dd6ae677b84e18c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fa_auto%2Cc_cut%2Cx_36%2Cy_68%2Cw_416%2Ch_416%2Fimages%2F20200509%2Fd590572f9dd04ce0932ca5af0ea29fc4.jpeg",
                    orgName : "呵呵借款收到经安徽省登记哈数据库的好机会"
                }
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
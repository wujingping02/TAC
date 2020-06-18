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
                userType : "10"
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
                {name : "班级1"},
                {name : "班级2"},
                {name : "班级3"},
                {name : "班级4"},
                {name : "班级5"}
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
                {
                    name : "地址1",
                    provice : "上海市",
                    city : "上海市",
                    area : "徐汇区",
                    address : "宛平南路1109号"
                },{
                    name : "地址2",
                    provice : "河北省",
                    city : "石家庄市",
                    area : "长安区",
                    address : "宛平南路1109号"
                }
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
                {name : "教室1",number : "20"},
                {name : "教室1",number : "20"},
                {name : "教室1",number : "20"},
                {name : "教室1",number : "20"},
                {name : "教室1",number : "20"},
                {name : "教室1",number : "20"},
                {name : "教室1",number : "20"},
                {name : "教室1",number : "20"},
                {name : "教室1",number : "20"},
                {name : "教室1",number : "20"},
                {name : "教室2",number : "20"}
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
    },
    // 查询机构详情
    "introductionGetDetail" : {
        url : "/institute/introduction/getDetail",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : {
                image : "http://img1.imgtn.bdimg.com/it/u=1931440835,1335623672&fm=26&gp=0.jpg",
                name : "孙悟空",
                detail : "《龙珠Z》（DRAGON BALLZ （Zetto）），是《龙珠》系列中的第二部，根据日本著名漫画家鸟山明的同名《龙珠》漫画改编，于1989年4月19日在日本富士电视台首播1996年1月31日播放完毕。改编于漫画中第195篇-第519篇，因为这期间鸟山明的漫画风格转为超激战，而且故事也和前194篇风格没有太大关联，因此由东映动画公司改编成为独立的动画片。题目中的“Z”为鸟山明所取，字母表最后一个字母，意为“结束”。",
                phone : [
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592150153352&di=bd2c2d643e6b69e5a321c8057afad823&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1731565382%2C3695015853%26fm%3D214%26gp%3D0.jpg"
                    ,"http://img2.imgtn.bdimg.com/it/u=1873874002,1324989472&fm=26&gp=0.jpg"
                    ,"http://img5.imgtn.bdimg.com/it/u=132539127,2703113384&fm=26&gp=0.jpg"
                ],
                address : [
                    "徐汇区宛平我拿你1109号急急急",
                    "徐汇区宛平我拿你1109号急急急",
                    "徐汇区宛平我拿你1109号急急急"
                ]
            }
        }
    },
    // 机构添加教室
    classroomAdd : {
        url : "/institute/classroom/add",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : {
                name : "新教室",
                number : "999"
            }
        }
    },
    // 获取教师列表
    teacherList : {
        url : "/institute/class/teacher/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {
                    url : "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=773859522,545547748&fm=26&gp=0.jpg",
                    name : "教师1",
                    phone : "131123"
                },
                {   
                    url : "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3099595195,3442150895&fm=26&gp=0.jpg",
                    name : "教师2",
                    phone : "13114"
                }
            ]
        }
    },
    // 获取助教列表
    userList : {
        url : "/institute/user/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {
                    name : "助教1",
                    phone : "13112341234"
                },
                {
                    name : "助教2",
                    phone : "13112341234"
                }
            ]
        }
    },
    // 查询教师、助教信息
    userQuery : {
        url : "/institute/user/query",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : {
                name : "张三",
                phone : "13112341234"
            },
        }
    }
}
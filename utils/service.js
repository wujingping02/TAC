// 记录了所有接口的地址和mock数据
let domain = "https://timeafterschool.net/";

export default{
    // 获取登录信息
    login : {
        url : domain + "tas/user/login",
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
                userType : "30"
            },
            token : "123"
        }
    },
    // 选课获取课程列表
    courseList : {
        url : domain + "tas/course/getCourseList",
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
    // 家长查询图片列表
    photoList : {
        url : domain + "parent/photo/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {
                    name : "英语1",
                    url : "http://t7.baidu.com/it/u=1278269090,484809810&fm=193",                    
                    orgName : "呵呵借款收到经安徽省登记哈数据库的好机会",
                    time : "2020-10-10 10:10~10:00"
                },{
                    name : "英语1",
                    url : "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1134228055,3453265759&fm=26&gp=0.jpg",
                    orgName : "呵呵借款收到经安徽省登记哈数据库的好机会",
                    time : "2020-10-10 10:10~10:00"
                },{
                    name : "英语1",
                    url : "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3660044098,2807486520&fm=26&gp=0.jpg",
                    orgName : "呵呵借款收到经安徽省登记哈数据库的好机会",
                    time : "2020-10-10 10:10~10:00"
                },{
                    name : "英语1",
                    url : "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3349106034,2428154400&fm=26&gp=0.jpg",
                    orgName : "呵呵借款收到经安徽省登记哈数据库的好机会",
                    time : "2020-10-10 10:10~10:00"
                }
            ]
        }
    },
    // 机构获取课程列表
    orgCourseList : {
        url : domain + "tas/institute/getCourseList",
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
                    introd : "哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或哈哈哈哈哈哈哈哈哈哈",
                    orgImg : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592061513264&di=aaa15f42814931c75dd6ae677b84e18c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fa_auto%2Cc_cut%2Cx_36%2Cy_68%2Cw_416%2Ch_416%2Fimages%2F20200509%2Fd590572f9dd04ce0932ca5af0ea29fc4.jpeg",
                    orgName : "呵呵借款收到经安徽省登记哈数据库的好机会"
                },{
                    name : "英语2",
                    url : "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3233389117,473746678&fm=11&gp=0.jpg",
                    sAge : "2",
                    eAge : "3",
                    address : "徐汇区宛平南路1109号",
                    price : "200",
                    introd : "哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或哈哈哈哈哈哈哈哈哈哈",
                    orgImg : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592061513264&di=aaa15f42814931c75dd6ae677b84e18c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fa_auto%2Cc_cut%2Cx_36%2Cy_68%2Cw_416%2Ch_416%2Fimages%2F20200509%2Fd590572f9dd04ce0932ca5af0ea29fc4.jpeg",
                    orgName : "呵呵借款收到经安徽省登记哈数据库的好机会"
                },{
                    name : "语文3",
                    url : "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1264197438,3434707790&fm=11&gp=0.jpg",
                    sAge : "3",
                    eAge : "4",
                    address : "徐汇区宛平南路1109号",
                    price : "200",
                    introd : "哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或哈哈哈哈哈哈哈哈哈哈",
                    orgImg : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592061513264&di=aaa15f42814931c75dd6ae677b84e18c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fa_auto%2Cc_cut%2Cx_36%2Cy_68%2Cw_416%2Ch_416%2Fimages%2F20200509%2Fd590572f9dd04ce0932ca5af0ea29fc4.jpeg",
                    orgName : "呵呵借款收到经安徽省登记哈数据库的好机会"
                },{
                    name : "数学4",
                    url : "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=905759001,1131007225&fm=11&gp=0.jpg",
                    sAge : "4",
                    eAge : "5",
                    address : "徐汇区宛平南路1109号",
                    price : "500",
                    introd : "哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或哈哈哈哈哈哈哈哈哈哈",
                    orgImg : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592061513264&di=aaa15f42814931c75dd6ae677b84e18c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fa_auto%2Cc_cut%2Cx_36%2Cy_68%2Cw_416%2Ch_416%2Fimages%2F20200509%2Fd590572f9dd04ce0932ca5af0ea29fc4.jpeg",
                    orgName : "呵呵借款收到经安徽省登记哈数据库的好机会"
                }
            ]
        }
    },
    // 机构新增课程
    orgAddCourse : {
        url : domain + "tas/institute/addCourse",
    },
    // 获取班级列表
    classList : {
        url : domain + "institute/class/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {
                    name: "班级1",
                    address: "上课地址：上海市徐汇区龙华中立1109号",
                    nowPeo: "6",
                    signInStatus: "1",
                    maxPeo: "10",
                    time: "10:10 ~ 11:00",
                    lessonName: "英语系统课本",
                    teacher: "陈晓光",
                    url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1129653791,3279761061&fm=26&gp=0.jpg",
                    remark: "哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或"
                },{
                    name: "班级2",
                    address: "上课地址：上海市徐汇区龙华中立1109号",
                    nowPeo: "7",
                    signInStatus: "0",
                    maxPeo: "10",
                    time: "10:10 ~ 11:00",
                    lessonName: "英语系统课本",
                    teacher: "陈晓光",
                    url: "http://i-1-binzz.qqxzb-img.com/2018/8/16/d4ca486c-fbf4-4c62-a464-05091fcf9ad7.png?imageView2/2/q/65/w/600",
                    remark: "哈哈哈哈哈哈哈哈哈哈或或或"
                }
            ]
        }
    },
    // 获取课节列表
    lessonList : {
        url : domain + "institute/class/lesson/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {
                    date : "2020-09-09",
                    time : "10:00-10:00",
                    name : "张三",
                    url : "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1025402524,1094237387&fm=26&gp=0.jpg",
                    className : "哈哈班"
                }
            ]
        }
    },
    // 机构获取地址列表
    addressList : {
        url : domain + "tas/institute/getAddressList",
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
    classroomList : {
        url : domain + "tas/institute/address/getClassroomList",
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
    relativeList : {
        url : domain + "institute/relative/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {name : "机构1"}
            ]
        }
    },
    // 老师换补课列表
    changeList : {
        url : domain + "teacher/lesson/change/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {
                    name : "换补课1阿萨德法师的法师打发第三方",
                    url : "http://t7.baidu.com/it/u=2693777839,2096851452&fm=193",
                    teacher : "张三",
                    address : "上海市徐汇区宛平南路1109号",
                    date : "2020-07-09 10:00-11:00"
                },{
                    name : "换补课2",
                    url : "http://t8.baidu.com/it/u=2247732864,1483251733&fm=193",
                    teacher : "李四",
                    address : "上海市徐汇区宛平南路1109号",
                    date : "2020-07-09 10:00-11:00"
                },
            ]
        }
    },
    // 家长查询子女信息
    childrenList : {
        url : domain + "parent/children/list",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : [
                {name : "子女1"}
            ]
        }
    },
    // 查询机构详情
    introductionGetDetail : {
        url : domain + "institute/introduction/getDetail",
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
    // 获取教师列表
    teacherList : {
        url : domain + "institute/class/teacher/list",
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
    // 获取助教列表获取助教列表
    userList : {
        url : domain + "institute/user/list",
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
        url : domain + "institute/user/query",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : {
                name : "张三",
                phone : "13112341234"
            },
        }
    },
    // 首页查询课程详情
    courseQuery : {
        url : domain + "course/query",
        mockData : {
            code : "0000",
            msg : "失败了",
            data : {
                name : "张三",
                age1: "2",
                age2: "3",
                address: "岚皋路597号十八公尺806",
                phone : "13112341234",
                orgPhoto: [
                    "http://img2.imgtn.bdimg.com/it/u=1873874002,1324989472&fm=26&gp=0.jpg",
                    "http://img5.imgtn.bdimg.com/it/u=132539127,2703113384&fm=26&gp=0.jpg"
                ],
                teacher : [
                    {
                        url : "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=773859522,545547748&fm=26&gp=0.jpg",
                        name : "教师1",
                        phone : "13112341234"
                    },{   
                        url : "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3099595195,3442150895&fm=26&gp=0.jpg",
                        name : "教师2",
                        phone : "13112341234"
                    },{   
                        url : "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3099595195,3442150895&fm=26&gp=0.jpg",
                        name : "教师3",
                        phone : "13112341234"
                    }
                ],
                courseIntrd: "这是啊实打实大快速的拉升的接口连接上大师级的垃圾收到了sad就拉倒就卡死的进口丝萨贝达哈弗力缆狂澜喀什东路卡死了的卡拉斯科达拉斯",
                orgName: "上海市第一师范附属小学",
                orgIntrd: "看看监控登记卡SDK撒娇的凯撒肯德基卡时间段卡时间段卡加斯打卡机山东矿机撒开的凯撒奖打卡时间贷款啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿",
                lessonList: [
                    {
                        date : "2020-09-01",
                        startTime : "10:00", 
                        endTime : "11:00"
                    },{
                        date : "2020-19-01",
                        startTime : "11:00", 
                        endTime : "11:00"
                    },{
                        date : "2020-09-01",
                        startTime : "12:01", 
                        endTime : "15:00"
                    },{
                        date : "2020-09-01",
                        startTime : "12:01", 
                        endTime : "15:00"
                    },{
                        date : "2020-09-01",
                        startTime : "12:01", 
                        endTime : "15:00"
                    },{
                        date : "2020-09-01",
                        startTime : "12:01", 
                        endTime : "15:00"
                    }
                ]
            },
        }
    },
    // 注册
    register : {
        url : domain + 'tas/user/register'
    },
    // 完善机构信息
    submitInfo : {
        url : domain + 'tas/institute/modifyBaseInfo'
    },
    // 查询基本信息
    getAllInfo : {
        url : domain + "tas/user/query"
    },
    // 新增机构校区
    addAddress : {
        url : domain + "tas/institute/addAddress"
    },
    // 编辑地址信息
    editAddress : {
        url : domain + "tas/institute/modifyAddress"
    },
    // 新增教室
    addClassroom : {
        url : domain + "tas/institute/address/addClassroom"
    },
    // 上传图片
    upload : {
        url : domain + "tas/image/uploadImage"
    },
    // 机构修改头像
    changeAvatar : {
        url : domain + "tas/institute/modifyHeadImage"
    }
}
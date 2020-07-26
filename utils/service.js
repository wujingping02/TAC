// 记录了所有接口的地址和mock数据
let domain = "https://timeafterschool.net/";

export default{
    login : domain + "tas/user/login",// 获取登录信息
    courseList : domain + "tas/course/getCourseList",// 选课获取课程列表
    courseQuery : domain + "tas/course/queryCourse",// 首页查询课程详情
    register : domain + "tas/user/register",// 注册
    getAllInfo : domain + "tas/user/query",// 查询基本信息
    upload : domain + "tas/image/uploadImage",// 上传图片
    modifyHeadImage : domain + "tas/user/modifyHeadImage",// 换头像
    /**----------------------------------------以上是公用接口--------------------------------------------------------*/
    getCalendarLessonList : domain + "tas/institute/getCalendarLessonList",// 机构行事历获取班级列表
    orgCourseList : domain + "tas/institute/getCourseList",// 机构获取课程列表
    orgAddCourse : domain + "tas/institute/addCourse",// 机构新增课程
    lessonList : domain + "tas/institute/getClassLessonList",// 获取课节列表
    addressList : domain + "tas/institute/getAddressList",// 机构获取地址列表
    classroomList : domain + "tas/institute/address/getClassroomList",// 机构获取教室列表
    teacherList : domain + "tas/institute/getTeacherList",// 获取教师列表
    addTeacher : domain + "tas/institute/addTeacher",// 添加教师
    userQuery : domain + "tas/institute/queryTeacher",// 查询教师、助教信息
    submitInfo : domain + "tas/institute/modifyBaseInfo",// 完善机构信息
    addAddress : domain + "tas/institute/addAddress",// 新增机构校区
    editAddress : domain + "tas/institute/modifyAddress",// 编辑地址信息
    addClassroom : domain + "tas/institute/address/addClassroom",// 新增教室
    getCourseInfo : domain + "tas/institute/queryCourse",// 机构获取课程信息
    editCourseInfo : domain + "tas/institute/modifyCourse",// 编辑课程信息
    delTeacher : domain + "tas/institute/deleteTeacher",// 机构删除老师接口
    getAssistantList : domain + "tas/institute/getAssistantList", // 获取助教列表
    deleteAssistant : domain + "tas/institute/deleteAssistant",// 机构删除助教接口
    queryAssistant : domain + "tas/institute/queryAssistant",// 查询可添加助教
    addAssistant : domain + "tas/institute/addAssistant",// 添加助教
    queryInstituteImages : domain + "tas/institute/queryInstituteImages",// 机构详情查询机构图片接口
    saveInstituteImages : domain + "tas/institute/saveInstituteImages",// 保存机构相册接口
    modifyIntroduction : domain + "tas/institute/modifyIntroduction",// 保存机构基本信息
    publishCourse : domain + "tas/institute/publishCourse",// 发布课程
    offShelfCourse : domain + "tas/institute/offShelfCourse",// 下架课程
    addClass : domain + "tas/institute/addClass",// 新增一个班级
    addLesson : domain + "tas/institute/addLesson",// 新增一个课时
    deleteLesson : domain + "tas/institute/deleteLesson",// 删除一个课时
    startClass : domain + "tas/institute/startClass",// 开班
    deleteClass : domain + "tas/institute/deleteClass",// 删除班级
    getClassTeacherList : domain + "tas/institute/getClassTeacherList",// 查询老师列表
    getClassClassroomList : domain + "tas/institute/getClassClassroomList",// 查询教室列表
    getClassList : domain + "tas/institute/getClassList",// 获取课程下班级列表接口
    /**----------------------------------------以上是机构接口--------------------------------------------------------*/
    teaSubmitInfo : domain + "tas/teacher/modifyBaseInfo",// 老师的保存基本信息接口
    teaQueryTeacherImages : domain + "tas/teacher/queryTeacherImages",// 老师的照片列表
    teaCourseQueryTeacherImages : domain + "tas/course/queryTeacherImages",// 课程详情页面老师的照片列表
    teaModifyIntroduction : domain + "tas/teacher/modifyPersonalProfile",// 老师编辑简介
    teaSaveInstituteImages : domain + "tas/teacher/saveTeacherImages",// 老师编辑图片
    relativeList : domain + "tas/teacher/getInstituteList",// 老师获取机构列表
    verifyInstitute : domain + "tas/teacher/verifyInstitute",// 老师获取机构列表
    quitInstitute : domain + "tas/teacher/quitInstitute",// 老师获取机构列表
    teaGetLessonList : domain + "tas/teacher/getLessonList",// 老师行事历接口
    changeList : domain + "tas/teacher/getMakeUpLessonList",// 老师查询换补课列表
    getEnrollList : domain + "tas/teacher/getEnrollList",// 点名列表接口
    queryLessonImages : domain + "tas/teacher/queryLessonImages",// 获取班级图片接口
    saveLessonImages : domain + "tas/teacher/saveLessonImages",// 保存班级图片接口
    remarkLesson : domain + "tas/teacher/remarkLesson",// 给学生添加备注
    signInLesson : domain + "tas/teacher/signInLesson",// 签到
    makeUpLesson : domain + "tas/teacher/makeUpLesson",// 加入换补课列表
    sureUpLesson : domain + "tas/teacher/confirmMakeUpLesson",// 换补课
    teaGetClassList : domain + "tas/teacher/getClassList",// 老师查班级列表
    teaGetCourseList : domain + "tas/teacher/getCourseList",// 老师查课程列表
    /**----------------------------------------以上是老师接口--------------------------------------------------------*/
    ZJmodifyBaseInfo : domain + "tas/assistant/modifyBaseInfo",// 助教提交基本信息
    ZJGetInstituteList : domain + "tas/assistant/getInstituteList",// 助教获取机构列表
    ZJVerifyInstitute : domain + "tas/assistant/verifyInstitute",// 助教加入机构
    ZJGetCourseList : domain + "tas/assistant/getCourseList",// 助教班级列表获取课程列表接口
    ZJGetClassList : domain + "tas/assistant/getClassList",// 助教获取机构列表
    /**----------------------------------------以上是助教接口--------------------------------------------------------*/
    parChangeList : domain + "tas/parent/getMakeUpLessonList",// 家长换补课
    parModifyBaseInfo : domain + "tas/parent/modifyBaseInfo",// 家长提交基本信息
    enrollClass : domain + "tas/parent/enrollClass",// 家长预约班级
    addChildren : domain + "tas/parent/addChildren",// 家长添加子女
    childrenList : domain + "tas/parent/getChildrenList",// 家长查询子女信息
    getAppointClassList : domain + "tas/course/getAppointClassList",// 查询可预约课程
    auditionLesson : domain + "tas/parent/auditionLesson",// 试听
    photoList : domain + "tas/parent/getPhotoList",// 家长查询图片列表
    getEnrollLessonList : domain + "tas/parent/getEnrollLessonList",// 家长行事历接口
    addCustomCourse : domain + "tas/parent/addCustomCourse",// 家长新增自定义课程
    getCustomList : domain + "tas/parent/getCustomList"// 家长自定义课表
    /**----------------------------------------以上是家长接口--------------------------------------------------------*/
}
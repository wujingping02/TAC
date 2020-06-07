import store from '../../store'
import create from '../../utils/create'

create(store, {
  data: {
    courseList: null,
    courseName: ""
  },

  onLoad: function (options) {
    this.setData({
      courseName: this.store.data.courseList[options.index].name
    })
  },
})

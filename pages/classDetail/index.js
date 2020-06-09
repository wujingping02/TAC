import store from '../../store'
import create from '../../utils/create'

create(store, {
  data: {
    classList: null,
    className: ""
  },

  onLoad: function (options) {
    this.setData({
      className: this.store.data.classList[options.index].name
    })
  },
})

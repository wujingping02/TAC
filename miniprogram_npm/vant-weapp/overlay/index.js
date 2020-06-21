import { VantComponent } from '../common/component';
VantComponent({
  props: {
    show: Boolean,
    customStyle: String,
    duration: {
      type: null,
      value: 0,
    },
    zIndex: {
      type: Number,
      value: 1,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
    // for prevent touchmove
    noop() {},
  },
});

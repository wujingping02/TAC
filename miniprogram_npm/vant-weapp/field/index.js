import { VantComponent } from '../common/component';
import { getSystemInfoSync } from '../common/utils';
VantComponent({
    field: true,
    classes: ['input-class', 'right-icon-class'],
    props: {
        size: String,
        icon: String,
        label: String,
        error: Boolean,
        fixed: Boolean,
        focus: Boolean,
        center: Boolean,
        isLink: Boolean,
        leftIcon: String,
        rightIcon: String,
        disabled: Boolean,
        autosize: Boolean,
        readonly: Boolean,
        required: Boolean,
        password: Boolean,
        iconClass: String,
        clearable: Boolean,
        inputAlign: String,
        customStyle: String,
        confirmType: String,
        confirmHold: Boolean,
        errorMessage: String,
        placeholder: String,
        placeholderStyle: String,
        errorMessageAlign: String,
        value: String,
        selectionEnd: {
            type: Number,
            value: -1
        },
        selectionStart: {
            type: Number,
            value: -1
        },
        showConfirmBar: {
            type: Boolean,
            value: true
        },
        adjustPosition: {
            type: Boolean,
            value: true
        },
        cursorSpacing: {
            type: Number,
            value: 50
        },
        maxlength: {
            type: Number,
            value: -1
        },
        type: {
            type: String,
            value: 'text'
        },
        border: {
            type: Boolean,
            value: true
        },
        titleWidth: {
            type: String,
            value: '90px'
        }
    },
    data: {
        val: "",
        focused: false,
        system: getSystemInfoSync().system.split(' ').shift().toLowerCase()
    },
    methods: {
        onInput(event) {
            const { value = '' } = event.detail || {};
            this.set({ value }, () => {
                this.emitChange(value);
            });
        },
        onFocus(event) {
            this.set({ focused: true });
            this.$emit('focus', event.detail);
        },
        onBlur(event) {
            this.set({ focused: false });
            this.$emit('blur', event.detail);
            this.setData({
                val : event.detail.value
            })
        },
        onClickIcon() {
            this.$emit('click-icon');
        },
        onClear() {
            this.set({ value: '' }, () => {
                this.emitChange('');
                this.$emit('clear', '');
            });
        },
        onConfirm() {
            this.$emit('confirm', this.data.value);
        },
        emitChange(value) {
            this.$emit('input', value);
            this.$emit('change', value);
        }
    }
});

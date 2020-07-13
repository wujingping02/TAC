Component({  
  options: {  
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },  
  // 组件的属性列表
  properties: {
    isMust : String,
    disabled : Boolean,
    type : String,
    lable : String,
    className : String,
    check : String,
    value : String
  },  
  // 组件的初始数据
  data: {  
    value : ""
  },  
  ready: function(){// 组件加载完毕
    
  },
  // 组件的方法列表
  methods: {  
    setValue : function(val){
      this.setData({
        value : val
      })
    },
    onBlur : function(e){// 每次焦点离开，拿一下值
      this.properties.value = e.detail.value;
    },
    getValue : function(){// 获取值
      return this.properties.value;
    },
    checkIDCARD : function (val) {
      val = ('' + val).toLocaleUpperCase();
      let Errors = [
          "",
          "身份证位数不对",
          "身份证出生日期超出范围",
          "身份证号不符合规范",
          "身份证地区非法",
          "不支持一代身份证"
      ];
  
      let area = {
          11: "北京",
          12: "天津",
          13: "河北",
          14: "山西",
          15: "内蒙古",
          21: "辽宁",
          22: "吉林",
          23: "黑龙江",
          31: "上海",
          32: "江苏",
          33: "浙江",
          34: "安徽",
          35: "福建",
          36: "江西",
          37: "山东",
          41: "河南",
          42: "湖北",
          43: "湖南",
          44: "广东",
          45: "广西",
          46: "海南",
          50: "重庆",
          51: "四川",
          52: "贵州",
          53: "云南",
          54: "西藏",
          61: "陕西",
          62: "甘肃",
          63: "青海",
          64: "宁夏",
          65: "新疆",
          71: "台湾",
          81: "香港",
          82: "澳门",
          91: "国外"
      }
  
      let Y, JYM, S, M;
      let val_array = [];
      val_array = val.split('');
  
      //地区检验
      if (area[parseInt(val.substr(0, 2))] === null) {
          return Errors[4];
      }
  
      let ereg;
      //身份号码位数及格式检验
      switch (val.length) {
          case 15:
              return Errors[5];
              if ((parseInt(val.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(val.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(val.substr(6, 2)) + 1900) % 4 == 0)) {
                  ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //测试出生日期的合法性
              } else {
                  ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //测试出生日期的合法性
              }
              if (ereg.test(val)) {
                  return Errors[0];
              } else {
                  return Errors[2];
              }
              break;
          case 18:
              ereg = /[0-9Xx]{1}/;
              if (!ereg.test(val.substr(val.length - 1))) {
                  return Errors[3];
              }
              //18位身份号码检测
              //出生日期的合法性检查
              //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
              //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
              if (parseInt(val.substr(6, 4)) % 4 == 0 || (parseInt(val.substr(6, 4)) % 100 == 0 && parseInt(val.substr(6, 4)) % 4 == 0)) {
                  ereg = /^[1-9][0-9]{5}[1-2][0-9]{3}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9X]$/;//闰年出生日期的合法性正则表达式
              } else {
                  ereg = /^[1-9][0-9]{5}[1-2][0-9]{3}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9X]$/;//平年出生日期的合法性正则表达式
              }
              if (ereg.test(val)) { //测试出生日期的合法性
                  //计算校验位
                  S = (parseInt(val_array[0]) + parseInt(val_array[10])) * 7 + (parseInt(val_array[1]) + parseInt(val_array[11])) * 9 + (parseInt(val_array[2]) + parseInt(val_array[12])) * 10 + (parseInt(val_array[3]) + parseInt(val_array[13])) * 5 + (parseInt(val_array[4]) + parseInt(val_array[14])) * 8 + (parseInt(val_array[5]) + parseInt(val_array[15])) * 4 + (parseInt(val_array[6]) + parseInt(val_array[16])) * 2 + parseInt(val_array[7]) * 1 + parseInt(val_array[8]) * 6 + parseInt(val_array[9]) * 3;
                  Y = S % 11;
                  M = "F";
                  JYM = "10X98765432";
                  M = JYM.substr(Y, 1); //判断校验位
                  if (M == val_array[17]) {
                      return Errors[0]; //检测ID的校验位
                  } else {
                      return Errors[3];
                  }
              } else {
                  return Errors[2];
              }
              break;
          default:
              return Errors[1];
              break;
      }
    },
    check : function(){
      if(this.properties.isMust && !this.properties.value){
        wx.showToast({
          title: "请输入" + this.properties.lable,
          icon: 'none'
        })
        return false
      };
      if(this.properties.check === "phone"){// 手机号校验
        if(!/^1\d{10}$/.test(this.properties.value)){
          wx.showToast({
            title: "请输入正确的" + this.properties.lable,
            icon: 'none'
          })
          return false
        }
      }else if(this.properties.check === "num"){// 正整数校验
        if(!/^[1-9]\d*$/.test(this.properties.value)){
          wx.showToast({
            title: this.properties.lable + "必须为正整数",
            icon: 'none'
          })
          return false
        }
      }else if(this.properties.check === "id"){// 身份证校验
        if(this.checkIDCARD(this.properties.value)){
          wx.showToast({
            title: "请输入正确的身份证号",
            icon: 'none'
          })
          return false;        
        };
      }else if(this.properties.check === "email"){// 身份证校验
        if(!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.properties.value)){
          wx.showToast({
            title: "请输入正确的" + this.properties.lable,
            icon: 'none'
          })
          return false
        }
      }
    }
  }  
})

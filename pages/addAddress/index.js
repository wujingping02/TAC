import store from '../../store'
import create from '../../utils/create'
import {ajax, mockRequest, collectVals} from '../../utils/util'
import service from '../../utils/service'

create(store, {
  data: {
    title : "编辑地址",
    addressId : '',
    fieldList : [// 字段list
      {
        "type" : "region",
        "lable" : "所在地区",
        "key" : "provice",
        "isMust" : "1"
      },{
        "type" : "text",
        "lable" : "详细地址",
        "key" : "address",
        "isMust" : "1"
      },{
        "type" : "text",
        "lable" : "联系人姓名",
        "key" : "contactName",
        "isMust" : "1"
      },{
        "type" : "text",
        "lable" : "联系电话",
        "check" : "photo",
        "key" : "contactPhone",
        "isMust" : "1"
      }
    ]
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    if(options.index){
      let data = this.store.data.addressList[options.index];
      // address: "2"
      // addressId: "ADD200630000001"
      // areaCode: "undefined"
      // cityCode: "undefined"
      // contactName: "undefined"
      // contactPhone: "3"
      // instituteId: "INS200629000001"
      // provinceCode: "undefined"
      this.data.fieldList[0].value = data.provinceCode + '-' + data.cityCode + '-' + data.areaCode;
      this.data.fieldList[1].value = data.address;
      this.data.fieldList[2].value = data.contactName;
      this.data.fieldList[3].value = data.contactPhone;
      this.data.addressId = data.addressId;
    }
  },

  // 提交地址信息
  click: function () {
    let vals = collectVals.call(this, this.data.fieldList);
    if(vals === false){
      return
    };
    let datas = {
      provinceCode : vals.provice.split("-")[0],
      cityCode : vals.provice.split("-")[1],
      areaCode : vals.provice.split("-")[2],
      address : vals.address,
      contactName : vals.contactName,
      contactPhone : vals.contactPhone
    };
    if(this.data.addressId){// 编辑状态
      datas.addressId = this.data.addressId;
      ajax({
        url : service.editAddress.url,
        data : datas
      }).then(res => {
        wx.navigateBack({delta: 1})
      })
    }else{// 新增地址
      ajax({
        url : service.addAddress.url,
        data : datas
      }).then(res => {
        wx.navigateBack({delta: 1})
      })
    }
    
  }
})

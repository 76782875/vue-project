webpackJsonp([10],{"3QAu":function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"update-PWD"},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0px"}},[s("el-form-item",{attrs:{prop:"oldpassword"}},[s("label",{attrs:{for:""}},[e._v("原密码:")]),e._v(" "),s("el-input",{attrs:{type:"password",size:"small",placeholder:"原密码:"},model:{value:e.ruleForm.oldpassword,callback:function(r){e.$set(e.ruleForm,"oldpassword",r)},expression:"ruleForm.oldpassword"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"newpassword"}},[s("label",{attrs:{for:""}},[e._v("新密码:")]),e._v(" "),s("el-input",{attrs:{type:"password",size:"small",placeholder:"新密码:"},model:{value:e.ruleForm.newpassword,callback:function(r){e.$set(e.ruleForm,"newpassword",r)},expression:"ruleForm.newpassword"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("label",{attrs:{for:""}},[e._v("确认密码:")]),e._v(" "),s("el-input",{attrs:{type:"password",size:"small",placeholder:"确认密码:"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),e._v(" "),s("div",{staticClass:"login-btn"},[s("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var t=s("VU/8")({name:"updatePWD",data:function(){return{showPassword:!1,captchaCodeImg:"",userInfo:null,alertText:null,ruleForm:{oldpassword:"111111",newpassword:"666666",password:"666666"},rules:{oldpassword:[{required:!0,message:"请输入原密码",trigger:"blur"}],newpassword:[{required:!0,message:"请输入密码",trigger:"blur"}],password:[{required:!0,message:"请确认密码",trigger:"blur"}]}}},mounted:function(){},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return r.$message({type:"warning",center:!0,message:"请填写..."}),!1;r.$message({type:"success",center:!0,message:"修改成功!!!"}),r.ruleForm={oldpassword:"",newpassword:"",password:""}})}}},o,!1,function(e){s("yqkm")},"data-v-958607fe",null);r.default=t.exports},yqkm:function(e,r){}});
//# sourceMappingURL=10.4342c3bb13c6b8fd045e.js.map
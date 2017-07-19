/**
 * Created by UI150730 on 2017/4/17.
 */
import axios from 'axios/dist/axios.min';
var qs = require('qs');

//let base = 'http://crmdev.ohmycar.com:805/privateapi';
//export const BASE = '/privateapi';
 let base = 'http://crm.ohmycar.cn';
 export const BASE = '';

let header = { 'content-type': 'application/x-www-form-urlencoded' };

// 判断是否登陆
export const isLogin = params => { return axios.post(`${base}/isLogin`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 登录
export const doLogin = params => { return axios.post(`${base}/doLogin`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 修改密码
export const modifyPassword = params => { return axios.post(`${base}/modifyPassword`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 退出登录
export const logout = params => { return axios.post(`${base}/logout`, qs.stringify(params), { headers: header }).then(res => res.data); };



// 用户列表
export const memberList = params => { return axios.post(`${base}/member/list`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 用户详情
export const memberDetail = params => { return axios.post(`${base}/member/detail`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 新增用户
export const memberAdd = params => { return axios.post(`${base}/member/add`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 编辑用户
export const memberModify = params => { return axios.post(`${base}/member/modify`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 冻结、解冻用户
export const memberChangeStatus = params => { return axios.post(`${base}/member/changeStatus`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 获取品牌
export const carBrand = params => { return axios.post(`${base}/choose/car/brand`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 获取型号
export const carModel = params => { return axios.post(`${base}/choose/car/models`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 上传行驶证图片
export const uploadLicence = params => { return axios.post(`${base}/member/carinfo/vehicleLicense`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 热门用户列表
export const memberHotList = params => { return axios.post(`${base}/member/hotList`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 设为热门用户
export const memberSetHot = params => { return axios.post(`${base}/member/setHot`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 取消热门用户
export const memberCancleHot = params => { return axios.post(`${base}/member/cancelHot`, qs.stringify(params), { headers: header }).then(res => res.data); };



// 动态管理列表
export const dynamicList = params => { return axios.post(`${base}/community/moments/list`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 动态管理列表 -- 设置标签
export const dynamicSetTags = params => { return axios.post(`${base}/community/moments/setTags`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 动态管理列表 -- 设置专题
export const dynamicSetThemes = params => { return axios.post(`${base}/community/moments/setThemes`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 动态管理列表 -- 获取专题
export const dynamicThemeList = params => { return axios.post(`${base}/community/moments/getThemes`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 动态管理列表 -- 删除
export const dynamicDelete = params => { return axios.post(`${base}/community/moments/updateStatus`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 发布动态-上传图片
export const uploadDynamic = params => { return axios.post(`${base}/community/moments/uploadPhoto`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 发布动态
export const dynamicAdd = params => { return axios.post(`${base}/community/moments/push`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 动态管理 -- 用户列表
export const dynamicMemberList = params => { return axios.post(`${base}/community/member/addList`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 动态详情
export const dynamicDetail = params => { return axios.post(`${base}/community/moments/detail`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 热门动态列表
export const dynamicHotList = params => { return axios.post(`${base}/community/moments/hotList`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 设置动态为热门
export const dynamicSetHot = params => { return axios.post(`${base}/community/moments/setHot`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 取消动态热门
export const dynamicCancleHot = params => { return axios.post(`${base}/community/moments/cancelHot`, qs.stringify(params), { headers: header }).then(res => res.data); };


// 专题列表
export const topicList = params => { return axios.post(`${base}/divide/list`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 专题详情
export const topicDetail = params => { return axios.post(`${base}/divide/detail`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 添加动态到专题
export const topicAddMoment = params => { return axios.post(`${base}/divide/addMoment`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 专题下的动态列表
export const topicMomentList = params => { return axios.post(`${base}/divide/moment/list`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 移除专题下的动态
export const topicMomentRemove = params => { return axios.post(`${base}/divide/moment/remove`, qs.stringify(params), { headers: header }).then(res => res.data); };



// 车服务列表
export const carServiceList = params => { return axios.post(`${base}/carService/list`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 车服务详情
export const carServiceDetail = params => { return axios.post(`${base}/carService/detail`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 车服务上传图片
export const carServiceUploadPhoto = params => { return axios.post(`${base}/carService/uploadPhoto`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 添加车服务
export const carServiceAdd = params => { return axios.post(`${base}/carService/add`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 编辑车服务
export const carServiceEdit = params => { return axios.post(`${base}/carService/modify`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 删除车服务
export const carServiceDelete = params => { return axios.post(`${base}/carService/delete`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 修改车服务
export const carServiceChange = params => { return axios.post(`${base}/carService/changeStatus`, qs.stringify(params), { headers: header }).then(res => res.data); };


// 获取车品牌列表
export const carBrandInfoList = params => { return axios.post(`${base}/carBrandInfo/index`, qs.stringify(params), { headers: header }).then(res => res.data); };
// 上传车标图片
export const carBrandUploadLogo = params => { return axios.post(`${base}/carBrandInfo/uploadLogo`, qs.stringify(params), { headers: header }).then(res => res.data); };
// 获取下拉列表
export const carBrandGetCarInfo = params => { return axios.post(`${base}/carBrandInfo/getCarInfo`, qs.stringify(params), { headers: header }).then(res => res.data); };
// 新增车型信息
export const carBrandInfoAdd = params => { return axios.post(`${base}/carBrandInfo/add`, qs.stringify(params), { headers: header }).then(res => res.data); };


// 账号列表
export const permissionAccountList = params => { return axios.post(`${base}/account/list`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 重置密码
export const permissionAccountResetPwd = params => { return axios.post(`${base}/account/resetPassword`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 删除账号
export const permissionAccountDelete = params => { return axios.post(`${base}/account/deleteAccount`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 账号详情
export const permissionAccountDetail = params => { return axios.post(`${base}/account/detail`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 新增账号
export const permissionAccountAdd = params => { return axios.post(`${base}/account/add`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 角色列表（仅角色名）
export const permissionRoleNameList = params => { return axios.post(`${base}/member/role/nameList`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 角色列表（包含其他信息）
export const permissionRoleList = params => { return axios.post(`${base}/member/role/list`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 查看角色
export const permissionRoleDetail = params => { return axios.post(`${base}/member/role/detail`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 编辑角色
export const permissionRoleModify = params => { return axios.post(`${base}/member/role/modify`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 新增角色
export const permissionRoleAdd = params => { return axios.post(`${base}/member/role/add`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 删除角色
export const permissionRoleDelete = params => { return axios.post(`${base}/member/role/delete`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 权限显示列表
export const privilegeLeftmenu = params => { return axios.post(`${base}/privilege/leftMenu`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 角色下要添加的账号列表
export const permissionRoleAddAccountList = params => { return axios.post(`${base}/account/roleAddAccountList`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 总的权限列表
export const permissionAccountPrivilegeList = params => { return axios.post(`${base}/account/privilegeList`, qs.stringify(params), { headers: header }).then(res => res.data); };



// 敏感信息词库列表
export const sensitiveList = params => { return axios.post(`${base}/sensitive/list`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 敏感信息词库列表 -- 新增
export const sensitiveAdd = params => { return axios.post(`${base}/sensitive/add`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 敏感信息词库列表 -- 删除
export const sensitiveDelete = params => { return axios.post(`${base}/sensitive/delete`, qs.stringify(params), { headers: header }).then(res => res.data); };

// 系统日志列表
export const systemLogList = params => { return axios.post(`${base}/system/log/list`, qs.stringify(params), { headers: header }).then(res => res.data); };
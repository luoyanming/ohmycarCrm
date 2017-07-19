import login from './views/login.vue'
import user from './views/user.vue'
import userAdd from './views/userAdd.vue'
import userDetail from './views/userDetail.vue'
import userHot from './views/userHot.vue'
import dynamic from './views/dynamic.vue'
import dynamicAdd from './views/dynamicAdd.vue'
import dynamicDetail from './views/dynamicDetail.vue'
import dynamicHot from './views/dynamicHot.vue'

import topicManagement from './views/topicManagement.vue'
import topicDetails from './views/topicDetails.vue'
import topicModify from './views/topicModify.vue'
import carService from './views/carService.vue'
import carSerDetails from './views/carSerDetails.vue'
import carEdit from './views/carEdit.vue'
import LicensePlate from './views/LicensePlate.vue'

import permissionAccount from './views/permissionAccount.vue'
import permissionAccountDetail from './views/permissionAccountDetail.vue'
import permissionAccountAdd from './views/permissionAccountAdd.vue'
import permissionRole from './views/permissionRole.vue'
import permissionRoleDetail from './views/permissionRoleDetail.vue'
import permissionRoleAdd from './views/permissionRoleAdd.vue'

import sensitive from './views/sensitive.vue'
import systemLog from './views/systemLog.vue'

let routes = [{
        path: '/',
        component: user,
        name: '首页',
        meta: {
            nav: 'user',
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: login,
        name: '登录'
    },
    {
        path: '/user',
        component: user,
        name: '用户管理',
        meta: {
            nav: 'user',
            requiresAuth: true
        }
    },
    {
        path: '/userAdd',
        component: userAdd,
        name: '新增用户',
        meta: {
            nav: 'user',
            requiresAuth: true
        }
    },
    {
        path: '/userDetail',
        component: userDetail,
        name: '用户详情',
        meta: {
            nav: 'user',
            requiresAuth: true
        }
    },
    {
        path: '/userHot',
        component: userHot,
        name: '热门用户',
        meta: {
            nav: 'user',
            requiresAuth: true
        }
    },
    {
        path: '/dynamic',
        component: dynamic,
        name: '动态管理',
        meta: {
            nav: 'dynamic',
            requiresAuth: true
        }
    },
    {
        path: '/dynamicAdd',
        component: dynamicAdd,
        name: '动态新增',
        meta: {
            nav: 'dynamic',
            requiresAuth: true
        }
    },
    {
        path: '/dynamicDetail',
        component: dynamicDetail,
        name: '动态详情',
        meta: {
            nav: 'dynamic',
            requiresAuth: true
        }
    },
    {
        path: '/dynamicHot',
        component: dynamicHot,
        name: '热门动态',
        meta: {
            nav: 'dynamic',
            requiresAuth: true
        }
    },
    {
        path: '/topicManagement',
        component: topicManagement,
        name: '专题管理',
        meta: {
            nav: 'theme',
            requiresAuth: true
        }
    },
    {
        path: '/topicDetails',
        component: topicDetails,
        name: '专题详情',
        meta: {
            nav: 'theme',
            requiresAuth: true
        }
    },
    {
        path: '/topicModify',
        component: topicModify,
        name: '修改专题',
        meta: {
            nav: 'theme',
            requiresAuth: true
        }
    },
    {
        path: '/carSerDetails',
        component: carSerDetails,
        name: '服务详情',
        meta: {
            nav: 'car',
            requiresAuth: true
        }
    },
    {
        path: '/carEdit',
        component: carEdit,
        name: '编辑服务详情',
        meta: {
            nav: 'car',
            requiresAuth: true
        }
    },
    {
        path: '/carService',
        component: carService,
        name: '车服务',
        meta: {
            nav: 'car',
            requiresAuth: true
        }
    },
    {
        path: '/permissionAccount',
        component: permissionAccount,
        name: '账号列表',
        meta: {
            nav: 'permissionAccount',
            requiresAuth: true
        }
    },
    {
        path: '/permissionAccountDetail',
        component: permissionAccountDetail,
        name: '账号列表详情',
        meta: {
            nav: 'permissionAccount',
            requiresAuth: true
        }
    },
    {
        path: '/permissionAccountAdd',
        component: permissionAccountAdd,
        name: '账号列表新增账号',
        meta: {
            nav: 'permissionAccount',
            requiresAuth: true
        }
    },
    {
        path: '/permissionRole',
        component: permissionRole,
        name: '角色列表',
        meta: {
            nav: 'permissionRole',
            requiresAuth: true
        }
    },
    {
        path: '/permissionRoleDetail',
        component: permissionRoleDetail,
        name: '角色列表详情',
        meta: {
            nav: 'permissionRole',
            requiresAuth: true
        }
    },
    {
        path: '/permissionRoleAdd',
        component: permissionRoleAdd,
        name: '角色列表新增角色',
        meta: {
            nav: 'permissionRole',
            requiresAuth: true
        }
    },
    {
        path: '/sensitive',
        component: sensitive,
        name: '敏感信息词库',
        meta: {
            nav: 'sensitive',
            requiresAuth: true
        }
    },
    {
        path: '/systemLog',
        component: systemLog,
        name: '系统日志',
        meta: {
            nav: 'systemLog',
            requiresAuth: true
        }
    },
    {
        path: '/LicensePlate',
        component: LicensePlate,
        name: '车牌库',
        meta: {
            nav: 'LicensePlate',
            requiresAuth: true
        }
    }


    //{
    //    path: '/',
    //    component: layout,
    //    name: '课程上传',
    //    children: [
    //        {
    //            path: '/course',
    //            component: courseList,
    //            name: '课程列表',
    //            meta: {
    //                requiresAuth: true
    //            }
    //        }
    //    ]
    //}
];

export default routes;
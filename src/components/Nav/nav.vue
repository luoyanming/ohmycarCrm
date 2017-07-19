<template>
    <nav class="nav">
        <a href="#" class="logo"></a>

        <ul>
        <!-- <ul class="deep-overscroll"> -->
            <li v-for="item in menu">
                <a href="javascript:void(0);" class="navitem"
                    v-bind:class="{ 'current': (item.leftnav == status) }" 
                    v-show="item.show"
                    @click="linkTo(item.url)">{{ item.title }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { privilegeLeftmenu } from '../../api/api';

    export default {
        data() {
            return {
                status: 'user',
                menu: [
                    {
                        'name': '用户管理',
                        'title': '用户管理',
                        'url': '/user',
                        'leftnav': 'user',
                        'show': false
                    },
                    {
                        'name': '动态管理',
                        'title': '动态管理',
                        'url': '/dynamic',
                        'leftnav': 'dynamic',
                        'show': false
                    },
                    {
                        'name': '专题管理',
                        'title': '专题管理',
                        'url': '/topicManagement',
                        'leftnav': 'theme',
                        'show': false
                    },
                    {
                        'name': '车服务',
                        'title': '车服务',
                        'url': '/carService',
                        'leftnav': 'car',
                        'show': false
                    },
                    {
                        'name': '敏感信息词库',
                        'title': '敏感信息词库',
                        'url': '/sensitive',
                        'leftnav': 'sensitive',
                        'show': false
                    },
                    {
                        'name': '账号权限',
                        'title': '账号权限',
                        'url': '',
                        'leftnav': '',
                        'show': false
                    },
                    {
                        'name': '账号权限',
                        'title': '账号列表',
                        'url': '/permissionAccount',
                        'leftnav': 'permissionAccount',
                        'show': false
                    },
                    {
                        'name': '账号权限',
                        'title': '角色列表',
                        'url': '/permissionRole',
                        'leftnav': 'permissionRole',
                        'show': false
                    },
                    {
                        'name': '车牌库',
                        'title': '车牌库',
                        'url': '/LicensePlate',
                        'leftnav': 'LicensePlate',
                        'show': false
                    },
                    {
                        'name': '系统日志',
                        'title': '系统日志',
                        'url': '/systemLog',
                        'leftnav': 'systemLog',
                        'show': false
                    }
                ],
                permission: []
            };
        },
        methods: {
            getNavType() {
                this.status = this.$route.meta.nav;
            },
            linkTo: function(url) {
                this.$router.push({ path: url });
            },
            getPermission: function() {
                privilegeLeftmenu({}).then(res => {
                    let { msg, code, data } = res;

                    if(code !== 0) {
                        this.$message({ message: msg, type: 'error'});
                    } else {
                        for(let i = 0; i < this.menu.length; i++) {
                            for(let j = 0; j < data.list.length; j++) {
                                if(this.menu[i].name == data.list[j].name) {
                                    this.menu[i].show = true;
                                }
                            }
                        }
                    }
                });
            }
        },
        mounted() {
            this.getPermission();
            this.getNavType();
        }
    }
</script>

<style lang="scss" scoped>
    .nav ul li:nth-of-type(6) a{
        cursor: default;
    }
</style>
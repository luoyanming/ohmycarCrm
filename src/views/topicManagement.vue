<template>
    <div class="app-container">
        <div class="container-wrapper">
            <Header></Header>

            <Nav></Nav>

            <section class="main-wrapper yzb management">
                <section class="crumbs">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>专题管理</el-breadcrumb-item>
                    </el-breadcrumb>
                </section>
                <div class="cardBox">
                    <div class="card" :class="className[index]" v-for="(item,index) in form">
                        <p>0{{item.id}}.{{item.name}}</p>
                        <p>发布时间：{{item.createdDate}}</p>
                        <p>动态数：{{item.momentNumber}}</p>
                        <p>点击数：{{item.readNumber}}</p>
                        <div class="cardCheck">
                            <el-button type='text'size="small" class="check" @click="topicDetail(index,item)" >查看</el-button>   
                            <el-button type='text'size="small" class="check" @click="topicModify(index,item)" >修改</el-button>                                                                               
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>

<script>
    import { Message } from 'element-ui';
    import {topicList} from '../api/api';

    export default {
        data() {
            return {
                form:[],
                className: [
                    'landscape',
                    'personal',
                    'civilization',
                    'accident'
                ]
            };
        },
        methods: {
            getTopicList(){
                topicList({}).then(res =>{
                    let {msg,code,data} = res;

                    if(code !== 0){
                        this.$message({message:msg, type: 'error'});
                    }else{
                        let formList = [];
                        for(let i = 0; i<data.list.length; i++){
                            formList.push({
                                'id': data.list[i].id,
                                'createdDate': data.list[i].createdDate,
                                'momentNumber': data.list[i].momentNumber,
                                'name': data.list[i].name,
                                'readNumber': data.list[i].readNumber
                            });
                        }
                        this.form = formList;
                    }
                });
            },
            topicDetail(index,item){
                this.$router.push({path: '/topicDetails',query:{id:item.id}});
            },
            topicModify(index,item){
                this.$router.push({path: '/topicModify',query:{id:item.id}});                
            }

        },
        mounted(){
            this.getTopicList();
        }
    }
</script>

<style lang="scss" scoped>
.cardBox{
    margin-top: 20px;
    width: 1200px;
    .card{
        height: 180px;
        width: 495px;
        margin: 0 20px 20px 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        float: left;
        position: relative;
        padding: 20px 0 20px 30px;
        &.landscape{
            background-image: url('/static/icon_zhuangti01.png');
        }
        &.personal{
            background-image: url('/static/icon_zhuangti02.png');
        }
        &.civilization{
            background-image: url('/static/icon_zhuangti03.png');
        }
        &.accident{
            background-image: url('/static/icon_zhuangti04.png');
        }
        p{
            color: #FFF;
            font-size: 12px;
            height: 17px;
            line-height: 17px;
            font-weight: 300;            
            &:nth-child(1){
                font-size: 32px;
                height: 45px;
                line-height: 45px;
            }
            &:nth-child(2){
                margin-top: 34px;
            }
            &:nth-child(3){
                margin-top: 6px;
            }
            &:nth-child(4){
                margin-top: 4px;
            }
        }
        .cardCheck{
            width: 100px;
            height: 180px;
            background-color: rgba(255,255,255,0.1);
            position: absolute;
            top: 0;
            right: 0;
            .check{
                color: #FFF;
                border: none;
                width: 24px;
                height: 17px;
                margin: 52px 38px 0 38px;
                &:nth-child(2){
                    margin: 44px 38px 0 38px;
                }
            }
        }
    }
}
</style>

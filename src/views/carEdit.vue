<template>
    <div class="app-container">
        <div class="container-wrapper">
            <Header></Header>

            <Nav></Nav>

            <div class="main-wrapper yzb light-overscroll">
                <section class="crumbs">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/carService' }">车服务</el-breadcrumb-item>
                        <el-breadcrumb-item v-if="id">编辑服务详情</el-breadcrumb-item>                                                                      
                        <el-breadcrumb-item v-if="!id">新增车服务</el-breadcrumb-item>                         
                    </el-breadcrumb>

                    <section class="formation carEdit">
                    <el-form :label-position="labelPosition" ref="ruleForm" label-width="80px" :model="form">
                        <el-form-item label="名称">
                            <el-input v-model="form.name" placeholder="请输入名称"></el-input>
                        </el-form-item>
                        <el-form-item label="URL">
                            <el-input v-model="form.linkUrl" placeholder="请输入网址" class="upUrl"></el-input>
                        </el-form-item>
                        <el-form-item label="图标" prop="thumb">
                            <el-upload
                                :disabled="form.thumb.length != 0 "
                                class="upload-demo"
                                :action="uploadUrl"
                                :file-list="form.thumb"
                                list-type="picture"
                                :before-upload="uploadBefore"
                                :on-success="uploadSucc"
                                :on-error="uploadError"
                                :on-remove="uploadRemove">
                                <el-button type="primary" class="upButton" :disabled="form.thumb.length != 0 ">点击上传</el-button>
                                <div slot="tip" class="el-upload__tip">只能上传png文件，尺寸为80*80</div>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="状态" prop="state">
                            <el-radio-group v-model="form.state">
                                <el-radio-button label="0">正常</el-radio-button>
                                <el-radio-button label="-1">隐藏</el-radio-button>
                            </el-radio-group>
                        </el-form-item>

                        <div class="button-box">
                            <el-button type="primary" size="large" class="button-cancle" @click.native="historyBack">取消</el-button>
                            <el-button type="primary" size="large" :loading="loading" @click.native="submitForm('ruleForm')">确定</el-button>
                        </div>
                    </el-form>
                </section>
                </section>                                            
            </div>
        </div>
    </div>
</template>

<script>
    import { Message } from 'element-ui';
    import { COMMON } from '../common/js/common';
    import {BASE,carServiceDetail,carServiceUploadPhoto,carServiceEdit,carServiceAdd} from '../api/api'

    export default {
        data() {
            return {
                labelPosition:'right',
                uploadUrl: BASE + '/carService/uploadPhoto',
                id:this.$route.query.id,
                form:{
                    name:'',
                    linkUrl:'',
                    thumb: [{url:'',name:''}],
                    state:0
                },
                loading:false
            };
        },
        methods: {
            submitForm(formName){
                this.$refs[formName].validate((valid) =>{
                    if(valid){
                          
                        this.loading = true;

                        if(!this.id){
                            //add
                            if(this.form.thumb.length ==0){
                                this.$message({ message: '请上传照片！', type: 'error'});
                            }

                            let param = {
                                'name': this.form.name,
                                'linkUrl':this.form.linkUrl,
                                'picUrl':this.form.thumb[0].response.data.showImage,
                                'status': this.form.state
                            };
                            carServiceAdd(param).then(res =>{
                                this.loading = false;

                                let { msg, code, data } = res;

                                if(code !== 0) {
                                    this.$message({ message: msg, type: 'error'});
                                } else {
                                    this.$message({ message: '新增成功', type: 'success'});
                                    this.$router.push({ path: '/carService'});
                                }
                            })

                        }else{
                            //deit
                            let param = {
                                'id': this.id,
                                'name': this.form.name,
                                'linkUrl':this.form.linkUrl,
                                'picUrl':this.form.thumb[0].response.data.showImage,
                                'status': this.form.state
                            };

                            carServiceEdit(param).then(res =>{
                                this.loading = false;

                                let { msg, code, data } = res;

                                if(code !== 0) {
                                    this.$message({ message: msg, type: 'error'});
                                } else {
                                    this.$message({ message: '保存编辑成功', type: 'success'});
                                    this.$router.push({ path: '/carSerDetails' ,query: { id: this.id }});
                                }
                            });
                        }

                    }else{
                        return false;
                    }
                })
            },
            historyBack() {
                this.$router.go(-1);
            },
            uploadBefore(file) {
                if(!/image\/\w+/.test(file.type)) {
                    this.$message({ message: '照片格式不正确！请重试！', type: 'error'});
                    return false;
                }
            },
            uploadError(response, file, fileList) {
                this.form.thumb = [];
                this.$message({ message: '照片上传失败，请重试！', type: 'error'});
            },
            uploadSucc(response, file, fileList) {
                this.form.thumb = fileList;
            },
            uploadRemove(file, fileList) {
                this.form.thumb = fileList;
            },
            getCarServiceDetail(){
                if(!this.id){
                    this.form.thumb = [];
                    return false;
                }

                let param = {'id':this.id};

                carServiceDetail(param).then(res =>{
                    let {msg, code, data} = res;

                    if( code !== 0){
                        this.$message({ message: msg, type: 'error'});
                    }else{
                        this.form.name = data.detail.name;
                        this.form.linkUrl = data.detail.linkUrl;
                        if( data.detail.picUrl !=''){
                            this.form.thumb[0].url = data.detail.picUrl;
                        }else{
                            this.form.thumb = [];                            
                        }
                        if(data.detail.status == '0'){
                            this.form.state = 0;
                        }else if(data.detail.status == '-1'){
                            this.form.state = -1;
                        }
                        this.loading = false;
                    }
                });
            }
        },
        mounted(){
            this.getCarServiceDetail();
        }
    }
</script>

<style lang="scss" scoped>
    .yzb{
        .carEdit{
            .el-form{
                margin-left:70px; 
                .el-form-item{
                    .el-form-item__content{
                        .upUrl{
                            width: 400px;
                        }
                    }
                }
            }
            .upButton{
                
                height: 40px;
                width: 104px;
                // background-color: #999999;
                // border-color: #999;
                font-size: 12px;
                font-weight: 300;
            }
            
        }
    }
</style>

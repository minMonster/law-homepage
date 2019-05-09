<!-- crated：2019/5/3  author：Monster  -->
<template>
    <div class='v-company-message'>
        <div class="container">
            <div class="l-box">
                <p class="title">This is the name and slogan of our company.</p>
                <p class="info">Here are some comments from our website to our partners in the global lawyer
                    industry</p>
                <div class="slogan">
                    <img src="" alt="">
                    <p>This is the name and slogan of our company.</p>
                </div>
            </div>
            <div class="r-box">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
                         class="demo-ruleForm">
                    <el-form-item prop="youName">
                        <el-input placeholder="Please enter your name" v-model="ruleForm.youName"></el-input>
                    </el-form-item>
                    <el-form-item prop="youName">
                        <el-input placeholder="Please enter your contact information."
                                  v-model="ruleForm.youName"></el-input>
                    </el-form-item>
                    <el-form-item prop="youName">
                        <el-input placeholder="Please enter the consultation content"
                                  v-model="ruleForm.youName"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button circle type="primary" @click="onSubmit">joint us</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'v-company-message',
    data () {
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          youName: [
            {validator: true, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      onSubmit (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../style/gobel";

    .v-company-message {
        background-color: #fff;
        height: 640px;
        padding-top: 100px;
        .container {
            display: flex;
            .l-box {
                width: 380px;
                margin-right: 100px;
                .title {
                    font-size: 40px;
                    line-height: 60px;
                    color: #152244;
                    padding-bottom: 62px;
                }
                .info {
                    font-size: 24px;
                    color: #999999;
                    line-height: 33px;
                    padding-bottom: 123px;
                }
                .slogan {
                    display: flex;
                    align-items: center;
                    img {
                        margin-right: 20px;
                        max-width: 90px;
                        min-width: 90px;
                        min-height: 90px;
                        max-height: 90px;
                        background-color: pink;
                        border-radius: 50%;
                    }
                    p {
                        color: #999999;
                        font-size: 24px;
                    }
                }
            }
            .r-box {
                flex: 1;
                padding: 60px;
                margin-top: 20px;
                background: #FBFBFB;
                border-radius: 8px;
                .el-form-item {
                    margin-bottom: 30px;
                }
                .el-form-item:last-child {
                    margin-bottom: 0;
                }
                input {
                    padding-left: 60px;
                    border-radius: 40px;
                    height: 80px;
                    font-size: 20px;
                }
                button {
                    border-color: transparent;
                    height: 80px;
                    border-radius: 40px;
                    width: 100%;
                    font-size: 20px;
                    background: linear-gradient(to left, #2A39F0, #CD3EF6);
                }
            }
        }
    }
</style>

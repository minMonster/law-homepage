<!-- crated：2019/4/24  author：Monster  -->
<template>
    <div class='v-footer'>
        <div class="container">
            <div class="l-box">
                <a class="logo" href="/">
                    AntSrch
                </a>
                <div class="address">
                    <svg-icon icon-class="ic-home-address"></svg-icon>
                    Room 602, 5D, Nanshan Software Base, Shenzhen, China</div>
            </div>
            <div class="r-box">
                <p> Copyright © 2019 , AntSrch All rights reserved.</p>
                <p class="email">
                    <svg-icon icon-class="ic-home-email"></svg-icon>
                    info@yshipr.com
                </p>
            </div>
        </div>
        <div class="container for-record">
            <img width="20" height="20" src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="">
            <a target="_blank" href="http://www.beian.miit.gov.cn">粤ICP备19050348号</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'v-footer'
  }
</script>
<style rel="stylesheet/scss" lang="scss">
    .v-footer {
        background: #F2F2F2;
        .container {
            display: flex;
            height: 100%;
            padding: 90px 0;
            padding-bottom: 25px;
            .l-box{
                display: flex;
                flex-direction: column;
                .logo {
                    margin-bottom: 30px;
                    color: #2243E3;
                    font-size: 34px;
                    font-weight: 600    ;
                }
                .address {
                    font-size: 24px;
                    color: #666666;
                }
            }
            .r-box {
                flex: 1;
                text-align: right;
                font-size: 24px;
                position: relative;
                p {
                    position: absolute;
                    right: 0;
                    color: #152244;
                    width: 570px;
                    min-width: 570px;
                }
                .email {
                    color: #666666;
                    padding-top: 40px;
                    margin-top: 30px;
                }
            }
        }
        .container.for-record {
            padding: 0;
            padding-bottom: 70px;
            a {
                color: #666666;
            }
        }
    }
</style>

<!-- crated：2019/4/24  author：Monster  -->
<template>
    <div class='v-footer'>
        <div class="container">
            <div class="l-box">
                <a class="logo" href="/">
                    AntSrch
                </a>
                <div class="address">Shenzhen</div>
            </div>
            <div class="r-box">
                <p> Copyright © 2019, All rights reserved. About us</p>
                <p class="email">intellectual property@gmail.com</p>
            </div>
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
        height: 296px;
        background: #F2F2F2;
        .container {
            display: flex;
            height: 100%;
            align-items: center;
            .l-box{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .logo {
                    margin-bottom: 30px;
                    color: #2243E3;
                    font-size: 34px;
                    font-weight: 600    ;
                }
                .address {
                    font-size: 24px;
                    color: #666666;
                    position: relative;
                    padding-left: 50px;
                    &:before {
                        left: 0px;
                        content: ' ';
                        position: absolute;
                        height: 30px;
                        width: 30px;
                        background-size: auto 100%;
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-image: url(../assets/ic-home-position.png);
                    }
                }
            }
            .r-box {
                flex: 1;
                text-align: right;
                font-size: 24px;
                p {
                    color: #152244;
                }
                .email {
                    color: #666666;
                    margin-top: 30px;
                    position: relative;
                    &:before {
                        left: 540px;
                        content: ' ';
                        position: absolute;
                        height: 30px;
                        width: 30px;
                        background-size: 100% auto;
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-image: url(../assets/ic-home-email.png);
                    }
                }
            }
        }
    }
</style>

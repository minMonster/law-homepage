<!-- crated：2019/5/5  author：Monster  -->
<template>
    <div class='law-detail container' v-if="detail">
        <div class="t-box">
            <div class="info">
                <el-image
                        style="min-width: 240px;max-width: 240px; height: 180px"
                        :src="detail.logo?'../'+detail.logo:'../image/img-list-one.png'"
                        fit="contain"
                ></el-image>
                <div class="info-r">
                    <div class="title">{{detail.name}}</div>
                    <div class="address">{{detail.area.name}}, {{detail.country.name}}</div>
                    <div class="email">intellectual {{detail.email}}</div>
                </div>
            </div>
            <div class="dec">
               {{detail.introduce}}
            </div>
        </div>
        <el-divider></el-divider>
        <div class="b-box">
            <h2>Information</h2>
            <p>
                <svg-icon icon-class="ic-home-country"></svg-icon>
                {{detail.area.name}}, {{detail.country.name}}
            </p>
            <p>
                <svg-icon icon-class="ic-home-service"></svg-icon>
                {{detail.service}}
            </p>
            <p>
                <svg-icon icon-class="ic-home-address"></svg-icon>
                {{detail.address}}
            </p>
            <p>
                <svg-icon icon-class="ic-home-phone"></svg-icon>
                {{detail.phone}}
            </p>
            <p>
                <svg-icon icon-class="ic-home-email"></svg-icon>
                {{detail.email}}
            </p>
            <p>
                <svg-icon icon-class="ic-home-web"></svg-icon>
                <a target="_blank" :href="'http://'+detail.website">{{detail.website}}</a></p>
        </div>
        <el-divider></el-divider>
        <el-button @click="$router.go(-1)">Back</el-button>
    </div>
</template>

<script>
  import ElImage from 'element-ui/packages/image/src/main'
  import Api from '@/api'

  export default {
    components: {ElImage},
    name: 'law-detail',
    data: function () {
      return {
        detail: null
      }
    },
    created () {
      let loading = this.$loading()
      if (this.$route.query.id) {
        Api.get('/law-detail?id=' + this.$route.query.id).then(res => {
          this.detail = res.data.data
          loading.close()
        })
      } else {
        loading.close()
      }
    },
    methods: {
      handleService (arr) {
        let newArr = []
        newArr = arr.map(val => {
          return val.name
        })
        return newArr.join(',')
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
    .law-detail {
        margin-top: 70px;
        background-color: #fff;
        padding: 40px 30px;
        margin-bottom: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .t-box {
            width: 100%;
        }
        .info {
            display: flex;
            align-items: center;
            height: 180px;
            .info-r {
                padding-left: 30px;
                font-size: 16px;
                line-height: 22px;
                color: #666666;
                .title {
                    line-height: 42px;
                    font-weight: 600;
                    font-size: 30px;
                    color: #1E2C3C;
                    padding-bottom: 30px;
                }
                .address {
                    padding-bottom: 30px;
                }
            }
        }
        .dec {
            padding-top: 40px;
            font-size: 16px;
            line-height: 22px;
            color: #666666;
        }
        .b-box {
            width: 100%;
            h2 {
                margin: 0;
                padding-bottom: 33px;
                font-weight: 600;
                font-size: 30px;
                color: #1E2C3C;
            }
            p {
                svg {
                    margin-right: 20px;
                }
                font-size: 16px;
                line-height: 22px;
                color: #666666;
                padding-bottom: 25px;
                a {
                    color: #666666;
                }
                &:last-child {
                    padding-bottom: 0;
                }
            ;
            }
        }
        button {
            border-color: transparent;
            height: 60px;
            border-radius: 30px;
            width: 200px;
            font-size: 16px;
            color: #666;
            background: #E5E5E7;
            &:hover {
                color: #fff;
                background: linear-gradient(to left, #2A39F0, #CD3EF6);
            }
        }
        .el-divider {
            margin: 40px 0;
        }
    }
</style>

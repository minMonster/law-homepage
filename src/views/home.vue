<!-- crated：2019/4/23  author：Monster  -->
<template>
    <div class='home'>
        <div class="banner">
            <p>This is an advertising slogan, to be </p>
            <p> determined.This is the gathering place of</p>
            <p> lawyers all over the world.</p>
        </div>
        <div class="region-country container">
            <p class="region-country-title">Region/Country</p>
            <div class="region-country-list">
                <template v-for="(area, index) in areas">
                    <div class="areas" v-if="index < 4">
                        <div class="area-name">
                            {{area.name}}
                        </div>
                        <a @click="$router.push({path: '/list-page', query: {country: item._id + '___' + item.name}})"
                           v-for="item in area.country" :key="item._id">{{item.name}}</a>
                    </div>
                </template>
            </div>
            <p class="more" v-if="areas.length > 3">more</p>
        </div>
        <company-message>
        </company-message>
    </div>
</template>

<script>
  import Api from '@/api'
  import CompanyMessage from '@/views/company-message.vue'

  export default {
    name: 'home',
    components: {
      CompanyMessage
    },
    created () {
      const loading = this.$loading()

      Api.get('/area-list').then(res => {
        this.areas = res.data.data
        loading.close()
      })
    },
    data () {
      return {
        areas: []
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
    .home {
        position: relative;
        padding-top: 820px;
        .banner {
            position: absolute;
            top: -80px;
            width: 100%;
            height: 820px;
            background-image: url('../assets/img-home-banner.jpg');
            background-size: 1920px 900px;
            background-position: center 0;
            background-repeat: no-repeat;
            padding-top: 285px;
            font-size: 40px;
            line-height: 41px;
            color: #fff;
            text-align: center;
            img {
                height: 100%;
                width: 100%;
            }
        }
        .region-country {
            padding: 100px 0;
            .region-country-title {
                font-size: 40px;
                line-height: 56px;
                position: relative;
                padding-bottom: 90px;
                text-align: center;
                color: #fff;
                &:before {
                    content: ' ';
                    position: absolute;
                    width: 30px;
                    top: 96px;
                    left: 50%;
                    margin-left: -15px;
                    height: 2px;
                    background-color: #fff;
                }
            }
            .more {
                text-align: center;
                width: 243px;
                border-radius: 30px;
                height: 60px;
                line-height: 60px;
                display: block;
                margin: 0 auto;
                margin-top: 60px;
                font-size: 20px;
                padding: 0;
                color: #666;
                background: #E5E5E7;
                border: none;
                &:hover {
                    color: #fff;
                    background: #2243E3;
                }
            }
            .region-country-list {
                display: flex;
                .areas {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    .area-name {
                        margin-bottom: 10px;
                        /*background-color: #fff;*/
                        text-align: center;
                        line-height: 60px;
                        height: 60px;
                        color: #fff;
                        font-size: 20px;
                        font-weight: 600;
                        border-radius: 30px;
                    }
                    a {
                        color: #fff;
                        font-size: 20px;
                        line-height: 33px;
                        &:hover {
                            color: #2243E3;
                            /*text-decoration: underline;*/
                        }
                    }
                }
            }
        }
    }
</style>

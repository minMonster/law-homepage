<!-- crated：2019/4/23  author：Monster  -->
<template>
    <div class='home'>
        <div class="banner">
            <p>Help you find the most cost-effective </p>
            <p>intellectual property law firm</p>
        </div>
        <div class="region-country container">
            <p class="region-country-title">Region/Country</p>
            <div class="region-country-list">
                <template v-for="numItem in 5">
                    <div class="areas" :key="numItem.id">
                        <template v-for="(item, index) in areas[0].country">
                            <a class="ell"
                               @click="$router.push({path: '/list-page', query: {country: item._id + '___' + item.name}})"
                               v-if="index < (numItem*4) && index >= (numItem*4 - 4)"
                               :key="item._id">{{item.shorthand}}</a>
                        </template>
                    </div>
                </template>
            </div>
            <p class="more" @click="$router.push({path: '/list-page'})">more</p>
        </div>
        <company-message>
        </company-message>
    </div>
</template>

<script>
  import Api from '@/api'
  import CompanyMessage from '@/views/company-message.vue'
  import TransferDom from '@/directives/transfer-dom'

  export default {
    name: 'home',
    directives: {
      TransferDom
    },
    components: {
      CompanyMessage
    },
    created () {
      const loading = this.$loading()

      Api.get('/area-list?area_name=HOT').then(res => {
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
            line-height: 60px;
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
                cursor: pointer;
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
                        max-width: 160px;
                        color: #fff;
                        font-size: 20px;
                        cursor: pointer;
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

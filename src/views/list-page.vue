<!-- crated：2019/5/3  author：Monster  -->
<template>
    <div class='list-page'>
        <div class="container">
            <div class="select-box">
                <el-select :loading="countryLoading" v-model="selectCountry" placeholder="Please select country">
                    <el-option-group
                            v-for="group in optionsArea"
                            :key="group.name"
                            :label="group.name">
                        <el-option
                                v-for="item in group.country"
                                :key="item._id"
                                :label="item.name"
                                :value="item._id + '___' + item.name"
                        >
                        </el-option>
                    </el-option-group>
                </el-select>
                <!--<el-select :loading="serviceLoading" v-model="selectService" placeholder="Please select service">-->
                <!--<el-option-->
                <!--v-for="item in optionsService"-->
                <!--:key="item._id"-->
                <!--:label="item.name"-->
                <!--:value="item._id + '___' + item.name">-->
                <!--</el-option>-->
                <!--</el-select>-->
            </div>
            <el-divider></el-divider>
            <div class="breadcrumbs">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>Country</el-breadcrumb-item>
                    <el-breadcrumb-item>{{selectCountryItem.name}}</el-breadcrumb-item>
                </el-breadcrumb>
                <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
                    <!--<el-breadcrumb-item>Country</el-breadcrumb-item>-->
                    <!--<el-breadcrumb-item>{{selectServiceItem.name}}</el-breadcrumb-item>-->
                <!--</el-breadcrumb>-->
            </div>
            <div class="law-list">
                <div class="card" v-for="item in lawList" :key="item.name">
                    <el-image
                            style="min-width: 160px;max-width: 160px; height: 160px"
                            :src="item.logo?'../'+item.logo:'../image/img-list-one.png'"
                            fit="contain"
                    ></el-image>
                    <div class="l-box">
                        <div class="title ell">
                            <span>{{item.name}}</span>
                        </div>
                        <p class="address ell">
                            <svg-icon icon-class="ic-home-address"></svg-icon>
                            {{item.address}}
                        </p>
                        <p class="server ell">
                            <svg-icon icon-class="ic-home-service"></svg-icon>
                            {{item.service}}
                        </p>
                        <a class="to-href" target="_blank" :href="item.website">
                            <svg-icon icon-class="ic-home-web"></svg-icon>
                            {{item.website}}</a>
                    </div>
                    <div class="r-box">
                        <el-button @click="$router.push({path: 'law-detail', query: {id: item._id}})">View Law Firm
                            Profile
                        </el-button>
                    </div>
                </div>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="total"
                        @current-change="currentChange">
                </el-pagination>
            </div>
        </div>
        <company-message>
        </company-message>
    </div>
</template>

<script>
  import Api from '@/api'
  import CompanyMessage from '@/views/company-message.vue'

  export default {
    name: 'list-page',
    components: {
      CompanyMessage
    },
    data () {
      return {
        selectCountry: '',
        optionsArea: [],
        selectService: '',
        optionsService: [],
        serviceLoading: true,
        countryLoading: true,
        total: 0,
        page: 1,
        limit: 10,
        lawList: [],
        selectCountryItem: {
          name: 'all',
          id: ''
        },
        selectServiceItem: {
          name: 'all',
          id: ''
        }
      }
    },
    watch: {
      selectCountry (val) {
        let arr = []
        arr = val.split('___')
        this.selectCountryItem = {
          id: arr[0],
          name: arr[1]
        }
        this.page = 1
        this.getList()
      },
      selectService (val) {
        let arr = []
        arr = val.split('___')
        this.selectServiceItem = {
          id: arr[0],
          name: arr[1]
        }
        this.page = 1
        this.getList()
      }
    },
    created () {
      window.scrollTo(0, 0)
      if (this.$route.query.country) {
        Api.get('/area-list').then(res => {
          this.optionsArea = res.data.data
          this.optionsArea.unshift({
            '_id': '',
            'name': 'all',
            'created_time': 1557854932,
            'country': [
              {
                '_id': '',
                'name': 'all',
                'area': '',
                'created_time': 1557854932,
                '__v': 0
              }
            ]
          })
          this.countryLoading = false
          this.selectCountry = this.$route.query.country
          // this.getList()
        })
        Api.get('/service-list').then(res => {
          this.serviceLoading = false
          this.optionsService = res.data.data
        })
      } else {
        Api.get('/area-list').then(res => {
          this.optionsArea = res.data.data
          let afterItem = this.optionsArea.pop();
          this.optionsArea.unshift(afterItem);
          this.optionsArea.unshift({
            '_id': '',
            'name': 'All',
            'created_time': 1557854932,
            'country': [
              {
                '_id': '',
                'name': 'All',
                'area': '',
                'created_time': 1557854932,
                '__v': 0
              }
            ]
          })
          this.countryLoading = false
        })
        Api.get('/service-list').then(res => {
          this.serviceLoading = false
          this.optionsService = res.data.data
        })
        this.getList()
      }
    },
    methods: {
      currentChange (e) {
        console.log(e, 'currentChange')
        this.page = e
        this.getList()
      },
      handleService (arr) {
        let newArr = []
        newArr = arr.map(val => {
          return val.name
        })
        return newArr.join(',')
      },
      getList () {
        const loading = this.$loading()
        Api.get('/law-list', {
          params: {
            page: this.page,
            limit: this.limit,
            country: this.selectCountryItem.id,
            service: this.selectServiceItem.id
          }
        }).then(res => {
          loading.close()
          this.total = res.data.total
          this.lawList = res.data.data
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
    .list-page {
        padding-top: 100px;
        .select-box {
            display: flex;
            justify-content: space-between;
            .el-input__inner {
                height: 60px;
                font-size: 24px;
                width: 530px;
            }
        }
        .el-divider {
            background-color: rgba(255, 255, 255, 0.2);
            height: 2px;
            margin: 30px 0;
        }
        .breadcrumbs {
            display: flex;
            .el-breadcrumb {
                font-size: 24px;
                color: #878D99;
                &:first-child {
                    margin-right: 100px;
                }
                .el-icon-arrow-right {
                    color: #878D99;
                    margin: 0;
                }
            }
            padding-bottom: 30px;
        }
        .law-list {
            .card {
                display: flex;
                background-color: #fff;
                padding-top: 20px;
                padding-bottom: 20px;
                padding-left: 20px;
                padding-right: 30px;
                margin-bottom: 30px;
                .l-box {
                    max-width: 556px;
                    svg {
                        margin-right: 10px;
                    }
                    padding-left: 20px;
                    padding-right: 30px;
                    .title {
                        line-height: 42px;
                        display: flex;
                        align-items: center;
                        padding-top: 15px;
                        span {
                            display: inline-block;
                            font-size: 30px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            max-width: 276px;
                            min-width: 246px;
                            margin-right: 30px;
                        }
                        color: #1E2C3C;
                    }
                    .address {
                        svg {
                            font-size: 20px;
                        }
                        padding-top: 15px;
                        font-size: 20px;
                        color: #666666;
                        position: relative;
                    }
                    .server {
                        padding-top: 10px;
                        font-size: 20px;
                        color: #666666;
                        line-height: 20px;
                        max-width: 566px;
                        min-width: 566px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    a.to-href {
                        padding-top: 10px;
                        display: inline-block;
                        font-size: 20px;
                        line-height: 20px;
                        color: #666666;
                    }
                }
                .r-box {
                    border-left: solid 2px #E5E5E7;
                    border-radius: 1px;;
                    padding-left: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    button {
                        width: 243px;
                        border-radius: 30px;
                        height: 60px;
                        line-height: 60px;
                        font-size: 16px;
                        padding: 0;
                        color: #666;
                        background: #E5E5E7;
                        border: none;
                    }
                }
                &:hover {
                    background: #2D3E51;
                    .l-box {
                        .title {
                            color: #fff;
                        }
                        a {
                            color: #fff;
                        }
                        .address {
                            color: #fff;
                            &:before {
                                background-image: url(../assets/ic-home-position.png);
                            }
                        }
                        .server {
                            color: #fff;
                        }
                    }
                    .r-box {
                        button {
                            background-color: #2243E3;
                            color: #fff;
                        }
                    }
                }
            }

        }
        .el-pagination {
            display: flex;
            justify-content: center;
            padding-bottom: 90px;
            padding-top: 40px;
        }
    }

    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #2243E3;
    }

    .el-pagination.is-background .el-pager li:not(.disabled):hover {
        color: #2243E3;
    }

    .el-select-group__title {
        font-size: 20px;
    }

    .el-select-dropdown__item {
        font-size: 18px;
    }

    .list-page .breadcrumbs .el-breadcrumb .el-icon-arrow-right {
        color: #606266;
    }
    .el-scrollbar__bar.is-vertical {
        opacity: 1;
        width: 15px;
        .el-scrollbar__thumb {
            background-color: rgba(0, 0, 0, 0.5);;
        }
    }
</style>

<!-- crated：2019/4/24  author：Monster  -->
<template>
    <div class='v-nav container'>
        <a href="/" class="navbar-brand">
            AntSrch
        </a>
        <div class="navbar-lists">
            <a href="/contact-us">CONTACT US</a>
            <a @click="$router.push({path: 'list-page'})">FIND A LAWFIRM</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'v-nav'
  };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import '../style/gobel.scss';

    .v-nav {
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        height: 80px;
        padding: 0 $container-padding;
        .navbar-brand {
            color: #FFF;
            font-size: 34px;
            font-weight: 600;
        }
        .navbar-lists {
            font-weight: 600;
            flex: 1;
            display: flex;
            justify-content: flex-end;
            a {
                cursor:pointer;
                font-size: 22px;
                margin-right: $container-padding;
                color: #fff;
            }
        }
    }
</style>

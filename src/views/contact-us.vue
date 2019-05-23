<!-- crated：2019/5/15  author：Monster  -->
<template>
    <div class='contact-us'>
        <div class="banner">
            <p>Help you find the most cost-effective </p>
            <p>intellectual property law firm</p>
        </div>
        <div class="content container">
            <h2>ABOUT US<a name="about"></a></h2>
            <p>At AntSrch.com, we strive each day to follow our mission of allowing our members to enjoy the best intellectual property service at the lowest price. As the leading free intellectual property law firm information provider, AntSrch.com works to bring consumer and colleagues cooperating directly with the prestigious law firm worldwide. Whether you are a consumer looking for making your brand famous all over the world or an attorney looking to grow your practice and better serve your clients, AntSrch.com is the most reliable source you turn to for answers. Since 2015, AntSrch.com has served more than 5,000 small entities and 800 intellectual property agencies. Join us!</p>
<!--            <p>Established since 2015, Shenzhen Yunshanhui Intellectual Property Services Co., Ltd. is one of the leading local experts with presence in China providing corporate services. Shenzhen Yunshanhui Intellectual Property Services Co., Ltd. offers intellectual property services to domestic and international clients interested in  global business development  with minimal ease of effort.</p>-->
<!--            <p>■ Our aim is to provide quality and professional services to meet client expectations regarding the ever-changing business world. We provide trademarks and patents service to meet the needs of individuals and corporate clients.</p>-->
<!--            <p>■ Our Vision is to be the world’s first choice business partner.</p>-->
<!--            <p>■ Our Mission is good deeds, conducive to others</p>-->
            <br>
            <h2>CONTACT US<a name="contact"></a></h2>
            <p><span>Location：</span> Room 602, 5D, Nanshan Software Base, Shenzhen, China</p>
            <p><span>Web site：</span> www.yshipr.com  </p>
            <p><span>Email：</span> info@yshipr.com</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'contact-us'
  }
</script>
<style rel="stylesheet/scss" lang="scss">
    .contact-us {
        padding-top: 560px;
        background-color: #fff;
        position: relative;
        .banner {
            position: absolute;
            top: -80px;
            width: 100%;
            height: 560px;
            background-image: url('../assets/img-us-banner.jpg');
            background-size: 1920px 640px;
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
        .content {
            padding: 40px 0;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            p, li {
                text-align: left;
            }
            h2 {
                font-size: 30px;
                position: relative;
                padding-bottom: 30px;
                &:before {
                    content: ' ';
                    position: absolute;
                    left: 50%;
                    margin-left: -20px;
                    bottom: 0px;
                    background-color: #14202C;
                    width: 40px;
                    height: 2px;
                }
            }
            p span {
                display: inline-block;
                min-width: 100px;
                text-align: right;
            }
            background-color: #fff;
        }
    }
</style>

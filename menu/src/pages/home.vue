<template lang="">
    <div id="app-content">
        <common-header></common-header>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                    v-for="item in items"
                >
                    <a href="">
                        <img :src="item.img">
                        <div class="slide-txt">
                                <div class="txt_bg"></div>
                                <p>{{ item.title }}</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
    import CommonHeader from '../components/commonHeader.vue'
    import SwiperCSS from '../../static/css/swiper.min.css'
    import SwiperJS from '../../static/js/swiper.min.js'

    export default {
        data(){
            return {
                items: []
            }
        },
        components: {
            CommonHeader
        },
        methods: {
            swiper: function(){
                var mySwiper = new Swiper(".swiper-container", {
                    loop: true,
                    autoplay: 3000,
                    pagination: ".swiper-pagination",
                    paginationType : 'progress',
                    autoplayDisableOnInteraction : false,
                })
            }
        },
        mounted: function(){
            this.swiper;
        },
        created:  function(){
            this.$http.get('/api/swiper').then(function(res){
                this.items = res.data.data;
            })
        }
    }
</script>
<style scoped="">
    .swiper-container { width: 100%; height: 200px;}
    .swiper-slide { position: relative; margin: 0; padding: 0;}
    .swiper-slide img { width: 100%; height: 100%;}
    .slide-txt { width: 100%; height: 40px; position: absolute; left: 0; bottom: 0px; z-index: 1;}
    .slide-txt .txt_bg { width: 100%; height: 40px; background: #0f0f0f; opacity: 0.7;}
    .slide-txt p {  width: 100%; box-sizing: border-box; height: 40px; line-height: 36px; font-size: 14px; overflow: hidden; color: #fff; position: absolute; left: 0; top: 0; white-space:nowrap; text-overflow: ellipsis; padding: 0 10px; margin: 0; }
    .swiper-container-horizontal>.swiper-pagination-progress { top: auto; bottom: 0;}
</style>
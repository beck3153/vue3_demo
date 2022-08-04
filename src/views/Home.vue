<template>
  <ToastMessages></ToastMessages>
  <UserNavbar></UserNavbar>
  <carousel class="carousel"
   :items-to-show="1" :autoplay="5000" :wrap-around="true">
    <slide v-for="item in banners" :key="item.seq">
      <div class="carousel__box">
        <div class="carousel__box__title">{{ item.title }}</div>
        <div class="carousel__box__subTitle">{{ item.subTitle }}</div>
        <a class="carousel__box__btn">了解更多</a>
      </div>
      <img class="img-fluid carousel__img" :src="item.imgUrl" :alt="item.title"/>
    </slide>

    <template #addons="{ slidesCount }">
      <pagination v-if="slidesCount > 1" />
      <Navigation v-if="slidesCount > 1" />
    </template>
  </carousel>
  <div class="iconsArea">
    <div class="container">
      <div class="row">
        <div class="col-3 text-center p-4">
          <i class="bi bi-tree iconsArea__icon"></i>
          <div class="iconsArea__title">100%原木製作</div>
          <div class="iconsArea__text">天然材料環保無毒</div>
        </div>
        <div class="col-3 text-center p-4">
          <i class="bi bi-lightbulb iconsArea__icon"></i>
          <div class="iconsArea__title">設計你的點子</div>
          <div class="iconsArea__text">木製商品設計代工</div>
        </div>
        <div class="col-3 text-center p-4">
          <i class="bi bi-hand-thumbs-up iconsArea__icon"></i>
          <div class="iconsArea__title">精緻的質感</div>
          <div class="iconsArea__text">追求近乎完美品質</div>
        </div>
        <div class="col-3 text-center p-4">
          <i class="bi bi-gift iconsArea__icon"></i>
          <div class="iconsArea__title">獨特的禮物</div>
          <div class="iconsArea__text">客製獨一無二的禮物</div>
        </div>
      </div>
    </div>
  </div>
  <div class="aboutArea">
    <div class="container">
      <div class="row">
        <div class="col-6"></div>
        <div class="col-6"></div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel, Slide, Pagination, Navigation,
} from 'vue3-carousel';

import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import UserNavbar from '../components/UserNavbar.vue';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';

export default {
  data() {
    return {
      banners: [
        {
          seq: '1',
          title: '精緻原木積木',
          subTitle: '無邊角無化學漆',
          imgUrl: banner1,
        },
        {
          seq: '2',
          title: '雷射雕刻明信片',
          subTitle: '刻下真摯的心意',
          imgUrl: banner2,
        },
        {
          seq: '3',
          title: '木製用品傢俱',
          subTitle: '匠心製作精緻耐用',
          imgUrl: banner3,
        },
      ],
    };
  },
  components: {
    UserNavbar,
    ToastMessages,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
  },
};
</script>

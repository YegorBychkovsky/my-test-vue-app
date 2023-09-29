<script setup>
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { computed, ref } from "vue";

const swiperOptions = {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const mySwiper = ref(null);

const onSwiper = (swiper) => {
  mySwiper.value = swiper;
};

const onSlideChange = () => {};

const prevSlide = () => {
  if (mySwiper.value !== null) {
    mySwiper.value.slidePrev();
  }
};

const nextSlide = () => {
  if (mySwiper.value !== null) {
    mySwiper.value.slideNext();
  }
};

const isFirstSlide = computed(() => mySwiper.value?.isBeginning);
const isLastSlide = computed(() => mySwiper.value?.isEnd);
</script>

<template>
  <div class="pl-[17vw] pt-[30px]">
    <div class="-py-[60px]">
      <swiper
        :options="swiperOptions"
        ref="mySwiper"
        :modules="modules"
        :slides-per-view="1"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="">
          <div
            class="bg-[url('~@/assets/features.svg')] w-[260px] h-[540px] bg-left bg-cover"
          ></div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="bg-[url('~@/assets/features.svg')] w-[260px] h-[540px] bg-center bg-cover"
          ></div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="bg-[url('~@/assets/features.svg')] w-[260px] h-[540px] bg-right bg-cover"
          ></div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="flex space-x-2 justify-center pr-[22%] pt-[20px]">
      <button class="" @click="prevSlide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 80 80"
        >
          <!-- Круг -->
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="black"
            stroke-width="2"
          />

          <!-- Стрелочка -->
          <polygon
            points="0,40 25,25 25,55"
            fill="transparent"
            stroke="black"
            stroke-width="2"
            transform="translate(23, 0)"
          />
        </svg>
      </button>
      <button class="" @click="nextSlide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 80 80"
        >
          <!-- Круг -->
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="black"
            stroke-width="2"
          />

          <!-- Стрелочка -->
          <polygon
            points="45,40 25,25 25,55"
            fill="transparent"
            stroke="black"
            stroke-width="2"
            transform="translate(8, 0)"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

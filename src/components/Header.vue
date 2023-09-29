<script setup>
import featuresImage from "../assets/features.svg";
import Button from "./Button.vue";
import Swiper from "./Swiper.vue";
</script>
ы
<template>
  <header class="mb-[48] text-center relative">
    <p
      class="font-raleway text-base font-medium leading-5 tracking-normal text-center mb-[40px] 375:text-[18px]"
    >
      Вища Бухгалтерська Online-Академія
    </p>

    <h1
      class="font-[e-UkraineHeadBold] text-5xl font-bold leading-3xl tracking-normal text-center 375:text-[24px]"
    >
      Підвищення <br class="hidden 375:inline" />
      кваліфікації <br />
      та профперепідготовка <br class="hidden 375:inline" />
      для бухгалтерів
    </h1>
    <Button class="mt-10" :buttonText="'Обрати навчання >>'" />
    <div class="flex justify-center items-center mt-10 375:hidden">
      <img :src="featuresImage" alt="" class="max-w-full" />
    </div>
    <Swiper class="hidden 375:block" />

    <p class="text-2xl font-bold mt-10 375:text-[16px] text-center">
      Разом дешевше! Купуйте <br class="hidde 375:inline" />
      передплату на Вищу Бухгалтерську <br />
      Online-Академію
      <a href="#" class="text-primaryBlue"
        >8 професій за <br class="hidde 375:inline" />
        ціною 2</a
      >
    </p>
  </header>
</template>
<style></style>

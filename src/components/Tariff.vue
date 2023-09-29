<script setup>
import Button from "./Button.vue";

const props = defineProps({
  h3Text: String,
  description: String,
});
</script>

<template>
  <div
    class="col-span-2 text-center mt-[21px] bg-[#60AFFE0D] rounded-t-3xl"
  >
    <div class="text-md font-extrabold">
      <div class="text-md mr-[15px] inline">
        <h3>{{ h3Text }}</h3>
      </div>
      <img class="inline pb-[3px]" :src="discount" alt="" />
    </div>
    <p class="text-[13px]" v-html="description"></p>
    <p class="line-through text-gray text-[13px]">1079 грн/міс.</p>
    <p class="text-[17px] font-bold">679 грн/міс.</p>
    <Button :buttonText="'Оплатити карткою'" /> <br />
    <a class="text-gray underline" href="">Оплатити частинами</a>
  </div>
</template>
<style></style>

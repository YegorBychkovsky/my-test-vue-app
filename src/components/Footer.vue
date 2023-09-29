<script setup>
import Form from "./Form.vue";
</script>

<template>
  <footer class="grid grid-cols-2 375:grid-cols-1 text-center">
    <Form />
    <div class="pl-[70px] 375:pl-[40px] mt-[30px]">
      <p class="font-[e-Ukraine] text-[23px] font-[700] 375:text-start">
        З передплатою Аkадемії ви <br />отримаєте:
      </p>
      <div class="grid grid-cols-2">
        <div>
          <p class="text-[63px] text-primaryBlue 375:text-[43px]">8+</p>
          <p>професійних курсів</p>
        </div>
        <div>
          <p class="text-[63px] text-primaryBlue 375:text-[43px]">12</p>
          <p>закритих клубних лекцій</p>
        </div>
        <div>
          <p class="text-[63px] text-primaryBlue 375:text-[43px]">48</p>
          <p>нових вебінарів та тренінгів</p>
        </div>
        <div>
          <p class="text-[63px] text-primaryBlue 375:text-[43px]">∞</p>
          <p>
            Безлімітні відповіді <br />на запитання протягом <br />
            навчання
          </p>
        </div>
      </div>
      <div class="mb-[200px]">
        <p
          class="text-[39px] font-[700] text-primaryBlue 375:text-[24px] text-start"
        >
          Тестові та практичні
          <span class="text-[17px] font-[400] text-black block"
            >завдання зі зворотним зв'язком</span
          >
        </p>
      </div>
    </div>
  </footer>
</template>
<style></style>

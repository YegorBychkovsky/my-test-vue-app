<script setup>
import { computed } from "vue";
import arrows from "../assets/arrowsDown.svg";
import Button from "./Button.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import MobileScale from "./MobileScale.vue";
import MobileTable from "./MobileTable.vue";
import Scale from "./Scale.vue";
import Table from "./Table.vue";
import Tariff from "./Tariff.vue";
import Timer from "./Timer.vue";

const isMobile = computed(() => window.innerWidth <= 1600);
console.log(isMobile.value);
console.log(window.innerWidth);
</script>
<template>
  <div class="font-raleway mx-[250px] 375:m-[0px] bg-[#FAFAFA]">
    <Header />
    <div class="mt-10 mb-80 text-center">
      <p class="text-5xl font-semibold 375:text-[24px]">
        Навчання, яке працює! <br />Відкрийте для себе найпопулярніші курси
      </p>
      <MobileScale class="hidden 375:flex" />
      <Scale class="mt-[60px] 375:hidden" />
    </div>
    <div class="-mt-[180px] mb-[180px]">
      <div class="text-center">
        <p class="text-5xl font-semibold 375:text-[24px]">
          Передплата на вищу Бухгалтерську <br />
          Онлайн-Академію
        </p>
        <br />
        <p class="font-xl font-bold mb-[300px] 375:mb-[20px]">
          Оберіть свій тарифний пакет:
        </p>
      </div>
      <div
        class="grid grid-cols-7 375:grid-cols-1 justify-center items-center"
      >
        <Timer />
        <div class="col-span-2 text-center 375:justify-center mb-[40px]">
          <div
            class="text-[13px] bg-yellow rounded-t-2xl font-[700] py-[3px] px-[10px]"
          >
            <img class="inline pb-[3px] mx-[5px]" :src="arrows" alt="" />
            ХІТ ПРОДАЖУ
            <img class="inline pb-[3px] mx-[5px]" :src="arrows" alt="" />
          </div>
          <Tariff
            class="bg-[#FAFAFA]"
            h3Text="СУПЕРПРОФЕСІОНАЛ"
            description="8 професійних курсів <br/> за ціною 2 "
          />
          <MobileTable
            class="hidden 375:block"
            :firstCourse="true"
            :secondCourse="false"
          />
        </div>
        <div class="col-span-2">
          <Tariff
            class="mt-[30px] 375:bg-white"
            h3Text="ПРЕМIУМ"
            description="8 професійних курсів за ціною 2 + <br/> Бухгалтерська Відеоплатформа
      №1"
          />
          <MobileTable
            class="hidden 375:block"
            :firstCourse="true"
            :secondCourse="false"
          />
        </div>
      </div>
      <div>
        <div class="overflow-x-auto">
          <Table class="375:hidden" />
          <div class="grid grid-cols-7 375:hidden">
            <div class="col-span-3"></div>
            <div class="col-span-2 text-center">
              <p class="line-through text-gray text-[13px] mt-[50px]">
                1079 грн/міс.
              </p>
              <p class="text-[17px] font-bold">679 грн/міс.</p>
              <Button :buttonText="'Завантажити рахунок'" />
              <br />
            </div>
            <div
              class="col-span-2 text-center bg-[#60AFFE0D] rounded-b-xl pb-[10px]"
            >
              <p class="line-through text-gray text-[13px] mt-[50px]">
                1079 грн/міс.
              </p>
              <p class="text-[17px] font-bold">679 грн/міс.</p>
              <Button :buttonText="'Завантажити рахунок'" /> <br />
            </div>
          </div>
          <p class="text-center mt-[40px]">
            Оплачуйте пакети <b>частинами без комісії!</b> <br />
            Натискайте на кнопку <b>Оплатити карткою </b> та оформлюйте
            розстрочку
            <br />
            через PrivatBank або Monobank
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

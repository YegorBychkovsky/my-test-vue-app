<script setup>
import { onMounted, ref } from "vue";

const progressPercentage = ref("");
onMounted(() => {
  const currentDate = new Date();

  const startDate = new Date("2023-08-31");
  const endDate = new Date("2023-10-03");

  if (currentDate >= startDate && currentDate <= endDate) {
    const totalTime = endDate - startDate;
    const currentTime = currentDate - startDate;

    progressPercentage.value = ((currentTime / totalTime) * 100).toFixed(
      0,
    );
  }
});
</script>

<template>
  <div class="w-full">
    <div class="flex mb-2 items-center">
      <div class="basis-[20%]">
        <span class="text-xs inline-block py-1 px-2">
          Ціни раннього бронювання
        </span>
      </div>
      <div class="basis-[35%]">
        <span class="text-xs inline-block py-1 px-2">
          Подорожчання <br />
          на 10%
        </span>
      </div>
      <div class="basis-[35%]">
        <span class="text-xs inline-block py-1 px-2">
          Подорожчання <br />на 15%
        </span>
      </div>
      <div class="basis-[10%]">
        <span class="text-xs inline-block py-1 px-2">
          Квитки вже закінчаться
        </span>
      </div>
    </div>
    <div
      class="flex h-2 mb-4 overflow-hidden text-xs bg-[#0000000D] relative"
    >
      <div
        style="flex-grow: 2; flex-shrink: 1; flex-basis: 15%"
        class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0000000D] border-r border-black relative"
      >
        <div
          class="border-l border-[#0000000D] absolute h-full left-0"
        ></div>
      </div>
      <div
        style="flex-grow: 5; flex-shrink: 1; flex-basis: 35%"
        class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0000000D] border-r border-black relative"
      >
        <div
          class="border-l border-[#0000000D] absolute h-full left-0"
        ></div>
      </div>
      <div
        style="flex-grow: 5; flex-shrink: 1; flex-basis: 35%"
        class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0000000D] border-r border-black relative"
      >
        <div
          class="border-l border-[#0000000D] absolute h-full left-0"
        ></div>
      </div>
      <div
        style="flex-grow: 2; flex-shrink: 1; flex-basis: 15%"
        class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0000000D] border-r border-black relative"
      >
        <div
          class="border-l border-[#0000000D] absolute h-full left-0"
        ></div>
      </div>
    </div>
    <div class="relative pt-1">
      <div class="flex mb-2 items-end">
        <div
          class="text-xs font-semibold inline-block w-8 text-gray-600 text-center"
        ></div>
        <div
          class="text-xs font-semibold inline-block basis-[20%] flex-shrink-0 w-8 text-gray-600 text-end"
        >
          <b class="text-center">21 серпня</b>
        </div>
        <div
          class="text-xs font-semibold inline-block basis-[35%] flex-shrink-0 w-8 text-gray-600 text-end"
        >
          <b class="text-center">1 вересня</b>
        </div>
        <div
          class="text-xs font-semibold inline-block basis-[35%] flex-shrink-0 w-8 text-gray-600 text-end"
        >
          <b class="text-center">15 вересня</b>
        </div>
        <div
          class="text-xs font-semibold inline-block basis-[10%] flex-shrink-0 w-8 text-gray-600 text-end"
        >
          <b class="text-center">3 жовтня</b>
        </div>
        <div
          class="absolute -top-7 w-4 h-4 bg-yellow-400 border-2 border-black bg-yellow rounded-full"
          :style="{ left: progressPercentage + '%' }"
        >
          <div
            class="relative w-2 h-2 z-1 bg-black rounded-full mt-[2px] ml-[2px]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>

<style></style>

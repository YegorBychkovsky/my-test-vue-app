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
  <div class="flex justify-center mt-[40px]">
    <div class="flex flex-col items-center mr-[10px]">
      <!-- Надписи слева от шкалы -->
      <div
        class="text-xs font-semibold text-gray-600 text-center mt-[57px]"
      >
        21 серпня
      </div>
      <div
        class="text-xs font-semibold text-gray-600 text-center mt-[100px]"
      >
        1 вересня
      </div>
      <div
        class="text-xs font-semibold text-gray-600 text-center mt-[100px]"
      >
        15 вересня
      </div>
      <div
        class="text-xs font-semibold text-gray-600 text-center mt-[27px]"
      >
        3 жовтня
      </div>
    </div>
    <div class="relative flex flex-col items-center">
      <!-- Вертикальная шкала -->
      <div class="w-[10px] bg-[#F6F6F6]">
        <div class="relative h-[350px] flex flex-col justify-between">
          <!-- Отдел 1 -->
          <div class="h-[2px] bg-black w-full absolute bottom-0"></div>

          <div class="basis-[15%] w-[10px] bg-[#F6F6F6] mx-auto">
            <div class="h-[2px] bg-black w-full"></div>
          </div>

          <!-- Отдел 2 -->
          <div class="basis-[30%] w-[10px] bg-[#F6F6F6] mx-auto">
            <div class="h-[2px] bg-black w-full"></div>
          </div>

          <!-- Отдел 3 -->
          <div class="basis-[30%] w-[10px] bg-[#F6F6F6] mx-auto">
            <div class="h-[2px] bg-black w-full"></div>
          </div>

          <!-- Отдел 4 -->
          <div class="basis-[15%] w-[10px] bg-[#F6F6F6] mx-auto">
            <div class="h-[2px] bg-black w-full"></div>
          </div>
        </div>
      </div>

      <!-- Круг на шкале -->
      <div
        class="absolute w-[20px] h-[20px] ml-[0px] border-2 border-black bg-yellow rounded-full mt-4"
        :style="{ top: progressPercentage + '%' }"
      >
        <div
          class="relative w-2 h-2 z-1 bg-black rounded-full mt-[4px] ml-[4px]"
        ></div>
      </div>
    </div>
    <div class="flex flex-col items-center ml-[10px]">
      <!-- Надписи слева от шкалы -->
      <div class="text-xs font-[400] text-gray-600 text-start mt-[0px]">
        Ціни раннього <br />
        бронювання
      </div>
      <div class="text-xs font-[400] text-gray-600 text-start mt-[80px]">
        Подорожчання <br />
        на 10%
      </div>
      <div class="text-xs font-[400] text-gray-600 text-start mt-[80px]">
        Подорожчання <br />на 15%
      </div>
      <div class="text-xs font-[400] text-gray-600 text-start mt-[60px]">
        Можливо квитки <br />вже закінчаться
      </div>
    </div>
  </div>
</template>
<style></style>

<script setup>
import { onMounted, ref } from "vue";

const targetDate = new Date("2023-10-03T17:00:00Z").getTime();

const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

const updateTimer = () => {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    hours.value = "00";
    minutes.value = "00";
    seconds.value = "00";
  } else {
    const h = Math.floor(timeRemaining / (1000 * 60 * 60));
    const m = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    hours.value = h.toString().padStart(2, "0");
    minutes.value = m.toString().padStart(2, "0");
    seconds.value = s.toString().padStart(2, "0");
  }
};

onMounted(() => {
  updateTimer();
  setInterval(updateTimer, 1000);
});
</script>

<template>
  <div
    id="timer"
    class="col-span-3 pt-[20px] text-primaryBlue font-[400] 375:text-center mb-[30px]"
  >
    <span class="text-3xl opacity-100">{{ hours }}</span> :
    <span class="text-3xl opacity-100">{{ minutes }}</span> :
    <span class="text-3xl opacity-100">{{ seconds }}</span>
    <div
      class="flex space-x-4 opacity-100 375:text-center 375:justify-center"
    >
      <span>год</span><span>хв</span><span>сек</span>
    </div>
    <p class="text-sm text-gray">
      (для діючих передплатників <br />
      додаткова знижка 10%)
    </p>
  </div>
</template>
<style></style>

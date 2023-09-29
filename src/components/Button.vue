<script setup>
const props = defineProps({
  buttonText: String,
});
</script>

<template>
  <button
    class="bg-primaryBlue text-white font-raleway px-12 py-3 rounded-[40px] font-[16px]"
  >
    {{ buttonText }}
  </button>
</template>
<style></style>

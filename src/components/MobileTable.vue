<script setup>
import tableData from "../../data";
import checkSymbol from "../assets/checkSymbol.svg";
import crossSymbol from "../assets/crossSymbol.svg";
const props = defineProps({
  firstCourse: Boolean,
  secondCourse: Boolean,
});
console.log(props.firstCourse);
console.log(props.secondCourse);
</script>

<template>
  <table class="min-w-full bg-white">
    <tbody class="text-[15px]">
      <tr v-for="item in tableData" :key="item.id">
        <td v-if="firstCourse" class="w-[16.5%] pl-[30px]">
          <img v-if="item.firstCourse" :src="checkSymbol" alt="" />
          <img v-else :src="crossSymbol" alt="" />
        </td>
        <td v-if="secondCourse" class="text-center pl-[30px]">
          <img
            class="ml-[40%]"
            v-if="item.secondCourse"
            :src="checkSymbol"
            alt=""
          />
          <img v-else :src="crossSymbol" alt="Крестик" />
        </td>
        <td class="w-[55%] text-start" v-html="item.name"></td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>

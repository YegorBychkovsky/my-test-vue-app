<script setup>
import tableData from "../../data";
import checkSymbol from "../assets/checkSymbol.svg";
import crossSymbol from "../assets/crossSymbol.svg";
</script>

<template>
  <table class="min-w-full bg-[#FAFAFA]">
    <tbody class="text-[15px]">
      <tr v-for="item in tableData" :key="item.id">
        <td
          class="border-b border-gray-200 w-[55%]"
          v-html="item.name"
        ></td>
        <td class="border-b border-gray-100 border-opacity-50 w-[16.5%]">
          <img v-if="item.firstCourse" :src="checkSymbol" alt="" />
          <img v-else :src="crossSymbol" alt="" />
        </td>
        <td class="border-b border-gray-200 bg-[#60AFFE0D] text-center">
          <img
            class="ml-[40%]"
            v-if="item.secondCourse"
            :src="checkSymbol"
            alt=""
          />
          <img v-else :src="crossSymbol" alt="Крестик" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>

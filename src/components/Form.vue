<script setup>
import axios from "axios";
import { ref } from "vue";
import Button from "./Button.vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const errorMessage = ref(null);
const successMessage = ref(null);

async function submitForm() {
  try {
    const response = await axios.post(
      "https://7eminar.ua/api/clients/campaign/test",
      {
        email: email.value,
        name: `${firstName.value} ${lastName.value}`,
        phone: lastName.value,
      },
    );

    if (response.status === 200) {
      successMessage.value = "Данные успешно отправлены!";
      errorMessage.value = null;
    } else {
      errorMessage.value = "Ошибка при отправке данных.";
      successMessage.value = null;
    }
  } catch (error) {
    if (error.response) {
      errorMessage.value = error.response.data.message;
    } else {
      errorMessage.value = "Произошла ошибка. Попробуйте позже.";
    }
    successMessage.value = null;
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="pr-[70px] 375:px-[30px]">
    <p
      class="font-[e-Ukraine] text-[23px] font-[700] mb-[20px] 375:text-start pr-[80px]"
    >
      Залиште заявky, і ми підберемо для <br />
      вас yмови зі знижkою
    </p>
    <div class="mb-4">
      <label
        for="firstName"
        class="block text-sm font-medium text-gray-700 375:text-start"
        >Ваше ім'я</label
      >
      <input
        v-model="firstName"
        placeholder="Ваше ім'я"
        type="text"
        id="firstName"
        class="mt-1 p-4 block w-full rounded-full border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>

    <div class="mb-4">
      <label
        for="lastName"
        class="block text-sm font-medium text-gray-700 375:text-start"
        >Номер телефону</label
      >
      <input
        v-model="lastName"
        placeholder="Введіть Ваш номер телефону"
        type="number"
        id="lastName"
        class="mt-1 p-4 block w-full rounded-full border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>

    <div class="mb-4">
      <label
        for="email"
        class="block text-sm font-medium text-gray-700 375:text-start"
        >Ваш e-mail</label
      >
      <input
        v-model="email"
        placeholder="Ваш e-mail"
        type="email"
        id="email"
        class="mt-1 p-4 block w-full rounded-full border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>

    <div v-if="errorMessage" class="text-red-600">
      {{ errorMessage }}
    </div>
    <div v-if="successMessage" class="text-green-600">
      {{ successMessage }}
    </div>

    <Button
      type="submit"
      class="btn-primary"
      buttonText="Зареєструватись"
    />
  </form>
</template>
<style></style>

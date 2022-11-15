<script setup>
import { RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header class="flex h-20 items-center bg-primary-100 pl-[45px] pr-[58px]">
    <h1 class="text-[26px] text-white">DottedSign</h1>
    <nav class="ml-auto mr-14">
      <RouterLink to="/" class="p-5 text-white">快速簽名</RouterLink>
      <RouterLink to="/" class="p-5 text-white">已簽名</RouterLink>
      <RouterLink to="/" class="p-5 text-white">待簽名</RouterLink>
      <RouterLink to="/" class="p-5 text-white">搜尋</RouterLink>
    </nav>
    <font-awesome-icon
      icon="fa-solid fa-circle-user"
      class="text-[40px] text-white"
    />
    <!--    <img-->
    <!--      alt="Vue logo"-->
    <!--      class="logo"-->
    <!--      src="@/assets/logo.svg"-->
    <!--      width="125"-->
    <!--      height="125"-->
    <!--    />-->

    <!--    <div class="wrapper">-->
    <!--      <HelloWorld msg="You did it!" />-->

    <!--      <nav>-->
    <!--        <RouterLink to="/">Home</RouterLink>-->
    <!--        <RouterLink to="/about">About</RouterLink>-->
    <!--      </nav>-->
    <!--    </div>-->
  </header>

  <RouterView />
</template>

<style scoped></style>

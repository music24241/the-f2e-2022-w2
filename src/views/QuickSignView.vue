<template>
  <main class="px-11 py-8">
    <div class="mb-6 text-xl">
      <RouterLink to="/" class="mr-2 text-primary-200">首頁</RouterLink>
      <span class="mr-2 text-primary-200">></span>
      <RouterLink
        to="/quick-sign"
        class="text-primary-100"
        :class="{ 'text-primary-100': $router.path === '/quick-sign' }"
        >快速簽名</RouterLink
      >
    </div>
    <h2 class="mb-5 text-2xl font-bold text-primary-100">Step 1. 建立簽名</h2>
    <vue-drawing-canvas ref="VueCanvasDrawing" />
    <div></div>
  </main>
</template>

<script setup>
import VueDrawingCanvas from "vue-drawing-canvas";
</script>

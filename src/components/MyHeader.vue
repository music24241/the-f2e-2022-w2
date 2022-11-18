<template>
  <header
    class="flex h-[68px] items-center justify-between border-b border-neutral-100 bg-white pl-[45px] pr-[58px] shadow-100"
  >
    <h1>
      <RouterLink to="/">
        <img src="../../public/images/logo.png" alt="logo" />
      </RouterLink>
    </h1>
    <nav class="flex h-full">
      <a
        href="#"
        class="mr-9 flex h-full items-center border-b-2 border-primary-100 text-neutral-500"
      >
        <span class="material-icons mr-1">description</span>文件</a
      >
      <a href="#" class="mr-9 flex h-full h-full items-center text-neutral-500"
        ><span class="material-icons mr-1">search</span>搜尋</a
      >
      <a
        href="#"
        class="relative flex h-full h-full items-center text-neutral-500"
        ><span class="material-icons mr-1">notifications</span>通知
        <span
          class="absolute top-1/2 -right-1.5 h-[6px] w-[6px] -translate-y-3 rounded-full bg-danger-100"
        ></span>
      </a>
    </nav>
    <div class="flex items-center">
      <span class="material-icons mr-8 text-lg text-neutral-500"
        >help_outline</span
      >
      <span class="material-icons mr-2 text-4xl text-primary-100"
        >account_circle</span
      >
      <span class="mr-3.5 text-neutral-600">Jenny Wu</span>
      <span class="material-icons text-neutral-500">arrow_drop_down</span>
    </div>
  </header>
</template>

<script setup></script>

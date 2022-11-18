<script setup>
import MyHeader from "../components/MyHeader.vue";
import { computed, ref } from "vue";
import { usefileStore } from "@/stores/file";
import { storeToRefs } from "pinia";

const showPopover = ref(false);
const selectedPopover = ref(-1);

const store = usefileStore();
const { files } = storeToRefs(store);

const selectedSignStatus = ref("self");

const filterFiles = computed(() =>
  files.value.filter((file) => file.signStatus === selectedSignStatus.value)
);

function getFilterFilesLength(selectedSignStatus) {
  return files.value.filter((file) => file.signStatus === selectedSignStatus)
    .length;
}

const fileSignStatusList = ref([
  { status: "self", title: "待自己簽署" },
  { status: "person", title: "待他人簽署" },
  { status: "complete", title: "已完成" },
  { status: "cancel", title: "已取消" },
  { status: "draft", title: "草稿" },
  { status: "inbox", title: "已封存" },
]);
</script>

<template>
  <MyHeader />
  <main class="">
    <div class="flex h-[68px] items-center justify-between bg-white px-8">
      <nav class="flex h-full items-end">
        <a
          v-for="fileSignStatus in fileSignStatusList"
          :key="fileSignStatus.status"
          :class="{
            'mb-[-2px] border-b-2 border-primary-100 text-primary-100':
              selectedSignStatus === fileSignStatus.status,
          }"
          href="#"
          class="mr-9 flex items-center pb-[18px] text-neutral-500"
          @click.prevent="selectedSignStatus = fileSignStatus.status"
        >
          {{ fileSignStatus.title }}
          <span
            :class="{
              'bg-primary-200 text-primary-100':
                selectedSignStatus === fileSignStatus.status,
            }"
            v-if="getFilterFilesLength(fileSignStatus.status) !== 0"
            class="ml-1 flex h-[22px] justify-center rounded-full bg-neutral-200 px-1.5 leading-[20px]"
          >
            {{ getFilterFilesLength(fileSignStatus.status) }}</span
          >
        </a>
      </nav>
      <div class="relative">
        <button
          class="flex items-center rounded bg-primary-100 px-5 py-2.5 text-white"
          @click.prevent="showPopover = !showPopover"
        >
          新增 <span class="material-icons ml-2">add</span>
        </button>
        <ul
          :class="{ hide: !showPopover }"
          class="popover -bottom-[215px] right-0 w-[300px]"
        >
          <li
            class="flex cursor-pointer border-b border-neutral-100 p-4 hover:bg-primary-200"
          >
            <img
              src="../../public/images/sign-self.png"
              alt="sign-self"
              class="mr-6"
            />
            <div>
              <div class="mb-2 font-medium text-black">自己簽署</div>
              <div class="text-xs text-neutral-500">你是文件唯一簽署者</div>
            </div>
          </li>
          <li
            class="flex cursor-pointer border-b border-neutral-100 p-4 hover:bg-primary-200"
          >
            <img
              src="../../public/images/sign-personally.png"
              alt="sign-self"
              class="mr-6"
            />
            <div>
              <div class="mb-2 font-medium text-black">邀請他人簽署</div>
              <div class="text-xs text-neutral-500">
                指派簽署欄位給其他簽署人
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="py-9 px-8">
      <div class="flex items-center border-b border-neutral-400 pb-4">
        <select
          class="mr-6 w-[180px] rounded border border-neutral-300 px-5 py-1"
          name=""
          id=""
        >
          <option value="a">a</option>
        </select>
        <select
          class="w-[180px] rounded border border-neutral-300 px-5 py-1"
          name=""
          id=""
        >
          <option value="a">a</option>
        </select>
        <div class="relative ml-auto self-start">
          <span
            class="material-icons absolute left-[14px] top-2/4 z-10 mr-1 -translate-y-2/4 text-neutral-400"
            >search</span
          >
          <input
            type="text"
            placeholder="搜尋"
            class="mr-6 rounded border border-neutral-300 py-3 pl-10 placeholder-neutral-400"
          />
        </div>
        <nav
          class="mr-6 flex self-center overflow-hidden rounded border border-neutral-300 bg-white"
        >
          <a href="#" class="border-r border-neutral-300 py-1.5 px-2">
            <span class="material-icons text-neutral-400"
              >format_list_bulleted</span
            >
          </a>
          <a href="#" class="bg-primary-100 py-1.5 px-2">
            <span class="material-icons text-white">grid_view</span>
          </a>
        </nav>
        <a href="#" class="">
          <span class="material-icons text-neutral-500">cached</span>
        </a>
      </div>
      <div v-if="files.length === 0">
        <img
          src="../../public/images/empty-data.png"
          alt="empty-content"
          class="mx-auto mb-6 pt-[161px]"
        />
        <span class="mx-auto block w-fit font-bold text-neutral-500"
          >目前尚無需簽署的文件</span
        >
      </div>
      <!--清單-->
      <ul v-else class="grid grid-cols-4 gap-8 pt-6">
        <li
          v-for="(file, idx) in filterFiles"
          :key="idx"
          class="rounded border border-neutral-100 bg-white"
        >
          <div class="border-b border-neutral-100 px-4 py-6">
            <div class="relative mb-6 flex">
              <div class="w-[194px] pr-2">
                <h4 class="mb-2 truncate text-xl font-bold text-neutral-600">
                  {{ file.title }}
                </h4>
                <ul>
                  <li
                    :key="idx2"
                    v-for="(tag, idx2) in file.tags"
                    class="inline-block rounded py-0.5 px-1 text-neutral-600"
                    :class="[
                      tag.bgColor,
                      { 'mr-2': idx2 !== file.tags.length - 1 },
                    ]"
                  >
                    {{ tag.title }}
                  </li>
                </ul>
              </div>
              <img :src="`public/images/${file.type}.png`" :alt="file.type" />
              <div class="absolute right-0 top-[-12px]">
                <span
                  @click="
                    selectedPopover =
                      selectedPopover === -1 || selectedPopover !== idx
                        ? idx
                        : -1
                  "
                  class="material-icons cursor-pointer rounded px-1 text-2xl text-neutral-600 hover:bg-neutral-100"
                  >more_vert</span
                >
                <ul
                  :class="{ hide: selectedPopover !== idx }"
                  class="popover left-0 top-[44px] w-[200px] overflow-hidden text-neutral-500"
                >
                  <li
                    class="flex cursor-pointer items-center bg-white py-3 px-4 hover:bg-primary-200"
                  >
                    <span class="material-icons mr-3.5">info</span>
                    <span>簽署狀態</span>
                  </li>
                  <li
                    class="flex cursor-pointer items-center bg-white py-3 px-4 hover:bg-primary-200"
                  >
                    <span class="material-icons mr-3.5">inventory</span>
                    <span>稽核軌跡</span>
                  </li>
                  <li
                    class="flex cursor-pointer items-center bg-white py-3 px-4 hover:bg-primary-200"
                  >
                    <span class="material-icons mr-3.5">file_download</span>
                    <span>下載檔案</span>
                  </li>
                  <li
                    class="flex cursor-pointer items-center bg-white py-3 px-4 hover:bg-primary-200"
                  >
                    <span class="material-icons mr-3.5">info</span>
                    <span>重新命名</span>
                  </li>
                  <li
                    class="flex cursor-pointer items-center bg-white py-3 px-4 hover:bg-primary-200"
                  >
                    <span class="material-icons mr-3.5">local_offer</span>
                    <span>管理標籤</span>
                  </li>
                  <li
                    class="flex cursor-pointer items-center bg-white py-3 px-4 hover:bg-primary-200"
                  >
                    <span class="material-icons mr-3.5">inbox</span>
                    <span>封存</span>
                  </li>
                  <li
                    class="flex cursor-pointer items-center bg-white py-3 px-4 hover:bg-primary-200"
                  >
                    <span class="material-icons mr-3.5">delete</span>
                    <span>刪除</span>
                  </li>
                </ul>
              </div>
            </div>
            <span class="text-sm text-neutral-500"
              >最後修改時間：{{ file.lastModifyDate }}</span
            >
          </div>
          <div class="flex items-center p-4 pb-6 text-neutral-500">
            簽署者：<span class="material-icons mr-1 text-2xl text-primary-100"
              >account_circle</span
            >
            {{ file.signPerson }}
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

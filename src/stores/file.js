import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usefileStore = defineStore("file", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  const files = ref([
    {
      type: "pdf",
      title: "產品測試文件",
      signPerson: "Jenny Wu",
      lastModifyDate: "2022-10-26",
      tags: [
        {
          title: "產品教學",
          bgColor: "bg-tag-light-100",
        },
        {
          title: "產品測試",
          bgColor: "bg-tag-light-400",
        },
      ],
      signStatus: "self", // self, person, complete, cancel, draft, inbox
    },
    {
      type: "img",
      title: "產品發想計畫文件",
      signPerson: "Jenny Wu",
      lastModifyDate: "2022-10-26",
      tags: [
        {
          title: "產品發想",
          bgColor: "bg-tag-light-100",
        },
        {
          title: "產品測試",
          bgColor: "bg-tag-light-400",
        },
      ],
      signStatus: "person", // self, person, complete, cancel, draft, inbox
    },
    {
      type: "pdf",
      title: "A廠商產品正式發行文件",
      signPerson: "Kevin Chen",
      lastModifyDate: "2022-11-25",
      tags: [
        {
          title: "產品教學",
          bgColor: "bg-tag-light-100",
        },
        {
          title: "產品測試",
          bgColor: "bg-tag-light-400",
        },
      ],
      signStatus: "complete", // self, person, complete, cancel, delete, draft
    },
  ]);
  return { count, doubleCount, increment, files };
});

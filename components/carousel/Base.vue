<script setup lang="ts">
const scrollEl = ref<HTMLDivElement>();

function scrollLeft() {
  scrollEl?.value.scrollTo({
    left: 0,
    behavior: "smooth",
  });
}
function scrollRight() {
  scrollEl?.value.scrollTo({
    left: scrollEl?.value.scrollWidth - scrollEl?.value.clientWidth,
    behavior: "smooth",
  });
}
</script>
<template>
  <div class="flex py-7 px-10 p items-center mt- bg-slate-800 text-white">
    <div class="text-2xl">
      <slot name="title" />
    </div>
    <div class="flex-auto" />
    <slot name="more" />
  </div>
  <div class="relative">
    <div
      class="bg-slate-800 flex gap-2 overflow-x-auto scrollbar"
      ref="scrollEl"
    >
      <slot />
    </div>
    <div
      class="absolute left-0 top-0 h-full opacity-0 hover:opacity-60 transition"
    >
      <button
        class="bg-stone-800 p-3 justify-center h-full text-white transition"
        title="Scroll left"
        @click="scrollLeft()"
      >
        <Icon name="ant-design:caret-left-filled" width="20" height="20" />
      </button>
    </div>
    <div
      class="absolute right-0 top-0 h-full opacity-0 hover:opacity-60 transition"
    >
      <button
        class="bg-stone-800 p-3 justify-center h-full text-white transition"
        title="Scroll right"
        @click="scrollRight()"
      >
        <Icon name="ant-design:caret-right-filled" width="20" height="20" />
      </button>
    </div>
  </div>
</template>

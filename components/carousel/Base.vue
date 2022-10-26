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
  <div>
    <div class="flex py-10 px-10 items-center bg-zinc-800 text-white">
      <div class="text-2xl">
        <slot name="title" />
      </div>
      <div class="flex-auto"></div>
      <slot name="more" />
    </div>

    <div class="relative">
      <div ref="scrollEl" class="overflow-y-auto bg-zinc-800 scrollbar">
        <div class="flex gap-2 w-max p-2 px-10">
          <slot />
        </div>

        <button
          class="flex flex-col justify-center bg-white items-center hover:opacity-100 transition"
          title="Scroll left"
          @click="scrollLeft()"
        >
          <Icon name="ant-design:play-circle-filled" width="20" height="20" />
        </button>

        <button
          class="flex absolute top-0 right-0 bg-white p-3 items-center hover:opacity-100 transition"
          title="Scroll right"
          @click="scrollRight()"
        >
          <Icon name="ant-design:play-circle-filled" width="20" height="20" />
        </button>
      </div>
    </div>
  </div>
</template>

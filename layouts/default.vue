<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);

const openNav = () => {
  open.value = !open.value;
};
</script>

<template>
  <div class="flex h-screen">
    <ul class="menu bg-slate-800 text-white p-2 flex flex-col justify-center">
      <li class="m-3">
        <NuxtLink to="/">
          <Icon name="akar-icons:home" width="25" height="25" />
        </NuxtLink>
      </li>

      <li class="m-3">
        <NuxtLink to="/movies">
          <Icon name="icon-park-solid:movie" width="25" height="25" />
        </NuxtLink>
      </li>

      <li class="m-3">
        <NuxtLink to="/tv">
          <Icon name="eva:tv-fill" width="25" height="25" />
        </NuxtLink>
      </li>

      <li class="m-3">
        <NuxtLink to="/search">
          <Icon name="akar-icons:search" width="25" height="25" />
        </NuxtLink>
      </li>
    </ul>
    <div class="flex-1 flex overflow-hidden">
      <div class="flex-1 overflow-y-scroll">
        <NuxtLoadingIndicator />
        <slot />
      </div>
    </div>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

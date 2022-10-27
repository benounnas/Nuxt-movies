<script setup lang="ts">
import { ref } from "vue";
import { useMediaQuery } from "@vueuse/core";

const open = ref(false);
const isMediumScreen = useMediaQuery("(min-width: 768px)");
const openNav = () => {
  open.value = !open.value;
};
</script>

<template>
  <div class="flex h-screen">
    <ul
      v-if="isMediumScreen"
      class="menu bg-slate-900 text-white p-2 flex flex-col justify-center"
    >
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

    <NavigationBottom v-else />
    <div class="flex-1 flex overflow-hidden">
      <div class="flex-1 overflow-y-scroll">
        <NuxtLoadingIndicator />
        <slot />

        <footer class="footer footer-center p-4 bg-slate-800 text-white">
          <div>
            <p>Copyright © 2022 - Made with Love & Music by Benounnas</p>
          </div>
        </footer>
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

<script setup lang="ts">
import type { Media, MediaType } from "~/types";

defineProps<{
  type: MediaType;
  item: Media;
}>();
</script>

<template>
  <NuxtLink :to="`/${item.media_type || type}/${item.id}`" class="pb-2">
    <div class="min-w-max h-80 border-solid border-zinc-300 border-4 z-10">
      <NuxtImg
        v-if="item.poster_path"
        width="400"
        height="600"
        format="webp"
        :src="`/tmdb${item.poster_path}`"
        :alt="item.title || item.name"
        class="w-full h-full object-cover"
      />
      <div v-else>
        <span class="text-4xl m-3">No Image</span>
      </div>
    </div>
    <div class="mt-2 text-white">
      {{ item.title || item.name }}
    </div>
  </NuxtLink>
</template>

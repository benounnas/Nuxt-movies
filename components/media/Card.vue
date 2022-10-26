<script setup lang="ts">
import type { Media, MediaType } from "~/types";

defineProps<{
  type: MediaType;
  item: Media;
}>();
</script>

<template>
  <NuxtLink :to="`/${item.media_type || type}/${item.id}`" pb2>
    <div
      class="block text-white bg-zinc-800 transition duration-400 hover:scale-100 border-solid border-white border-4 z-10"
    >
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

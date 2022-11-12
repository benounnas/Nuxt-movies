<script setup lang="ts">
import type { Media } from "~/types";
import { TMDB_IMAGE_BASE_ORIGINAL } from "~/constants/images";
import { formatTime } from "~/composables/utils";

const { item } = defineProps<{
  item: Media;
}>();
</script>

<template>
  <section
    class="hero min-h-screen"
    :style="`background-image: url('${getMediaUrl(
      item.backdrop_path,
      '1749',
      '529'
    )}')`"
  >
    <div
      class="text-white hero-content flex-col lg:flex-row-reverse p-10 md:p-40"
    >
      <div>
        <h1 class="text-5xl font-bold">{{ item.title }}</h1>
        <p class="py-6">
          {{ item.overview }}
        </p>

        <ButtonTrailer
          :video="item.videos.results[0]"
          :button-class="'btn btn-warning hover:btn-outline '"
        />
      </div>
    </div>
  </section>
</template>

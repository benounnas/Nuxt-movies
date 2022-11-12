<script setup lang="ts">
definePageMeta({ middleware: "redirect" });
/* import type { MediaType } from "~/types";
import { QUERY_LIST } from "~/constants/lists";
import { listMedia } from "~~/composables/tmdb";

const route = useRoute();
const type = computed<MediaType>(
  () => (route.params.type || "movie") as MediaType
);
const queries = computed(() => [QUERY_LIST.movie[0], QUERY_LIST.tv[0]]);

const list = await listMedia(type.value, queries.value[0].query, 1);
const item = await getMedia(type.value, list.results[0].id);
onMounted(() => {
  // console.log(item.videos.results[0]);
}); */
</script>
<!-- 
<template>
  <div>
    <section
      class="hero min-h-screen"
      :style="`background-image: url('${getMediaUrl(
        item.backdrop_path,
        '1749',
        '529'
      )}')`"
    >
      <div class="text-white hero-content flex-col lg:flex-row-reverse">
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

    <section>
      <CarouselAutoQuery
        v-for="query of queries"
        :key="query.type + query.query"
        :query="query"
      />
    </section>
  </div>
</template> -->

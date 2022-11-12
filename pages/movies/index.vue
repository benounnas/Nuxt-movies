<script setup lang="ts">
import type { MediaType } from "~/types";
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
});
</script>

<template>
  <div>
    <MediaHero :item="item" />

    <section>
      <CarouselAutoQuery
        v-for="query of queries"
        :key="query.type + query.query"
        :query="query"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import type { QueryItem } from "~/types";

const { query } = defineProps<{
  query: QueryItem;
}>();

const item = await listMedia(query.type, query.query, 1);
</script>

<template>
  <CarouselBase>
    <template #title>
      {{ query.title }}
    </template>
    <template #more>
      <NuxtLink :to="`/${query.type}/category/${query.query}`" n-link>
        Explore more
      </NuxtLink>
    </template>
    <MediaCard
      v-for="i of item.results"
      :key="i.id"
      :item="i"
      :type="query.type"
      class="flex-1"
    />
  </CarouselBase>
</template>

<script setup lang="ts">
import type { Video } from "~/types";

const props = defineProps<{
  video: Video;
}>();

const onClose = () => {};

const src = ref("https://www.youtube.com/embed/tbGd5BeUecM");
onMounted(() => {});
</script>
<template>
  <label class="btn gap-2" :for="video.id">
    <Icon name="ant-design:play-circle-filled" width="20" height="20" />
    Watch Trailer
  </label>
  <input type="checkbox" :id="video.id" class="modal-toggle" />
  <div class="modal" :id="video.id">
    <div class="modal-box min-w-fit relative">
      <label
        :for="video.id"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <iframe
        width="560"
        height="315"
        :src="src"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

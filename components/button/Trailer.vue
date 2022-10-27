<script setup lang="ts">
import type { Video } from "~/types";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const props = defineProps<{
  video: Video;
  buttonClass?: string;
}>();

const onClose = () => {};

onMounted(() => {});

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>
<template>
  <button :class="buttonClass ? buttonClass : 'btn gap-2'" @click="openModal">
    <Icon name="ant-design:play-circle-filled" width="20" height="20" />
    Watch Trailer
  </button>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center text-center p-10 relative"
        >
          <button
            class="absolute top-1 right-1 z-50 rounded-full bg-neutral-100 text-white"
            title="Close"
            @click="closeModal"
          >
            <Icon
              name="ant-design:close-circle-filled"
              width="50"
              height="50"
            />
          </button>
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="h-screen w-screen transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all"
            >
              <iframe
                class="w-full h-full aspect-video"
                :src="getVideoLink(video)"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

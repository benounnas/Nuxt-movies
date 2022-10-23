<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const openNav = () => {
  open.value = !open.value
}
</script>

<template>
  <div>
    <header class="shadow-md w-full fixed top-0 left-0">
      <div
        class="md:flex items-center justify-between bg-white py-4 md:px-10 px-7"
      >
        <Icon name="uil:github" />
        <div
          class="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800"
        >
          Designer
        </div>

        <ul
          class="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in"
        >
          <li class="md:ml-8 text-xl md:my-0 my-7">
            <a href="" class="text-gray-800 hover:text-gray-400 duration-500"
              >Home
            </a>
          </li>
          <li class="md:ml-8 text-xl md:my-0 my-7">
            <a href="" class="text-gray-800 hover:text-gray-400 duration-500"
              >Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

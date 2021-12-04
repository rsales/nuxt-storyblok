<template>
  <div v-editable="blok" class="w-full py-5 mt-16 flex items-center justify-center bg-green-200">
      <p class="w-full text-center text-gray-600">
        Copyright © {{ blok.year }} Storyblok
      </p>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>
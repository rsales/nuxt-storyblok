<template>
  <div v-editable="blok" class="relative">
    <dt>
      <div
        class="
          absolute
          flex
          items-center
          justify-center
          h-12
          w-12
          rounded-md
          bg-green-300
          text-white
        "
      >
        <!-- Heroicon name: outline/globe-alt -->
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      </div>
      <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
        {{ blok.headline }}
      </p>
    </dt>
    <dd class="mt-2 ml-16 text-base text-gray-500">
      {{ blok.description }}
    </dd>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
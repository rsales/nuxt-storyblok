<template>
  <div v-editable="blok" class="py-32 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="
            text-base text-green-300
            font-semibold
            tracking-wide
            uppercase
          "
        >
          {{ blok.caption }}
        </h2>
        <p
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          {{ blok.headline }}
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          {{ blok.description }}
        </p>
      </div>

      <div class="mt-16">
        <dl
          class="
            space-y-10
            md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10
          "
        >
          <template
            v-for="blok in blok.feature"
            class="flex-auto px-6"
          >
            <component :key="blok._uid" :blok="blok" :is="blok.component" />
          </template>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureSection",
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="
          relative
          z-10
          pb-8
          bg-white
          sm:pb-16
          md:pb-20
          lg:max-w-2xl lg:w-full lg:pb-28
          xl:pb-32
        "
      >
        <svg
          class="
            hidden
            lg:block
            absolute
            right-0
            inset-y-0
            h-full
            w-48
            text-white
            transform
            translate-x-1/2
          "
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              class="
                relative
                flex
                items-center
                justify-between
                sm:h-10
                lg:justify-start
              "
              aria-label="Global"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span class="sr-only">Workflow</span>
                    <svg
                      width="37"
                      height="33"
                      xmlns="http://www.w3.org/2000/svg"
                      style="transform: scale(1.4)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path fill="#FFF" d="M4 4h20v20H4z"></path>
                        <g fill-rule="nonzero">
                          <g fill="#0AB3AF">
                            <path
                              d="M16.278 15.213H9.813v3.042h6.31c.373 0 .715-.152.995-.395.248-.244.404-.609.404-1.065a1.798 1.798 0 00-.342-1.095c-.249-.305-.529-.487-.902-.487zm.218-3.682c.28-.182.404-.578.404-1.095 0-.456-.124-.791-.342-1.004a1.258 1.258 0 00-.808-.304H9.812v2.738h5.814c.31 0 .621-.152.87-.335z"
                            ></path>
                            <path
                              d="M26.777 0H1.452C.645 0 0 .643 0 1.415v25.28c0 .773.645 1.255 1.42 1.255h3.742V33l4.646-5.018h16.97c.774 0 1.258-.482 1.258-1.286V1.447c0-.772-.484-1.415-1.29-1.415L26.776 0zM22.52 20.488a3.893 3.893 0 01-1.387 1.416c-.613.385-1.29.74-2.065.9-.774.193-1.613.354-2.484.354H5.162V5.146h12.97c.645 0 1.193.129 1.71.418.483.258.935.611 1.29 1.03a4.815 4.815 0 011.097 3.12c0 .836-.226 1.64-.646 2.412a4.028 4.028 0 01-1.935 1.737c1.032.289 1.839.804 2.451 1.543.581.772.872 1.77.872 3.024 0 .804-.162 1.48-.484 2.058h.032z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      class="
                        bg-white
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-400
                        hover:text-gray-500 hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-indigo-500
                      "
                      aria-expanded="false"
                    >
                      <span class="sr-only">Open main menu</span>
                      <!-- Heroicon name: outline/menu -->
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
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <main
          class="
            mt-10
            mx-auto
            max-w-7xl
            px-4
            sm:mt-12 sm:px-6
            md:mt-16
            lg:mt-20 lg:px-8
            xl:mt-28
          "
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="
                text-4xl
                tracking-tight
                font-extrabold
                text-gray-900
                sm:text-5xl
                md:text-6xl
              "
            >
              <span class="block xl:inline">{{ blok.headline }}</span>
            </h1>
            <p
              class="
                mt-3
                text-base text-gray-500
                sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
                md:mt-5 md:text-xl
                lg:mx-0
              "
            >
              {{ blok.description }}
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                  :href="blok.link_action_one.url"
                  target="_blank"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    text-white
                    bg-green-400
                    hover:bg-green-500
                    md:py-4 md:text-lg md:px-10
                  "
                >
                  {{ blok.text_action_one }}
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        :src="blok.image.filename"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
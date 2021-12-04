import Vue from 'vue'
import Page from '~/components/Page.vue'
import Feature from '~/components/Feature.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import FeatureSection from '~/components/sections/FeatureSection.vue'
import FooterSection from '~/components/sections/FooterSection.vue'

// Organize global components
Vue.component('page', Page)

// Organize section components
Vue.component('heroSection', HeroSection)
Vue.component('featureSection', FeatureSection)
Vue.component('footerSection', FooterSection)

// Organize general components
Vue.component('feature', Feature)
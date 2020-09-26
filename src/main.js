import DefaultLayout from '~/layouts/Default.vue'
import VueFilterDateParse from '@vuejs-community/vue-filter-date-parse';
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  head.meta.push({
    name: "theme-color"
  })
  head.link.push({
    rel: 'manifest',
    href: '/manifest.json',
  })
  head.script.push({
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  })

  Vue.use(VueFilterDateParse);
  Vue.use(VueFilterDateFormat);
}

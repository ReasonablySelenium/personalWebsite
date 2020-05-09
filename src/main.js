import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {head}) {
  Vue.component('Layout', DefaultLayout)
  head.meta.push({
    name: "theme-color"
  })
  head.link.push({
  rel: 'manifest',
  href: '/manifest.json',
  })
}

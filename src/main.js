import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {head}) {
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'manifest',
    href: '/manifest.json'
  })
  head.meta.add({
    name: "theme-color"
  })
}

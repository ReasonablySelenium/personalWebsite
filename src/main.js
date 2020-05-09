import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {head}) {
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'preload',
    href: '/manifest.json',
    as: 'manifest',
    body: true
  })
  head.meta.push({
    name: "theme-color"
  })
}

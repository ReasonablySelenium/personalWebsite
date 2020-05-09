import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {head}) {
  head.link.push({
    rel: 'manifest',
    href: '/manifest.json'
  })
  Vue.component('Layout', DefaultLayout)
}

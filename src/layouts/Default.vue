<template>
<client-only>
  <div class="layout">
    <Header></Header>
    <div v-show="showHero">
      <Hero></Hero>
    </div>
    <body>
      <div class="content">
        <slot />
      </div>
    </body>
    <Footer></Footer>
  </div>
</client-only>
</template>

<script>
var showHero;
import Header from "~/layouts/Header.vue";
import Hero from "~/layouts/Hero.vue";
import Footer from "~/layouts/Footer.vue";
export default {
  components: {
    Header,
    Hero,
    Footer
  },
  props: {
    showHero: {
      type: Boolean
    }
  }
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0 auto;
}

:any-link {
  text-decoration: none;
  color: inherit;
}

:any-link:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10%;
}

.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}
</style>

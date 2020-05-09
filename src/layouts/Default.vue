<template>
  <div class="layout">
    <aHeader></aHeader>
    <Hero v-if="showHero"></Hero>
    <div class="content">
      <slot />
    </div>
    <aFooter></aFooter>
  </div>
</template>

<script>
var showHero;
import aHeader from "~/layouts/Header";
import Hero from "~/layouts/Hero";
import aFooter from "~/layouts/Footer";
export default {
  components: {
    aHeader,
    Hero,
    aFooter
  },
  props: ["showHero"]
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

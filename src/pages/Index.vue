<template>
  <Layout :showHero="true">
    <ul class="post-list">
      <!-- <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </li>-->
    </ul>
    <!-- <Pager :info="$page.allWordPressPost.pageInfo" /> -->
  </Layout>
</template>

<style>
body .hero {
  margin: 0 !important;
}
</style>

<script>
import { Pager } from "gridsome";
import Post from "~/components/Post.vue";

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: "Home"
  }
};
</script>

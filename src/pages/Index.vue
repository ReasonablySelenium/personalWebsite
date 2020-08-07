<template>
  <Layout :showHero="true">
    <ul class="post-list">
      <li v-for="post in $page.posts.edges" :key="post.node.id">
        <Post :post="post.node" />
      </li>
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

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id
        title
        content
        excerpt
        thumbnail (width: 1200, height: 600)
        path
        tags {
          id
          path
        }
      }
    }
  }
}
</page-query>

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

<template>
  <Layout>
    <h1>Tag: {{ $page.tag.title }}</h1>
    <ul class="post-list">
      <li v-for="{ node } in $page.tag.belongsTo.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
  </Layout>
</template>
<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            id
            title
            path
            content
            thumbnail {
              src
              alt
              title
            }
            excerpt
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Post from "~/components/Post.vue";

export default {
  components: {
    Post
  },
  metaInfo() {
    return {
      title: this.$route.params.id
    };
  },
  computed: {
    posts() {
      return this.$page.tag.belongsTo.edges.map(e => e.node);
    }
  }
};
</script>
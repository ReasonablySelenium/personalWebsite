<template>
  <div>
    <h1 v-html="post.title" />
    <img
      v-if="post.featuredMedia"
      :src="post.featuredMedia.sourceUrl"
      :width="post.featuredMedia.mediaDetails.width"
      :alt="post.featuredMedia.altText"
    />
    <div v-html="post.excerpt" />
    <g-link :to="post.path" class="read-more">
      <i>Continue Reading...</i>
    </g-link>
  </div>
</template>

<style>
div h1 {
  font-size: 3rem;
}
.read-more {
  text-decoration: underline;
  color: rgb(100, 100, 100);
}
</style>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

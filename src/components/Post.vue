<template>
  <div>
    <h1 v-html="post.title" />
    <div class="post-hero">
      <g-image v-if="post.thumbnail" :src="post.thumbnail.src" />
    </div>
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

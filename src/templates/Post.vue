<template>
  <Layout>
    <h1 v-html="$page.post.title" />
    <h2>Posted on {{ $page.post.date | dateParse('YYYY-MM-DD') | dateFormat('dddd - MMMM D, YYYY') }}</h2>
    <g-image v-if="$page.post.thumbnail" :src="$page.post.thumbnail.src" />
    <div v-html="$page.post.content" />
    <template v-if="$page.post.tags.length">
      <h4>Tags</h4>
      <ul class="list tags">
        <li v-for="tag in $page.post.tags" :key="tag.id">
          <g-link :to="tag.path">{{ tag.id }}</g-link>
        </li>
      </ul>
    </template>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
    post (id: $id) {
        title
        content
        thumbnail {
          src (width: 1200, height: 600)
          alt
          title
        }
        date
        tags {
          id
          path
        }
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style>
ul.list {
  list-style: none;
  padding: 0;
}
ul.list li {
  display: inline-block;
  margin-right: 0.25em;
}
ul.list.tags li a {
  padding: 0.25em 0.5em;
  background-color: lightgray;
}
ul.list.categories li:after {
  content: ",";
  display: inline-block;
}
ul.list li:last-child:after {
  content: "";
}
</style>
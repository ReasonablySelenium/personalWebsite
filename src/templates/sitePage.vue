<template>
  <Layout>
    <h1 v-html="$page.sitePage.title" />
    <div v-html="$page.sitePage.content" />
  </Layout>
</template>

<page-query>
query Page ($id: ID!) {
    sitePage (id: $id) {
        title
        content
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.sitePage.title,
    };
  },
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
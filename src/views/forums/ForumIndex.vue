<template>
  <div id="forum-index">
    {{ posts }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ForumIndex",
  data: function data() {
    return {
      posts: null,
    };
  },
  mounted: function mounted() {
    this.getPosts();
  },
  methods: {
    getPosts: function getPosts() {
      axios({
        method: "GET",
        url: 'http://localhost:3000/posts',
      }).then((response) => {
        this.posts = response.data;
      });
    },
  },
};
</script>

<style>
</style>
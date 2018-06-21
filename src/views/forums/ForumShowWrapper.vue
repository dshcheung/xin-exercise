<template>
  <div class="forum-show-wrapper">
    <router-view :post="post" :comments="comments" :comment="comment" />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ForumShowWrapper',
  data: function data() {
    return {
      post: {},
      comments: [],
      comment: {},
    };
  },
  mounted: function mounted() {
    this.getPost();
    this.getComments();
    this.getComment();
  },
  methods: {
    getPost: function getPost() {
      axios({
        method: "GET",
        url: `http://localhost:3000/posts/${this.$route.params.id}`,
      }).then((response) => {
        this.post = response.data;
      });
    },
    getComments: function getComments() {
      axios({
        method: "GET",
        url: `http://localhost:3000/comments`,
      }).then((response) => {
        this.comments = response.data;
      });
    },
    getComment: function getComment() {
      axios({
        method: "GET",
        url: `http://localhost:3000/comments/${this.$route.params.id}`,
      }).then((response) => {
        this.comment = response.data;
      });
    },
  },
};
</script>
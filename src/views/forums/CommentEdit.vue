<template>
  <div class="forum-edit container">
    Edit Comment
    <hr>
    <forum-form :post="comment" :onSubmit="editComment" :action="'Comment'" />
  </div>
</template>

<script>
import axios from 'axios';
import ForumForm from './ForumForm.vue';

export default {
  name: 'commentEdit',
  props: ["comment", "post"],
  components: {
    'forum-form': ForumForm,
  },
  methods: {
    editComment: function editComment() {
      this.comment.postId = this.post.id;
      axios({
        method: "PUT",
        data: this.comment,
        url: `http://localhost:3000/comments/${this.$route.params.id}`,
      }).then(() => {
        this.$router.push(`/forums/${this.post.id}`);
      });
    },
  },
};
</script>


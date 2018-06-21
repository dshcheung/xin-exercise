<template>
  <div class="forum-show">
    <div class="postShow">
      <h1 class="showTitle">{{ post.title }}</h1>
      <div>{{ post.author }}</div>
      <div>{{ post.content }}</div>
    </div>
    <hr>
    <div class="commentShow">
      <h1 class="commentTitle"> Write a comment </h1>
      <forum-form :post="newComment" :onSubmit="createComment" :action="'Comment'" />
      <div class="commentSection"> Comments </div>
      <table class="table">
        <tbody>
          <tr v-for="(comment, i) in comments" v-bind:key="i" v-if="(comment.postId ===post.id)">
            <td>
              <div class="shiftLeft">
                <router-link class="btn btn-default pull-right" :to="`/forums/${comment.id}/editComment`"> Edit </router-link>
                <span class="commentAuthor">{{ comment.author }}</span> <br>
                <span>{{ comment.content }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ForumForm from './ForumForm.vue';

export default {
  name: "ForumShow",
  components: {
    'forum-form': ForumForm,
  },
  props: ["post", "comments"],
  data: function data() {
    return {
      newComment: {},
    };
  },
  methods: {
    createComment: function createComment() {
      this.newComment.postId = this.post.id;
      axios({
        method: "POST",
        data: this.newComment,
        url: `http://localhost:3000/comments`,
      }).then(() => {
        this.$router.go();
      });
    },
  },
};
</script>

<style>
  .postShow {
    text-align: left;
    margin-left: 50px;
  }
  .showTitle {
    font-size: 20px;
    padding: 0px;
  }.commentTitle {
    font-size: 20px;
    padding: 0px;
    margin: 25px;
    margin-left: 0px;
  }
  .commentSection {
    float: left;
    margin-top: 25px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 500;
  }
  .commentShow {
    margin-left: 50px;
  }
  .commentAuthor {
    font-style: italic;
  }
  .shiftLeft {
    text-align: left;
  }
</style>
<!-- 1) extract video code from router -->
<!-- 2) apply code to youtube embeded iframe -->
<!-- 3) extract the params and display them -->
<!-- 4) beautify using vue-bootstrap -->
<template>
  <div id="video-show">
    <h1 class="mainHeader">Show Page</h1>
    <div>
      <iframe width="560" height="315" v-bind:src="videoURL" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <h2> {{ videoTitle }} </h2>
      <p class="vdescription"> {{ videoDescription }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoShow",
  data: function data() {
    return {
      id: this.$route.params.id,
      url: null,
      selectedVideoTitle: this.$route.params.title,
      selectedVideoDescription: this.$route.params.description,
    };
  },
  computed: {
    videoURL: function videoURL() {
      return `https://www.youtube.com/embed/${this.$route.params.id}`;
    },
    videoTitle: function videoTitle() {
      return this.$route.params.title;
    },
    videoDescription: function videoDescription() {
      return this.$route.params.description;
    },
  },
};
</script>

<style>
  .mainHeader {
    text-align: center;
  }
  .vdescription {
    text-align: center;
  }

</style>
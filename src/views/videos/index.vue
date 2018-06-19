<!-- 1) display a video grid/table/list -->
<!-- 2) for each video, generate a link to the show page -->
<!-- 3) also include title or other things to the link as params -->
<!-- 4) beautify using vue-bootstrap -->

<!-- https://bootstrap-vue.js.org/ -->
<!-- https://router.vuejs.org/ -->
<template>
  <div id="video-index">
    <div class="card" style="width: 18rem;" v-for="(video, i) in videos" :key="i">
      <img class="card-img-top" v-bind:src="~video.url">
      <div class="card-body">
        <h5 class="card-title"> {{ video.title }} </h5>
        <p class="card-text"> {{ video.brief }} </p>
        <!--router-link class="btn btn-primary" :to="path: '/videos/' + video.id">Play Video</router-link-->
        <router-link class="btn btn-primary" :to="{ name: 'videoShow', params: {id: video.id, title: video.title, description: video.description }}">Play Video</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoIndex",
  data: function data() {
    return {
      videos: [
        {
          id: "T184xiF8DC0",
          title: "Cutting Steel",
          url: '/static/image1.jpg',
          brief: 'Watch the power of these tools!',
          description: 'Steel comes in many different forms and thicknesses. Steel thickness is referred to as “gauge.” The smaller the number of gauge, the thicker the steel. Thin-gauge steel, like sheet metal, can be cut with a large variety of tools. Thicker steel – like pipes, tubes and plates – may require the use of power saws and torches. Saws and torches can also be used on thin steel, but are impractical choices unless you\'re cutting high volume or need to cut steel often. For best results, wipe off debris from the surface before making cuts. Make your measurements and mark cut lines on the steel to use as guidelines.', 
        },
        {
          id: "pvQBXA2Qv6E",
          title: "C9 Tarik",
          url: '/static/image2.jpg',
          brief: 'C9 on their way to obtaining champ!',
          description: 'Tarik "tarik" Celik (born February 19, 1996) is a Turkish-born American professional Counter-Strike: Global Offensive player and a former Counter-Strike 1.6 player. He currently plays for Cloud9.',
        },
      ],
    };
  },
};
</script>

<style>
  p {
    margin: 0px;
    padding: 0px;
  }

  .card-text {
    text-align: center;
    font-size: 75%;
  }

  .card {
    margin-left: 50px;
    margin-top: 50px;
  }

</style>
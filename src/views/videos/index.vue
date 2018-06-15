<!-- 1) display a video grid/table/list -->
<!-- 2) for each video, generate a link to the show page -->
<!-- 3) also include title or other things to the link as params -->
<template>
  <div id="video-index">
    {{ videos }}
  </div>
</template>

<script>
export default {
  name: "videoIndex",
  data: function data() {
    return {
      videos: [
        { vID: "T184xiF8DC0", title: "" },
        { vID: "AqcJNYp4VtQ", title: "" },
      ],
    };
  },
};
</script>
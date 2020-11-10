<template>
  <div class="player">
    <img class="imagenNavbar" :src="track.album.images[0].url" alt="Album" />
    <div>
      <strong>{{ track.name }}</strong> <br />
      <small>{{ track.artists[0].name }}</small>
    </div>
    <div>
      <audio autoplay controls :src="track.preview_url">
        <source type="audio/mp3" />
      </audio>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      track: {},
    };
  },
  created() {
    this.$bus.$on("set-track", (track) => {
      this.track = track;
    });
  },
};
</script>
<style lang="scss">
.imagenNavbar {
  border-radius: 50%;
  overflow: hidden;
  width: 90px;
}
.player {
  display: grid;
  grid-template-columns: 0.4fr 0.6fr 1fr;
  width: 100%;
  align-items: center;
}
</style>

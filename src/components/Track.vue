<template>
  <div class="card">
    <div class="card-image" v-if="track && track.album">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url" alt="" />
      </figure>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="track.album.images[0].url" alt="" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-6">
              <strong> {{ track.name }}</strong>
            </p>
            <p class="subtitle is-6">{{ track.artists[0].name }}</p>
          </div>
        </div>
        <div class="content">
          <small>{{ track.duration_ms|ms-to-mm }} min</small>
          <nav class="level">
            <div class="level-left  is-primary">
              <a v-blur="track.preview_url" @click="selectTrack" class="level-item">
                Reproducir
              </a>
              <a @click="goToTrack(track.id)" class="level-item">
                Ver Detalles
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Track",
  props: {
    track: { type: Object, required: true },
  },
  methods: {
    selectTrack() {
      this.$store.commit('setTrack', this.track)
    },
    goToTrack(id) {
      this.$router.push({ name: "track", params: { id } });
    },
  },
};
</script>

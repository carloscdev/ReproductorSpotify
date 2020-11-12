<template>
  <div class="trackDetail">
    <div class="contenedorTrack">
      <Track :track="track" />
      {{trackTitle}}
    </div>
  </div>
</template>
<script>

import Track from "@/components/Track.vue";
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: "TrackDetail",
  components: {
    Track,
  },
  created() {
    const id = this.$route.params.id;
    if(!this.track || !this.track.id || this.track.id !== id){
      this.getTrackById({id})
        .then(() => {
          console.log('Track Loaded ...')
        })
    }
  },
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  methods: {
    ...mapActions(['getTrackById'])
  }
};
</script>
<style lang="scss">
.trackDetail {
  margin-top: 15vw;
}
.contenedorTrack {
  width: 30%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
}
</style>

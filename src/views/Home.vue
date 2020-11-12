<template>
  <div class="home">
    <section class="contenedor contenedorBuscar mt-5">
      <input
        placeholder="Buscar canción..."
        type="search"
        class="is-large input"
        v-model="searchQuery"
        v-on:keyup.enter="search"
      />
      <button
        :disabled="searchQuery == '' ? buttonDisable : !buttonDisable"
        @click="search"
        class="button is-large is-primary"
      >
        Buscar
      </button>
    </section>
    <section v-if="isLoading" class="contenedor">
      <PmLoader />
    </section>
    <section v-if="!isLoading" class="contenedor mt-5">
      <PmNotification :status="showNotification ? true : false">
        <p v-if="showNotification" slot="body">No se encontraron Resultados</p>
        <p v-if="!showNotification" slot="body">
          Se encontraron : {{ searchMessage }}
        </p>
      </PmNotification>
      <div class="musicasContenedor">
        <div v-for="track in tracks" :key="track.id">
          <PmTrack
            :class="{ isActive: track.id === selectedTrack }"
            :track="track"
            @select="setSelectedTrack"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import trackService from "../services/track";
// Card de músicas
import PmTrack from "@/components/Track.vue";
// Loader
import PmLoader from "@/components/shared/Loader.vue";
// Notification
import PmNotification from "@/components/shared/Notification.vue";
/* const tracks = [
  {name: 'Rueda', artist: 'Frankie Ruiz'},
  {name: 'Sugar', artist: 'Robin Schulz'},
  {name: 'Hey Brother', artist: 'Avicii'},
] */
export default {
  name: "Home",
  components: {
    PmTrack,
    PmLoader,
    PmNotification,
  },
  data() {
    return {
      searchQuery: "",
      buttonDisable: true,
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: "",
    };
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    },
  },
  /*  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 4000);
      }
    },
  }, */
  created() {
    this.tracks = JSON.parse(localStorage.getItem("tracks")) || [];
  },
  methods: {
    search() {
      if (this.searchQuery === "") {
        return;
      }
      this.isLoading = true;
      /* this.tracks = tracks */
      trackService.search(this.searchQuery).then((res) => {
        this.showNotification = res.tracks.total === 0;
        this.tracks = res.tracks.items;
        localStorage.setItem("tracks", JSON.stringify(this.tracks));
        this.isLoading = false;
      });
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    },
  },
};
</script>
<style lang="scss">
.musicasContenedor {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5vw;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.contenedor {
  width: 90%;
  margin: 0 auto;
}
.contenedorBuscar {
  display: flex;
}
.isActive {
  border: 1px solid blueviolet;
}
.isDanger {
  background-color: brown;
}
.isCorrect {
  background-color: chartreuse;
}
.home {
  padding-top: 15vw;
  @media (max-width: 768px){
    padding-top: 25vw;
  }
}
</style>

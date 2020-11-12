<template>
  <div id="app">
    <Navbar />
    <router-view />
    
    <Footer />
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
  components: {
    Navbar,
    Footer,
  },

  computed: {

  },
  methods: {
   
  }
};
</script>
<style lang="scss">
@import "./scss/styles.scss";
</style>

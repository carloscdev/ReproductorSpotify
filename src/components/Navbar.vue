<template>
  <div class="navbarC">
    <div class="contenedor">
      <img
        class="logoMarca"
        src="https://cdn.icon-icons.com/icons2/2201/PNG/512/apple_music_android_logo_icon_134021.png"
        alt="Logo"
      />
      <div>
        <PmPlayer />
      </div>
    </div>
  </div>
</template>
<script>
import PmPlayer from "@/components/Player";
export default {
  components: {
    PmPlayer,
  },
};
</script>
<style lang="scss">
.navbarC {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  background-color: white;
  width: 100%;
  .contenedor {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 90px;
    }
  }
}
.logoMarca {
  @media (max-width: 768px) {
    display: none;
  }
}
</style>

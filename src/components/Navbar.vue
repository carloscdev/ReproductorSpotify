<template>
  <div class="navbarC">
    <div class="contenedor">
      <img
        class="logoMarca"
        src="https://images.vexels.com/media/users/3/158512/isolated/lists/a78bf56a47c76f97d05987adda9991d1-auriculares-auriculares-silueta.png"
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
   @media (max-width: 768px){
       max-height: 400px;
   }
}
.logoMarca {
  @media (max-width: 768px) {
    display: none;
  }
}
</style>

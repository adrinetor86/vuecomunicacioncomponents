<template>
  <div>
    <h1>PADRE</h1>
  </div>
    <h2>
      Su deporte favorito es {{favorito}}
    </h2>
  <ul>
    <li v-for="sport in deportes" :key="sport">
      <HijoComponent :nombredeporte="sport" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
    </li>
  </ul>

</template>

<script>
import HijoComponent from "@/components/HijoComponent.vue";

export default {
  name: 'PadreComponent',
  components: {
    HijoComponent
  },
  data() {
    return {
      deportes: ["Curling", "Boxeo", "Futbol", "Canicas"],
      favorito:null
    }
  },
  methods:{
    metodoPadre(){

    },
    seleccionarFavoritoParent(deporteFavorito){
      console.log("Yo soy tu padre")
      this.favorito = deporteFavorito;
    }
  }
}
</script>

<style scoped></style>
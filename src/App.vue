<template>
<!--<PadreComponent/>-->
<!--  <PadreNumeros/>-->
  <ComicsComponent/>
</template>

<script>


// import PadreComponent from "@/components/PadreComponent.vue";
// import PadreNumeros from "@/components/PadreNumeros.vue";
import ComicsComponent from "@/components/ComicsComponent.vue";

export default {
  name: 'App',
  components: {
    ComicsComponent
    // PadreComponent,
   // PadreNumeros
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

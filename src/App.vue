<template>
<!--<PadreComponent/>-->
<!--  <PadreNumeros/>-->
<!--  <ComicsComponent/>-->
<!--  <SeleccionMultiple/>-->
<!--  <CheckboxMultiple/>-->
  <MenuComponent/>
  <router-view/>
</template>

<script>


// import PadreComponent from "@/components/PadreComponent.vue";
// import PadreNumeros from "@/components/PadreNumeros.vue";
// import ComicsComponent from "@/components/ComicsComponent.vue";
// import SeleccionMultiple from "@/components/SeleccionMultiple.vue";

// import CheckboxMultiple from "@/components/CheckboxMultiple.vue";

import MenuComponent from "@/components/MenuComponent.vue";

export default {
  name: 'App',
  components: {
    MenuComponent
    // CheckboxMultiple
    // ComicsComponent,
    // SeleccionMultiple
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

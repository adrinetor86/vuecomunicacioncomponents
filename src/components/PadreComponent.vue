<template>
  <div>
    <h1>PADRE</h1>
  </div>
  <ul>
    <li v-for="sport in deportes" :key="sport">
      <HijoComponent :nombredeporte="sport"/>
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
      deportes: ["Curling", "Boxeo", "Futbol", "Canicas"]
    }
  }
}
</script>

<style scoped></style>
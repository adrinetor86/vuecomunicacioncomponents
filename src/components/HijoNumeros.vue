<template>
  <div>
    <h2>Hijo</h2>


 <h5 style="color:blue">Número hijo: {{ numero }}</h5>

 <button @click="callSumarNumeros()">

    Sumar {{ numero }}

     </button>
  </div>
</template>

<script>
export default {
  name:"HijoNumeros",
  props: ["numero"],
  methods: {
    callSumarNumeros() {
      this.$emit('sumarNumeros', this.numero);
    }
  },

}
</script>

<style scoped>


</style>

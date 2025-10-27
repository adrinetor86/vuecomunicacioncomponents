<template>
  <div>
    <h1>Padre</h1>
    <h3 style="color:red">
       La suma es {{ suma }}
    </h3>
    <button @click="generarNumero">Generar Numero</button>
    <div v-for="num in numeros" :key="num">
      <HijoNumeros :numero="num" v-on:sumarNumeros="sumaNumeros"/>
    </div>
  </div>
</template>

<script>
import HijoNumeros from "@/components/HijoNumeros.vue";

export default {
  name:"PadreNumeros",
  components: {
    HijoNumeros
  },
  data(){
    return{
      numeros:[2,5,7],
      suma:0
    }
  },
  methods:{
    sumaNumeros(numero){
      this.suma+=numero;
    },
    generarNumero(){
      this.numeros.push(parseInt(Math.random()*100)+1);
      console.log(this.numeros);
    }
  }
}
</script>

<style scoped>

</style>
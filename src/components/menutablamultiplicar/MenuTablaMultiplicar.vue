<template>
  <div>
    <h1>Menu Tabla Multiplicar</h1>

    <ul>
      <li v-for="num in numeros" :key="num">
        <router-link :to="'/tablamultiplicar/' +num"> Tabla Multiplicar {{num}}</router-link>
      </li>
    </ul>
  </div>


</template>

<script>
export default {
  name: 'MenuTablaMultiplicar',
  data(){
    return {
      numeros:[2,7,8,8]
    }
  }
}
</script>


<style scoped>
ul{
  display: flex;
}
li{
  margin:10px;
  list-style: none;
}
</style>
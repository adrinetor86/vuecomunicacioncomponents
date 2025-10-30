<template>
  <div id="">
    <header>
    <ul>
      <li>
        <router-link to="/">Deportes</router-link>
      </li>
      <li>
        <router-link to="/seleccionmultiple">Select Multiple</router-link>
      </li>
      <li>
        <router-link to="/sumachecks">Suma checks</router-link>
      </li>
      <li>
        <router-link to="/numeros">Numeros</router-link>
      </li>
      <li>
        <router-link to="/comics">Comics</router-link>
      </li>
      <li>
        <router-link to="/menutabla">Menu Tabla</router-link>
      </li>
      <li v-for="num in numeros" :key="num">
        <router-link :to="'/numerodoble/'+ num">Doble {{ num }}</router-link>
      </li>
      <li>
        <router-link to="/numerodoble">Doble sin</router-link>
      </li>
    </ul>
    </header>
  </div>
</template>

<script>
export default {
  name:"MenuComponent",
  data(){
    return{
      numeros:[77,33,20]
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
}

li{
  margin:10px;
  list-style: none;
}
header{
  background-color:lightskyblue ;
}
</style>
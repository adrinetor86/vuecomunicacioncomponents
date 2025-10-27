<template>
  <div>
    <h1 style="color:blue">{{ nombredeporte }}</h1>
    <button @click="seleccionarFavorito">Seleccionar Favorito</button>
  </div>
</template>


<script>
export default {
  name:"HijoComponent",
  props:["nombredeporte"],
  methods:{
    metodoHijo(){
      this.$emit("metodoPadre")
    },
    seleccionarFavorito(){
      console.log("soy el hijo"+this.nombredeporte)
      //PARA ENVIAR INFORMACION SE REALIZA A PARTIR DE LA LLAMADA
      //CON CADA PARAMETRO SEPARADO CON COMAS, DENTRO DEL METODO
      //$emit
      this.$emit("seleccionarFavoritoParent",this.nombredeporte)
    }
  }
}
</script>


<style scoped>


</style>
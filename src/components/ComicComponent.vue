<template>
  <div>
    <h2 style="color:dodgerblue">{{ comic.titulo }}</h2>
    <p>{{comic.descripcion}}</p>
    <img :src='comic.imagen' alt="a"/>
    <h4 :class="{
      rojo: comic.year<=2000,
      verde: comic.year>2000
    }">
      Year: {{comic.year}}</h4>

    <button @click="seleccionarFavorito">Seleccionar Favorito</button>
    <button @click="deleteComic">Borrar Comic</button>
  </div>
</template>

<script>
export default {
  name: "ComicComponent",
  props:["comic","index"],
  methods:{
    seleccionarFavorito(){
      console.log(this.comic);
       this.$emit("seleccionarComicFavorito",this.comic)
    },
    deleteComic(){
     this.$emit("deleteComic",this.index)
    }
  }
}
</script>

<style >
 @import "../assets/css/comic.css";
</style>
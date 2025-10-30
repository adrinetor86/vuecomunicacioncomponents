<template>
  <div>
    <h1>Numero Doble</h1>
    <h2 style="color:red">{{ mensaje }}</h2>
    <h3 style="color:deepskyblue">Doble: {{ doble }}</h3>

    <button @click="redirectToHome()">Redirigir</button>
  </div>
</template>


<script>
export default {
  name: "NumeroDoble",
  methods: {
    redirectToHome(){
      this.$router.push("/")
    }
  },
  data() {
    return {
      mensaje: "",
      doble: 0
    }
  },
  mounted() {

    console.log("Param: " + this.$route.params.numero)
    //LOS PARAMETROS SIEMPRE SON STRING, NO IMPORTA SI SON NUMEROS
    let numero = this.$route.params.numero

    if (numero === "") {
      this.mensaje = "Sin parametros en Routing"
    } else {
      this.mensaje = "Paramentro recibido:" + numero;
      this.doble = parseInt(numero) * 2;
    }
  },
  watch: {
    '$route.params.numero'(newVal, oldVal) {

      if(newVal !== oldVal) {
        this.mensaje = "Esto ha cambiado a: " + this.$route.params.numero;
        this.doble=parseInt(this.$route.params.numero) * 2;

        console.log("Next: " + newVal);
        console.log("Old: " + oldVal);

      }
    }

  }

}
</script>

<style scoped>

</style>
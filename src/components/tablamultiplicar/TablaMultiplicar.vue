<template>
  <MenuTablaMultiplicar/>
  <h1>Tabla Multiplicar</h1>
  <div class="tabla-wrapper">

    <table>
      <thead>
      <tr>
        <th>Operacion</th>
        <th>Resultado</th>
      </tr>
      </thead>
      <tbody v-html="cargarFilas">

      </tbody>
    </table>
  </div>

</template>

<script>
import MenuTablaMultiplicar from "@/components/menutablamultiplicar/MenuTablaMultiplicar.vue";

export default {
  name:"TablaMultiplicar",
  components: {MenuTablaMultiplicar},
  computed:{
    cargarFilas(){

      let html = "";


      for (let i = 1; i <= 10; i++) {
        html += "<tr>";
        html += "<td>"+ this.numero +" * "+i+"</td>";
        html += "<td>"+this.numero*i+"</td>";
        html+="</tr>"
      }


      return html
    }

  },
  data(){
    return{
      numero:0
    }
  },
  mounted(){
    console.log("El parametro"+this.$route.params.numero)
    this.numero = parseInt(this.$route.params.numero);
  },
  watch:{
    '$route.params.numero'(newVal, oldVal){
      if(newVal !== oldVal){
        this.numero = parseInt(this.$route.params.numero);
        console.log("Cambio!!")
      }
    }
  }
}
</script>

<style scoped>

.tabla-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  min-height: 220px;
  background: linear-gradient(180deg, #f7fdf8 0%, #e9f9ee 100%);
}

.tabla-wrapper table {
  width: 100%;
  max-width: 720px;
  border-collapse: separate;
  border-spacing: 0;
  background: linear-gradient(180deg, rgba(226,250,232,0.95), rgba(245,254,249,0.98));
  box-shadow: 0 8px 24px rgba(28,80,48,0.06);
  border-radius: 10px;
  overflow: hidden;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

.tabla-wrapper thead th {
  background: linear-gradient(180deg, rgba(186,236,195,0.9), rgba(162,226,172,0.9));
  padding: 12px 16px;
  text-align: center;
  border-bottom: 1px solid rgba(15,63,34,0.06);
}


</style>



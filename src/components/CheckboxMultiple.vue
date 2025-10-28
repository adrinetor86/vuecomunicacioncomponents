<template>
  <div>
    <div>Checked names: {{ checkedNames }}</div>
    <button>Generar CheckBox</button>
    <input v-html="sumarNumeros" type="checkbox" id="jack" value="15" v-model="checkedNumber" @change="sumarNumeros"/>
    <label for="jack">15</label>
    <input v-html="sumarNumeros" type="checkbox" id="john" value="30" v-model="checkedNumber" @change="sumarNumeros" />
    <label for="john">30</label>
    <input  v-html="sumarNumeros" type="checkbox" id="mike" value="44" v-model="checkedNumber" @change="sumarNumeros" />
    <label for="mike">44</label>
  </div>

  <h2>La suma {{this.suma}}</h2>
</template>

<script>

export default {
  name: "CheckboxMultiple",
  methods:{
    sumarNumeros(){
        this.suma=0
      for(let i=0;i<this.checkedNumber.length;i++){
        this.suma += Number(this.checkedNumber[i]);
      }
      console.log("LA SUMA: "+this.suma);

    }
  },
  data(){
    return{
      suma:0,
      checkedNumber:[]
    }
  },
}
</script>

<style>

</style>
<template>
        <div>
          <h1>SELECT MULTIPLE</h1>

          <Multiselect
            v-model="selected"
            :options="options"
            mode="tags"
            :close-on-select="false"
            :searchable="true"
            placeholder="Selecciona elementos"
          />

          <button @click="comprobarSeleccion">Mostrar Selección</button>

          <div v-if="selecciones.length">
            <h2>Selecciones:</h2>
            <ul>
              <li v-for="(item, index) in selecciones" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </template>

      <script>
      import Multiselect from '@vueform/multiselect';
      import '@vueform/multiselect/themes/default.css';

      export default {
        name: 'SeleccionMultiple',
        components: { Multiselect },
        data() {
          return {
            selected: [],
            selecciones: [],
            options: ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5']
          };
        },
        methods: {
          comprobarSeleccion() {
            this.selecciones = [...this.selected];
            console.log('Seleccionadas:', this.selecciones);
          }
        }
      };
      </script>

      <style scoped>
      /* estilos opcionales */
      </style>
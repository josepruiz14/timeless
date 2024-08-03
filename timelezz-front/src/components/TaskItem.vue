<template>
    <div class="all"  v-if="mustShow">
      <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
      <button @click="enableShow">Delete</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Definir propiedades usando defineProps
   defineProps(['title', 'description'])
  
  // Definir una referencia reactiva para controlar la visibilidad
  const mustShow = ref(true)
  
  // Función para alternar la visibilidad
  function enableShow() {
    mustShow.value = !mustShow.value
  }
  </script>
  
  <style>
  .all {
    display: flex;
  }
  </style>
  
<template>
  <div class="all" v-if="mustShow">
    <div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p>{{ date }}</p>
    </div>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasksStore'

// Definir propiedades usando defineProps
const props = defineProps(['id', 'title', 'description', 'date'])

// Definir una referencia reactiva para controlar la visibilidad
const mustShow = ref(true)

const tasksStore = useTasksStore()
// Función para alternar la visibilidad
function deleteTask() {
  tasksStore.deleteTask(props.id)
}
</script>

<style></style>

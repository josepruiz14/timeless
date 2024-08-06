<script setup>
import TasksTable from './TasksTable.vue'
import AddTask from './AddTask.vue'
import { ref } from 'vue'
import { useTasksStore } from '../stores/tasksStore'

const showAddTask = ref(false)
const tasksStore = useTasksStore()
const filter = ref('')
function handleAddTask(data) {
  const newTask = {
    id: tasksStore.tasks.length + 1,
    ...data
  }
  tasksStore.addTask(newTask)

  showAddTask.value = false
}

function updateShow() {
  showAddTask.value = !showAddTask.value
}

function filterTask() {
  tasksStore.setFilter(filter.value)
}
</script>

<template>
  <header>
    <nav class="menu">
      <h1>My tasks</h1>
      <div class="menu-items">
        <button @click="showAddTask = !showAddTask">Add Task</button>
        <div class="filter">
          <p>Filter</p>
          <input class="filter-input" v-model="filter" @input="filterTask" type="text" />
        </div>
      </div>
    </nav>
  </header>

  <main class="body">
    <AddTask :show="showAddTask" @addTask="handleAddTask" @updateShow="updateShow" />
    <TasksTable :taskList="tasksStore.getFilteredTasks" />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

* {
  background-color: rgb(47, 47, 80);
  color: aliceblue;
  font-family: 'Montserrat', sans-serif;
}
.menu {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: rgb(32, 32, 46);
  width: 100%;
}
.menu > * {
  display: flex;
  background-color: inherit;
  width: 100%;
}

.menu-items * {
  display: flex;
  background-color: rgb(32, 32, 46);
  width: 100%;
  justify-content: space-between;
}
.filter {
}

.filter-input {
  background-color: rgba(74, 74, 113, 0.136);
}

/* Estilos para el botón */
button {
  background-color: #4c4e89; /* Color de fondo */
  border: none; /* Sin borde */
  color: white; /* Color del texto */
  padding: 15px 32px; /* Espaciado interno */
  text-align: center; /* Alineación del texto */
  text-decoration: none; /* Sin subrayado */
  display: inline-block; /* Mostrar como elemento en línea */
  font-size: 16px; /* Tamaño de la fuente */
  margin: 4px 2px; /* Margen alrededor del botón */
  cursor: pointer; /* Cursor de puntero al pasar sobre el botón */
  border-radius: 8px; /* Bordes redondeados */
  transition:
    background-color 0.3s,
    transform 0.2s; /* Efecto de transición */
}

button:hover {
  background-color: #bd3737; /* Color de fondo al pasar el ratón */
  transform: scale(1.05); /* Ligeramente más grande al pasar el ratón */
}

button:active {
  background-color: #bd3737; /* Color de fondo al hacer clic */
  transform: scale(0.95); /* Ligeramente más pequeño al hacer clic */
}
</style>

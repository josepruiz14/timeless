<script setup>
    import TasksTable from "./components/TasksTable.vue"
    import AddTask from './components/AddTask.vue'
    import {ref} from 'vue'
    const taskList = ref([
  {
    id: 1,
    date: '2024-08-02',
    title: 'Revisar informes financieros',
    description: 'Revisar y aprobar los informes financieros del Q2.'
  },
  {
    id: 2,
    date: '2024-08-03',
    title: 'Planificar reunión de equipo',
    description: 'Organizar y agendar la reunión semanal del equipo.'
  },
  {
    id: 3,
    date: '2024-08-04',
    title: 'Actualizar software',
    description: 'Actualizar el software del servidor a la última versión.'
  },
  {
    id: 4,
    date: '2024-08-05',
    title: 'Enviar informe de progreso',
    description: 'Enviar el informe de progreso mensual al jefe de proyecto.'
  },
  {
    id: 5,
    date: '2024-08-06',
    title: 'Reunión con cliente',
    description: 'Discutir los requerimientos del nuevo proyecto con el cliente.'
  },
  {
    id: 6,
    date: '2024-08-07',
    title: 'Capacitación en seguridad',
    description: 'Asistir a la capacitación sobre protocolos de seguridad en el trabajo.'
  },
  {
    id: 7,
    date: '2024-08-08',
    title: 'Diseño de nuevo logo',
    description: 'Trabajar en el diseño del nuevo logo de la compañía.'
  },
  {
    id: 8,
    date: '2024-08-09',
    title: 'Auditoría interna',
    description: 'Realizar una auditoría interna de procesos y procedimientos.'
  },
  {
    id: 9,
    date: '2024-08-10',
    title: 'Revisión de contrato',
    description: 'Revisar los términos y condiciones del nuevo contrato.'
  },
  {
    id: 10,
    date: '2024-08-11',
    title: 'Planificación del evento anual',
    description: 'Organizar la logística y el programa para el evento anual de la empresa.'
  }
])

const showAddTask = ref(false)

function handleAddTask(){
  taskList.value.push({
    id: taskList.value.length,
    date: '2024-08-11',
    title: 'Test' +taskList.value.length,
    description: '.'
  })

  showAddTask.value = false

}

</script>

<template><body>
  <header class="nav">
    <nav>
<p>My tasks</p>
<button @click="showAddTask = !showAddTask">Add Task</button>
    </nav>  
  </header>

  <main class="body">
    <AddTask :show="showAddTask" @addTask="handleAddTask"/>
    <TasksTable :taskList="taskList"/>
  </main>
</body>
</template>

<style>
body {
  display: flex;
  flex-direction: column;
  background-color: rgb(45, 39, 39);
  color: aliceblue;
}
.nav {
  display: flex;
  justify-content: center;
}

.body{
  display: flex;
}


</style>
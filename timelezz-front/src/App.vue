<script setup>
import TasksTable from './components/TasksTable.vue'
import AddTask from './components/AddTask.vue'
import { ref } from 'vue'
import { useTasksStore } from './stores/tasksStore'

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

function filterTask() {
  tasksStore.setFilter(filter.value)
}
</script>

<template>
  <body>
    <header class="nav">
      <nav>
        <p>My tasks</p>
        <button @click="showAddTask = !showAddTask">Add Task</button>
        <div>
          <p>Filter</p>
          <input v-model="filter" @input="filterTask" type="text" />
        </div>
      </nav>
    </header>

    <main class="body">
      <AddTask :show="showAddTask" @addTask="handleAddTask" />
      <TasksTable :taskList="tasksStore.getFilteredTasks" />
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

.body {
  display: flex;
}
</style>

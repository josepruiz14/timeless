<template>
  <div id="popup" class="popup" v-if="show">
    <div class="popup-content">
      <button class="close" @click="close">×</button>
      <h2>Add your new task</h2>
      <form class="add-task-form" @submit="addTaskToList">
        <div class="form-field">
          <label>Title</label>
          <input type="text" v-model="title" />
        </div>
        <div class="form-field">
          <label>Date</label>
          <input v-model="date" type="date" />
        </div>
        <div class="form-field">
          <label>Description</label>
          <input v-model="desc" type="text" />
        </div>
        <button type="submit" value="Add Task">Add task</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

defineProps(['show'])

const emits = defineEmits(['addTask', 'updateShow'])

const title = ref('')
const desc = ref('')
const date = ref('')

function addTaskToList() {
  emits('addTask', { title: title.value, description: desc.value, date: date.value })
  title.value = ''
  desc.value = ''
  date.value = ''
}

function close() {
  emits('updateShow')
}

//  function showPop(){
//     emit('show')
//     mustShow.value = !mustShow.value
//  }
</script>
<style scoped>
.popup {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  justify-content: center;
  align-items: center;
}

.popup-content {
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
}

.form-field {
  padding: 0.5rem;
}

.form-field > * {
  flex-direction: row;
  display: flex;
  padding: 0.5rem;
}
.close {
  display: flex;
  
}
</style>

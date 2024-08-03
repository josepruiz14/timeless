<template>
   <div id="popup" class="popup" v-if="show">
    <div class="popup-content">
      <span class="close">&times;</span>
      <h2>Popup Title</h2>
      <p>This is a simple popup.</p>
      <button @click="addTaskToList">Add Task</button>
    </div>
  </div>
</template>
<script setup>

 defineProps(['show'])

 const emits = defineEmits(['addTask'])

 function addTaskToList(){
  emits('addTask'
  )
 }

//  function showPop(){
//     emit('show')
//     mustShow.value = !mustShow.value
//  }
</script>
<style>
    body {
  font-family: Arial, sans-serif;
}

.popup {
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
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}

</style>
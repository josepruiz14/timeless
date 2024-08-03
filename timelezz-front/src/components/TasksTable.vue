<template>
    <div>
     <TaskItem v-for="item of taskList" v-bind="item" :key="item.id"/>
    </div>
</template>
<script setup>
import TaskItem from './TaskItem.vue'
 defineProps(['taskList'])

</script>
<style>
    
</style>
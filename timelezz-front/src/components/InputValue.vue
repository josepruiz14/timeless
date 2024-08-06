<template>
  <label>{{ labelName }}</label>
  <input :type="inputType" />
</template>
<script setup>
const props = defineProps(['inputType', 'labelName'])
console.log('❗❗❗❗❗❗ ~ props:', props)
</script>
<style></style>

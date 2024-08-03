<template>
  <label>{{ labelName }}</label>
  <input :type="inputType" />
</template>
<script setup>
const props = defineProps(['inputType', 'labelName'])
console.log('❗❗❗❗❗❗ ~ props:', props)
console.log('❗❗❗❗❗❗ ~ props:', props.text)
</script>
<style></style>

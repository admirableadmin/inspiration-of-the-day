<script setup>
  defineProps({
  author: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  daylong: {
    type: String,
    required: true
  }
})
</script>

<template>
    <h2>{{ author }}</h2>
    <p>{{ message }}</p>
    <em>{{ daylong }}</em>
</template>

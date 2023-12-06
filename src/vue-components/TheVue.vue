<template>
  <div>
    <div @click="switchToReact">{{ wansui }}</div>
    <slot></slot>
    <div>{{ test }}</div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
const test = ref('Hello Vue')
const wansui = ref('Vue万岁')
const switchToReact = () => {
  test.value = 'Hello React'
  wansui.value = 'React万岁'
}
</script>

<style>

</style>
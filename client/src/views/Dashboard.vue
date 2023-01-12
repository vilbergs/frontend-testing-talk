<script setup lang="ts">
import { getCurrentUser } from '../api/auth'
import { useAppStore } from '../stores/'
import { onMounted, ref } from 'vue'
import { getTodos } from '../api/todos'

const store = useAppStore()

onMounted(async () => {
  if (!store.user) {
    return
  }

  store.setTodos(await getTodos(store.user.id))
})
</script>

<template>
  <ul>
    <li v-for="todo in store.todos">{{ todo.title }}</li>
  </ul>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

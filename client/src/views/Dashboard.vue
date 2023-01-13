<script setup lang="ts">
import { getCurrentUser } from '../api/auth'
import { useAppStore } from '../stores/'
import { onMounted, ref } from 'vue'
import { getTodos, createTodo, updateTodo } from '../api/todos'
import Todos from '../components/Todos.vue'
import { Console } from 'console'

const store = useAppStore()

onMounted(async () => {
  if (!store.user) {
    return
  }

  store.setTodos(await getTodos())
})

async function toggleTodo(todo: any, value: boolean) {
  try {
    await updateTodo(todo.id, { is_complete: value })
  } catch (error) {
    console.error(error)
  }

  store.setSingleTodo({
    ...todo,
    is_complete: value,
  })
}

async function addTodo(title: string) {
  try {
    const todo = await createTodo({ title })

    store.todos.push(todo)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <Todos :items="store.todos" @toggle="toggleTodo" @add="addTodo" />
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

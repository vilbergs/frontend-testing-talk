<script setup lang="ts">
import { getCurrentUser, logout } from './api/auth'
import { useAppStore } from './stores/'
import Login from './components/Login.vue'
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const store = useAppStore()
const router = useRouter()

async function handleLogout() {
  await logout()

  store.setUser(null)

  await router.push({ name: 'Login' })
}
</script>

<template>
  <button v-if="store.user" @click="handleLogout">Logout</button>
  <router-view></router-view>
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

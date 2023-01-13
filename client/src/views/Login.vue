<script setup lang="ts">
import { getCurrentUser } from '../api/auth'
import { useAppStore } from '../stores/'
import Login from '../components/Login.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const store = useAppStore()
const router = useRouter()

async function handleAuthentication(user) {
  console.log(user)
  store.setUser(user)

  await router.push({ name: 'Dashboard' })
}
</script>

<template>
  <Login @authenticated="handleAuthentication" />
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

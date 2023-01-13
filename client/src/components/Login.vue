<script setup lang="ts">
import { reactive } from 'vue'
import { login, getCurrentUser } from '../api/auth'
import { getTodos } from '../api/todos'

const emit = defineEmits(['authenticated'])

const credentials = reactive({
  username: '',
  password: '',
})

async function loginWithCredentials() {
  const user = await login(credentials.username, credentials.password)

  console.log(user)

  emit('authenticated', user)
}
</script>

<template>
  <div class="form">
    <label for="">
      Username
      <input type="email" v-model="credentials.username" />
    </label>
    <label for="">
      Password
      <input type="password" v-model="credentials.password" />
    </label>
    <button @click="loginWithCredentials">Log in</button>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { useAppStore } from './stores'
import { getCurrentUser } from './api/auth'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

const store = useAppStore()

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/login', name: 'Login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

getCurrentUser()
  .then((user) => setupApp(user))
  .catch(() => setupApp(null))

function setupApp(user: any) {
  store.setUser(user)

  router.beforeEach(async (to, from) => {
    if (
      // make sure the user is authenticated
      !store.user &&
      // ❗️ Avoid an infinite redirect
      to.name !== 'Login'
    ) {
      // redirect the user to the login page
      return { name: 'Login' }
    }

    if (store.user && to.name === 'Login') {
      return { name: 'Dashboard' }
    }
  })

  app.use(router)

  app.mount('#app')
}

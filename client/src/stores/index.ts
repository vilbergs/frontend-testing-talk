import { defineStore } from 'pinia'

interface State {
  user: Record<string, any> | null
  todos: Record<string, any>[]
}

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAppStore = defineStore('app', {
  state: (): State => ({ user: null, todos: [] }),
  getters: {
    isAuthenticated: (state) => Boolean(state.user),
  },
  actions: {
    setUser(user: Record<string, any> | null) {
      this.user = user
    },
    setTodos(todos: Record<string, any>[]) {
      this.todos = todos
    },
  },
})

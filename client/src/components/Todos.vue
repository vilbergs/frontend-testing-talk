<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['items'])

const emit = defineEmits(['toggle', 'add'])

const currentTitle = ref('')

function handleChange(event: any, item: any) {
  event.preventDefault()

  emit('toggle', item, event.target.checked)
}

function handleAdd() {
  emit('add', currentTitle.value)
}
</script>
<template>
  <div class="Todos">
    <div>
      <input type="text" placeholder="Create Todo" v-model="currentTitle" />
      <button @click="handleAdd">Add</button>
    </div>
    <ul class="list">
      <li v-for="item in props.items" class="list__item">
        <input
          type="checkbox"
          :key="item.id"
          :checked="item.is_complete"
          @change="(event) => handleChange(event, item)"
        />
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<style>
.Todos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.list {
  list-style-type: none;
  padding: 0;
}

.list li {
  display: flex;
  align-items: center;
}

.list__item span {
  margin-left: 4px;
}
</style>

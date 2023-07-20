<script setup>
import { ref, onMounted } from 'vue'


const newTodo = ref('')
const todos = ref([])
async function fetchTasks() {
  try {
    const response = await fetch('/api/items');
    const tasks = await response.json();
    todos.value = tasks
  } catch (error) {
    console.error(error);
  }
}
async function createTask(text) {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text })
    };
    const response =  await fetch("/api/items", requestOptions)
    return await response.json();

  } catch (error) {
    console.error(error);
  }
}
async function deleteTask(id) {
  try {
    const requestOptions = {
      method: "DELETE",
    };
    const response =  await fetch(`/api/items/${id}`, requestOptions)

  } catch (error) {
    console.error(error);
  }
}

async function addTodo() {
  todos.value.push(await createTask(newTodo.value))
  newTodo.value = ''
}

async function removeTodo(todo) {
  await deleteTask(todo.id)
  todos.value = todos.value.filter((t) => t !== todo)
}
onMounted(async () => {
  await fetchTasks();

})
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
        <router-link :to="{
    name: 'about',
    params: {
      id: todo.id
    }
  }"> {{ todo.name }}</router-link>
      <br/>
      {{ todo.desc }}
      <button @click="removeTodo(todo)">g</button>
    </li>
  </ul>
</template>
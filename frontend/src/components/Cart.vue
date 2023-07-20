<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  id: Number
})

const items = ref()

async function placeOrder(){
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: items.value })
    };
    const response =  await fetch("/api/items", requestOptions)
    return await response.json();

  } catch (error) {
    console.error(error);
  }
}
onMounted(async () => {
  items.value = window.cart
})
</script>

<template>
  {{items}}
  <button @click="placeOrder(todo)">Place order</button>

</template>
<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  id: Number
})

const item = ref()
async function fetchItem() {
  try {
    const response = await fetch(`/api/items/${props.id}`);
    item.value = await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function addToCart(){
  if(!window.cart){
    window.cart = []
  }
  window.cart.push(item.value)
  console.log(window.cart)
}
onMounted(async () => {
  await fetchItem();
})
</script>

<template>
  product detail {{ id }}
  {{ item }}
  <button @click="addToCart()">Add to cart</button>
</template>
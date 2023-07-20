<script setup>
import ProductDetail from '../components/ProductDetail.vue'
</script>

<template>
  <main>
    <div>User </div>
    <ProductDetail :id="$route.params.id"/>
  </main>
</template>

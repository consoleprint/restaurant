<template>
  <Order :id="$route.params.id"/>
</template>

<script setup>
  import Order from '@/components/Order.vue'
</script>

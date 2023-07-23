<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar>

      <v-btn v-for="link in links" :key="link" :to="link" variant="text">
        {{ link }}
      </v-btn>
      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        Shopping Cart({{store.count}})
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script setup>
const links = [
  'home',
  'menu',
  'cart',
  'checkout',
  // 'about',
]
import { useAppStore } from '@/store/app'

const store = useAppStore()
</script>

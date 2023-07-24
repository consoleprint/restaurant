<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <v-avatar class="me-10 ms-4" size="32"><v-icon icon="mdi-rice"></v-icon></v-avatar>
      <v-btn v-for="link in links" :key="link" :to="link.link" variant="text">
        {{ link.displayText }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-responsive max-width="260">
          <v-btn to="cart">Shopping Cart({{ store.count }})</v-btn>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script setup>
const links = [
  {
    displayText: 'home',
    link: 'home'
  },
  {
    displayText: 'menu',
    link: 'menu'
  },
  {
    displayText: 'location',
    link: 'location'
  },
  {
    displayText: 'about',
    link: 'about'
  }
  // 'home',
  // 'menu',
  // 'cart',
  // 'checkout',
  // 'about',
]
import { useAppStore } from '@/store/app'

const store = useAppStore()
</script>

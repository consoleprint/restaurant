<template>
    <v-row>
        <v-col cols="3" v-for="i in store.menuItems">
            
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-item>
      <v-card-title>{{i.name}}</v-card-title>
    </v-card-item>

    <v-card-text>

      <div class="my-4 text-subtitle-1">
        $ {{ i.price }}
      </div>

      <div>{{ i.desc }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        @click="addToCart(i)"
      >
        Add To Cart
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-col>

    </v-row>
</template>

<script setup>
import { useAppStore } from '@/store/app'
import { onMounted } from 'vue';

// access the `store` variable anywhere in the component ✨
const store = useAppStore()
function addToCart(i){
    store.addToCart(i)
}
onMounted(async ()=>{
    await store.syncMenuItems()
})
</script>
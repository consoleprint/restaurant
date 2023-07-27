<template>
  <v-card :loading="loading" class="mx-auto my-2" max-width="374">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
    </template>

    <v-img cover height="250" :src="item.imageUrl"></v-img>

    <v-card-item>
      <v-card-title>{{ item.name }}</v-card-title>
    </v-card-item>

    <v-card-text>

      <div class="my-2 text-subtitle-1">
        $ {{ item.price }}
      </div>

      <div> {{ item.desc }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple-lighten-2" variant="flat" class="ml-2 px-6" @click="addToCart">
        Add
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-snackbar v-model="snackbar" multi-line timeout="2000" color="green" rounded="pill">
    {{ text }}

    <template v-slot:actions>
      <v-btn color="purple" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { useAppStore } from '@/store/app'
import { ref, onMounted } from 'vue'
const props = defineProps({
  item: Object
})
const store = useAppStore()
const snackbar = ref(false)
const text = ref('')
async function addToCart() {
  snackbar.value = true
  text.value = `${props.item.name} added to the order`
  store.addItem(props.item)
}
</script>
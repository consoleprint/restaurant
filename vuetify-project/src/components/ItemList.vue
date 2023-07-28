<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-container>
                <v-row>
                    <v-col v-for="j in store.products" :key="`${j}`" >
                      <Item :item="j"/>
                    </v-col>
                </v-row>

              </v-container>

              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>

import Item from '@/components/Item.vue'
import { useAppStore } from '@/store/app'
import { ref, onMounted } from 'vue'
const props = defineProps({
  item: Object
})
const store = useAppStore()
// await store.syncItems()
// console.log(store.items)
</script>
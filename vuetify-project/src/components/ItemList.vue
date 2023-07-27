<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-container>
                <v-row>
                  <template v-for="n in 4" :key="n">
                    <v-col class="mx-6" cols="12">
                      <strong class="text-title-1">Category {{ n }}</strong>
                    </v-col>

                    <v-col v-for="j in store.products" :key="`${n}${j}`" cols="6" md="3">
                      <Item :item="j"/>
                    </v-col>
                  </template>
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
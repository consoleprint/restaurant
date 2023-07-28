<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-container>
                <v-row no-gutters v-if="order">
                  <v-col cols="4" offset="1">
                    <v-row no-gutters>
                      <v-col cols="6">
                        <span class="text-h6">Order Number: </span>
                      </v-col>
                      <v-col cols="6">
                        <span class="text-h6"> {{ order.id }}</span>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="6">
                        <span class="text-h6">Date: </span>
                      </v-col>
                      <v-col cols="6">
                        <span class="text-h6"> {{ order.date }}</span>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="6">
                        <span class="text-h6">Name: </span>
                      </v-col>
                      <v-col cols="6">
                        <span class="text-h6"> {{ order.name }}</span>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="6">
                        <span class="text-h6">Email: </span>
                      </v-col>
                      <v-col cols="6">
                        <span class="text-h6"> {{ order.email }}</span>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="6">
                        <span class="text-h6">Phone: </span>
                      </v-col>
                      <v-col cols="6">
                        <span class="text-h6"> {{ order.phone }}</span>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="4" offset="1">
                    <v-row no-gutters>
                      <v-col cols="3">
                        <span class="text-h6">Item</span>
                      </v-col>
                      <v-col cols="3">
                        <span class="text-h6">Unit Price</span>
                      </v-col>
                      <v-col cols="3">
                        <span class="text-h6">Amount</span>
                      </v-col>
                      <v-col cols="3">
                        <span class="text-h6">Price</span>
                      </v-col>
                    </v-row>
                    <v-row no-gutters v-for="item in store.items" :key="n">
                      <v-col cols="3">
                        {{ item.name }}
                      </v-col>
                      <v-col cols="3">
                        ${{ item.price }}
                      </v-col>
                      <v-col cols="3">
                        {{ item.count }}
                      </v-col>
                      <v-col cols="3">
                        ${{ item.price * item.count }}
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="3" offset="6">
                        <span class="text-h6">Total: </span>
                      </v-col>
                      <v-col cols="3">
                        <span class="text-h6">${{ store.total() }}</span>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAppStore } from '@/store/app'
const props = defineProps({
  id: Number
})

const store = useAppStore()
const order = ref()
onMounted(async () => {
  order.value = await store.getOrder(props.id)
})
</script>
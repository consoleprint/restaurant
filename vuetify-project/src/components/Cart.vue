<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet v-if="store.items.length > 0" min-height="70vh" rounded="lg">
              <v-container>
                <v-row no-gutters v-for="item in store.items" :key="n" link>
                  <v-col>
                    <v-sheet class="pa-3 ma-3">
                      <v-img :width="150" aspect-ratio="16/9" cover :src="item.imageUrl"></v-img>
                    </v-sheet>
                  </v-col>
                  <v-col>
                    <v-sheet class="pa-2 ma-2">
                      <span class="text-subtitle-2">{{ item.name }}</span> 
                    </v-sheet>
                    <v-sheet class="px-2 mx-2">
                      <span class="text-body-1">{{ item.desc }}</span> 
                    </v-sheet>
                  </v-col>
                  <v-col>
                    <v-sheet class="pa-4 ma-4">
                      <span class="text-h6">${{ item.price }}</span> 
                    </v-sheet>
                  </v-col>
                  <v-col>
                    <v-sheet class="pa-4 ma-4">
                      <v-btn icon="$minus" class="mr-4 mb-1" size="x-small" color="success" @click="decrement(item)"></v-btn> 
                        <span class="text-h6">{{ item.count }}</span>
                       <v-btn icon="$plus" class="ml-4 mb-1" size="x-small" color="success" @click="increment(item)"></v-btn>
                    </v-sheet>
                  </v-col>
                  <v-col>
                    <v-sheet class="pa-4 ma-4">
                      <v-btn color="deep-purple-lighten-2" variant="flat" @click="removeItem(item)">
                        Remove
                      </v-btn>
                    </v-sheet>
                  </v-col>
                </v-row>

                <v-row class="mx-auto">
                  <v-col cols="2" offset="9">
                    <v-btn color="red" variant="flat" block="" to="checkout">
                      Checkout
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
            <v-sheet v-else elevation="12" rounded="lg" width="100%" min-height="70vh" class="pa-4 text-center mx-auto">
              <v-icon class="mb-5" icon="mdi-cart-outline" size="112"></v-icon>

              <h2 class="text-h5 mb-6">Your cart is empty</h2>

              <v-btn class="text-none" color="success" rounded variant="flat" to="menu">
                Start Order!
              </v-btn>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useAppStore } from '@/store/app'
const store = useAppStore()
async function removeItem(item) {
  store.removeItem(item)
}
async function increment(item) {
  store.increment(item)
}
async function decrement(item) {
  store.decrement(item)
}
</script>
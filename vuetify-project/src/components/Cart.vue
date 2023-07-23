<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-container>


                <v-row no-gutters v-for="n in store.items" :key="n" link>
                  <v-col>
                    <v-sheet class="pa-2 ma-2">
                      <v-img :width="150" aspect-ratio="16/9" cover
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
                    </v-sheet>
                  </v-col>
                  <v-col>
                    <v-sheet class="pa-2 ma-2">
                      Name
                    </v-sheet>
                    <v-sheet class="pa-2 ma-2">
                      Description
                    </v-sheet>
                  </v-col>
                  <v-col>
                    <v-sheet class="pa-2 ma-2">
                      $109
                    </v-sheet>
                  </v-col>
                  <v-col>
                    <v-sheet class="pa-2 ma-2">
                      1
                    </v-sheet>
                  </v-col>
                  <v-col>
                    <v-sheet class="pa-2 ma-2">
                      <v-btn color="deep-purple-lighten-2" variant="flat" @click="removeItem(n)">
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
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useAppStore } from '@/store/app'

const store = useAppStore()
console.log(store)
async function removeItem(item) {
  store.removeItem(item)
}
</script>
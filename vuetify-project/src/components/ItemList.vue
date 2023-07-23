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
                    <v-col class="mt-2" cols="12">
                      <strong>Category {{ n }}</strong>
                    </v-col>

                    <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="3">
                      <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                        <template v-slot:loader="{ isActive }">
                          <v-progress-linear :active="isActive" color="deep-purple" height="4"
                            indeterminate></v-progress-linear>
                        </template>

                        <v-img cover height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                        <v-card-item>
                          <v-card-title>Cafe Badilico</v-card-title>

                          <v-card-subtitle>
                            <span class="me-1">Local Favorite</span>

                            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                          </v-card-subtitle>
                        </v-card-item>

                        <v-card-text>

                          <div class="my-4 text-subtitle-1">
                            $ 12.4
                          </div>

                          <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                            seating.</div>
                        </v-card-text>

                        <v-divider class="mx-4 mb-1"></v-divider>

                        <v-card-title>Tonight's availability</v-card-title>

                        <div class="px-4">
                          <v-chip-group v-model="selection">
                            <v-chip>5:30PM</v-chip>

                            <v-chip>7:30PM</v-chip>

                            <v-chip>8:00PM</v-chip>

                            <v-chip>9:00PM</v-chip>
                          </v-chip-group>
                        </div>

                        <v-card-actions>
                          <v-btn color="deep-purple-lighten-2" variant="flat" @click="addToCart">
                            Add
                          </v-btn>
                        </v-card-actions>
                      </v-card>
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

import { useAppStore } from '@/store/app'

const store = useAppStore()

async function addToCart() {
  store.addItem({})
}

</script>
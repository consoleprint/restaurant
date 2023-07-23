<template>
  <v-app id="inspire">


    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-container>


                <v-row no-gutters v-for="n in 5" :key="n" link>
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
                      <v-btn color="deep-purple-lighten-2" variant="flat" @click="reserve">
                        Remove
                      </v-btn>
                    </v-sheet>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="6" offset="6">
                    <v-row no-gutters>
                      <v-sheet>
                        <h1>Checkout Area</h1>
                      </v-sheet>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="3">
                        <h3>Item</h3>
                      </v-col>
                      <v-col cols="3">
                        <h3>Description</h3>
                      </v-col>
                      <v-col cols="3">
                        <h3>Amount</h3>
                      </v-col>
                      <v-col cols="3">
                        <h3>Price</h3>
                      </v-col>
                    </v-row>
                    <v-row no-gutters v-for="n in 5" :key="n">
                      <v-col cols="3">
                        Burger
                      </v-col>
                      <v-col cols="3">
                        wefjlwjflkwjef wefwef
                      </v-col>
                      <v-col cols="3">
                        {{ n }}
                      </v-col>
                      <v-col cols="3">
                        ${{ n * 2 }}
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="3" offset="6">
                        Sub Total:
                      </v-col>
                      <v-col cols="3">
                        <h4>$303</h4>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="3" offset="6">
                        Tax:
                      </v-col>
                      <v-col cols="3">
                        <h4>$303</h4>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="3" offset="6">
                        Total:
                      </v-col>
                      <v-col cols="3">
                        <h3>$303</h3>
                      </v-col>
                    </v-row>
                    <v-divider class="m-40"></v-divider>

                    <v-divider class="mx-4 mb-1"></v-divider>
                    <v-divider class="mx-4 mb-1"></v-divider>
                    <v-divider class="mx-4 mb-1"></v-divider>

                    <v-row class="mx-auto">
                      <v-col cols="3" offset="7">
                        <v-btn color="red" variant="flat" block="" @click="reserve">
                          Checkout
                        </v-btn>
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

</script>
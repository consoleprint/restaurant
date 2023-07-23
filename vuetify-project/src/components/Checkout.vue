<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-container>
                <v-row no-gutters>
                  <v-col cols="5" offset="1">
                    <v-row>1. Customer Information</v-row>
                    <v-row>
                      <v-col cols="11">
                        <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name"
                          required></v-text-field>
                        <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name"
                          required></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row><v-divider :thickness="2"></v-divider></v-row>
                    <v-row>2. Payment method</v-row>
                    <v-row> <v-card>

                        <v-card-title class="blue darken-1 white--text font-weight-black title">
                          <v-spacer></v-spacer>

                          <v-img aspect-ratio="3.075" max-height="40" :src="URL_IMAGE" position="right" contain />
                        </v-card-title>

                        <v-card-text class='pb-10'>
                          <v-row>
                            <v-col cols='6'>
                              <v-subheader class="grey--text text--lighten-1 pl-0 subheader">CARDHOLDER’S
                                NAME</v-subheader>
                              <v-text-field single-line outlined label="Johny Relative" hide-details />
                            </v-col>

                            <v-col cols='6'>
                              <v-subheader class="grey--text text--lighten-1 pl-0 subheader">CARD NUMBER</v-subheader>
                              <v-text-field single-line outlined mask="credit-card" v-model="valueOfCardNumber"
                                hide-details />
                            </v-col>

                            <v-col col='4'>
                              <v-subheader class="grey--text text--lighten-1 pl-0 subheader">EXPIRY DATE</v-subheader>
                              <v-select :items="MonthList" label="Month" outlined append-icon='keyboard_arrow_down'
                                hide-details />
                            </v-col>

                            <v-col col='4'>
                              <v-subheader class="grey--text text--lighten-1 pl-0 subheader"></v-subheader>
                              <v-select :items="YearList" label="Year" outlined append-icon='keyboard_arrow_down'
                                hide-details />
                            </v-col>

                            <v-col col='4'>
                              <v-subheader class="grey--text text--lighten-1 pl-0 subheader">CVV</v-subheader>
                              <v-text-field single-line outlined hide-details />
                            </v-col>

                          </v-row>
                        </v-card-text>

                      </v-card></v-row>
                      
                  </v-col>
                  <v-col cols="4" offset="1">
                    <v-row no-gutters>
                      <v-col cols="4">
                        <h3>Item</h3>
                      </v-col>
                      <v-col cols="4">
                        <h3>Amount</h3>
                      </v-col>
                      <v-col cols="4">
                        <h3>Price</h3>
                      </v-col>
                    </v-row>

                    <v-row no-gutters v-for="n in 5" :key="n">
                      <v-col cols="4">
                        Burger
                      </v-col>
                      <v-col cols="4">
                        {{ n }}
                      </v-col>
                      <v-col cols="4">
                        ${{ n * 2 }}
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" offset="4">
                        Sub Total:
                      </v-col>
                      <v-col cols="4">
                        <h4>$303</h4>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" offset="4">
                        Tax:
                      </v-col>
                      <v-col cols="4">
                        <h4>$303</h4>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" offset="4">
                        Total:
                      </v-col>
                      <v-col cols="4">
                        <h3>$303</h3>
                      </v-col>
                    </v-row>

                    <v-row class="mx-auto">
                      <v-col cols="9">
                        <v-btn color="red" variant="flat" block="" @click="pay">
                          Pay
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
import { useAppStore } from '@/store/app'

const store = useAppStore()
console.log(store)
async function pay() {
}
</script>
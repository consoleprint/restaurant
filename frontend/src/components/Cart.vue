<template>
    <v-container class="mt-10" v-if="store.cartItems.length > 0">
        <v-row v-for="i in store.cartItems">
            <v-col>
                <v-img :width="150" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            </v-col>
            <v-col class="mt-5">
                <span class="text-h5 text-green">{{ i.item.name }}</span>
            </v-col>
            <v-col class="mt-3">
                <span class="text-body-1 text-cyan-darken-4">{{ i.item.desc }}</span>
            </v-col>
            <v-col class="mt-2">
                <span class="text-h6 text-orange">${{ i.item.price }}</span>
            </v-col>
            <v-col class="mt-2">
                <v-btn icon="$minus" class="mr-4 mb-1" size="x-small" color="success" @click="store.decrement(i)"></v-btn>
                <span class="text-h6">{{ i.amount }}</span>
                <v-btn icon="$plus" class="ml-4 mb-1" size="x-small" color="success" @click="store.increment(i)"></v-btn>
            </v-col>
            <v-col class="mt-2"> <v-btn color="deep-purple-lighten-2" variant="flat"
                    @click="store.removeFromCart(i)">Delete</v-btn></v-col>
        </v-row>
        <v-row class="mx-auto">
            <v-col cols="2" offset="9">
                <v-btn color="red" variant="flat" block="" to="checkout">
                    Checkout
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-sheet v-else elevation="12" rounded="lg" width="100%" min-height="70vh" class="pa-4 text-center mx-auto">
        <v-icon class="mb-5" icon="mdi-cart-outline" size="112"></v-icon>

        <h2 class="text-h5 mb-6">Your cart is empty</h2>

        <v-btn class="text-none" color="success" rounded variant="flat" to="menu">
            Start Order!
        </v-btn>
    </v-sheet>
</template>

<script setup>
import { useAppStore } from '@/store/app'

// access the `store` variable anywhere in the component ✨
const store = useAppStore()

</script>
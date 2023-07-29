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

                    <form @submit.prevent="submit">
                      <v-text-field v-model="name.value.value" :counter="10" :error-messages="name.errorMessage.value"
                        label="Name"></v-text-field>

                      <v-text-field v-model="phone.value.value" :counter="7" :error-messages="phone.errorMessage.value"
                        label="Phone Number"></v-text-field>

                      <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                        label="E-mail"></v-text-field>

                      <v-btn class="mr-10" size="x-large" color="red" type="submit">
                        pay
                      </v-btn>

                      <v-btn @click="handleReset" size="x-large" color="grey" >
                        clear
                      </v-btn>
                    </form>
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
import { useAppStore } from '@/store/app'
import { useField, useForm } from 'vee-validate'
import router from '@/router'

const store = useAppStore()

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true

      return 'Name needs to be at least 2 characters.'
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true

      return 'Phone number needs to be at least 9 digits.'
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
  },
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const submit = handleSubmit(async values => {
  var request = {
    email: values.email,
    name: values.name,
    phone: values.phone,
    items: store.items
  }
  const order = await store.submitOrder(request)
  router.push({ path: `/order/${order.id}` })

})
</script>
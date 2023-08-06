// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    menuItems: [], cartItems: [],
  }),
  getters: {
    countOfCartItems: (state) => state.cartItems.length,
    getTotalPrice: (state)=>{
      let total = 0
      state.cartItems.map(c=>{
        total += (c.amount *c.item.price)
      })
      return total
    }
  },
  actions: {
    async syncMenuItems(){
     const response = await fetch('/api/items')
     this.menuItems = await response.json()
    },
    async submitOrder(request){
      request.items = this.cartItems
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request)
      };
      const response =  await fetch("/api/orders", requestOptions)
      this.cartItems = []
      return await response.json()
    },
    async getOrder(id){
      const response = await fetch(`/api/orders/${id}`);
      return response.json();
    },
    addToCart(item) {
      let found = false;
      for (let ci of this.cartItems) {
        if (ci.item.id === item.id) {
          ci.amount++
          found = true
          break;
        }
      }
      if (!found) {
        this.cartItems.push({
          item: item,
          amount: 1
        })
      }
      //calc totalvalue
    },
    removeFromCart(item){
      this.cartItems = this.cartItems.filter(i=>i!=item)
    },
    increment(item){
      item.amount++
    },
    decrement(item){
      if(item.amount>0){
        item.amount--
      }
    }
  },
})

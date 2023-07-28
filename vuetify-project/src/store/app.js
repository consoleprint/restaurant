// Utilities
import { defineStore } from 'pinia'

export const useAppStore = () => {
  const innerStore = defineStore('app', {
    state: () => ({
      count: 0,
      items:[],
      products: []
    }),
    actions: {
      async syncProducts(){
        const response = await fetch('/api/items');
        this.products = await response.json();
      },
      async getOrder(id){
        const response = await fetch(`/api/orders/${id}`);
        return response.json();
      },
      addItem(item) {
        let found = false
        for(let i of this.items){
          if(i.name===item.name){
            i.count++
            found = true
            break
          }
        }
        if(!found){
          this.items.push({
            ...item,
            count: 1
          })
        }
        this.count = this.items.length
      },
      increment(item) {
        for(let i of this.items){
          if(i.name===item.name){
            i.count++
          }
        }
      },
      decrement(item) {
        for(let i of this.items){
          if(i.name===item.name){
            if(i.count>1){
              i.count--
            }
            return
          }
        }
      },
      total(){
        var total = 0.0;
        for(let i of this.items){
          total+=(i.count*i.price)
        }
        return new Number(total).toFixed(2)
      },
      removeItem(item){
        this.items = this.items.filter(i=>i!=item)
        this.count = this.items.length
      },
      async submitOrder(request){
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(request)
        };
        const response =  await fetch("/api/orders", requestOptions)
        return await response.json();
      }
    },
  })
  const s = innerStore();
  if (s.products.length == 0) {
    s.syncProducts();
  }
  return s;
};

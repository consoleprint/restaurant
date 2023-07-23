// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    count: 0,
    items:[]
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    addItem(item) {
      this.items.push(item)
      this.count++
    },
    removeItem(item){
      this.items = this.items.filter(i=>i!=item)
      this.count = this.items.length
    }
  },
})

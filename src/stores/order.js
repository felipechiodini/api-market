import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', {
  state: () => {
    return {
      orders: {}
    }
  },
  getters: {
    hasOrder() {
      return false
    }
  },
  actions: {
    registerOrder(order) {
      this.orders[order.id] = order
    }
  },
  persist: true  
})
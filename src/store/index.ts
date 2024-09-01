import { defineStore } from 'pinia'
import products from '@data/products.json' // Ensure the path is correct
import { Product, State } from '@/types' // Import both Product and State types

export const useMainStore = defineStore('main', {
  state: (): State => ({
    productInfo: {} as Product, // Initialized as an empty Product object
    cartItems: [],
    items: products as Product[], // Cast JSON data to Product[]
  }),

  getters: {
    // Example getters
    itemsNumber: (state) => state.cartItems.length,
    totalPrice: (state) => {
      if (state.cartItems.length > 1) {
        return state.cartItems.reduce((acc, item) => acc + (item.price || 0), 0)
      }
      return state.cartItems[0]?.price || 0
    },
  },

  actions: {
    // Example actions
    inCart(item: Product) {
      this.cartItems.push(item)
    },
    outCart(itemId: number) {
      const index = this.cartItems.findIndex((x) => x.id === itemId)
      if (index !== -1) {
        this.cartItems.splice(index, 1)
      }
    },
    addToInfo(itemId: number) {
      const selectedProduct = this.items.find((item) => item.id === itemId)
      if (selectedProduct) {
        this.productInfo = selectedProduct
      }
    },
    checkout() {
      if (this.cartItems.length > 0) {
        console.log('Processing checkout for items:', this.cartItems)
        this.cartItems = [] // Clear cart after checkout
      } else {
        console.log('Cart is empty, no checkout to process.')
      }
    },
  },
})

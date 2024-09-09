import { defineStore } from 'pinia'
import { Product } from '@/types'

export const useMainStore = defineStore('main', {
  state: (): {
    cartItems: Product[]
    products: Product[]
    productInfo: Product
    loading: boolean
    error: string | null
  } => ({
    productInfo: {} as Product,
    // Initialize the cartItems with a quantity field
    cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]').map(
      (item) => ({
        ...item,
        quantity: item.quantity || 1, // Ensure quantity is present if not already
      })
    ),
    products: [],
    loading: false,
    error: null,
  }),

  getters: {
    itemsNumber: (state) =>
      state.cartItems.reduce((total, item) => total + item.quantity, 0),

    totalPrice: (state) => {
      return state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )
    },
  },

  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null
      try {
        const response = await fetch('/data/products.json')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        this.products = await response.json()
      } catch (err) {
        this.error = err.message || 'Error fetching products'

        throw err
      } finally {
        this.loading = false
      }
    },

    inCart(item: Product) {
      const existingItem = this.cartItems.find(
        (cartItem) => cartItem.id === item.id
      )
      if (existingItem) {
        existingItem.quantity += 1 // Increment quantity if item already exists
      } else {
        this.cartItems.push({ ...item, quantity: 1 }) // Add new item with quantity 1
      }
      this.updateLocalStorage()
    },

    outCart(itemId: number) {
      const existingItem = this.cartItems.find((item) => item.id === itemId)
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1 // Decrease quantity if more than 1
        } else {
          this.cartItems = this.cartItems.filter((item) => item.id !== itemId) // Remove item if only 1 left
        }
        this.updateLocalStorage()
      }
    },

    handleCheckout(purchasedItems) {
      this.purchasedItems = purchasedItems
      localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems)) // Save purchased items to localStorage
      this.cartItems = [] // Clear cart items
      this.updateLocalStorage()
    },

    checkout() {
      if (this.cartItems.length > 0) {
        console.log('Processing checkout for items:', this.cartItems)
        this.cartItems = [] // Clear cart after checkout
        this.updateLocalStorage()
      } else {
        console.log('Cart is empty, no checkout to process.')
      }
    },

    updateLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },
  },
})

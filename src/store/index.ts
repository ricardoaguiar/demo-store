import { defineStore } from 'pinia'
import { Product } from '@/types'

export const useMainStore = defineStore('main', {
  state: (): {
    cartItems: Product[]
    products: Product[]
    productInfo: Product
    loading: boolean
    error: string | null
    purchasedItems: Product[]
  } => ({
    productInfo: {} as Product,
    // Initialize the cartItems with a quantity field
    cartItems: (
      JSON.parse(localStorage.getItem('cartItems') || '[]') as Product[]
    ).map((item: Product) => ({
      ...item,
      quantity: item.quantity || 1, // Ensure quantity is present if not already
    })),
    products: [],
    loading: false,
    error: null,
    purchasedItems: [],
  }),

  getters: {
    itemsNumber: (state) =>
      state.cartItems.reduce((total, item) => total + (item.quantity || 0), 0),

    totalPrice: (state) => {
      return state.cartItems.reduce(
        (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
        0
      )
    },
  },

  actions: {
    async fetchProducts(): Promise<void> {
      this.loading = true
      this.error = null
      try {
        const response = await fetch('/data/products.json')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        this.products = await response.json()
      } catch (err: any) {
        this.error = err.message || 'Error fetching products'

        throw err
      } finally {
        this.loading = false
      }
    },

    inCart(item: Product): void {
      const existingItem = this.cartItems.find(
        (cartItem): boolean => cartItem.id === item.id
      )
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1 // Increment quantity if item already exists
      } else {
        this.cartItems.push({ ...item, quantity: 1 }) // Add new item with quantity 1
      }
      this.updateLocalStorage()
    },

    outCart(itemId: number): void {
      const existingItem = this.cartItems.find(
        (item): boolean => item.id === itemId
      )
      if (!existingItem) return

      if ((existingItem.quantity || 1) > 1) {
        existingItem.quantity = (existingItem.quantity || 1) + 1 // Decrease quantity if more than 1
      } else {
        this.cartItems = this.cartItems.filter((item) => item.id !== itemId) // Remove item if only 1 left
      }
      this.updateLocalStorage()
    },

    handleCheckout(purchasedItems: Product[]): string {
      const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`

      this.purchasedItems = purchasedItems
      localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems)) // Save purchased items to localStorage
      localStorage.setItem('orderId', orderId)
      this.cartItems = [] // Clear cart items
      this.updateLocalStorage()

      return orderId
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

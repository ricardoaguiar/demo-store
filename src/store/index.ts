import { defineStore } from 'pinia'
import { Product } from '@/types'

export const useMainStore = defineStore('main', {
  state: (): {
    cartItems: Product[]
    products: Product[]
    productInfo: Product | null
    loading: boolean
    error: string | null
    purchasedItems: Product[]
    selectedCategory: string | null
    selectedColor: string | null
    selectedSorting: string | null
    categories: Array<{ name: string; value: string }>
    sortingOptions: Array<{ name: string; value: string }>
  } => ({
    productInfo: null,
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
    selectedCategory: null,
    selectedColor: null,
    selectedSorting: null,
    categories: {
      types: [],
      colors: [],
    },
    sortingOptions: [],
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

    filteredProducts(state) {
      let filtered = [...state.products]
      if (state.selectedCategory) {
        filtered = filtered.filter(
          (product) => product.category === state.selectedCategory
        )
      }
      if (state.selectedColor) {
        filtered = filtered.filter(
          (product) => product.color === state.selectedColor
        )
      }
      if (state.selectedSorting === 'price') {
        filtered = filtered.sort((a, b) => a.price - b.price)
      } else if (state.selectedSorting === 'newest') {
        filtered = filtered.sort((a, b) => b.dateAdded - a.dateAdded)
      } else if (state.selectedSorting === 'trending') {
      }
      return filtered
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

    async fetchFilters(): Promise<void> {
      this.loading = true
      this.error = null
      try {
        const response = await fetch('/data/filters.json')
        if (!response.ok) {
          throw new Error('Failed to fetch filters')
        }
        const data = await response.json()
        this.categories.types = data.filters.categories.types
        this.categories.colors = data.filters.categories.colors
        this.sortingOptions = data.filters.sorting.options
      } catch (err: any) {
        this.error = err.message || 'Error fetching filters'
        throw err
      } finally {
        this.loading = false
      }
    },

    setCategoryFilter(category: string | null) {
      this.selectedCategory = category
    },

    setColorFilter(color: string | null) {
      this.selectedColor = color
    },

    setSortingFilter(value: string | null) {
      this.selectedSorting = value
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
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId) // Remove item if only 1 left
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

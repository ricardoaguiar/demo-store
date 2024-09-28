import { handleApiCall } from '@/composables/utils'
import { defineStore } from 'pinia'
import {
  AboutUs,
  CartItems,
  Filters,
  FooterResponse,
  NavigationResponse,
  Product,
  State,
} from '@/types'

export const useMainStore = defineStore('main', {
  state: (): State => ({
    productInfo: null,
    cartItems: (
      JSON.parse(localStorage.getItem('cartItems') || '[]') as CartItems[]
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
    isFilterSet: false,
    isCartOpen: false,
    navLinks: [],
    isMobileMenuOpen: false,
    footerData: null,
    aboutUs: null,
  }),

  getters: {
    itemsNumber: (state) =>
      state.cartItems.reduce(
        (total, product) => total + (product.quantity || 0),
        0
      ),

    totalPrice: (state) => {
      return state.cartItems.reduce(
        (acc, product) => acc + (product.price || 0) * (product.quantity || 1),
        0
      )
    },

    filteredProducts(state) {
      let filtered = [...state.products]
      if (state.selectedCategory) {
        filtered = filtered.filter(
          (product) => product.categoryName === state.selectedCategory
        )
        this.isFilterSet = true
      }

      if (state.selectedColor) {
        filtered = filtered.filter(
          (product) =>
            product.color?.toLowerCase() === state.selectedColor?.toLowerCase()
        )

        this.isFilterSet = true
      }

      if (state.selectedSorting === 'price') {
        this.isFilterSet = true
        filtered = filtered.sort((a, b) => a.price - b.price)
      } else if (state.selectedSorting === 'newest') {
        this.isFilterSet = true
        filtered = filtered.sort((a, b) => {
          const dateA = a.dateAdded ? new Date(a.dateAdded).getTime() : 0
          const dateB = b.dateAdded ? new Date(b.dateAdded).getTime() : 0
          return dateB - dateA
        })
      } else if (state.selectedSorting === 'trending') {
        this.isFilterSet = true
      }

      return filtered
    },
  },

  actions: {
    async fetchAboutUs(): Promise<void> {
      const asyncOperation = async () => {
        const response = await fetch('/data/content.json')
        if (!response.ok) {
          throw new Error('Failed to fetch content')
        }
        return response.json()
      }

      const result = await handleApiCall<AboutUs>(
        asyncOperation,
        (loading) => {
          this.loading = loading
        },
        (message) => {
          this.error = message
        }
      )

      if (result) {
        this.aboutUs = result
      }
    },

    async fetchProducts(): Promise<void> {
      const asyncOperation = async () => {
        const response = await fetch('/data/products.json')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        return response.json()
      }

      const result = await handleApiCall<Product[]>(
        asyncOperation,
        (loading) => {
          this.loading = loading
        },
        (message) => {
          this.error = message
        }
      )

      if (result) {
        this.products = result
      }
    },

    async fetchFilters(): Promise<void> {
      const asyncOperation = async () => {
        const response = await fetch('/data/filters.json')
        if (!response.ok) {
          throw new Error('Failed to fetch filters')
        }
        return response.json()
      }

      const result = await handleApiCall<Filters>(
        asyncOperation,
        (loading) => {
          this.loading = loading
        },
        (message) => {
          this.error = message
        }
      )

      if (result) {
        this.categories.types = result.filters.categories.types
        this.categories.colors = result.filters.categories.colors
        this.sortingOptions = result.filters.sorting.options
      }
    },

    async fetchNavigation(): Promise<void> {
      const asyncOperation = async () => {
        const response = await fetch('/data/navigation.json')
        if (!response.ok) {
          throw new Error('Failed to fetch navigation')
        }
        return response.json()
      }

      const result = await handleApiCall<NavigationResponse>(
        asyncOperation,
        (loading) => {
          this.loading = loading
        },
        (message) => {
          this.error = message
        }
      )

      if (result) {
        this.navLinks = result.nav.links
      }
    },

    async fetchFooter(): Promise<void> {
      const asyncOperation = async () => {
        const response = await fetch('/data/footer.json')
        if (!response.ok) {
          throw new Error('Failed to fetch footer')
        }
        return response.json()
      }

      const result = await handleApiCall<FooterResponse>(
        asyncOperation,
        (loading) => {
          this.loading = loading
        },
        (message) => {
          this.error = message
        }
      )

      if (result) {
        this.footerData = {
          sections: result.footer,
          contactInfo: result.contactInfo,
          social: result.social,
          copyright: result.copyright,
        }
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

    resetFilters() {
      this.selectedCategory = null
      this.selectedColor = null
      this.selectedSorting = null
      this.isFilterSet = false
    },

    inCart(product: Product): void {
      const existingItem = this.cartItems.find(
        (cartItem): boolean => cartItem.id === product.id
      )
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1 // Increment quantity if item already exists
      } else {
        this.cartItems.push({ ...product, quantity: 1 }) // Add new item with quantity 1
      }

      this.updateLocalStorage()
    },

    outCart(productId: number): void {
      this.cartItems = this.cartItems.filter(
        (product) => product.id !== productId
      ) // Remove item if only 1 left
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

    toggleCart() {
      this.isCartOpen = !this.isCartOpen
    },

    updateLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },

    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
  },
})

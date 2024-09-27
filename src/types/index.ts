export interface Product {
  id: number
  img?: string
  name?: string
  title?: string
  price: number
  color?: string
  categoryName?: string
  description?: string
  sale?: boolean
  reviews?: number
  stars?: string
  dateAdded?: number
  quantity: number
}

export interface State {
  productInfo: Product | null
  cartItems: Product[]
  products: Product[]
  loading: boolean
  error: string | null
  purchasedItems: Product[]
  selectedCategory: string | null
  selectedColor: string | null
  selectedSorting: string | null
  categories: {
    types?: Array<{ name: string; value: string }>
    colors?: Array<{ name: string; value: string }>
  }
  sortingOptions: Array<{ name: string; value: string }>
  isFilterSet: boolean
  isCartOpen: boolean
  navLinks: NavLink[]
  isMobileMenuOpen: boolean
  footerData?: Footer | null
}

// footer
export interface Footer {
  sections: FooterSection[]
  contactInfo: ContactInfo
  social: SocialLink[]
  copyright?: string | undefined
}

export interface FooterSection {
  title?: string | undefined
  links: FooterLink[]
}

export interface FooterLink {
  text?: string | undefined
  url: string
}

export interface ContactInfo {
  address?: string | undefined
  email?: string | undefined
  phone?: string | undefined
}

export interface SocialLink {
  platform?: string | undefined
  icon?: string | undefined
  url?: string | undefined
}

// top nav
export interface NavLink {
  name?: string | undefined
  url: string
}

export interface NavIcons {
  search?: string | undefined
  account?: string | undefined
  cart?: string | undefined
}

export interface Nav {
  mobileBurgerMenu?: string | undefined
  links: NavLink[]
  icons: NavIcons
}

export interface TopNavigation {
  nav: Nav
}

export interface CartItems {
  img?: string
  quantity: number
  color?: string
  description?: string
  stars?: string
  title?: string
  categoryName?: string
  dateAdded?: number
  sale?: boolean
  reviews?: number
  price: number
  name?: string
  id: number
}

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
  navLinks: NavLink | null
  isMobileMenu: boolean
}

// footer
export interface FooterLink {
  text?: string | undefined
  url?: string | undefined
}

export interface FooterSection {
  title?: string | undefined
  links: FooterLink[]
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

export interface FooterData {
  sections: FooterSection[]
  contactInfo: ContactInfo
  social: SocialLink[]
  copyright?: string | undefined
}

// top nav
export interface NavLink {
  text?: string | undefined
  url?: string | undefined
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

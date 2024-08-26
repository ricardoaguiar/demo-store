export interface Product {
  id?: number
  img?: string
  title?: string
  price?: number
  color?: string
  type?: string
}

export interface State {
  productInfo: Product
  cartItems: Product[]
  items: Product[]
}

// footer
export interface FooterLink {
  text: string
  url: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface ContactInfo {
  address: string
  email: string
  phone: string
}

export interface SocialLink {
  platform: string
  icon: string
  url: string
}

export interface FooterData {
  sections: FooterSection[]
  contactInfo: ContactInfo
  social: SocialLink[]
  copyright: string
}

// top nav
export interface NavLink {
  text: string
  url: string
}

export interface NavIcons {
  search: string
  account: string
  cart: string
}

export interface Nav {
  mobileBurgerMenu: string
  links: NavLink[]
  icons: NavIcons
}

export interface TopNavigation {
  nav: Nav
}

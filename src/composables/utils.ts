// composables/utils.ts
import { ref } from 'vue'

const isCartOpen = ref(false)

export function useDropdown() {
  const dropdownActive = ref(false)
  function toggleDropdown() {
    dropdownActive.value = !dropdownActive.value
  }

  return {
    dropdownActive,
    toggleDropdown,
  }
}

export function useAsset(
  path: string | undefined,
  ext?: string | undefined
): string {
  // If the extension is provided separately, concatenate it with the path.
  // If the path already includes the extension, return it as is.
  const fullPath = ext ? `${path}.${ext}` : path

  // Generate the full URL to the asset
  return new URL(`../assets/img/${fullPath}`, import.meta.url).href
}

export function useCart() {
  function toggleCart() {
    isCartOpen.value = !isCartOpen.value
  }

  return {
    isCartOpen,
    toggleCart,
  }
}

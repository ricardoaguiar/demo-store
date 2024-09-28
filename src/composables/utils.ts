// composables/utils.ts
import { ref } from 'vue'

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

export async function handleApiCall<T>(
  asyncFn: () => Promise<T>,
  setLoading: (loading: boolean) => void,
  setError: (message: string | null) => void
): Promise<T | null> {
  setLoading(true)
  setError(null)

  try {
    return await asyncFn()
  } catch (err: any) {
    const errorMessage = err?.message || 'An error occurred'
    setError(errorMessage)
    console.error(errorMessage)
    return null
  } finally {
    setLoading(false)
  }
}

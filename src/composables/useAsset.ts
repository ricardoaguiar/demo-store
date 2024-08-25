export function useAsset(path: string, ext: string): string {
  return new URL(`../assets/img/${path}.${ext}`, import.meta.url).href
}

export function useAsset(path: string, ext?: string): string {
  // If the extension is provided separately, concatenate it with the path.
  // If the path already includes the extension, return it as is.
  const fullPath = ext ? `${path}.${ext}` : path

  // Generate the full URL to the asset
  return new URL(`../assets/img/${fullPath}`, import.meta.url).href
}

 export function useAsset(path: string): string {
    return path ? `/assets/${path}` : '';
}

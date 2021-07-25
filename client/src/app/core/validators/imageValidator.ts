export function isUrlsPictureInvalid(url: string): boolean {
    if (!((url.startsWith('https://') || url.startsWith('http://')))) {
      return true;
    }
  
    return false;
  }
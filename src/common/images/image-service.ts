
export function getImageUri(uri:string, width: number): string {
  let nextUrl: URL;
  nextUrl = new URL(uri);
  nextUrl.searchParams.append('width', `${width}`);
  return nextUrl.toString();
}

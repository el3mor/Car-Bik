process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export async function getData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined');
  }
  const res = await fetch(apiUrl, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data;
}

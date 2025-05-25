process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export async function getData() {
  const res = await fetch("http://api.carbik.shop/api/app", {
    next:{revalidate:0}
  });
  const data = await res.json();
  return data;
}

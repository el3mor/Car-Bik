
export async function getData() {
  const res = await fetch("https://api.carbik.shop/api/app", {
    next:{revalidate:0}
  });
  const data = await res.json();
  return data;
}

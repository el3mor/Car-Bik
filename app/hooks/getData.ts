
import axios from "axios";

export async function getData() {
  const { data } = await axios.get("https://api.carbik.shop/api/app")
  return data;
}


import axios from "axios";

export async function getData() {
  const { data } = await axios.get("https://ahmedhishamelsheikh.xyz/app.php")
  return data;
}

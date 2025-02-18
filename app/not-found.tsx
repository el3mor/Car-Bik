import { HiOutlineEmojiSad } from "react-icons/hi";
import BackToHomeBtn from "./components/ui/BackToHomeBtn";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:"الصفحة غير موجودة | كار بيك"
}

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center">
       <BackToHomeBtn />
       <HiOutlineEmojiSad className="text-[35rem]" />
      <h1 className="text-[45px] font-bold text-[#8FC963]">الصفحة غير موجودة</h1>
    </div>
  )
}

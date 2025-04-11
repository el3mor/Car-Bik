import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";


const ContactIcon = ({phone}: {phone:string}) => {
  return (
    <div className="fixed bottom-2 left-2 z-[60] flex flex-col gap-4  items-center justify-center">
      <Link
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10  md:h-8 md:w-8 items-center justify-center rounded-full bg-green-500 text-white  shadow-lg transition duration-300 ease-in-out hover:bg-green-600"
      >
        <FaWhatsapp size={27} />
      </Link>
      <Link
        href={`tel:${phone}`}
        className="flex h-10 w-10  md:hidden items-center justify-center rounded-full bg-blue-500 text-white  shadow-lg transition duration-300 ease-in-out hover:bg-blue-600"
      >
        <IoCall size={24} />
      </Link>
    </div>
  );
};

export default ContactIcon;

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const homeLinks = [
  { title: 'الرئيسية', href: '/' },
  { name: 'معلومات عنا', href: '#about' },
  { name: 'الخدمات', href: '#services' },
  { name: 'المقالات', href: '#blogs' },
];

const Footer = ({
  contactMethods,
}: {
  contactMethods: {
    title: string;
    value: string;
  }[];
}) => {
  return (
    <footer className="bg-[#484848] md:pt-20 pb-5  px-4 md:px-20 flex  justify-center flex-col gap-10 relative overflow-hidden">
      <div className="flex max-md:flex-col items-center gap-10  justify-between">
        <div className="flex flex-col md:w-1/2 gap-4">
          <Image src="/images/carbik-logo.png" alt="Car Bik" width={120} height={138} />
          <p className="text-xl">
            نحن نسعى جاهدين لتقديم أفضل الخدمات لسيارتك بفضل فريقنا المحترف وتقنياتنا المتطورة. رضاك
            هو غايتنا، لذا نحرص على تقديم تجربة استثنائية تجمع بين الجودة والدقة
          </p>
        </div>
        <div className="flex md:w-1/2 items-center  w-full justify-around">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">{homeLinks[0].title}</h2>
            {homeLinks.slice(1).map((link) => (
              <a key={link.href} href={link.href} className="text-base text-[]">
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">تواصل معنا</h2>
            {contactMethods.map((link) => (
              <p key={link.title} className="text-base text-[]">
                {link.value}
              </p>
            ))}
            <Link
              href="https://maps.app.goo.gl/UEMomz8PU9SdZVn89"
              target="_blank"
              className="text-base"
            >
              موقعنا
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-2xl font-bold">وسائل الدفع</h2>
        <div className="flex flex-wrap gap-4 items-center justify-around">
          <Image alt="paypal-logo" src="/images/paypal.svg" width={100} height={40} />
          <Image alt="tamara-logo" src="/images/tamara.svg" width={100} height={40} />
          <Image alt="applepay-logo" src="/images/applepay.svg" width={100} height={40} />
          <Image alt="visa-logo" src="/images/visa.svg" width={100} height={40} />
          <Image alt="mastercard-logo" src="/images/mastercard.svg" width={100} height={40} />
          <Image alt="mada-logo" src="/images/mada.svg" width={100} height={40} />
          <Image alt="tabby-logo" src="/images/tabby.svg" width={100} height={40} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Link
          target="_blank"
          href="https://www.tiktok.com/@carbik.shop"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#8FC963]"
        >
          <FaTiktok />
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/@carbik_shop"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#8FC963]"
        >
          <FaYoutube />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/carbik.shop"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#8FC963]"
        >
          <FaInstagram />
        </Link>
        <Link
          target="_blank"
          href="https://www.snapchat.com/add/carbik_shop?share_id=qDvooczYqyM&locale=ar-AE"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#8FC963]"
        >
          <FaSnapchatGhost />
        </Link>
        <Link
          target="_blank"
          href="https://x.com/CARBIK_SHOP"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#8FC963]"
        >
          <FaXTwitter />
        </Link>
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100026671786076"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#8FC963]"
        >
          <FaFacebookF />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

import Image from 'next/image';
import Button from '../components/ui/Button';

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-10 relative flex items-center justify-between px-20 h-[480px] bg-[#8FC963]"
    >
      <div className="max-md:hidden relative w-1/2 -top-16 flex items-center justify-center  h-full">
        <Image
          src="/images/contact-img.png"
          fill
          objectFit="cover"
          alt="contact"
          className="-scale-x-100 scale-125"
        />
      </div>
      <div className="flex flex-col  max-md:text-center gap-10">
        <h2 className="text-white font-bold text-[40px]">تواصل معنا</h2>
        <p className="text-white font-medium text-[26px] max-w-[34rem]">
          هل لديك استفسار أو تحتاج إلى خدمة لسيارتك؟ نحن هنا لخدمتك! تواصل معنا بسهولة عبر الهاتف أو
          الواتساب، ودعنا نهتم بسيارتك بأفضل الطرق الاحترافية.
        </p>
        <Button className="bg-white text-[#8FC963] hover:bg-white/70" />
      </div>
    </section>
  );
};

export default Contact;

import BackToHomeBtn from '@/app/components/ui/BackToHomeBtn';
import { getData } from '@/app/hooks/getData';
import BeforeAfterPage from '@/app/sections/BeforeAfterPage';
import PageDeatils from '@/app/sections/PageDeatils';
import { Metadata } from 'next';
import Image from 'next/image';
import { HiOutlineEmojiSad } from 'react-icons/hi';

export async function generateStaticParams() {
  const data = await getData();

  return data.services.map(({ id }: { id: number }) => ({
    serviceId: id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}): Promise<Metadata> {
  const data = await getData();
  const { serviceId } = await params;
  const currentService = data.services.find(
    (service: { id: number }) => service.id === parseInt(serviceId),
  );

  return {
    title: currentService.title,
    description: currentService.description,
  };
}

const page = async ({ params }: { params: Promise<{ serviceId: string }> }) => {
  const data = await getData();
  const { serviceId } = await params;
  const currentService = data.services.find(
    (service: { id: number }) => service.id === parseInt(serviceId),
  );
  if (!currentService) {
    return (
      <div className="min-h-dvh flex flex-col items-center justify-center">
        <BackToHomeBtn />
        <HiOutlineEmojiSad className="text-[35rem]" />
        <h2 className="text-[45px] font-bold text-[#8FC963]">الخدمة غير موجودة</h2>
      </div>
    );
  }
  return (
    <div className="relative min-h-dvh">
      <BackToHomeBtn />
      <section className="pt-44  flex flex-col items-center justify-center gap-12 ">
        <div className="flex flex-col text-center items-center justify-center gap-6">
          <h1 className="md:text-[44px] text-[32px] text-[#8FC963]">{currentService.title}</h1>
          <p className="md:text-[24px] text-[15px] text-center max-2xl:px-16 2xl:max-w-[94rem]">
            نقدم مجموعة متكاملة من الخدمات للحفاظ على سيارتك بأفضل حال، بدءًا من إصلاح الصدمات
            بتقنيات متطورة، والتلميع الاحترافي، وحتى الحماية بالنانو سيراميك وPPF. استمتع بمظهر
            متجدد وحماية تدوم مع خدماتنا عالية الجودة
          </p>
        </div>
        <Image src={currentService.img} alt={currentService.title} width={1000} height={800} />
      </section>
      <PageDeatils
        title={currentService.title}
        description={currentService.description}
        body={currentService.body}
      />
      <BeforeAfterPage media={currentService.media} />
    </div>
  );
};

export default page;

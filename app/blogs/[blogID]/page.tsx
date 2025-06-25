import BackToHomeBtn from '@/app/components/ui/BackToHomeBtn';
import { getData } from '@/app/hooks/getData';
import PageDeatils from '@/app/sections/PageDeatils';
import { Metadata } from 'next';
import Image from 'next/image';
import { HiOutlineEmojiSad } from 'react-icons/hi';

export async function generateStaticParams() {
  const data = await getData();

  return data.blogs.map(({ id }: { id: number }) => ({
    blogID: id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogID: string }>;
}): Promise<Metadata> {
  const data = await getData();
  const { blogID } = await params;
  const currentBlog = data.blogs.find((blog: { id: number }) => blog.id === parseInt(blogID));

  return {
    title: currentBlog.title,
    description: currentBlog.description,
  };
}

const page = async ({ params }: { params: Promise<{ blogID: string }> }) => {
  const data = await getData();
  const { blogID } = await params;
  const currentBlog = data.blogs.find((blog: { id: number }) => blog.id === parseInt(blogID));
  if (!currentBlog) {
    return (
      <div className="relative flex flex-col items-center gap-20 justify-center min-h-dvh">
        <BackToHomeBtn />
        <HiOutlineEmojiSad className="text-[35rem]" />
        <h2 className="text-[45px] font-bold text-[#8FC963]">المقالة غير موجودة</h2>
      </div>
    );
  }
  return (
    <div className="relative min-h-dvh ">
      <BackToHomeBtn />
      <section className="pt-44  flex flex-col items-center justify-center  ">
        <div className="flex flex-col text-center items-center justify-center gap-6">
          <h1 className="md:text-[44px] text-[32px] text-[#8FC963]">{currentBlog.title}</h1>
          <p className="md:text-[24px] text-[15px] text-center max-w-[94rem]">
            {currentBlog.description}
          </p>
        </div>
        <Image
          src={currentBlog.img}
          className="-scale-x-100"
          alt={currentBlog.title}
          width={1000}
          height={800}
        />
      </section>
      <PageDeatils title={currentBlog.title} body={currentBlog.body} />
    </div>
  );
};

export default page;

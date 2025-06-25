import { getData } from '@/app/hooks/getData';
import fs from 'fs';
import { ImageResponse } from 'next/og';
import path from 'path';

export const alt = 'CarBok';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const fontPath = path.resolve(process.cwd(), 'public/fonts/Cairo-Bold.ttf');
const fontData = fs.readFileSync(fontPath);

export default async function Image({ params }: { params: { blogID: string } }) {
  const data = await getData();
  const { blogID } = await params;
  const currentBlog = data.blogs.find((blog: { id: number }) => blog.id === parseInt(blogID));
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_URL}/images/carbik-logo.png')`,
          color: '#FFFFFF',
          fontSize: 48,
          fontFamily: 'Cairo',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '20px',
            borderRadius: '12px',
            gap: '10px',
            maxWidth: '90%',
          }}
        >
          <h1>{currentBlog.title}</h1>
          <p>{currentBlog.description}</p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cairo',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  );
}

import type { MetadataRoute } from 'next';
import { getData } from './hooks/getData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getData();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const services = data.services.map((service: { id: number }) => ({
    url: `${baseUrl}/services/${service.id}`,
  }));
  const blogs = data.blogs.map((blog: { id: number }) => ({
    url: `${baseUrl}/blogs/${blog.id}`,
  }));
  return [...services, ...blogs];
}

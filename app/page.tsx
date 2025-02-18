import { getData } from "./hooks/getData";
import About from "./sections/About";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import OurCustomer from "./sections/OurCustomer";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";

export default async function Home() {
  const data = await getData();
  return (
    <div className="relative overflow-x-hidden">
      <main className="min-h-screen">
        <Hero data={data}/>
        <About data={data.about}/>
        <Services data={data.services}/>
        <OurCustomer/>
        <Blogs data={data.services} />
        <Testimonial data={data.testimonial}/>
        <Contact/>
      </main>
    </div> );
}

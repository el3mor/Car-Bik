import { getData } from "./hooks/getData";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";

export default async function Home() {
  const data = await getData();
  return (
    <div className="relative overflow-x-hidden">
      <Header data={data}/>
      <main className="min-h-screen">
        <Hero data={data}/>
        <About data={data.about}/>
        <Services data={data.services}/>
        <Testimonial data={data.testimonial}/>
        <Contact/>
        <Footer/>
      </main>
    </div> );
}

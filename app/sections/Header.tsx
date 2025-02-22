"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5"


const sideLinks = [
  {
    name: 'الرئيسية',
    href: '/',
  },
  {
    name: 'من نحن',
    href: '#about',
  },
  {
    name: 'خدماتنا',
    href: '#services',
  },
  {
    name: 'المقالات',
    href: '#blogs',
  },
  {
    name:"آراء العملاء",
    href:"#testimonials"
  },
  {
    name: 'تواصل معنا',
    href: '#contact',
  }
]

const Header = () => {
  
  const [activeSection, setActiveSection] = useState('/')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null, 
      rootMargin: "0px",
      threshold: 0.6, 
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          setActiveSection(id === "home" ? "/" : `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={` z-50 fixed w-full top-0 left-0 flex justify-between md:justify-center items-center px-4 md:px-40 gap-12 duration-300 transition-all ${
        isScrolled ? "backdrop-blur-md bg-[#2C2C2C]/70" : "bg-[#2C2C2C]"}`}>
      
      <Image src="/images/carbik-logo.png" alt='Car Bik' width={85} height={138} />
      <nav className='hidden md:flex justify-center items-center gap-10 flex-1   sm:text-base md:text-lg '>
        {sideLinks.map((link) => {
          const isActive = activeSection === link.href
          return (
            <Link key={link.name} onClick={(e) => {e.preventDefault(); handleLinkClick(link.href)}} 
            className={`${isActive && "text-[#8FC963] before:w-full  before:animate-border-appear"} 
            duration-300 transition-all before:border-[#8FC963] before:absolute relative before:border-b-2  before:bottom-0 pb-1`} href={link.href}>
              {link.name}
            </Link>
          )
        })}
      </nav>
      <RxHamburgerMenu className={`text-4xl cursor-pointer md:hidden ${isMenuOpen && "opacity-0"} duration-700 transition-all`} onClick={() => {setIsMenuOpen(true)}}/>
      <div className={`${!isMenuOpen && "hidden"} md:hidden h-dvh w-screen absolute bg-black/50 top-0 left-0 px-4 `}>
        <IoCloseOutline className={`${isMenuOpen && "opacity-1"} text-4xl cursor-pointer absolute top-6 left-4 duration-700 transition-all`} onClick={() => {setIsMenuOpen(false)}}/>
        <nav className='flex flex-col justify-center items-center gap-10 h-full'>
          {sideLinks.map((link) => {
            const isActive = activeSection === link.href
            return (
              <Link key={link.name} onClick={() => {setActiveSection(link.href) ; setIsMenuOpen(false)}} 
              className={`${isActive && "text-[#8FC963] before:w-full  before:animate-border-appear "} 
              duration-300 transition-all before:border-[#8FC963] before:absolute relative before:border-b-2 text-2xl before:bottom-0 pb-1`} href={link.href}>
                {link.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header

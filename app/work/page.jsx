"use client";

import { motion } from "framer-motion";
import React, { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Cybersecurity Website',
    description: "A company website showcasing robust security solutions for businesses, ensuring protection against various cyber threats.",
    stack: [{ name: "React" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: '/assets/work/thumb13.png',
    live: "https://alamatgroup.com/",
    github: "https://github.com/marvinok26/cybersec-website",
    type: 'image'
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'Blog Website',
    description: "A full-featured blog platform built using MongoDB, React, Node.js, providing users with a comprehensive and interactive blogging experience.",
    stack: [{ name: "React.js" }, { name: "Bootstrap" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: '/assets/work/thumb2.png',
    live: "https://blog-website-gray-seven.vercel.app/",
    github: "https://github.com/marvinok26/blog-website1",
    type: 'image'
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Fish-in-Bowl Animation',
    description: "An interactive React application simulating a fishbowl with dynamic water level, showcasing creative user interaction and animation techniques.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
    image: '/assets/work/thumb3.png',
    live: "https://fish-bowl-animation.vercel.app/",
    github: "https://github.com/marvinok26/fish_bowl_animation",
    type: 'image'
  },
  {
    num: '04',
    category: 'mobile',
    title: 'Dating Mobile App',
    description: "A modern dating application with secure authentication, profile matching, and real-time messaging features.",
    stack: [{ name: "React Native" }, { name: "Firebase" }, { name: "Redux" }, { name: "TypeScript" }],
    image: '/assets/work/thumb16.png',
    live: "",
    github: "https://github.com/marvinok26/dating-mobile-app",
    type: 'image'
  },
  {
    num: '05',
    category: 'fullstack',
    title: 'Property Management Platform',
    description: "Comprehensive web application for real estate management, featuring property listings, tenant management, and financial tracking.",
    stack: [{ name: "React.js" }, { name: "MongoDB" }, { name: "Tailwind CSS" }, { name: "Node.js" }, { name: "Fastifyjs" }],
    image: '/assets/work/thumb20.png',
    live: "https://app.payserve.co.ke/",
    github: "https://github.com/marvinok26/property-management-platform",
    type: 'image'
  },
  {
    num: '06',
    category: 'mobile',
    title: 'Crypto Wallet Mobile App',
    description: "Secure mobile cryptocurrency wallet with real-time price tracking, transaction history, and multi-currency support.(In Progress)",
    stack: [{ name: "React Native" }, { name: "Web3.js" }, { name: "Redux" }, { name: "CoinGecko API" }],
    image: '/assets/work/video1.mp4',
    live: "",
    github: "https://github.com/marvinok26/crypto-wallet-mobile-app",
    type: 'video'
  },
  {
    num: '07',
    category: 'frontend',
    title: 'Crypto Website',
    description: "Comprehensive cryptocurrency trading platform with live market data, trading tools, and educational resources.",
    stack: [{ name: "React" }, { name: "Chart.js" }, { name: "Binance API" }, { name: "Tailwind CSS" }],
    image: '/assets/work/thumb15.png',
    live: "https://crypto-site-tau.vercel.app/",
    github: "https://github.com/marvinok26/crypto-trading-website",
    type: 'image'
  },
  {
    num: '08',
    category: 'fullstack',
    title: 'Travel Booking Platform',
    description: "Full-stack travel booking website with destination recommendations, hotel reservations, and personalized itinerary planning. (In Progress)",
    stack: [{ name: "Laravel" }, { name: "MySQL" }, { name: "Alpine" }, { name: "Livewire" }, { name: "Filament" }],
    image: '/assets/work/thumb14.png',
    live: "",
    github: "https://github.com/marvinok26/travel-booking-platform",
    type: 'image'
  },
  {
    num: '09',
    category: 'fullstack',
    title: 'Food Delivery Website',
    description: "Comprehensive food delivery platform with restaurant listings, order tracking, and integrated payment system.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "PostgreSQL" }, { name: "Stripe" }],
    image: '/assets/work/thumb17.png',
    live: "https://locodeli.vercel.app/",
    github: "https://github.com/marvinok26/food-delivery-website",
    type: 'image'
  },
  {
    num: '10',
    category: 'fullstack',
    title: 'GIS Planning Company Website',
    description: "Advanced Geographic Information System (GIS) platform for urban planning, featuring interactive maps and data visualization.",
    stack: [{ name: "Next.js" }, { name: "Mapbox GL" }, { name: "PostgreSQL" }, { name: "PostGIS" }],
    image: '/assets/work/thumb19.png',
    live: "https://rpc-website-marvinok26s-projects.vercel.app/",
    github: "https://github.com/marvinok26/gis-planning-website",
    type: 'image'
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const videoRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);

    // Pause any playing video when slide changes
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const renderMedia = (project) => {
    if (project.type === 'video') {
      return (
        <video 
          ref={videoRef}
          src={project.image} 
          className="w-full h-full object-cover"
          controls
          autoPlay
          loop
          muted
          playsInline
        />
      );
    }
    return (
      <Image 
        src={project.image} 
        fill 
        className="object-contain" 
        alt={project.title} 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }} 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project title */}
              <div className="text-3xl font-semibold">{project.title}</div>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li 
                      key={index} 
                      className="text-xl text-accent"
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live || "#"} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github project button */}
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full"></div>
                      {/* image or video */}
                      <div className="relative w-full h-full bg-black/10 z-10 flex items-center justify-center">
                        {renderMedia(project)}
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider button */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" 
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
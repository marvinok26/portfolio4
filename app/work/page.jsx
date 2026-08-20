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
    category: 'fullstack',
    title: 'Payserve Platform',
    description: "Property and utility billing ecosystem built as ~19 Node services behind React portals for residents, landlords and revenue teams — invoicing, levy management, move-in workflows, water and power metering, messaging and M-Pesa settlement, coordinated over RabbitMQ and BullMQ queues.",
    stack: [{ name: "Node.js" }, { name: "Express" }, { name: "Fastify" }, { name: "React" }, { name: "MongoDB" }, { name: "RabbitMQ" }, { name: "BullMQ" }, { name: "M-Pesa" }],
    image: '/assets/work/payserve.jpg',
    live: "https://payserve.co.ke/",
    github: "https://github.com/marvinok26",
    type: 'image'
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'Lyra CMS',
    description: "Open-source multi-tenant CMS on Orchard Core — simpler to run than WordPress or Shopify, but built for the same workload: content, themes, and installable modules that ship their own admin screens, including commerce, onboarding and an AI page builder.",
    stack: [{ name: "ASP.NET Core" }, { name: ".NET 10" }, { name: "C#" }, { name: "Orchard Core" }, { name: "SQL Server" }, { name: "NLog" }],
    image: '/assets/work/lyra-cms.jpg',
    live: "",
    github: "https://github.com/marvinok26/Lyra-CMS",
    type: 'image'
  },
  {
    num: '03',
    category: 'fullstack',
    title: 'Podium',
    description: "Beauty-industry marketplace and business platform for African salons and professionals, spanning a React marketing site, a Fastify content backend, a multi-platform POS, and a standalone WhatsApp Business messaging service.",
    stack: [{ name: "React 19" }, { name: "Vite" }, { name: "Fastify" }, { name: "Sequelize" }, { name: "MySQL" }, { name: "Express" }, { name: "WhatsApp API" }],
    image: '/assets/work/podium.jpg',
    live: "https://podium.co.ke/",
    github: "https://github.com/LiquidHackGroup/podium.POS",
    type: 'image'
  },
  {
    num: '04',
    category: 'fullstack',
    title: 'Imara Circle',
    description: "Investment-club (chama) platform digitising pooled contributions, democratic voting, wallet management, loans and financial reporting across three role-based portals, with an Express/Fastify API and a Next.js partner dashboard.",
    stack: [{ name: "Node.js" }, { name: "Express" }, { name: "Fastify" }, { name: "Next.js 15" }, { name: "React 19" }, { name: "M-Pesa" }],
    image: '/assets/work/imara-circle.jpg',
    live: "",
    github: "https://github.com/marvinok26/imara-backend",
    type: 'image'
  },
  {
    num: '05',
    category: 'fullstack',
    title: 'PangoQ',
    description: "Travel planning and group-savings platform where travellers build trips together and save toward them as a group, with itinerary planning, events, wallet contributions and M-Pesa webhooks — shipped through a Dockerised Jenkins pipeline.",
    stack: [{ name: "Laravel 12" }, { name: "PHP 8.2" }, { name: "Livewire" }, { name: "Alpine.js" }, { name: "Tailwind 4" }, { name: "MySQL" }, { name: "Docker" }, { name: "Jenkins" }],
    image: '/assets/work/pangoq.jpg',
    live: "https://pangoq.com/",
    github: "https://github.com/marvinok26/PangoQ",
    type: 'image'
  },
  {
    num: '06',
    category: 'backend',
    title: 'Match Social Platform',
    description: "Social-discovery platform pairing a Go 1.23 service layer with a Flutter client — OTP auth, profiles, discovery and swipes, messaging, reels and stories, and moderation, backed by Redis, pre-signed media uploads and rate limiting.",
    stack: [{ name: "Go" }, { name: "Gin" }, { name: "Flutter" }, { name: "PostgreSQL" }, { name: "Redis" }, { name: "S3/MinIO" }],
    image: '/assets/work/thumb16.png',
    live: "",
    github: "https://github.com/marvinok26/dating-app-main",
    type: 'image'
  },
  {
    num: '07',
    category: 'fullstack',
    title: 'Hospital Appointment System',
    description: "Clean-architecture ASP.NET Core Web API with a Next.js client: JWT auth with idle-timeout auto-logout, MFA, role-based access, SignalR real-time updates, Redis caching, and rate limiting with CORS and CSRF protection.",
    stack: [{ name: "ASP.NET Core" }, { name: ".NET 10" }, { name: "C#" }, { name: "EF Core" }, { name: "SignalR" }, { name: "Redis" }, { name: "Next.js" }],
    image: '/assets/work/hospital-appointments.jpg',
    live: "",
    github: "https://github.com/marvinok26/doctor-appointment-mgt-system",
    type: 'image'
  },
  {
    num: '08',
    category: 'backend',
    title: 'Enterprise Employee Management',
    description: "HR platform structured around clean architecture and CQRS — MediatR request pipelines, FluentValidation, EF Core persistence and an xUnit-tested domain core.",
    stack: [{ name: "ASP.NET Core" }, { name: ".NET 10" }, { name: "C#" }, { name: "MediatR" }, { name: "FluentValidation" }, { name: "EF Core" }, { name: "xUnit" }],
    image: '/assets/work/employee-management.jpg',
    live: "",
    github: "https://github.com/marvinok26/Ent-employee-mgt-system",
    type: 'image'
  },
  {
    num: '09',
    category: 'backend',
    title: 'E-Commerce API System',
    description: "Layered commerce API covering catalogue, cart, order and payment flows, with domain, application and infrastructure separated behind a tested core and JWT-secured endpoints.",
    stack: [{ name: "ASP.NET Core" }, { name: ".NET 10" }, { name: "C#" }, { name: "EF Core" }, { name: "SQL Server" }, { name: "xUnit" }],
    image: '/assets/work/ecommerce-api.jpg',
    live: "",
    github: "https://github.com/marvinok26/ecommerce-api",
    type: 'image'
  },
  {
    num: '10',
    category: 'fullstack',
    title: 'SNR Hearing Centre',
    description: "Audiology clinic management system covering patient records, appointment scheduling, clinical notes, invoicing and PDF report generation, with granular role and permission control and Chart.js practice analytics.",
    stack: [{ name: "Laravel 12" }, { name: "PHP 8.2" }, { name: "Vue 3" }, { name: "Chart.js" }, { name: "Tailwind 4" }, { name: "MySQL" }],
    image: '/assets/work/snr-audiology.jpg',
    live: "",
    github: "https://github.com/marvinok26/Audiology",
    type: 'image'
  },
  {
    num: '11',
    category: 'fullstack',
    title: 'Audium Healthcare Management System',
    description: "Multi-portal audiological-healthcare platform (admin, employee, client) with JWT/MFA auth, role-based access, layered architecture, and PostgreSQL + GORM data modeling.",
    stack: [{ name: "Go" }, { name: "Gin" }, { name: "React/Wails" }, { name: "PostgreSQL" }, { name: "GORM" }],
    image: '/assets/work/thumb20.png',
    live: "",
    github: "https://github.com/marvinok26",
    type: 'image'
  },
  {
    num: '12',
    category: 'fullstack',
    title: 'UlterPOS',
    description: "Multi-tenant point-of-sale platform serving retail, salons, restaurants, hotels, car spares, electronics and hardware verticals, paired with a marketing and CMS front end.",
    stack: [{ name: "Laravel" }, { name: "PHP" }, { name: "Livewire" }, { name: "MySQL" }, { name: "Tailwind CSS" }],
    image: '/assets/work/ulterpos.jpg',
    live: "",
    github: "https://github.com/marvinok26/ulterpos",
    type: 'image'
  },
  {
    num: '13',
    category: 'fullstack',
    title: 'PhoneHouse Store',
    description: "E-commerce storefront for phones, laptops and accessories with an automated airtime top-up flow that delivers credit to the buyer's number straight after payment, plus wishlist, cart and countrywide delivery.",
    stack: [{ name: "Laravel" }, { name: "PHP" }, { name: "MySQL" }, { name: "Tailwind CSS" }, { name: "M-Pesa" }],
    image: '/assets/work/phonehouse.jpg',
    live: "https://phonehouse.co.ke/",
    github: "https://github.com/marvinok26/phonehouse_store",
    type: 'image'
  },
  {
    num: '14',
    category: 'fullstack',
    title: 'Cardinal & Atricare POS',
    description: "Production point-of-sale deployments for phone retail and healthcare providers — stock control, sales and receipting, and operational reporting, with an Electron desktop build for counter use.",
    stack: [{ name: "Laravel" }, { name: "PHP" }, { name: "MySQL" }, { name: "Electron" }],
    image: '/assets/work/retail-pos.jpg',
    live: "https://pos.cardinalphones.co.ke/",
    github: "https://github.com/marvinok26/atricare_pos",
    type: 'image'
  },
  {
    num: '15',
    category: 'fullstack',
    title: 'Alamat Group',
    description: "Corporate site for a Nairobi IT and cybersecurity firm — managed security services, a 24/7 SOC offering, service catalogue and careers — rebuilt on Laravel 13 with a React front end compiled through Vite.",
    stack: [{ name: "Laravel 13" }, { name: "PHP 8.2" }, { name: "React" }, { name: "Vite" }, { name: "Tailwind 4" }],
    image: '/assets/work/alamat.jpg',
    live: "https://alamatgroup.com/",
    github: "https://github.com/marvinok26/alamat",
    type: 'image'
  },
  {
    num: '16',
    category: 'fullstack',
    title: 'Ravishing Radish Caterers',
    description: "Premium catering site with a database-driven CMS behind it — menus, gallery, careers and event bookings, all editable through an admin panel reached by PIN rather than a visible login form.",
    stack: [{ name: "Laravel 12" }, { name: "PHP 8.2" }, { name: "Livewire" }, { name: "Vue 3" }, { name: "Tailwind 4" }, { name: "MySQL" }],
    image: '/assets/work/ravishing-caterers.jpg',
    live: "https://ravishingcaterers.com/",
    github: "https://github.com/marvinok26/ravishing-caterers",
    type: 'image'
  },
  {
    num: '17',
    category: 'backend',
    title: 'Tressor Tours',
    description: "Tours and travel booking platform with a multi-gateway payment layer spanning PayPal, Pesapal and M-Pesa STK push, covering package management, customer bookings and transaction reconciliation.",
    stack: [{ name: "Laravel 12" }, { name: "PHP 8.2" }, { name: "PayPal" }, { name: "Pesapal" }, { name: "M-Pesa" }, { name: "MySQL" }],
    image: '/assets/work/tressor-tours.jpg',
    live: "",
    github: "https://github.com/marvinok26/tressortours",
    type: 'image'
  },
  {
    num: '18',
    category: 'fullstack',
    title: 'DevSpark CMS',
    description: "Agency content platform behind UlterNet Systems — page editor, project showcase with image and video support, blog with categories and search, and contact-message management, all under a PIN-gated invisible admin.",
    stack: [{ name: "Laravel 12" }, { name: "PHP 8.4" }, { name: "Livewire" }, { name: "Vue 3" }, { name: "Tailwind 4" }, { name: "TinyMCE" }],
    image: '/assets/work/devspark.jpg',
    live: "",
    github: "https://github.com/marvinok26/Ceris",
    type: 'image'
  },
  {
    num: '19',
    category: 'backend',
    title: 'AXIS API',
    description: "JWT-secured REST API service layer powering the AXIS product suite, with token-based auth, Sanctum sessions and a normalised MySQL schema.",
    stack: [{ name: "Laravel 9" }, { name: "PHP 8" }, { name: "JWT" }, { name: "Sanctum" }, { name: "MySQL" }],
    image: '/assets/work/axis-api.jpg',
    live: "",
    github: "https://github.com/AXIS-LLC/axis-api",
    type: 'image'
  },
  {
    num: '20',
    category: 'backend',
    title: 'M-Pesa Daraja GlobalService',
    description: "Multi-tenant M-Pesa integration API supporting C2B validation/confirmation, STK push, callback/webhook processing, and full transaction lifecycle management with reconciliation and stats aggregation.",
    stack: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }, { name: "Mongoose" }],
    image: '/assets/work/thumb15.png',
    live: "",
    github: "https://github.com/marvinok26",
    type: 'image'
  },
  {
    num: '21',
    category: 'mobile',
    title: 'Mobo Eats',
    description: "All-in-one on-demand commerce platform for ordering meals, groceries, and supplements with real-time order tracking, WebSocket updates, map-based delivery, and personalized recommendations.",
    stack: [{ name: "Go" }, { name: "Gin" }, { name: "Flutter" }, { name: "PostgreSQL" }, { name: "WebSockets" }, { name: "Maps" }],
    image: '/assets/work/thumb17.png',
    live: "",
    github: "https://github.com/marvinok26",
    type: 'image'
  },
  {
    num: '22',
    category: 'mobile',
    title: 'Payserve Mobile App',
    description: "Mobile counterpart of the Payserve system delivering invoicing, resident operations, payment flows, and communication features with Tailwind-styled React Native UI components.",
    stack: [{ name: "React Native" }, { name: "Node.js" }, { name: "Tailwind" }, { name: "Expo" }],
    image: '/assets/work/video1.mp4',
    live: "",
    github: "https://github.com/marvinok26",
    type: 'video'
  },
  {
    num: '23',
    category: 'fullstack',
    title: 'Atrics Media',
    description: "Media and content management platform with role-aware operator dashboards, publishing workflows and geolocation-verified sign-in.",
    stack: [{ name: "Laravel" }, { name: "PHP" }, { name: "MySQL" }, { name: "Bootstrap" }],
    image: '/assets/work/atrics-media.jpg',
    live: "https://atricsmedia.com/",
    github: "https://github.com/marvinok26/atrics_media",
    type: 'image'
  },
  {
    num: '24',
    category: 'frontend',
    title: 'Real Plan',
    description: "React client portal for planning workflows, built on a Tailwind design system with a component-driven layout and a static production build.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
    image: '/assets/work/real-plan.jpg',
    live: "",
    github: "https://github.com/marvinok26/rpc-website",
    type: 'image'
  },
  {
    num: '25',
    category: 'fullstack',
    title: 'GIS Planning Platform',
    description: "Advanced Geographic Information System platform for urban planning, featuring interactive Mapbox maps, spatial data visualization, and PostGIS-powered geospatial queries.",
    stack: [{ name: "Next.js" }, { name: "Mapbox GL" }, { name: "PostgreSQL" }, { name: "PostGIS" }],
    image: '/assets/work/thumb19.png',
    live: "https://rpc-website-marvinok26s-projects.vercel.app/",
    github: "https://github.com/marvinok26/gis-planning-website",
    type: 'image'
  },
  {
    num: '26',
    category: 'fullstack',
    title: 'Food Delivery Platform',
    description: "Comprehensive food delivery platform with restaurant listings, real-time order tracking, and Stripe-integrated payment processing.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "PostgreSQL" }, { name: "Stripe" }],
    image: '/assets/work/thumb14.png',
    live: "https://locodeli.vercel.app/",
    github: "https://github.com/marvinok26/food-delivery-website",
    type: 'image'
  },
  {
    num: '27',
    category: 'frontend',
    title: 'Crypto Trading Website',
    description: "Comprehensive cryptocurrency trading platform with live market data via Binance API, Chart.js visualizations, trading tools, and educational resources.",
    stack: [{ name: "React" }, { name: "Chart.js" }, { name: "Binance API" }, { name: "Tailwind CSS" }],
    image: '/assets/work/thumb3.png',
    live: "https://crypto-site-tau.vercel.app/",
    github: "https://github.com/marvinok26/crypto-trading-website",
    type: 'image'
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const videoRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
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
      animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.3, ease: "easeIn" } }}
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
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}{index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
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
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full"></div>
                    <div className="relative w-full h-full bg-black/10 z-10 flex items-center justify-center">
                      {renderMedia(project)}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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

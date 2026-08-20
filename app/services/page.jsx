"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    num: '01',
    title: 'Backend & Distributed Systems',
    description: 'Design and build high-performance backend systems in Go (Gin, gRPC), ASP.NET Core and Node.js (Express, Fastify). Specializing in scalable microservices, event-driven architectures over RabbitMQ and BullMQ, low-latency APIs, and concurrent systems for fintech, healthcare, property management and retail.',
    href: "/contact",
  },
  {
    num: '02',
    title: 'Full Stack Web Development',
    description: 'End-to-end web solutions using React, Vue.js, Next.js, Livewire and TypeScript on the frontend, backed by Go, .NET, Node.js, Python or Laravel. Building secure, scalable, production-grade applications with clean API contracts, clean-architecture service layers and seamless UX.',
    href: "/contact",
  },
  {
    num: '03',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile development with Flutter and React Native. Building performant, production-ready apps with real-time features, push notifications, payment integrations, and seamless backend connectivity. Published on App Store and Google Play.',
    href: "/contact",
  },
  {
    num: '04',
    title: 'Cloud & DevOps Solutions',
    description: 'Containerization with Docker, orchestration with Kubernetes, and CI/CD automation using Jenkins and GitHub Actions. Infrastructure on AWS (EC2, S3, SNS/SQS) with Nginx reverse-proxy, monitoring via Prometheus, Grafana, and OpenTelemetry.',
    href: "/contact",
  },
  {
    num: '05',
    title: 'Database Design & Architecture',
    description: 'Expert data modeling across PostgreSQL, MongoDB, MySQL, SQL Server and Redis, with EF Core, GORM, Eloquent and Mongoose. Designing efficient schemas, optimizing query performance, implementing caching strategies, and ensuring data integrity under growing production load.',
    href: "/contact",
  },
  {
    num: '06',
    title: 'Technical Leadership & Consulting',
    description: 'Strategic technical guidance for startups and enterprises: architecture reviews, technology stack selection, team process improvement, API design standards, and spec-driven development practices to accelerate delivery and reduce engineering risk.',
    href: "/contact",
  }
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8, duration: 0.3, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services

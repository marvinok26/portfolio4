"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    num: '01',
    title: 'Full Stack Web Development',
    description: 'Comprehensive web solutions using modern technologies like React, Next.js, Node.js, and Python (Django/Flask). Creating responsive, scalable applications with robust backend infrastructure and seamless frontend experiences.',
    href: "/contact",
  },
  {
    num: '02',
    title: 'UI/UX Design & Prototyping',
    description: 'Designing intuitive and visually appealing interfaces using Figma, with a focus on user-centered design principles. Transforming complex ideas into clean, functional, and engaging digital experiences.',
    href: "/contact",
  },
  {
    num: '03',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile application development using React Native. Creating performant, user-friendly mobile solutions with seamless integration of backend services, state management, and cloud technologies.',
    href: "/contact",
  },
  {
    num: '04',
    title: 'Cloud & DevOps Solutions',
    description: 'Implementing robust cloud infrastructure and DevOps practices using AWS, Docker, and CI/CD pipelines. Optimizing application performance, scalability, and deployment workflows for enterprise-grade solutions.',
    href: "/contact",
  },
  {
    num: '05',
    title: 'Database Design & Management',
    description: 'Expert database solutions using MySQL, MongoDB, and PostgreSQL. Designing efficient data models, implementing advanced querying techniques, and ensuring data integrity and performance.',
    href: "/contact",
  },
  {
    num: '06',
    title: 'Technical Consulting',
    description: 'Providing strategic technical guidance for digital transformation. Offering expertise in technology stack selection, architectural design, and optimizing development processes for startups and enterprises.',
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
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
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
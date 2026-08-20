"use client";

import { FaJs, FaReact, FaNodeJs, FaPhp, FaAws, FaMicrosoft, FaGitAlt, FaLinux } from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiPython, SiMysql, SiMongodb,
  SiPostgresql, SiDocker, SiTypescript,
  SiGo, SiVuedotjs, SiRedis, SiKubernetes, SiFlutter, SiGrafana,
  SiDotnet, SiSharp, SiLaravel, SiLivewire, SiAlpinedotjs,
  SiExpress, SiFastify, SiRabbitmq, SiVite, SiElectron,
  SiJenkins, SiNginx, SiGithubactions, SiPrometheus
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import './page.css'

// About data
const about = {
  title: "Professional Profile",
  description: "Technical Lead building distributed systems and high-performance backend architectures across Go, .NET and Node.js. Experienced in scalable microservices, low-latency APIs, clean-architecture service design, and cloud-native infrastructure spanning fintech, healthcare, property management, retail and social platforms.",
  info: [
    { fieldName: "Name", fieldValue: "Marvin Okongo" },
    { fieldName: "Location", fieldValue: "Nairobi, Kenya" },
    { fieldName: "Phone", fieldValue: "(+254) 720 538 053" },
    { fieldName: "Email", fieldValue: "okongomarvin971@gmail.com" },
    { fieldName: "GitHub", fieldValue: "github.com/marvinok26" },
    { fieldName: "YouTube", fieldValue: "youtube.com/@arvin_codes" },
  ]
};

// Experience data
const experience = {
  title: 'Professional Experience',
  description: "5+ years building enterprise applications, payment platforms, property management systems, and business integrations across fintech, retail, education, and property sectors.",
  items: [
    {
      company: "Payserve Limited",
      position: "Technical Lead / DevOps",
      duration: "03/2024 – Present",
      highlights: [
        "Build a cloud-based property management platform letting landlords and property managers run residential and commercial portfolios from one system",
        "Design REST APIs for authentication, payment processing, inventory management, and asynchronous background jobs",
        "Implement enterprise authentication with RBAC, MFA, audit logging, and session security",
        "Improve data access patterns across MongoDB and PostgreSQL to absorb rising transaction volumes",
        "Deliver client solutions across Laravel, .NET, JavaScript, and Node.js environments, integrating third-party payment providers and business services"
      ]
    },
    {
      company: "Zetech University",
      position: "System Administrator / Developer",
      duration: "03/2026 – 06/2026",
      highlights: [
        "Built integrations synchronizing data between Moodle, the Student Management System, Microsoft Dynamics 365 Business Central, and internal university systems",
        "Built an automated suspension engine synchronizing finance and academic status across systems",
        "Corrected over 38,000 inconsistent usernames in production without downtime",
        "Automated synchronization processes that previously required manual intervention"
      ]
    },
    {
      company: "Podium Streak",
      position: "Software Engineer / DevOps",
      duration: "11/2022 – 01/2024",
      highlights: [
        "Developed a cloud-based POS platform for salons, barbershops, supermarkets, restaurants, pharmacies, and other retail businesses covering sales, inventory, payments, and financial management",
        "Built backend services and scalable REST APIs using ASP.NET Core (C#)",
        "Integrated QuickBooks, KRA eTIMS, and Business Central for accounting, tax compliance, and ERP synchronization",
        "Implemented local and international payment integrations, including reusable multi-tenant M-Pesa payment services",
        "Designed contract-first APIs enabling parallel frontend and backend development",
        "Implemented background jobs for invoice synchronization, payment callbacks, notifications, and image processing"
      ]
    },
    {
      company: "Belva Digital",
      position: "Software Engineer",
      duration: "02/2022 – 11/2022",
      highlights: [
        "Developed Laravel-based business systems and administration portals",
        "Built REST APIs consumed by web applications",
        "Designed relational database schemas using MySQL and PostgreSQL",
        "Delivered client solutions across Laravel, Go, and Node.js environments",
        "Participated in deployments, production support, and feature delivery"
      ]
    },
    {
      company: "Deveint Limited",
      position: "Software Engineer",
      duration: "04/2021 – 01/2022",
      highlights: [
        "Built backend services using Go (Gin) for business applications consumed by Flutter, React, and Next.js clients",
        "Designed scalable backend architectures and optimized SQL database performance",
        "Developed workflow automation tools supporting internal business operations",
        "Supported production deployments and ongoing maintenance"
      ]
    }
  ]
};

// Education data
const education = {
  title: 'Educational Background',
  description: "Comprehensive training in Full Stack Software Development and Business Information Technology, grounded in both practical engineering and systems thinking.",
  items: [
    {
      institution: "Moringa School",
      degree: "Full Stack Software Development Certificate",
      duration: "12/2023 – 06/2024",
    },
    {
      institution: "Technical University of Kenya",
      degree: "BSc. Business Information Technology",
      duration: "06/2019 – 12/2023",
    }
  ]
};

// Certifications data
const certifications = {
  title: "Certifications",
  description: "Professional certifications validating expertise in cloud-native systems, containerization, and backend development.",
  items: [
    { name: "Kubernetes and Cloud Native Essentials", issuer: "Linux Foundation" },
    { name: "Mastering Go", issuer: "Udemy" },
    { name: "Docker & Kubernetes Essentials", issuer: "Udemy" },
    { name: "API Programming with FastAPI & Flask", issuer: "Udemy" },
  ]
};

// Additional strengths
const strengths = [
  {
    title: "Systems Engineering",
    body: "Strong understanding of concurrency, memory efficiency, and high-performance backend design using Go — goroutines, channels, and context handling."
  },
  {
    title: "Clean Architecture on .NET",
    body: "Builds ASP.NET Core services with layered domain/application/infrastructure separation, CQRS via MediatR, FluentValidation pipelines, EF Core persistence, and xUnit-tested domain logic."
  },
  {
    title: "Platform Engineering",
    body: "Experienced building developer tools, internal frameworks, and CLI utilities (Cobra, Viper) to streamline workflows and reduce boilerplate."
  },
  {
    title: "Reliability & API Design",
    body: "Focused on secure, observable, production-grade API systems with robust error handling, structured logging, and monitoring via Prometheus/Grafana/OpenTelemetry."
  },
];

// Skills data
const skills = {
  title: "Technical Skills",
  description: "Specialized across backend systems, .NET and Go services, frontend, mobile, databases, messaging, and cloud infrastructure",
  skillList: [
    // Languages
    { icon: <SiGo />, name: "Go (Golang)" },
    { icon: <SiSharp />, name: "C#" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiPython />, name: "Python" },
    { icon: <FaPhp />, name: "PHP" },
    // Backend frameworks
    { icon: <SiDotnet />, name: ".NET / ASP.NET Core" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiFastify />, name: "Fastify" },
    { icon: <SiLaravel />, name: "Laravel" },
    // Frontend
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiVuedotjs />, name: "Vue.js" },
    { icon: <SiLivewire />, name: "Livewire" },
    { icon: <SiAlpinedotjs />, name: "Alpine.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiVite />, name: "Vite" },
    // Mobile & desktop
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <FaReact />, name: "React Native" },
    { icon: <SiElectron />, name: "Electron" },
    // Data
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaMicrosoft />, name: "SQL Server" },
    { icon: <SiRedis />, name: "Redis" },
    // Messaging & integrations
    { icon: <SiRabbitmq />, name: "RabbitMQ" },
    { icon: <FaNodeJs />, name: "M-Pesa / Daraja" },
    // DevOps & tooling
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiJenkins />, name: "Jenkins" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <SiNginx />, name: "Nginx" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiPrometheus />, name: "Prometheus" },
    { icon: <SiGrafana />, name: "Grafana" },
  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.8, duration: 0.3, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xl:h-[calc(100dvh-var(--header-height-xl))] xl:min-h-0 xl:overflow-hidden"
    >
      <div className="container mx-auto xl:h-full">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] xl:h-full xl:min-h-0">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 xl:h-fit xl:shrink-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full xl:min-h-0 xl:h-full xl:overflow-hidden">
            {/* Experience Tab */}
            <TabsContent value="experience" className="w-full xl:h-full xl:overflow-hidden">
              <div className="flex flex-col gap-[30px] text-center xl:text-left xl:h-full xl:min-h-0">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px] xl:h-auto xl:flex-1 xl:min-h-0">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center gap-3"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-semibold">{item.position}</h3>
                          <span className="text-accent">{item.duration}</span>
                        </div>
                        <p className="text-white/60 font-medium">{item.company}</p>
                        <ul className="list-disc list-inside text-white/60 text-sm">
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full xl:h-full xl:overflow-hidden">
              <div className="flex flex-col gap-[30px] text-center xl:text-left xl:h-full xl:min-h-0">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px] xl:h-auto xl:flex-1 xl:min-h-0">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center gap-3"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-semibold">{item.degree}</h3>
                          <span className="text-accent">{item.duration}</span>
                        </div>
                        <p className="text-white/60 font-medium">{item.institution}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Certifications Tab */}
            <TabsContent value="certifications" className="w-full xl:h-full xl:overflow-hidden">
              <div className="flex flex-col gap-[30px] text-center xl:text-left xl:h-full xl:min-h-0">
                <h3 className="text-4xl font-bold">{certifications.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{certifications.description}</p>
                <ScrollArea className="h-[400px] xl:h-auto xl:flex-1 xl:min-h-0">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {certifications.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center gap-3"
                      >
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-accent font-medium">{item.issuer}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full h-full xl:overflow-hidden">
              <div className="flex flex-col gap-[30px] xl:h-full xl:min-h-0">
                <div className="flex flex-col gap-[30px] text-center xl:text-left xl:shrink-0">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ScrollArea className="xl:h-auto xl:flex-1 xl:min-h-0">
                <ul className="skills-grid xl:gap-[30px] gap-4 xl:pr-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group mt-5">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="w-full text-center xl:text-left xl:h-full xl:overflow-hidden">
              <div className="flex flex-col gap-[30px] xl:h-full xl:min-h-0">
                <div className="flex flex-col gap-[30px] xl:shrink-0">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                </div>
                <ScrollArea className="xl:h-auto xl:flex-1 xl:min-h-0">
                <div className="flex flex-col gap-[30px] xl:pr-4">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4 bg-[#232329] p-4 rounded-lg"
                    >
                      <span className="text-accent font-semibold whitespace-nowrap">{item.fieldName}:</span>
                      <span className="text-white/80 break-all">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
                {/* Additional Strengths */}
                <h4 className="text-2xl font-bold mt-2">Additional Strengths</h4>
                <ul className="flex flex-col gap-4 max-w-[620px] mx-auto xl:mx-0">
                  {strengths.map((s, index) => (
                    <li key={index} className="bg-[#232329] p-5 rounded-lg">
                      <span className="text-accent font-semibold">{s.title}: </span>
                      <span className="text-white/70 text-sm">{s.body}</span>
                    </li>
                  ))}
                </ul>
                </div>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;

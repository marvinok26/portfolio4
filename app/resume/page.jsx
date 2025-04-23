"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPhp, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiBootstrap, SiPython, SiMysql, SiMongodb, SiPostgresql, SiDocker, SiAmazonaws, SiTypescript, SiDjango, SiFlask, SiLaravel, SiFilament } from "react-icons/si";
import { Tabs as RadixTabs } from "@radix-ui/react-tabs";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import './page.css'

// About data
const about = {
  title: "Professional Profile",
  description: "Results-driven software developer with experience in modern web and mobile technologies. Proficient in JavaScript, Python, PHP, and Node.js ecosystems including React, React Native, Laravel, and Fastify.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Marvin Okongo",
    },
    {
      fieldName: "Location",
      fieldValue: "Nairobi, Kenya",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+254) 738 376 991",
    },
    {
      fieldName: "Email",
      fieldValue: "marvinsammyke@gmail.com",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "https://www.linkedin.com/in/marvin-okongo-96b924233/",
    },
    {
      fieldName: "GitHub",
      fieldValue: "github.com/marvinok26",
    },
  ]
};

// Experience data
const experience = {
  title: 'Professional Experience',
  description: "Demonstrated track record of delivering high-impact software solutions across diverse technological landscapes, from startups to established enterprises.",
  items: [
    {
      company: "Pay Serve Limited",
      position: "Software Developer",
      duration: "04/2024 – present",
      highlights: [
        "Developed React and React Native applications",
        "Implemented MongoDB database solutions",
        "Built CI/CD pipelines using Jenkins",
        "Containerized applications with Docker",
        "Deployed on AWS infrastructure"
      ]
    },
    {
      company: "Belva Digital",
      position: "Software Developer",
      duration: "12/2022 – 03/2024",
      highlights: [
        "Developed web applications using Python and Laravel",
        "Designed MySQL database solutions",
        "Created and customized WordPress sites",
        "Optimized database queries and application performance",
        "Implemented responsive UI/UX solutions"
      ]
    },
    {
      company: "Deveint Limited",
      position: "Software Developer",
      duration: "07/2022 – 10/2022",
      highlights: [
        "Administered network infrastructure",
        "Developed React Native mobile applications",
        "Created WordPress sites",
        "Built custom PHP/Laravel applications",
        "Assisted in cloud migration projects"
      ]
    }
  ]
};

// Education data
const education = {
  title: 'Educational Background',
  description: "Comprehensive training in Full Stack, Mobile, Web Development, and Business Information Technology, equipping myself with cutting-edge digital solutions skills.",
  items: [
    {
      institution: "Moringa School",
      degree: "Full Stack Software Development",
      duration: "12/2023 – 06/2024",
    },
    {
      institution: "Technical University of Kenya",
      degree: "Business Information Technology",
      duration: "10/2019 – 12/2023",
    }
  ]
};

//skills data
const skills = {
  title: "My skills",
  description: "Specialized in a range of essential tools and technologies that make me a master of my art",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <SiPython />,
      name: "python"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiBootstrap />,
      name: "bootstrap"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiMysql />,
      name: "MySQL"
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB"
    },
  ]
};

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience Tab */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
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
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
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

            {/* skills */}
<TabsContent value="skills" className="w-full h-full">
  <div className="flex flex-col gap-[30px]">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
    </div>
    <ul className="skills-grid xl:gpa-[30px] gap-4">
      {skills.skillList.map((skill, index) => {
        return <li key={index}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group mt-5">
                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="capitalize">{skill.name} </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      })}
    </ul>
  </div>
</TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex items-center justify-center xl:justify-start gap-4 bg-[#232329] p-4 rounded-lg"
                    >
                      <span className="text-accent font-semibold">{item.fieldName}:</span>
                      <span className="text-white/80">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;
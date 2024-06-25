"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiBootstrap, SiPython, SiMysql, SiMongodb } from "react-icons/si";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import './page.css'


// abaout data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat iure molestias hic necessitatibus tenetur?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Marvin Okongo",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+254) 720538053",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "marvin.ok26",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Kenyan",
    },
    {
      fieldName: "Email",
      fieldValue: "okongomarvin971@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Swahili, English, Swedish ",
    },
  ]
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat facere minus incidunt. Explicabo, omnis.",
  items: [
    {
      company: "Upwork",
      position: "Full Stack Developer",
      duration: "2023 - present",
    },
    {
      company: "Deveint Ltd.",
      position: "Mobile App Developer",
      duration: "2022 - 2023",
    },
    {
      company: "Harnssen Group Ltd.",
      position: "Web Developer",
      duration: "2020 - 2022",
    },
    {
      company: "E-commerce Startup.",
      position: "Freelance Web Developer",
      duration: "2019 - 2020",
    },
    {
      company: "Self Employed",
      position: "Web Developer",
      duration: "2019",
    },
    {
      company: "Self Employed",
      position: "Web Developer",
      duration: "2019",
    },
    
  ]
};

//education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat facere minus incidunt. Explicabo, omnis.",
  items: [
    {
      insitution: "Moringa School",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2024",
    },
    {
      insitution: "Technical Uni. of Kenya",
      degree: "Business Information Technology",
      duration: "2019 - 2023",
    },
    {
      insitution: "Codecademy",
      degree: "Mobile App Development Course",
      duration: "2022",
    },
    {
      insitution: "Codecademy",
      degree: "Web Development Course",
      duration: "2018 - 2019",
    },
  ]
};

//skills data
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt tempora consequatur odio mollitia, ex a.",
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
              <TabsTrigger value="skills">Skils</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full">
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="experience-grid gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li key = {index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent ">{item.duration}</span>
                            <h3 className="tet-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px]
                               rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              
              {/* education */}
              <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="experience-grid gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li key = {index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent ">{item.duration}</span>
                            <h3 className="tet-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px]
                               rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.insitution}</p>
                            </div>
                          </li>
                        )
                      })}
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
              {/* about */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" > class{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-accent">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

    </motion.div>
  )
}

export default Resume
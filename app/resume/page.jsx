"use client";
import { m } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs , FaPython, FaJava, FaBootstrap, FaDocker, FaYarn, FaGit, FaGithub, FaNpm, FaSwift} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDart, SiXampp, SiDjango, SiFlask, SiAndroidstudio , SiXcode , SiFlutter, SiTensorflow, SiPostman, SiPandas, SiJupyter, SiMysql, SiKeras, SiNumpy ,} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"

const about = {
    title : 'About me',
    description: "I'm Dollatham Charoenthammakit, a Thai software developer based in Bangkok. You can reach me at 064-553-6245 or dceriythrrmkic@gmail.com. I'm fluent in both English and Thai, passionate about web development, and skilled in various tools and technologies.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Dollatham Charoenthammakit"
        },
        {
            fieldName: "Phone",
            fieldValue: "064-553-6245"   
        },
        {
            fieldName: "Nationality",
            fieldValue: "Thai"
        },
        {
            fieldName: "Email",
            fieldValue: "dceriythrrmkic@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "English , Thai"
        }
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: "I have over 6 years of experience in developing web applications, websites, and various projects. I have worked on more than 26 projects and have expertise in various technologies such as React, Next.js, Node.js, Tailwind CSS, among others. Additionally, I have made over 80 code commits. I am passionate about exploring new technologies and possess the ability to troubleshoot and develop efficient software solutions.",
    items: [
        {
            company: "Mathayomtaksinrayong School",
            position: "Student",
            description: "I was a student studying various subjects and exploring my interests.",
            duration: "2016 - 2022",
        },
        {
            company: "King Mongkut's University of Technology Thonburi",
            position: "Bachelor's degree student",
            description: "I am currently pursuing a Bachelor's degree in Computer Science where I am learning advanced concepts in computer science. I am actively involved in projects and exploring new technologies to enhance my skills.",
            duration: "2022 - 2024",
        }
    ]
}


const education = {
    icon: '/assets/resume/badge.svg',
    title: 'My Education',
    description: "I have a strong foundation in computer science and software development, complemented by over 6 years of practical experience in building web applications, websites, and managing various projects. With expertise in technologies like React, Next.js, Node.js, and Tailwind CSS, I have successfully delivered more than 26 projects. I am committed to continuous learning, evident from over 80 code commits, and I excel in troubleshooting and crafting efficient software solutions.",
    items: [
        {
            institution: "Mathayomtaksinrayong School",
            degree: "High School Diploma",
            duration: "2016 - 2022",
        },
        {
            institution: "King Mongkut's University of Technology Thonburi",
            degree: "Bachelor's Degree in Computer Science",
            duration: "2022 - 2024",
        }
    ]
}


const skills = {
    title: "My skills",
    description: "I have experience in building web applications using modern technologies like React, Next.js, Node.js, and Tailwind CSS. I excel in designing engaging and user-centric experiences using Figma, and I am proficient in flexible and confident coding and testing with HTML 5, CSS 3, and JavaScript. I may have opportunities to work on projects requiring complex data analysis with Python, Pandas, and NumPy, or developing applications using Flutter or Swift for cutting-edge innovations in energy.Utilizing Docker for fast and automated development and deployment is also within my skill set.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5"
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <FaReact />,
            name: "React"
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS"
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js"
        },
        {
            icon: <FaFigma />,
            name: "Figma"
        },
        {
            icon: <FaPython />,
            name: "Python"
        },
        {
            icon: <FaJava />,
            name: "Java"
        },
        {
            icon: <SiDart />,
            name: "Dart"
        },
        {
            icon: <FaBootstrap />,
            name: "Bootstrap"
        },
        {
            icon: <SiXampp />,
            name: "XAMPP"
        },
        {
            icon: <SiDjango />,
            name: "Django"
        },
        {
            icon: <SiFlask />,
            name: "Flask"
        },
        {
            icon: <SiAndroidstudio />,
            name: "Android Studio"
        },
        {
            icon: <SiXcode />,
            name: "Xcode"
        },
        {
            icon: <SiFlutter />,
            name: "Flutter"
        },
        {
            icon: <FaDocker />,
            name: "Docker"
        },
        {
            icon: <FaYarn />,
            name: "Yarn"
        },
        {
            icon: <FaNpm />,
            name: "NPM"
        },
        {
            icon: <FaGit />,
             name: "Git"
        },
        {
            icon: <FaGithub />,
            name: "GitHub"
        },
        {
            icon: <FaSwift />,
            name: "Swift"
        },
        {
            icon: <SiMysql />,
            name: "MySQL"
        },
        {
            icon: <SiTensorflow/>,
            name: "TensorFlow"
        },
        {
            icon: <SiKeras />,
            name: "Keras"
        },
        {
            icon: <SiPostman />,
            name: "Postman"
        },
        {
            icon: <SiPandas />,
            name: "Pandas"
        },
        {
            icon: <SiNumpy />,
            name: "NumPy"
        },
        {
            icon: <SiJupyter />,
            name: "Jupyter"
        },
    ]
}


const Resume = () => {
    return ( 
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
                <div className="container mx-auto">
                    <Tabs 
                        defaultValue="experience"
                        className="flex flex-col xl:flex-row gap-[60px]"
                    >
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="about">About me</TabsTrigger>
                        </TabsList>

                        <div className="min-h-[70vh] w-full">
                            <TabsContent value="experience" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {experience.description}
                                    </p>
                                    <ScrollArea className="h-[480px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experience.items.map((item, index) => {
                                                return (
                                                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.company}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{education.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {education.description}
                                    </p>
                                    <ScrollArea className="h-[480px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {education.items.map((item, index) => {
                                                return (
                                                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.institution}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            <TabsContent value="skills" className="w-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">
                                            {skills.title}
                                        </h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                            {skills.description}
                                        </p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                        {skills.skillList.map((skill, index) => {
                                            return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transitiion-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        }
                                        )}
                                    </ul>
                                </div>
                            </TabsContent>
                            <TabsContent value="about" className="w-full text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                        {about.info.map((info, index) => {
                                            return (
                                                <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                    <span className="text-white/60">{info.fieldName}</span>
                                                    <span className="text-xl">{info.fieldValue}</span>
                                                </li>
                                            )
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

export default Resume;
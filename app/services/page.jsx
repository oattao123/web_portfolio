"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        "num": "01",
        "title": "Front-End Development",
        "description": "I have experience using various front-end tools and technologies such as Tailwind CSS, HTML, Bootstrap, React.js, and Figma. I have utilized these tools in developing and managing various projects, focusing on designing and testing user interfaces and enhancing user experience.",
        "href": ""
    },
    {
        "num": "02",
        "title": "Back-End Development",
        "description": "I have experience using various back-end tools and technologies such as XAMPP, Django, Express.js, Flask, Docker, Yarn, npm, and Postman. I have utilized these tools in developing and managing various projects, focusing on server-side logic, database management, and API development and testing.",
        "href": ""
    },
    {
        num: '03',
        title: 'Mobile Development',
        description: 'I have experience using tools and technologies for mobile app development, including Android Studio, Xcode, Flutter, Swift, and Dart. I have developed native Android apps with iOS apps with Swift. Additionally, I have used Flutter and Dart to create cross-platform applications, ensuring high performance and visual appeal on both Android and iOS.',
        href: '',
    },
    {
        num: '04',
        title: 'Data Science',
        description: 'I have experience using various tools and technologies for data science, including Python, Jupyter Notebook, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, TensorFlow, and Keras. I have utilized these tools to analyze data, build machine learning models, and create data visualizations to derive insights and make data-driven decisions.',
        href: 'I have experience with Python, Matplotlib, TensorFlow, Scikit-learn, pandas, and Jupyter Notebooks. I use Python for data analysis and machine learning. Matplotlib for data visualization, TensorFlow for developing and training machine learning models, Scikit-learn for simple machine learning models, pandas for data manipulation, and Jupyter Notebooks for interactive coding and sharing results.',
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                <Link href={service.href}
                                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center transform group-hover:rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl" />
                 
                                </Link>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                            <p className="text-white/60">{service.description}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    ))}
                </motion.div>
            </div> 
        </section>
    );
};

export default Services;
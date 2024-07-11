/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; 
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        value: "064-553-6245"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        value: "dceriythrrmkic@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        value: "Bangkok, Thailand"
    }
];

const Contact = () => {
    return ( 
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="flex-1 bg-[#27272c] rounded-xl p-10">
                        <h3 className="text-4xl text-accent text-center xl:text-left">Let's work together</h3>
                        <p className="text-white/60 text-center xl:text-left">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <form className="flex flex-col gap-6 mt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="Firstname" />
                                <Input type="text" placeholder="Lastname" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="tel" placeholder="Phone number" />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="web-dev">Web Development</SelectItem>
                                        <SelectItem value="mobile-dev">Mobile Development</SelectItem>
                                        <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea 
                                className="h-[200px]"
                                placeholder="Type your message here"
                            />
                            <Button size="md" className="max-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="text-center xl:text-left">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl text-white">{item.value}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0, duration: 0, ease: "easeInOut" },
                }}
            >
                <div className="w-[300px] h-[300px] xl:w-[498px] xl:h-[498px] mix-blend-lighten relative">
                    <Image
                        src="/assets/photos.png"
                        priority
                        quality={100}
                        fill
                        alt="Photo"
                        className="object-contain"
                    />
                </div>
            </motion.div>
            <motion.svg
                className="absolute w-[300px] xl:w-[500px] h-[300px] xl:h-[500px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                    cx="253"
                    cy="253"
                    r="215"
                    stroke="#f99d09"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </motion.svg>
        </div>
    );
};

export default Photo;

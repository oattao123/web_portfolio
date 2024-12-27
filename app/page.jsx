/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Left Section */}
          <div className="text-center xl:text-left order-2 xl:order-none mb-8 xl:mb-0">
            <span className="text-xl font-medium mb-2 text-gray-400 tracking-wider uppercase">
              Developer
            </span>
            <h1 className="text-3xl xl:text-5xl mb-6 font-extrabold leading-tight tracking-tight">
              Hello I'm <br />
              <span className="text-amber-500">Dollatham Charoenthammakit</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 mx-auto xl:mx-0 leading-relaxed text-lg">
              I innovate to create solutions that help everyone lead a better, more fulfilling life. By leveraging technology and creative problem-solving, I aim to enhance well-being and make a positive impact on the world.
            </p>

            <div className="max-w-[500px] mb-9 text-white/80 flex flex-col items-center xl:items-start">
              <a
                href="/assets/Dollatham_Charoenthammakit.pdf"
                download="Dollatham_Charoenthammakit.pdf"
                className="uppercase flex items-center gap-2 px-6 py-3 border border-amber-500 rounded-lg text-amber-500 hover:bg-amber-500 hover:text-primary font-medium text-lg tracking-wide transition-all duration-500"
              >
                <span className="text-base xl:text-lg">Download CV</span>
                <FiDownload className="h-6 w-6" />
              </a>
              <div className="mt-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyles="w-9 h-9 border border-amber-500 rounded-full flex justify-center items-center text-amber-500 hover:bg-amber-500 hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;

/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl font-medium mb-2">Developer</span>
          <h1 className="h1 mb-6">
            Hello I'm <br /> <span className="text-amber-500">Dollatham Charoenthammakit</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80 mx-auto xl:mx-0">
              I innovate to create solutions that help everyone lead a better, more fulfilling life. By leveraging technology and creative problem-solving, I aim to enhance well-being and make a positive impact on the world.
            </p>

            <div className="max-w-[500px] mb-9 text-white/80 flex flex-col items-center xl:items-start">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
              >
                <span className="text-amber-500">Download CV</span>
                <FiDownload className="h-6 w-6" />
              </Button>
              <div className="mt-8 xl:mb-0">
                <Socials 
                  containerStyle="flex gap-6"
                  iconStyles="w-9 h-9 border border-amber-500 rounded-full flex 
                  justify-center items-center text-amber-500 hover:bg-amber-500
                  hover:text-primary transition-all duration-500"
                />
              </div>
            </div>

        </div>        
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;

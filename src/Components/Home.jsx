import React from "react";
import Heroimage from "../assets/main.jpg";
import { TypeAnimation } from "react-type-animation";
import SocialIcons from "./SocialIcons";
import Button from "./Button";
const Home = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center min-h-screen px-6">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={Heroimage}
          className="rounded-full w-48 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300"
          alt="Dinesh"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-4xl sm:text-7xl font-bold mb-4">
          Hi ,It's <span className="text-red-500">DINESH</span>
        </h1>
        <h3 className="text-2xl sm:text-3xl  font-semibold mb-4">
          I'am a {" "}
          <span className="text-red-500">
          <TypeAnimation
              sequence={[
                "Web Developer", 1000,
                "Machine Learning Developer", 1000,
                "MERN Stack Developer", 1000,
                "Full Stack Developer", 1000,
              ]}
              wrapper="span"
              cursor={true}
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </h3>
        <p className="text-sm sm:text-lg mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In illum
          harum asperiores ab, voluptatum repellat veritatis dicta laudantium
          tenetur explicabo voluptatibus iure non hic officia consequuntur
          libero quisquam omnis recusandae!
        </p>
        <SocialIcons></SocialIcons>
        <Button text="Hire Me" href="mailto:dkdinesh70707@gmail.com"></Button>
      </div>
      {/* <img src={Heroimage} alt='hero-image' /> */}
    </section>
  );
};

export default Home;

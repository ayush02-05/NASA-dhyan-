import React, { useEffect, useRef } from "react";
import Home1 from "./Home/Home1";
import DNA from "../components/Planets/DNA";
import Mars from "../components/Planets/Mars";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const h1 = useRef(null);
  const p1 = useRef(null);
  const p2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      h1.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: h1.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate first paragraph
    gsap.fromTo(
      p1.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: p1.current,
          start: "top 85%",
        },
      }
    );

    // Animate second paragraph
    gsap.fromTo(
      p2.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: p2.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="w-screen min-h-screen overflow-x-hidden ">
      {/* Home1 Section */}
      <div className="h-screen text-white relative">
        {/* Background */}
        <div className="absolute top-0 right-0">
          <Mars />
        </div>

        {/* Foreground */}
        <div className="absolute top-50 left-10 flex flex-col items-start">
          <h1 className="text-6xl mb-6 tracking-wide font-[font1]">
            BIOLOGY ENGINE
          </h1>
          <p className="max-w-[600px] mb-20 font-[font2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            repellendus, voluptatibus soluta molestias modi exercitationem
            voluptatem animi ipsa quo ex. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam facere provident animi veniam sequi ipsa.
          </p>
          <div className="max-w-[700px] font-[font2]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              labore hic provident quos veritatis pariatur ea tenetur ipsum eos
              sunt? Perspiciatis, alias animi facere esse dolorem perferendis
              vero nobis suscipit eos minus impedit aspernatur mollitia iure.
            </p>
          </div>
        </div>
      </div>

      {/* Home2 Section*/}
      <div className=" h-full text-white relative">
        {/* Background */}
        <div>
          <DNA />
        </div>

        {/* Foreground Content */}
        <div className="absolute z-70 flex flex-col justify-center h-full px-10">
          <h1 ref={h1} className="text-5xl font-bold mb-6">
            Space Biology Engine
          </h1>
          <p ref={p1} className="max-w-[600px] mb-6">
            The Space Biology Knowledge Engine helps students, researchers, and
            scientists explore how life can survive beyond Earth. It uses NASA
            data on plants, microbes, animals, and humans tested in space and on
            Earth under conditions like microgravity, radiation, and lunar soil.
          </p>
          <p ref={p2} className="max-w-[700px]">
            For students, it’s a learning tool to understand space biology. For
            researchers and scientists, it provides data to design experiments
            and find new insights. Its mission is to turn space biology data
            into knowledge for living on the Moon, Mars, and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

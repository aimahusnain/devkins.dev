"use client";
import React, { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import ValueComponent from "@/components/ValueComponent";
import LeadershipTeam from "@/components/Leadership team";
import { carouselItems } from "@/lib/config";

const AboutUs: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <section>
      <div className="flex justify-between my-8 items-center flex-col md:flex-row py-3 px-[20px] gap-7">
        <h1 className="text-3xl md:text-7xl font-bold">
          Our Journey to a leading{" "}
          <span className="text-primary">Software Development Partner</span>
        </h1>

        <div>
          <Image
            width={1200}
            height={1300}
            src="/taha.JPG"
            alt="Taha A human image"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="bg-[#240435] leading-[42px] py-[70px] gap-7 px-3 lg:px-40 font-bold text-white text-4xl flex flex-col">
        <button className="text-white w-fit px-5 py-2 rounded-lg text-xl bg-white/20 border border-white/40">
          Our Mission
        </button>
        <div>
          Help companies deliver{" "}
          <span className="text-primary">innovative technology</span> solutions
          to
          <span className="text-primary"> power their growth</span> by unlocking
          access to passionate and experienced
          <span className="text-primary">
            {" "}
            engineers and solution providers
          </span>
        </div>
      </div>
      <div className="px-5 py-10 md:px-[70px] mt-3">
        <button className="rounded-sm mb-3 py-1 text-black text-md px-2 border-2 border-primary">
          About Us
        </button>
        <h1 className="text-4xl font-bold mb-2 text-[#1a0f2e]">
          Devkins helps start-ups, SMEs <br /> and enterprises grow their <br />
          business
        </h1>
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-md mt-2 text-zinc-700 font-sans">
            We&apos;ve been helping customers since 2009 and take pride in
            delivering high-quality custom <br /> services designed to help you
            build, grow, and revolutionize your business.
          </p>
          <button className="group text-white bg-primary hover:border-2 hover:bg-transparent transition-all duration-300 hover:border-primary w-fit justify-between  hover:text-black rounded-full px-5 py-4 flex items-center gap-9 font-bold">
            Learn More -&gt;
          </button>
        </div>
        <div className="flex flex-col items-center xl:flex-row gap-14">
          <Image
            width={700}
            height={500}
            src="/about us team image.webp"
            className="rounded-xl mt-[50px]"
            alt=""
          />
          <div className="flex flex-row xl:flex-col gap-[30px]">
            <div>
              <h1 className="font-bold text-5xl text-primary">3,000+</h1>
              <p className="font-bold text-zinc-500">Successful projects</p>
            </div>
            <hr />
            <div>
              <h1 className="font-bold text-5xl text-primary">99%</h1>
              <p className="font-bold text-zinc-500">Client satisifcation</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-20 items-center md:grid-cols-2 justify-between">
          <div>
            <Image width={280} height={500} src="/taha2.png" alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-primary">
              When you choose Devkins, you&apos;re choosing
            </p>
            <h1 className="text-7xl font-bold text-[#1f1038]">Our Vision</h1>
            <p className="text-zinc-700">
              &quot;While Devkins has been growing in a tech landscape for more
              than a decade, I recognize the challenges businesses face in
              managing digital systems. As the world transforms into a global
              village, our vision goes beyond. We aim to reimagine IT solutions
              into smart, agile, and AI-enhanced digital assets.&quot;
            </p>
            <p className="text-zinc-700">
              Our commitment is to lead in the digital transformation, providing
              globally agile services to clients in different countries. In
              these times of recent changes, our ever-growing pool of resilient
              tech heads drives the IT world toward a future where innovation
              meets the demands of an ever-evolving digital era.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <button className="rounded-sm py-1 text-black text-md px-2 border-2 border-primary">
            Our Values
          </button>
        </div>

        <ValueComponent
          direction="Left"
          imageSrc="/idea.webp"
          title="Innovation"
          description="There's no use in pushing boundaries if it's not for innovation. As a software development company, we make the future a reality today."
        />
        <ValueComponent
          direction="Right"
          imageSrc="/re.webp"
          title="Adaptability"
          description="Our determination fuels relentless pursuit, turning challenges
          into triumphs. It propels tech experts at Devkins to overcome
          obstacles and achieve success against all odds."
        />
        <ValueComponent
          direction="Left"
          imageSrc="/fast.webp"
          title="Tenacity"
          description="Our determination fuels relentless pursuit, turning challenges
          into triumphs. It propels tech experts at Devkins to overcome
          obstacles and achieve success against all odds."
        />
        <ValueComponent
          direction="Right"
          imageSrc="/transparent.webp"
          title="Transparency"
          description="Fostering a culture of transparency is Devkins's forte for
          its resilient clients. It has helped maintain a productive and
          qualitative relationship between the two."
        />
        <ValueComponent
          direction="Left"
          imageSrc="/man.webp"
          title="Customer Centric"
          description="Our one-in-all business models, dedication to quality, and
          ownership of every project we take speak for our
          customer-centric approach."
        />
        <ValueComponent
          direction="Right"
          imageSrc="/globsvg.svg"
          title="Global Expansion"
          description="We like to play in a wider field while setting new boundaries.
          Our online and offline teams bring the best solutions regardless
          of where you are."
        />

        <div className="mt-14 my-12">
          <div className="flex mb-5 justify-between flex-col sm:flex-row">
            <h1 className="font-bold text-4xl text-[#1f1038] md:mb-0 mb-5">
              Leadership Team
            </h1>
            <p className="text-zinc-500">
              Meet the driving force, the dreamers, the minds behind crafting a
              cutting-edge <br /> software development company, aka, Devkins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center lg:grid-cols-3 xl:grid-cols-4">
            <LeadershipTeam
              image="/taha.JPG"
              position="Chief Finance Officer"
              name="Taha Amin"
            />
            <LeadershipTeam
              image="/taha.JPG"
              position="Chief of Staff"
              name="Taha Amin"
            />
            <LeadershipTeam
              image="/taha.JPG"
              position="Chief Delivery Officer"
              name="Taha Amin"
            />
            <LeadershipTeam
              image="/taha.JPG"
              position="Chief Business Officer"
              name="Taha Amin"
            />
            <LeadershipTeam
              image="/taha.JPG"
              position="Head of New Markets"
              name="Taha Amin"
            />
          </div>
        </div>
      </div>
      <div className="bg-primary mt-3 text-white py-[40px] px-2 md:px-[100px] flex flex-col justify-center items-center ">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-4">
          We&lsquo;ve helped our clients complete +3,000 <br /> projects
        </h1>
        <p className="text-lg font-sans">
          Over the last 14 years, we&lsquo;ve been driven by our passion for
          helping clients achieve their goals.
        </p>
        <Carousel
          className="w-full max-w-5xl text-black mt-3"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          plugins={[plugin.current]}
        >
          <CarouselContent className="-ml-1 ">
          {carouselItems.map((item: any, index: any) => (
            <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>{item.rating}</p>
                <p>
                  {item.feedback}
                </p>
                <h1 className="font-bold text-xl">{item.author}, {item.position}</h1>
              </div>
            </CarouselItem>
          ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext className="hidden md:block pl-1" />
        </Carousel>
      </div>
    </section>
  );
};
export default AboutUs;

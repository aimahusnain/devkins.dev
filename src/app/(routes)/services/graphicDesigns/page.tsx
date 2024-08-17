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
import { Check } from "lucide-react";

const GraphicDesign = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div>
      <div className="text-white text-center py-24 bg-[url('/app.jpg')] bg-cover bg-no-repeat bg-center">
        <h1 className="font-bold text-6xl md:text-7xl mb-4">
          Graphic Design
        </h1>
        <p className="text-md">
          Creating captivating and user-friendly mobile applications that engage
          your audience and enhance your brand <br /> presence.
        </p>
      </div>
      <div>
        <div className="mt-8 px-6 md:px-[70px]">
          <h1 className="font-bold text-4xl mb-2">Service Description</h1>

          <p
            className="mb-1
          text-zinc-400 font-bold"
          >
            Devsinc’s Mobile App Development Services encompasses building of
            this field encompasses various platforms, including iOS (Apple),
            Android (Google), and others, and it plays a crucial role in shaping
            the way people interact with technology in our increasingly
            mobile-driven world. Mobile developers work on designing, coding,
            testing, and optimizing mobile apps to provide users with seamless
            and efficient digital experiences on their handheld devices.
          </p>
        </div>
        <div className="mt-[40px] flex flex-col md:flex-row px-6 sm:px-[70px]">
          <Image
            src="/mobile.jpg"
            alt=""
            className="rounded-2xl object-cover w-[500px] h-[400px]"
            width={700}
            height={900}
          ></Image>
          <div className="flex flex-col gap-[30px] ml-5 mt-6 md:mt-0">
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl w-full md:w-[600px] pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              Design and User Experience
            </div>
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl w-full md:w-[600px] pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              Development
            </div>
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl w-full md:w-[600px] pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              Testing{" "}
            </div>
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl w-full md:w-[600px] pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              Deployment{" "}
            </div>
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl w-full md:w-[600px] pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              Maintenance and Updates
            </div>
          </div>
        </div>
      </div>
      <div className="px-[50px] mt-6">
        <h1 className="font-bold text-4xl">Benefits</h1>
        <ol className="mt-2 flex flex-col gap-4">
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">Expanded Market Reach:</span> Mobile
              apps enable businesses to reach a broader audience as smartphones
              and tablets are ubiquitous and <br />
              accessible to a large portion of the global population.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">User Experience: </span> Enhanced
              Mobile apps are designed to provide a user-friendly and intuitive
              experience, often leading to higher user <br /> engagement and
              customer satisfaction.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">Improved Brand Loyalty: </span>A
              well-designed and functional mobile app can foster brand loyalty
              and keep customers coming back for more.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">
                Increased Sales and Revenue:
              </span>{" "}
              Mobile apps can serve as a powerful sales and revenue channel
              through in-app purchases, subscriptions, <br /> and e-commerce
              functionalities.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">Access to Device Features:</span>{" "}
              Developers can leverage device-specific features like GPS, camera,
              and sensors to create innovative and personalized experiences.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">Offline Access:</span>
              Many mobile apps offer offline functionality, allowing users to
              access content and perform tasks even without an internet
              connection.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">Push Notifications: </span>
              Apps can send push notifications to users, keeping them informed,
              engaged, and prompting action.
            </p>
          </li>
          <li className="flex gap-2 ">
            <div className="bg-primary p-1 mt-2  rounded-full w-fit f;e h-fit "></div>
            <p>
              {" "}
              <span className="font-bold">Data Analytics:</span> Mobile apps
              provide valuable data on user behavior, enabling businesses to
              make data-driven decisions and refine their strategies.
            </p>
          </li>
        </ol>
      </div>
      <div className="px-7 md:px-[90px] mt-7 bg-[#2e1555] pt-[10px] pb-4 text-white text-center">
        <div className="flex flex-col md:flex-row mt-[40px] justify-between">
          <div className="text-left flex mb-5 flex-col justify-center">
            <h1 className="font-bold text-4xl md:text-6xl mb-3 md:mb-5">
              Working process
            </h1>
            <p className="text-sd md:text-lg">
              Our IT consulting process is a systematic journey comprising four
              stages: Assessment and Analysis, Planning, Implementation and
              Execution, and Monitoring and Optimization.
            </p>
          </div>
          <div className="flex gap-[30px] flex-col">
            <div className="flex flex-col md:flex-row gap-1 md:gap-9">
              <div className="flex flex-col w-[300px] px-9 h-[290px]  justify-center items-center rounded-full border border-white">
                <div className="bg-[#9159eb] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>

                <h1 className="font-bold text-6xl mb-3">01</h1>
                <h1 className="font-bold text-2xl mb-4">
                  Analysis and Planning
                </h1>
                <p className="text-sm">
                  The process begins by thoroughly understanding the client
                  &lsquo;s objectives.
                </p>
              </div>
              <div className="flex flex-col ml-[30px] md:ml-0 mt-[30px] w-[300px] px-9 h-[290px]  justify-center items-center rounded-full border border-white">
                <div className="bg-[#9159eb] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>

                <h1 className="font-bold text-6xl mb-3">02</h1>
                <h1 className="font-bold text-2xl mb-4">
                  Current State Evaluation
                </h1>
                <p className="text-sm">
                  Assess the client &lsquo;s existing IT infrastructure,
                  systems, and processes
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-1 md:gap-9">
              <div className="flex flex-col w-[300px] px-9 h-[290px]  justify-center items-center rounded-full border border-white">
                <div className="bg-[#9159eb] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>

                <h1 className="font-bold text-6xl mb-3">03</h1>
                <h1 className="font-bold text-2xl mb-4">
                  Implementation and Execution
                </h1>
                <p className="text-sm">
                  Execute the project plan, which may involve deploying new
                  software, hardware, or IT processes.
                </p>
              </div>
              <div className="flex flex-col mt-[30px] ml-[30px] md:ml-0 w-[300px] px-9 h-[290px]  justify-center items-center rounded-full border border-white">
                <div className="bg-[#9159eb] opacity-[.24] rounded-full w-[300px] h-[300px] absolute  blur-2xl"></div>

                <h1 className="font-bold text-6xl mb-3">04</h1>
                <h1 className="font-bold text-2xl mb-4">
                  Evaluation and Maintenance
                </h1>
                <p className="text-sm">
                  Assess the results of the implemented solutions against the
                  predefined goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-[70px] mt-5 flex flex-col md:flex-row gap-8">
        <div>
          <h1 className="font-bold text-5xl my-4 mb-8">Our latest projects</h1>
          <button className="group text-white bg-primary hover:border-2 hover:bg-transparent transition-all duration-300 hover:border-primary w-fit justify-between  hover:text-black rounded-full px-5 py-4 flex items-center gap-9 font-bold">
            Learn More
            <div className="mt-0.5 p-1 bg-white rounded-full group-hover:bg-black transition-all duration-300"></div>
          </button>
        </div>
        <div>
          <Carousel
            onMouseEnter={plugin.current.stop}
            plugins={[plugin.current]}
            onMouseLeave={plugin.current.reset}
            className="w-full max-w-5xl text-black mt-7"
          >
            <CarouselContent className="-ml-1 ">
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>{" "}
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>{" "}
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>{" "}
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>{" "}
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>{" "}
              <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3 h-fit">
                <div className="flex flex-col gap-4 text-black border-black h-fit border rounded-xl pb-3 mr-[20px]">
                  <Image
                    width={500}
                    height={500}
                    src="/website.jpg"
                    className="rounded-xl"
                    alt=""
                  ></Image>
                  <div className="px-5">
                    <h1 className="font-bold  text-3xl">
                      Andy Crebar, CEO, Sapling
                    </h1>
                    <p>
                      Thanks to Devkins&lsquo;s efforts, our great and delivers
                      on customer needs. They&lsquo;re responsive and the client
                      finds it easy to work with them.
                    </p>
                  </div>
                </div>
              </CarouselItem>{" "}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block ml-4 pl-1" />
            <CarouselNext className="hidden md:block mr-5 pl-1" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;

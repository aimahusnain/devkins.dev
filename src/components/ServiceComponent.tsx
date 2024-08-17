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

interface ValueComponentProps {
  title: string,
  description: string,
  serviceDescription: string,
  Service1: string,
  Service2: string,
  Service3: string,
  Service4: string,
  Service5: string,
}

const ServiceComponent: React.FC<ValueComponentProps> = ({
 title,
 description,
 serviceDescription,
 Service1,
 Service2,
 Service3,
 Service4,
 Service5,
}) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div>
      <div className="text-white text-center py-24 bg-[url('/app.jpg')] bg-cover bg-no-repeat bg-center">
        <h1 className="font-bold text-6xl md:text-7xl mb-4">
          {title}
        </h1>
        <p className="text-md">
         {description}
        </p>
      </div>
      <div>
        <div className="mt-8 px-6 md:px-[70px]">
          <h1 className="font-bold text-4xl mb-2">Service Description</h1>

          <p
            className="mb-1
          text-zinc-400 font-bold"
          >
            {serviceDescription}
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
              {Service1}
            </div>
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl w-full md:w-[600px] pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              {Service2}
            </div>
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl w-full md:w-[600px] pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              {Service3}
            </div>
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl w-full md:w-[600px] pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              {Service4}
            </div>
            <div className="border-b flex gap-3 font-bold border-zinc-500 text-xl w-full md:w-[600px] pb-4 items-center">
              <div className="text-white rounded-full text-center h-fit w-fit bg-primary p-1">
                <Check size={16} />
              </div>
              {Service5}
            </div>
          </div>
        </div>
      </div>
      <div className="px-[50px] mt-6">
        <h1 className="font-bold text-4xl">Benefits</h1>
        <ol className="mt-2 flex flex-col gap-4">
          <li className="flex gap-2">
            <div className="bg-primary p-1 mt-2 rounded-full w-fit h-fit"></div>
            <p>
              {" "}
              <span className="font-bold">Expanded Market Reach:</span> Mobile
              apps enable businesses to reach a broader audience as smartphones
              and tablets are ubiquitous and <br />
              accessible to a large portion of the global population.
            </p>
          </li>
          <li className="flex gap-2">
            <div className="bg-primary p-1 mt-2 rounded-full w-fit h-fit"></div>
            <p>
              {" "}
              <span className="font-bold">User Experience: </span> Enhanced
              Mobile apps are designed to provide a user-friendly and intuitive
              experience, often leading to higher user <br /> engagement and
              customer satisfaction.
            </p>
          </li>
          <li className="flex gap-2">
            <div className="bg-primary p-1 mt-2 rounded-full w-fit h-fit"></div>
            <p>
              {" "}
              <span className="font-bold">Improved Brand Loyalty: </span>A
              well-designed and functional mobile app can foster brand loyalty
              and keep customers coming back for more.
            </p>
          </li>
          <li className="flex gap-2">
            <div className="bg-primary p-1 mt-2 rounded-full w-fit h-fit"></div>
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
          <li className="flex gap-2">
            <div className="bg-primary p-1 mt-2 rounded-full w-fit h-fit"></div>
            <p>
              {" "}
              <span className="font-bold">Access to Device Features:</span>{" "}
              Developers can leverage device-specific features like GPS, camera,
              and sensors to create innovative and personalized experiences.
            </p>
          </li>
          <li className="flex gap-2">
            <div className="bg-primary p-1 mt-2 rounded-full w-fit h-fit"></div>
            <p>
              {" "}
              <span className="font-bold">Offline Access:</span>
              Many mobile apps offer offline functionality, allowing users to
              access content and perform tasks even without an internet
              connection.
            </p>
          </li>
          <li className="flex gap-2">
            <div className="bg-primary p-1 mt-2 rounded-full w-fit h-fit"></div>
            <p>
              {" "}
              <span className="font-bold">Push Notifications: </span>
              Apps can send push notifications to users, keeping them informed,
              engaged, and prompting action.
            </p>
          </li>
          <li className="flex gap-2">
            <div className="bg-primary p-1 mt-2 rounded-full w-fit h-fit"></div>
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
    </div>
  );
};

export default ServiceComponent;
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { careers } from "@/lib/config";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Careers = () => {
  const plugin = useRef(Autoplay({ delay: 2000 }));

  return (
    <div>
      <section className="flex sm:flex-row flex-col my-12 overflow-x-hidden transition-all duration-500 px-[60px] items-center justify-center gap-8">
        <div>
          <h1 className="text-4xl md:text-6xl text-[#1a0e2e] font-bold">
            Achieve Your Professional Goals with Devkins
          </h1>
          <p className="mt-4 text-zinc-400 text-md">
            Value-based upscaling is at the heart of Devkins&apos;s work
            environment. From learning to implementation, our developers and
            tech experts stay ahead in their professional game.
          </p>
          <div className="flex-col md:flex-row flex gap-7 mt-6">
            <Button className="py-7 rounded-3xl hover:bg-black">
              Software Development Roles
            </Button>
            <button
              className="bg-transparent transition-all duration-500 text-black border border-primary hover:bg-primary
             hover:text-white font-bold px-5 py-4 rounded-xl"
            >
              All Other Opportunities
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <Image
            width={1200}
            height={900}
            className="rounded-lg"
            src="/Careers page front.jpg"
            alt=""
          />
        </div>
      </section>
      <div className="bg-white px-4 border shadow-md flex items-center justify-center">
        <Carousel className="h-fit" plugins={[plugin.current]}>
          <CarouselContent className="-ml-1 h-fit">
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={100000}
                height={10}
                className="w-[400px]"
                src="/ourstacks/React_logo.png"
                alt=""
              />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={100000}
                height={10}
                className="w-[400px]"
                src="/6606d86ae6d44cc29ad852a0_Kallidus Logo.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={100000}
                height={10}
                className="w-[400px]"
                src="/6606d869e6d44cc29ad8518c_Engage Logo.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={100000}
                height={10}
                className="w-[400px]"
                src="/6606d8695d5233bc7852a42b_Dealty Logo.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={100000}
                height={10}
                className="w-[400px]"
                src="/6606d869144e68deb59e9aca_Al Ghurair Logo.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={100000}
                height={10}
                className="w-[400px]"
                src="/letsremotify.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={100000}
                height={10}
                className="w-[400px]"
                src="/predictview.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={100000}
                height={10}
                className="w-[400px]"
                src="/RMIInsights.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={100000}
                height={10}
                className="w-[400px]"
                src="/Terrascope.webp"
                alt=""
              ></Image>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5 h-fit">
              <Image
                width={100000}
                height={10}
                src="/Zoopa.webp"
                alt=""
              ></Image>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <section className="justify-center px-[60px] flex flex-col items-center my-24">
        <h1 className="font-bold text-4xl text-center mb-4">
          It&apos;s Time to Amplify Your Career
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center mt-4">
          {careers.map((career: any, index: any) => (
            <div
              key={index}
              className="bg-black/85 text-white px-7 py-4 rounded-xl flex flex-col gap-4 h-full justify-center"
            >
              <h1 className="font-bold text-2xl">{career.title}</h1>
              <p>{career.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="px-7 md:px-[90px] bg-[#2e1555] pt-[30px] pb-4 text-white text-center">
        <h1 className="font-bold text-2xl md:text-5xl">
          Get To Know Our Onboarding Process
        </h1>
        <div className="flex flex-col md:flex-row gap-8 mt-[40px] justify-between">
          <div className="text-left flex mb-5 flex-col justify-center">
            <h1 className="font-bold text-4xl md:text-5xl mb-3 md:mb-5">
              We Make Hiring <br /> Simple and <br /> Efficient
            </h1>
            <p className="text-sd md:text-lg">
              While maintaining transparency at the core, we look for <br />
              change-makers like you!
            </p>
          </div>
          <div className="flex gap-[30px] flex-col">
            <div className="flex flex-col md:flex-row gap-1 md:gap-9">
              <div className="flex flex-col w-[300px] px-9 h-[290px]  justify-center items-center rounded-xl border border-white">
                <div className="bg-[#9159eb] opacity-[.24] rounded-xl w-[300px] h-[300px] absolute blur-2xl"></div>

                <h1 className="font-bold text-6xl mb-3">01</h1>
                <h1 className="font-bold text-2xl mb-4">Apply</h1>
                <p className="text-sm">
                  In this first step, you apply for the current opportunity{" "}
                  available by attaching an attention-grabbing resume,
                  portfolio, and cover letter.
                </p>
              </div>
              <div className="flex flex-col ml-[30px] md:ml-0 mt-[30px] w-[300px] px-9 h-[290px]  justify-center items-center rounded-xl border border-white">
                <div className="bg-[#9159eb] opacity-[.24] rounded-xl w-[300px] h-[300px] absolute  blur-2xl"></div>

                <h1 className="font-bold text-6xl mb-3">02</h1>
                <h1 className="font-bold text-2xl mb-4">Apply</h1>
                <p className="text-sm">
                  In this first step, you apply for the current opportunity{" "}
                  available by attaching an attention-grabbing resume,
                  portfolio, and cover letter.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-1 md:gap-9">
              <div className="flex flex-col w-[300px] px-9 h-[290px]  justify-center items-center rounded-xl border border-white">
                <div className="bg-[#9159eb] opacity-[.24] rounded-xl w-[300px] h-[300px] absolute  blur-2xl"></div>

                <h1 className="font-bold text-6xl mb-3">03</h1>
                <h1 className="font-bold text-2xl mb-4">Apply</h1>
                <p className="text-sm">
                  In this first step, you apply for the current opportunity{" "}
                  available by attaching an attention-grabbing resume,
                  portfolio, and cover letter.
                </p>
              </div>
              <div className="flex flex-col mt-[30px] ml-[30px] md:ml-0 w-[300px] px-9 h-[290px] justify-center items-center rounded-xl border border-white">
                <div className="bg-[#9159eb] opacity-[.24] rounded-xl w-[300px] h-[300px] absolute blur-2xl" />

                <h1 className="font-bold text-6xl mb-3">04</h1>
                <h1 className="font-bold text-2xl mb-4">Apply</h1>
                <p className="text-sm">
                  In this first step, you apply for the current opportunity{" "}
                  available by attaching an attention-grabbing resume,
                  portfolio, and cover letter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary mt-0 text-white py-[40px] px-2 md:px-[100px] flex flex-col justify-center items-center ">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-4">
          Read inspiring testimonials that showcase one&lsquo;s achievements and
          growth at Devkins.
        </h1>
        <Carousel className="w-full max-w-5xl text-black mt-3">
          <CarouselContent className="-ml-1 ">
            <CarouselItem className="pl-1 md:basis-1/2 grid lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devkins&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devkins&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devkins&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devkins&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devkins&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devkins&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devkins&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devkins&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devkins&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>{" "}
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devkins&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devkins&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devkins&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col gap-4 text-white border border-white rounded-xl px-6 py-3 mr-[20px]">
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  Thanks to Devkins&lsquo;s efforts, our app looks great and
                  delivers on customer needs. They&lsquo;re responsive and the
                  client finds it easy to work with them. Their exceptional work
                  encourages ongoing partnership, making them highly
                  recommended.
                </p>
                <h1 className="font-bold text-xl">Andy Crebar, CEO, Sapling</h1>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext className="hidden md:block pl-1" />
        </Carousel>
      </div>
    </div>
  );
};

export default Careers;

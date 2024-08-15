"use client";

import React, { useEffect } from "react";
import { meta } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Avatar from "@/ui/icon/Avatar";
import Github from "@/ui/icon/Github";
import Linkedin from "@/ui/icon/Linkedin";
import TechStack from "@/ui/icon/TechStack";
import useKeyPress from "@/hooks/useKeyPress";

const Home = () => {
  const keyPressed = useKeyPress();
  const buildDate =
    process.env.NEXT_PUBLIC_BUILD_TIME ||
    new Date().toISOString().split("T")[0];
  const dateObj = new Date(buildDate);
  const formattedDate = `${dateObj.toLocaleString("default", { month: "long" })} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

  useEffect(() => {
    if (keyPressed === "s") {
      window.location.href = `mailto:${meta.mailId}`;
    }
  }, [keyPressed]);
  return (
    <>
      <div className="mx-auto flex w-[90%] flex-col gap-y-14 pt-7 lg:w-[600px] lg:pt-12">
        <div className="flex items-center">
          <div className="flex items-center gap-[10px]">
            <Avatar />
            <div className="flex h-[41px] flex-col justify-center">
              <p className="text-base leading-[1.2em] text-white">
                {meta.name}
              </p>
              <p className="text-xs font-light leading-[1.2em] text-[#7D7D7D]">
                Software Developer
              </p>
            </div>
          </div>
          <div className="flex flex-shrink-0 flex-grow basis-0 items-center justify-end gap-[10px]">
            <div className="flow-row hidden items-center gap-[10px] lg:flex">
              <div className="h-[7px] w-[7px] rounded-full bg-[#09b858]"></div>
              <p className="text-[12px] text-[#FFFFFFCC]">Open to work</p>
            </div>
            <div className="h-[20px] w-[1px] bg-[#262626]"></div>
            <div className="flex items-center gap-[12px]">
              <a href={meta.linkedIn} target="_blank">
                <Linkedin />
              </a>
              <a href={meta.github} target="_blank">
                <Github />
              </a>
            </div>
          </div>
        </div>

        <div className="float-start flex flex-col flex-nowrap items-start justify-center gap-[25px]">
          <div className="flex flex-col items-start gap-1">
            <div className="text-[20px] leading-[1.3em] lg:text-[28px]">
              {meta.tagline}
            </div>
            <div className="text-[20px] leading-[1.3em] text-[#8A8A8A] lg:text-[28px]">
              {meta.subTagline}
            </div>
          </div>
          <div className="flex flex-col gap-[25px]">
            <p className="text-[14px] leading-[1.8em] text-[#FFFFFFCC] lg:text-[15px] lg:leading-[27px]">
              {meta.description}
            </p>
            <div className="hidden items-center gap-[7px] text-[15px] font-light text-[#FFFFFFCC] lg:flex">
              <p>Press</p>
              <div className="cursor-pointer rounded-[5px] border-[1px] border-[#3B3B3B] px-2">
                <a
                  href="mailto:sachinpasi2000@gmail.com"
                  className="text-[13px]"
                >
                  S
                </a>
              </div>
              <p>anytime to send me an email</p>
            </div>
            <div className="flow-row flex max-w-[130px] items-center gap-[10px] rounded-lg border-[1px] border-[#262626] p-3 lg:hidden">
              <div className="h-[7px] w-[7px] rounded-full bg-[#09b858]"></div>
              <p className="text-[12px] text-[#FFFFFFCC]">Open to work</p>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#262626]"></div>

        <div className="flex flex-col gap-[25px]">
          <div className="flex flex-col gap-[5px]">
            <TechStack />
            <h3 className="text-[20px] font-medium leading-[1.3em]">
              Tech Stack
            </h3>
            <p className="text-[14px] font-light leading-[1.8em] text-[#FFFFFFCC]">
              Some of the tools I use in my workflow.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-4">
            {meta.techStack.map(({ Icon, name, subHeading }, idx) => (
              <div
                key={idx}
                className="flex h-[57px] cursor-pointer items-center gap-[10px] rounded-[10px] border-[1px] border-[#262626] p-[10px]"
              >
                <div
                  className={cn(
                    "flex h-[35px] w-[35px] items-center justify-center overflow-hidden rounded-lg bg-white",
                  )}
                >
                  <Icon />
                </div>
                <div>
                  <h4 className="text-[14px] leading-[1.3em]">{name}</h4>
                  <p className="text-[10px] font-light leading-[1.6em] text-[#FFFFFFCC] lg:text-[11.5px]">
                    {subHeading}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#262626]"></div>

        <div className="mb-8 flex flex-col justify-between lg:flex-row">
          <p className="mt-8 text-[12px] font-light text-white/90">
            © 2024 — Built with{"  "}
            <a
              href="https://nextjs.org"
              className="hover:text-white hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
            >
              Next.js
            </a>
            ,
            <a
              href="https://tailwindcss.com"
              className="hover:text-white hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
            >
              Tailwind{"  "}
            </a>
            and{"  "}
            <a
              href="https://vercel.com"
              className="hover:text-white hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
            >
              Vercel{"  "}
            </a>
          </p>
          <p className="mt-1 text-[12px] font-light text-white/90 lg:mt-8">
            Last Updated : {formattedDate}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

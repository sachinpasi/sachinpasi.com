import { meta } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Avatar from "@/ui/Avatar";
import Figma from "@/ui/Figma";
import Github from "@/ui/Github";
import Linkedin from "@/ui/Linkedin";
import TechStack from "@/ui/TechStack";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="mx-auto flex w-[600px] flex-col gap-y-14 pt-12">
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
            <div className="flow-row flex items-center gap-[10px]">
              <div className="h-[7px] w-[7px] rounded-full bg-[#09b858]"></div>
              <p className="text-[12px] text-[#FFFFFFCC]">Open to work</p>
            </div>
            <div className="h-[20px] w-[1px] bg-[#262626]"></div>
            <div className="flex items-center gap-[12px]">
              <Link href="/">
                <Linkedin />
              </Link>
              <Link href="/">
                <Github />
              </Link>
            </div>
          </div>
        </div>

        <div className="float-start flex flex-col flex-nowrap items-start justify-center gap-[25px]">
          <div className="flex flex-col items-start gap-1">
            <div className="text-[28px] leading-[1.3em]">{meta.tagline}</div>
            <div className="text-[28px] leading-[1.3em] text-[#8A8A8A]">
              {meta.subTagline}
            </div>
          </div>
          <div className="flex flex-col gap-[25px]">
            <p className="text-[15px] leading-[27px] text-[#FFFFFFCC]">
              {meta.description}
            </p>
            <div className="flex items-center gap-[7px] text-[15px] font-light text-[#FFFFFFCC]">
              <p>Press</p>
              <div className="cursor-pointer rounded-[5px] border-[1px] border-[#3B3B3B] px-2">
                <p className="text-[13px]">S</p>
              </div>
              <p>anytime to send me an email</p>
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
          <div className="grid grid-cols-3 gap-4">
            {meta.techStack.map(
              ({ Icon, name, subHeading, bg = "bg-white" }, idx) => (
                <div
                  key={idx}
                  className="flex h-[57px] cursor-pointer items-center gap-[10px] rounded-[10px] border-[1px] border-[#262626] p-[10px]"
                >
                  <div
                    className={cn(
                      "flex h-[35px] w-[35px] items-center justify-center overflow-hidden rounded-lg",
                      {
                        "bg-white": !bg,
                        [bg]: !!bg,
                      },
                    )}
                  >
                    <Icon />
                  </div>
                  <div>
                    <h4 className="text-[14px] leading-[1.3em]">{name}</h4>
                    <p className="text-[11.5px] font-light leading-[1.6em] text-[#FFFFFFCC]">
                      {subHeading}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#262626]"></div>
      </div>
    </>
  );
};

export default Home;

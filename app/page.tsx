import Avatar from "@/ui/Avatar";
import Github from "@/ui/Github";
import Linkedin from "@/ui/Linkedin";
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
                Sachin Pasi
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
            <div className="text-[28px] leading-[1.3em]">
              Building Websites for 3+ Years.
            </div>
            <div className="text-[28px] leading-[1.3em] text-[#8A8A8A]">
              Empowering Products with Solutions
            </div>
          </div>
          <div className="flex flex-col gap-[25px]">
            <p className="text-[15px] leading-[27px] text-[#FFFFFFCC]">
              I'm a Software Developer passionate about bringing ideas to life
              and making them not just functional but truly delightful for
              users. I thrive on solving complex business problems and creating
              one-of-a-kind solutions that stand out.
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
      </div>
    </>
  );
};

export default Home;

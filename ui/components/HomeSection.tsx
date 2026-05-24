"use client";

import React, { useEffect, useState } from "react";
import { meta } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Avatar from "@/ui/icon/Avatar";
import Briefcase from "@/ui/icon/Briefcase";
import Github from "@/ui/icon/Github";
import Linkedin from "@/ui/icon/Linkedin";
import Resume from "@/ui/icon/Resume";
import TechStack from "@/ui/icon/TechStack";
import useKeyPress from "@/hooks/useKeyPress";
import BlogPreview from "@/ui/components/BlogPreview";

type BlogPost = {
    slug: string;
    title: string;
    date: string;
    url: string;
    readTime?: string;
    tags?: string[];
    isNew?: boolean;
};

interface HomeSectionProps {
    posts: BlogPost[];
}

const HomeSection = ({ posts }: HomeSectionProps) => {
    const keyPressed = useKeyPress();
    const [lastUpdated, setLastUpdated] = useState("");

    useEffect(() => {
        const timestamp = process.env.NEXT_PUBLIC_DEPLOY_TIMESTAMP;
        if (timestamp) {
            const date = new Date(Number(timestamp) * 1000); // Convert to milliseconds
            setLastUpdated(
                date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
            );
        }
    }, []);

    useEffect(() => {
        if (keyPressed === "s") {
            window.location.href = `mailto:${meta.mailId}`;
        }
        if (keyPressed === "r") {
            window.open(meta.resume, "_blank");
        }
    }, [keyPressed]);

    return (
        <>
            <div className="mx-auto flex w-[90%] flex-col gap-y-14 pt-7 lg:w-[600px] lg:pt-12">
                <div className="reveal flex items-center" style={{ animationDelay: "0ms" }}>
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
                            <div className="relative h-[7px] w-[7px]">
                                <span className="absolute inset-0 animate-ping rounded-full bg-[#09b858] opacity-75"></span>
                                <span className="relative block h-[7px] w-[7px] rounded-full bg-[#09b858]"></span>
                            </div>
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
                            <a
                                href={meta.resume}
                                target="_blank"
                                aria-label="Resume"
                            >
                                <Resume />
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className="reveal float-start flex flex-col flex-nowrap items-start justify-center gap-[25px]"
                    style={{ animationDelay: "80ms" }}
                >
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
                        <div className="hidden flex-col gap-[10px] lg:flex">
                            <div className="flex items-center gap-[7px] text-[15px] font-light text-[#FFFFFFCC]">
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
                            <div className="flex items-center gap-[7px] text-[15px] font-light text-[#FFFFFFCC]">
                                <p>Press</p>
                                <div className="cursor-pointer rounded-[5px] border-[1px] border-[#3B3B3B] px-2">
                                    <a
                                        href={meta.resume}
                                        target="_blank"
                                        className="text-[13px]"
                                    >
                                        R
                                    </a>
                                </div>
                                <p>to view my resume</p>
                            </div>
                        </div>
                        <div className="flow-row flex max-w-[130px] items-center gap-[10px] rounded-lg border-[1px] border-[#262626] p-3 lg:hidden">
                            <div className="relative h-[7px] w-[7px]">
                                <span className="absolute inset-0 animate-ping rounded-full bg-[#09b858] opacity-75"></span>
                                <span className="relative block h-[7px] w-[7px] rounded-full bg-[#09b858]"></span>
                            </div>
                            <p className="text-[12px] text-[#FFFFFFCC]">Open to work</p>
                        </div>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-[#262626]"></div>

                <div className="reveal" style={{ animationDelay: "160ms" }}>
                    <BlogPreview posts={posts.slice(0, 3)} />
                </div>

                <div className="h-[1px] w-full bg-[#262626]"></div>

                <div className="reveal flex flex-col gap-[25px]" style={{ animationDelay: "240ms" }}>
                    <div className="flex flex-col gap-[5px]">
                        <Briefcase />
                        <h3 className="text-[20px] font-medium leading-[1.3em]">
                            Experience
                        </h3>
                        <p className="text-[14px] font-light leading-[1.8em] text-[#FFFFFFCC]">
                            Companies I&apos;ve built for over the years.
                        </p>
                    </div>
                    <ul className="relative flex flex-col gap-7 border-l border-[#262626] pl-6">
                        {meta.experience.map((job, idx) => (
                            <li
                                key={idx}
                                className="relative flex flex-col gap-1"
                            >
                                <span className="absolute -left-[28px] top-[7px] h-[9px] w-[9px] rounded-full bg-[#3B3B3B] ring-4 ring-black"></span>
                                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                                    <h4 className="text-[15px] leading-[1.3em] text-white">
                                        {job.company}
                                    </h4>
                                    <p className="text-[11px] font-light text-[#8A8A8A] lg:text-[12px]">
                                        {job.dates}
                                    </p>
                                </div>
                                <p className="text-[12px] font-light text-[#FFFFFFCC] lg:text-[13px]">
                                    {job.role} · {job.location}
                                </p>
                                <p className="mt-1 text-[12px] font-light leading-[1.6em] text-[#FFFFFF99] lg:text-[13px]">
                                    {job.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="h-[1px] w-full bg-[#262626]"></div>

                <div className="reveal flex flex-col gap-[25px]" style={{ animationDelay: "320ms" }}>
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
                                className="flex h-[57px] cursor-pointer items-center gap-[10px] rounded-[10px] border-[1px] border-[#262626] p-[10px] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#3B3B3B] hover:bg-[#0F0F0F]"
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

                <div
                    className="reveal mb-8 flex flex-col justify-between lg:flex-row"
                    style={{ animationDelay: "400ms" }}
                >
                    <p className="mt-8 text-[12px] font-light text-white/90">
                        © 2026 — Built with{"  "}
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
                        Last Updated : {lastUpdated}
                    </p>
                </div>
            </div>
        </>
    );
};

export default HomeSection;

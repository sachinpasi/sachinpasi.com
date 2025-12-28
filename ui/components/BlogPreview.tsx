'use client'

import TechStack from "../icon/TechStack"

type BlogPost = {
    slug: string
    title: string
    date: string
    url: string
    readTime?: string
    tags?: string[]
    isNew?: boolean
}

export default function BlogPreview({
    posts,
}: {
    posts: BlogPost[]
}) {

    return (
        <section className="flex flex-col gap-[25px]">
            <div className="flex flex-col gap-[5px]">
                <TechStack />
                <h3 className="text-[20px] font-medium leading-[1.3em]">
                    Tech Writings
                </h3>
                <p className="text-[14px] font-light leading-[1.8em] text-[#FFFFFFCC]">
                    Sharing what I learn while building
                </p>
            </div>

            <ul className="space-y-6">
                {posts.map((post) => (
                    <li key={post.slug} className="group flex flex-col items-start gap-1">
                        <div className="flex items-center gap-2">
                            <a
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[16px] leading-[1.4em] group-hover:underline lg:text-[18px]"
                            >
                                {post.title}
                            </a>
                            {post.isNew && (
                                <span className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-[10px] font-medium text-green-500">
                                    NEW
                                </span>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-[12px] font-light text-[#FFFFFF99] lg:text-[13px]">
                            <span>
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    year: 'numeric',
                                })}
                            </span>
                            {post.readTime && (
                                <>
                                    <span className="h-[3px] w-[3px] rounded-full bg-[#FFFFFF99]"></span>
                                    <span>{post.readTime}</span>
                                </>
                            )}
                            {post.tags && post.tags.length > 0 && (
                                <>
                                    <span className="h-[3px] w-[3px] rounded-full bg-[#FFFFFF99]"></span>
                                    <div className="flex gap-2">
                                        {post.tags.map((tag) => (
                                            <span key={tag}>#{tag}</span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            <a
                href={process.env.NEXT_PUBLIC_BLOG_URL}
                className="mt-2 inline-block text-[14px] font-light text-[#FFFFFFCC] underline decoration-1 underline-offset-4 hover:text-white"
            >
                View all posts →
            </a>
        </section>
    )
}

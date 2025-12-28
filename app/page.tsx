import { meta } from "@/lib/constants";
import HomeSection from "@/ui/components/HomeSection";

async function getBlogPosts() {
  const res = await fetch(`${meta.blogUrl}/api/posts`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    return []
  }

  return res.json()
}

export default async function Page() {
  const posts = await getBlogPosts()

  return <HomeSection posts={posts} />;
}

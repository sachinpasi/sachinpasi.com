import { meta } from "./constants"


export async function getBlogPosts() {
    const res = await fetch(`${meta.blogUrl}/api/posts`, {
        next: { revalidate: 3600 },
    })

    if (!res.ok) {
        throw new Error('Failed to fetch blog posts')
    }

    return res.json()
}

import prisma from "@/lib/prisma";


export async function Get() {
    const posts = await prisma.post.findMany();
    return new Response(JSON.stringify(posts))
}
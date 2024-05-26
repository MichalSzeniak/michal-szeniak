import { HoverEffect } from "@/components/HoverEffect";
import { Button } from "@/components/ui/button";
import { reader } from "app/reader";
import Link from "next/link";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();
  console.log(posts);

  const projects = posts?.map((post) => ({
    title: post.entry.title,
    description: post.entry.description,
    image: post.entry.image,
    link: `articles/${post.slug}`,
  }));

  return (
    <header className="relative flex  w-full  items-center justify-center">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center pt-20">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col items-center justify-center">
          <div className="mx-auto max-w-5xl px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
    </header>
  );
}

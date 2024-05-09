import { DocumentRenderer } from "@keystatic/core/renderer";
import { reader } from "app/reader";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await reader.collections.posts.read(slug);

  if (!post) return notFound();

  return (
    <section className="w-full mx-auto max-w-screen-xl min-h-screen px-5 sm:px-20 flex flex-col gap-10">
      <h1 className="mt-16 text-4xl font-black tracking-tight sm:text-5xl xl:text-6xl font-nunito">
        {post.title}
      </h1>
      <div className="flex justify-center">
        {post.image && (
          <Image
            src={post.image}
            width={300}
            height={300}
            alt="Picture of the post"
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      <div className="text-lg">
        <DocumentRenderer document={await post.content()} />
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();

  return slugs.map((slug) => ({
    slug,
  }));
}

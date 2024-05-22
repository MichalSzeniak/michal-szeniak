import { DocumentRenderer } from "@keystatic/core/renderer";
import { reader } from "app/reader";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await reader.collections.posts.read(slug);

  if (!post) return notFound();

  return (
    <section className="h-screen w-full px-8 pb-16 pt-28 sm:pb-28 sm:pt-28">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col items-center justify-center">
        <h1 className="mt-16 font-nunito text-4xl font-black tracking-tight sm:text-5xl xl:text-6xl">
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

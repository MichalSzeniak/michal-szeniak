import { AspectRatio } from "@/components/ui/aspect-ratio";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { reader } from "app/reader";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await reader.collections.posts.read(slug);

  if (!post) return notFound();

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-l px-8 py-10 sm:py-0">
      <div className="flex max-w-screen-lg flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col items-center justify-center gap-10">
          <div className="flex h-full w-full min-w-72 justify-center">
            <AspectRatio ratio={16 / 9}>
              {post.image && (
                <img
                  src={post.image}
                  alt="Picture of the post"
                  className="h-full w-full rounded-md object-cover"
                />
              )}
            </AspectRatio>
          </div>
          <h1 className="font-poppins text-4xl font-black tracking-tight sm:text-5xl xl:text-6xl">
            {post.title}
          </h1>

          <div className="text-lg">
            <DocumentRenderer document={await post.content()} />
          </div>
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

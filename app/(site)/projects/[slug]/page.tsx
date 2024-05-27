import DivAnimation from "@/components/DivAnimation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { reader } from "app/reader";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const project = await reader.collections.projects.read(slug);

  if (!project) return notFound();

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-l px-8 py-10 sm:py-0">
      <DivAnimation>
        <div className="flex max-w-screen-lg flex-col items-center justify-center gap-10 lg:flex-row">
          <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col items-center justify-center gap-10">
            <div className="flex h-full w-full min-w-72 justify-center">
              <AspectRatio ratio={16 / 9}>
                {project.image && (
                  <img
                    src={project.image}
                    alt="Picture of the projects"
                    className="h-full w-full rounded-md object-cover"
                  />
                )}
              </AspectRatio>
            </div>
            <h1 className="font-poppins text-4xl font-black tracking-tight sm:text-5xl xl:text-6xl">
              {project.title}
            </h1>

            <div className="text-lg">
              <DocumentRenderer document={await project.content()} />
            </div>
          </div>
        </div>
      </DivAnimation>
    </section>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.projects.list();

  return slugs.map((slug) => ({
    slug,
  }));
}

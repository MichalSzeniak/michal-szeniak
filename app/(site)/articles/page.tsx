import { Button } from "@/components/ui/button";
import { reader } from "app/reader";
import Link from "next/link";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <div className="h-screen w-full px-8 pb-16 pt-28 sm:pb-28 sm:pt-28">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col items-center justify-center">
        <ul className="mt-16 grid grid-cols-1 gap-4 gap-y-20 pl-0 sm:gap-y-16 md:grid-cols-2 md:gap-x-6 xl:grid-cols-3 ">
          {posts.map((post) => (
            <Link href={`articles/${post.slug}`}>
              <li
                key={post.slug}
                className="h-72 w-52 bg-primary duration-300 ease-out hover:bg-secondary"
              >
                <p className="flex justify-center pt-5 text-lg">
                  {post.entry.title}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

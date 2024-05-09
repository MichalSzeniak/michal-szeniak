import { reader } from "app/reader";
import Image from "next/image";
import Link from "next/link";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  console.log(posts);

  return (
    <section className="w-full mx-auto max-w-screen-xl min-h-screen px-20">
      <ul className="grid grid-cols-1 gap-4 md:gap-x-6 gap-y-20 sm:gap-y-16 md:grid-cols-2 xl:grid-cols-3 pl-0 mt-16 ">
        {posts.map((post) => (
          <Link href={`posts/${post.slug}`}>
            <li
              key={post.slug}
              className="w-52 h-72 bg-primary hover:bg-secondary ease-out duration-300"
            >
              <p className="flex pt-5 justify-center text-lg">
                {post.entry.title}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}

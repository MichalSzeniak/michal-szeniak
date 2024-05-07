import Link from "next/link";
import { reader } from "../app/reader";

const Header = async () => {
  const posts = await reader.collections.posts.all();

  return (
    <header className="w-full px-8 pb-16 pt-10 sm:pb-28 sm:pt-28">
      <div className="mx-auto w-full max-w-screen-xl gap-16">
        <h1 className="mx-auto text-center font-heading text-4xl font-black tracking-tight sm:text-5xl md:ml-0 md:text-left xl:text-6xl font-nunito">
          Hi, I’m Michal
        </h1>
        <p className="">
          As a front-end web designer/developer, I specialize in creating
          captivating design systems that elevate user experiences. With a keen
          eye for detail, I strive to merge aesthetic appeal with seamless
          functionality, resulting in polished and user-friendly products.
        </p>

        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="bg-red-500">
              <Link href={`/${post.slug}`}>{post.entry.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Header;

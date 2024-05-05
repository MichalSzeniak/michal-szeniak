import Link from "next/link";
import { reader } from "../app/reader";

const Header = async () => {
  const posts = await reader.collections.posts.all();

  return (
    <header className="w-full px-8 pb-16 pt-10 sm:pb-28 sm:pt-28">
      <div className="mx-auto w-full max-w-screen-xl gap-16">
        <h1>Keystatic ⚡️</h1>
        <p className="mx-auto text-center font-heading text-4xl font-black tracking-tight sm:text-5xl md:ml-0 md:text-left xl:text-6xl font-nunito">
          This homepage shows how to load a collection from the reader API.
        </p>
        <p className="bg-red-500 ">
          <a href="/keystatic">Click here to visit the Admin UI</a>, or the link
          below to view a post in the collection.
        </p>
        <h2>Posts</h2>
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

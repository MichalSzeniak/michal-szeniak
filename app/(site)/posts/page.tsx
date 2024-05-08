import { reader } from "app/reader";
import Link from "next/link";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <div>
      website in progress
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="gap-5 flex flex-col">
            <Link href={`posts/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

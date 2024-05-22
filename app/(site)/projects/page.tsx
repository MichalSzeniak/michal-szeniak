import { Button } from "@/components/ui/button";
import { reader } from "app/reader";
import Link from "next/link";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <div className="h-screen w-full px-8 pb-16 pt-28 sm:pb-28 sm:pt-28">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col items-center justify-center">
        <span className="animate-bounce text-6xl">🔨</span>
        <div className="flex flex-col items-center gap-3">
          <h2>website under construction</h2>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

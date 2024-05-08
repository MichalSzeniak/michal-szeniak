import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-161px)] justify-center flex">
      <div className="mx-auto w-full max-w-screen-xl flex flex-col items-center justify-center">
        <span className="text-6xl animate-bounce">🔨</span>
        <div className="flex flex-col items-center gap-3">
          <h2>website under construction</h2>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

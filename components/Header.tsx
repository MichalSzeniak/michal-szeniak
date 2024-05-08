import { DocumentRenderer } from "@keystatic/core/renderer";
import { reader } from "app/reader";
import { notFound } from "next/navigation";

const Header = async () => {
  const header = await reader.singletons.header.read();

  if (!header) return notFound();

  return (
    <header className="w-full px-8 pb-16 pt-10 sm:pb-28 sm:pt-28 min-h-screen">
      <div className="mx-auto w-full max-w-screen-xl gap-16">
        <h1 className="mx-auto text-center font-heading text-4xl font-black tracking-tight sm:text-5xl md:ml-0 md:text-left xl:text-6xl font-nunito">
          {header?.header}
        </h1>
        <div className="mt-10 text-xl xl:text-3xl">
          <DocumentRenderer document={await header.content()} />
        </div>
      </div>
    </header>
  );
};
export default Header;

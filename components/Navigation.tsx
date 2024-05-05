import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="relative top-0 z-50 w-full bg-white py-3 shadow-xl shadow-gray-200/20 print:hidden sm:py-4 md:text-sm lg:text-base">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-2 px-5 sm:gap-0">
        <p className="text-2xl font-black tracking-tight xl:text-4xl font-nunito">
          <span className="text-rose-500 bg-">Michał</span>
          <span className="text-gray-900">Szeniak</span>
        </p>
        <ul className="flex gap-4">
          <li>
            <Link className="font-nunito" href={"/"}>
              Home
            </Link>
          </li>
          {/* <li>
            <Link className="font-nunito" href={"/"}>
              Home
            </Link>
          </li>{" "}
          <li>
            <Link className="font-nunito" href={"/"}>
              Home
            </Link>
          </li>{" "}
          <li>
            <Link className="font-nunito" href={"/"}>
              Home
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;

import logoUrl from "../assets/logo-white.png";
import logoTypeUrl from "../assets/logo-type-white.png";

export default function Header() {
  return (
    <nav className="absolute top-0 left-0 w-full p-5 z-10">
      <div className="flex justify-between w-full">
        <img src={logoUrl} className="h-12" />
        <div className="h-12 relative">
          <img src={logoTypeUrl} className="h-6 mt-[1.45rem]" />
        </div>
      </div>
    </nav>
  );
}

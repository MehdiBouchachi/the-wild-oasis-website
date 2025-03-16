import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileNavToggle from "./MobileNavToggle"; // client component
import { auth } from "../_lib/auth";

export default async function Header() {
  const session = await auth();

  return (
    <header className="px-8 py-5 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />

        {/* Desktop navigation */}
        <div className="hidden md:block">
          <Navigation session={session} />
        </div>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <MobileNavToggle session={session} />
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 sm:gap-4 z-10">
      <Image
        src={logo}
        height={48} // slightly smaller on mobile
        width={48}
        alt="The Wild Oasis logo"
        quality={100}
        className="sm:h-[60px] sm:w-[60px] h-[48px] w-[48px]"
      />
      <span className="text-lg sm:text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;

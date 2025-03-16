import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full px-4">
        <h1 className="animate-move-in-bottom text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>

        <Link
          href="/cabins"
          className="animate-move-in-bottom-delayed bg-accent-500 px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 text-base sm:text-lg md:text-xl text-primary-800 font-semibold hover:bg-accent-600 transition-all "
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}

/* import Image from "next/image";
import Link from "next/link";
import backgroundImage from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24 relative h-[calc(100vh-6rem)] overflow-hidden">
      <Image
        className="object-cover object-top"
        placeholder="blur"
        src={backgroundImage}
        fill
        alt="Mountains and forests with two cabins"
        quality={80}
        priority
      />

      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-50 mb-10 tracking-tight font-normal animate-move-in-bottom">
          Welcome to paradise.
        </h1>

        <Link
          href="/cabins"
          className="animate-move-in-bottom-delayed bg-accent-500 px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 text-primary-800 text-base sm:text-lg md:text-xl font-semibold hover:bg-accent-600 transition-all rounded"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
 */

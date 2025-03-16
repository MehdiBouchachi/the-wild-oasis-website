"use client";

import Link from "next/link";

export default function Navigation({ isMobile = false, session, onClickLink }) {
  return (
    <nav className="z-10 text-xl w-full">
      <ul
        className={`flex ${
          isMobile
            ? "flex-col items-center justify-center w-full space-y-6 text-[1.05rem] font-medium"
            : "gap-16 items-center"
        }`}
      >
        {/* Cabins */}
        <li>
          <Link
            href="/cabins"
            onClick={isMobile ? onClickLink : undefined}
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>

        {/* About */}
        <li>
          <Link
            href="/about"
            onClick={isMobile ? onClickLink : undefined}
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>

        {/* Guest Area */}
        <li>
          <Link
            href="/account"
            onClick={isMobile ? onClickLink : undefined}
            className="hover:text-accent-400 transition-colors flex items-center gap-3 whitespace-nowrap"
          >
            {session?.user?.image && !isMobile && (
              <img
                src={session.user.image}
                alt={session.user.name}
                className="h-8 w-8 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
            <span>Guest area</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

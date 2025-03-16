"use client";

import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import gsap from "gsap";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function MobileNavToggle({ session }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const sidebarRef = useRef(null);
  const backdropRef = useRef(null);

  // Prevent background scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  // Mount guard (prevents rendering before hydration)
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // GSAP animations for open/close
  useEffect(() => {
    if (!sidebarRef.current || !backdropRef.current) return;

    if (isOpen) {
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        pointerEvents: "auto",
      });

      gsap.fromTo(
        sidebarRef.current,
        { x: "100%" },
        { x: 0, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        pointerEvents: "none",
      });

      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-primary-100"
        aria-label="Open mobile menu"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {hasMounted && isOpen && (
        <>
          <div
            ref={backdropRef}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 opacity-0 pointer-events-none"
            onClick={() => setIsOpen(false)}
          />

          <div
            ref={sidebarRef}
            className="fixed top-0 right-0 h-full w-[70vw] max-w-[420px] bg-primary-950 border-l border-primary-800 z-50 shadow-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-primary-800">
              <span className="text-lg font-semibold text-primary-100">
                Menu
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-100"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 px-6 py-10 flex flex-col justify-center">
              <Navigation
                isMobile
                session={session}
                onClickLink={() => setIsOpen(false)}
              />
            </div>

            <div className="p-6 border-t border-primary-800 text-sm text-primary-600">
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
}

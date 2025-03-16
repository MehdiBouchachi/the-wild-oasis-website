"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        once: true,
      },
    });

    // Image from left
    tl.fromTo(
      imageRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Title from right (slightly overlaps image)
    tl.fromTo(
      nameRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6" // 👈 overlaps with image
    );

    // Description (starts earlier, not waiting)
    tl.fromTo(
      descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.4" // 👈 overlaps with name
    );

    // List items (start quickly after desc begins)
    const listItems = listRef.current?.querySelectorAll("li");
    if (listItems?.length) {
      tl.fromTo(
        listItems,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2" // 👈 don't wait until desc fully ends
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24"
    >
      <div className="relative  scale-[1.15] -translate-x-3">
        <Image
          ref={imageRef}
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
          Cabin {name}
        </h3>

        <p ref={descRef} className="text-lg text-primary-300 mb-10">
          {" "}
          <TextExpander>{description} </TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7" ref={listRef}>
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;

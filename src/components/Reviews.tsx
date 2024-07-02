"use client";

import Image from "next/image";
import Container from "./Container";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Reviews = () => {
  return (
    <Container className="relative max-w-5xl">
      <Image
        alt="what-are-pp-buying"
        src={"/what-people-are-buying.png"}
        width={0}
        height={0}
        sizes="100vw"
        aria-hidden="true"
        className="absolute -left-32 top-1/3 hidden select-none xl:block"
      />
      <ReviewGrid />
    </Container>
  );
};

export default Reviews;

const ReviewGrid = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    ></div>
  );
};

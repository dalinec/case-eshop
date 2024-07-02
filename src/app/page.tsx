import Container from "@/components/Container";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import { imageConsts, reviewsConsts } from "./consts/imageConsts";
import Phone from "@/components/Phone";
import { Icons } from "@/components/Icons";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <Container className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
          {/* wrapper left*/}
          <div className="col-span-2 px-6 lg:pt-4 xl:px-6">
            {/* left side  */}
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="absolute -top-20 left-0 hidden w-28 lg:block">
                <Image
                  src={"/snake-1.png"}
                  alt="snake"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </div>
              {/* heading */}
              <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
                Capture your favourite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>
              {/* list */}
              <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="size-5 shrink-0 text-green-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="size-5 shrink-0 text-green-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="size-5 shrink-0 text-green-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>
              {/* users container */}
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  {imageConsts.map((item, i) => {
                    return <ImageHomepage {...item} key={i} />;
                  })}
                </div>
                {/* --------- */}
                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-green-600 text-green-600"
                      />
                    ))}
                  </div>
                  <p>
                    <span className="font-semibold">1250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* wrapper right */}
          <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              {/* decor */}
              <Image
                src={"/your-image.png"}
                alt="yrimg"
                width={0}
                height={0}
                sizes="100vw"
                className="absolute -top-20 left-56 hidden h-auto w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
              />
              {/* decor line */}
              <Image
                src={"/line.png"}
                alt="line"
                width={0}
                height={0}
                sizes="100vw"
                className="absolute -bottom-6 -left-6 w-20 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </Container>
      </section>

      {/* value propositionn section */}
      <section className="bg-slate-100 py-24">
        <Container className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            {/* custom h2 */}
            <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-green-500 sm:block" />
              </span>{" "}
              say
            </h2>
            <Image
              src={"/snake-2.png"}
              alt="img"
              width={0}
              height={0}
              sizes="100vw"
              className="order-0 h-auto w-24 lg:order-2"
            />
          </div>

          {/* Testimonmials container */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* testimonials */}
            {reviewsConsts.map((review, i) => {
              return <ReviewHomepage key={i} {...review} />;
            })}
          </div>
        </Container>
        <div className="pt-16">
          <Reviews />
        </div>
      </section>
    </div>
  );
}

const ImageHomepage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      className="inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
      width={0}
      height={0}
      sizes="100vw"
      alt="user"
    />
  );
};

interface ReviewHomepageProps {
  name: string;
  review: JSX.Element;
  stars: number;
  img: string;
}

const ReviewHomepage = ({ name, review, stars, img }: ReviewHomepageProps) => {
  return (
    <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
      <div className="mb-2 flex gap-0.5">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="size-5 fill-green-600 text-green-600" />
        ))}
      </div>
      <div className="text-balance text-lg leading-8">{review}</div>
      {/* icon + name + verf */}
      <div className="mt-2 flex gap-4">
        <Image
          src={img}
          alt="img"
          width={0}
          height={0}
          sizes="100vw"
          className="size-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="font-semibold">{name}</p>
          <div className="flex items-center gap-1.5 text-zinc-600">
            <Check className="size-4 stroke-[3px] text-green-600" />
            <p className="text-sm">Verified Purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

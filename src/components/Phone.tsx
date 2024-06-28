import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

//used to override all the props like in a regular div
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
  className?: string;
}

const Phone = ({ className, imgSrc, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative z-50 overflow-hidden",
        className,
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone-edges"
        width={0}
        height={0}
        sizes="100vw"
        className="pointer-events-none z-50 h-auto w-full select-none"
      />
      <div className="absolute inset-0 -z-10">
        <Image
          src={imgSrc}
          alt="phone"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Phone;

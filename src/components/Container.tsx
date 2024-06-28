import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-screen-xl px-2.5 md:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;

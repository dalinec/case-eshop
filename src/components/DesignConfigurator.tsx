import NextImage from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface DesignConfiguratorProps {
  configId: string;
  imageUrl: string;
  imageDimensions: { width: number; height: number };
}

const DesignConfigurator = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfiguratorProps) => {
  return (
    <div className="relative mb-20 mt-20 grid grid-cols-3 pt-20">
      <div className="relative col-span-2 flex h-[37.5rem] w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1">
        <div className="pointer-events-none relative aspect-[896/1831] w-60 bg-opacity-50">
          <AspectRatio
            ratio={896 / 1831}
            className="pointer-events-none relative z-50 aspect-[896/1831] w-full"
          >
            <NextImage
              alt="phone-img"
              src={"/phone-template.png"}
              width={0}
              height={0}
              sizes="100vw"
              className="pointer-events-none z-50 h-auto w-full select-none"
            />
          </AspectRatio>
          <div className="absolute inset-0 bottom-px left-[3px] right-[3px] top-px z-40 rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
          <div
            className={cn(
              "absolute inset-0 bottom-px left-[3px] right-[3px] top-px rounded-[32px]",
              `bg-blue-950`,
            )}
          />
        </div>

        <div className="relative h-full w-full">
          <NextImage
            src={imageUrl}
            alt="your-image"
            fill
            className="pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignConfigurator;

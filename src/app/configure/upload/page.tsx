"use client";

import { Progress } from "@/components/ui/progress";
import { useUploadThing } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import {
  Image,
  ImageIcon,
  Loader2,
  MousePointerSquareDashed,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

const UploadConfigPage = () => {
  //tracking the state and updating the color we are dragging over
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgeress, setUploadProgress] = useState(0);
  const router = useRouter();

  const {} = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId;
      startTransition(() => {
        router.push(`/configure/design?id=${configId}`);
      });
    },
    onUploadProgress(p) {
      setUploadProgress(p);
    },
  });

  const onDropRejected = () => {};
  const onDropAccepted = () => {
    console.log("accepted");
  };

  const isUploading = false;
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={cn(
        "relative my-16 flex h-full w-full flex-1 flex-col items-center justify-center rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl",
        {
          "bg-blue-900/10 ring-blue-900/25": isDragOver,
        },
      )}
    >
      <div className="relative flex w-full flex-1 flex-col items-center justify-center">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="flex h-full w-full flex-1 cursor-pointer flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {isDragOver ? (
                <MousePointerSquareDashed className="mb-2 size-6 text-zinc-500" />
              ) : isUploading || isPending ? (
                <Loader2 className="mb-2 size-6 animate-spin text-zinc-500" />
              ) : (
                <ImageIcon className="mb-2 size-6 text-zinc-500" />
              )}
              <div className="mb-2 flex flex-col justify-center text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <p>Uploading...</p>
                    <Progress
                      value={uploadProgeress}
                      className="mt-2 h-2 w-40 bg-gray-300"
                    />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center">
                    <p>Redirecting, please wait...</p>{" "}
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className="font-semibold">Drop file</span>
                    to upload
                  </p>
                ) : (
                  <p>
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                )}
              </div>

              {isPending ? null : (
                <p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default UploadConfigPage;

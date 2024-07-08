"use client";

import Container from "@/components/Container";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

const UploadConfigPage = () => {
  //tracking the state and updating the color is we are dragging over
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const onDropRejected = () => {};
  const onDropAccepted = () => {
    console.log("accepted");
  };

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
              className="flex h-full w-full flex-1 flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              asd
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default UploadConfigPage;

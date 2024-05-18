"use client";
import React, { useRef } from "react";
import { icons } from "lucide-react";
import { useCombinedContext } from "@/context/combined-context";
import { IconLucide } from "./icon-list";
import { Button } from "./ui/button";

type IconName = keyof typeof icons;

const LogoPreview: React.FC = () => {
  const {
    backgroundColor,
    backgroundSize,
    backgroundPadding,
    iconSize,
    iconRotate,
    iconColor,
    iconName,
  } = useCombinedContext();

  const downloadRef = useRef<HTMLDivElement>(null);

  const handleDownloadSVG = () => {
    if (!downloadRef.current) return;
    const svgContent = getSVGContent(downloadRef.current);
    downloadFile(svgContent, "download.svg", "image/svg+xml");
  };

  const getSVGContent = (element: HTMLElement) => {
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const html = element.innerHTML;

    const svgOpenTag = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
    const svgCloseTag = `</svg>`;
    const styleTag = `
      <style>
        .download-content {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background-color: ${backgroundColor};
          border-radius: ${backgroundSize}px;
        }
      </style>`;
    const foreignObjectTag = `<foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml" class="download-content">${html}</div>
    </foreignObject>`;

    return `${svgOpenTag}${styleTag}${foreignObjectTag}${svgCloseTag}`;
  };

  const downloadFile = (data: string, filename: string, type: string) => {
    const blob = new Blob([data], { type });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <Button onClick={handleDownloadSVG}>Download</Button>
      <div
        className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-400"
        style={{
          padding: `${backgroundPadding}px`,
        }}
      >
        <div
          ref={downloadRef}
          id="download"
          className="h-full w-full flex items-center justify-center"
          style={{
            background: backgroundColor,
            borderRadius: `${backgroundSize}px`,
          }}
        >
          <IconLucide
            name={iconName as IconName}
            size={iconSize}
            color={iconColor}
            rotate={iconRotate}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;

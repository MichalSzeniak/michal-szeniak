"use client";
import Reveral from "@/components/Reveral";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Homepage() {
  const iframeRef = useRef(null);
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width <= 400) {
        setScale(0.51);
      } else if (width <= 600) {
        setScale(0.91);
      } else if (width <= 960) {
        setScale(1.01);
      } else {
        setScale(1.5);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={iframeRef}
      className="min-h-screen w-full px-8 pb-16 pt-28 sm:pb-28 sm:pt-28"
    >
      <div className="iframe-container mx-auto flex h-full w-full max-w-screen-lg flex-col items-center justify-center">
        {/* <Reveral>
          <iframe src="CV_MichalSzeniak.pdf" width={height} height={height} />

        </Reveral> */}

        <div className="pdf-container">
          <Document file="CV_MichalSzeniak.pdf">
            <Page key={1} pageNumber={1} className="pdf-page" scale={scale} />
          </Document>
        </div>
      </div>
    </div>
  );
}

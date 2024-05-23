"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Homepage() {
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
    <div className="min-h-screen w-full px-8 pb-16 pt-28 sm:pb-28 sm:pt-28">
      <Button
        variant="secondary"
        className="absolute right-5 gap-5 font-black"
        asChild
      >
        <a href="CV_MichalSzeniak.pdf" download="CV_MichalSzeniak.pdf">
          Download resume <Download />
        </a>
      </Button>
      <div className="iframe-container mx-auto mt-14 flex h-full w-full max-w-screen-lg flex-col items-center justify-center ">
        <motion.div
          className="flex"
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          initial={{ opacity: 0, scale: 0.3, filter: "blur(10px)" }}
          transition={{
            delay: 0.6,
            opacity: {
              ease: "easeInOut",
              duration: 0.5,
            },
            y: {
              duration: 0.2,
            },
          }}
        >
          <Document file="CV_MichalSzeniak.pdf">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </motion.div>
      </div>
    </div>
  );
}

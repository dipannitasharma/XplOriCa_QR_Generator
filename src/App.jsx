import { useState, useRef, useEffect } from "react";

import InputForm from "./components/InputForm";
import QRPreview from "./components/QRPreview";
import DownloadButton from "./components/DownloadButton";

export default function App() {

  const [text, setText] = useState("");
  const [size, setSize] = useState(250);
  const [format, setFormat] = useState("png");

  const [fileName, setFileName] = useState("");
  const [isFileNameManual, setIsFileNameManual] = useState(false);

  const qrRef = useRef(null);

  /* ========== AUTO FILE NAME ========== */

  useEffect(() => {

  if (!text || isFileNameManual) return;

  try {
    const url = new URL(text);

    const path = url.pathname
      .split("/")
      .filter(Boolean)
      .pop();

    if (path) {
      setFileName(path);
    } else {
      setFileName(url.hostname.replace("www.", ""));
    }

  } catch {

    const cleaned = text
      .trim()
      .replace(/[^a-z0-9-_]/gi, "_")
      .toLowerCase();

    setFileName(cleaned);
  }

}, [text, isFileNameManual]);


  /* ========== UI ========== */

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">

      <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-2xl font-bold text-center mb-6">
          Xplorica QR Generator
        </h1>

        <InputForm
          text={text}
          setText={setText}
          size={size}
          setSize={setSize}
          format={format}
          setFormat={setFormat}
          fileName={fileName}
          setFileName={setFileName}
          setIsFileNameManual={setIsFileNameManual}
        />

        <QRPreview
          text={text}
          size={size}
          qrRef={qrRef}
        />

        <DownloadButton
          qrRef={qrRef}
          format={format}
          fileName={fileName}
          disabled={!text}
        />

      </div>

    </div>
  );
}

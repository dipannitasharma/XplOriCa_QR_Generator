import { useState, useRef } from "react";

import InputForm from "./components/InputForm";
import QRPreview from "./components/QRPreview";
import DownloadButton from "./components/DownloadButton";

export default function App() {

  const [text, setText] = useState("");
  const [size, setSize] = useState(300);
  const [format, setFormat] = useState("png");
  const [fileName, setFileName] = useState("");

  const qrRef = useRef(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">

      <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl w-full max-w-md">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Xplorica QR Generator
        </h1>

        {/* Inputs */}
        <InputForm
          text={text}
          setText={setText}        // ✅ FIXED
          size={size}
          setSize={setSize}
          format={format}
          setFormat={setFormat}
          fileName={fileName}
          setFileName={setFileName}
        />

        {/* Preview */}
        <QRPreview
          text={text}
          size={size}
          qrRef={qrRef}
        />

        {/* Download */}
        <DownloadButton
          qrRef={qrRef}
          format={format}
          fileName={fileName}      // ✅ ADDED
          disabled={!text}
        />

      </div>

    </div>
  );
}

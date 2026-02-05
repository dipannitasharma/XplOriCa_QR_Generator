import { QRCodeCanvas } from "qrcode.react";
import logo from "../assets/logo.jpg";

export default function QRPreview({ text, size, qrRef }) {
  if (!text) return null;

  const padding = 16; // px (p-4 = 16px)

  return (
    <div className="flex justify-center my-6">

      <div
        ref={qrRef}
        className="relative bg-white rounded p-4"
        style={{
          width: size + padding * 2,
          height: size + padding * 2,
        }}
      >
        <QRCodeCanvas
          value={text}
          size={size}
          level="H"
          bgColor="#ffffff"
          fgColor="#000000"
        />

        {/* Center Logo */}
        <img
          src={logo}
          alt="Xplorica Logo"
          className="absolute top-1/2 left-1/2
                     -translate-x-1/2 -translate-y-1/2"
          style={{
            width: size * 0.25,
            height: size * 0.25,
          }}
        />
      </div>

    </div>
  );
}



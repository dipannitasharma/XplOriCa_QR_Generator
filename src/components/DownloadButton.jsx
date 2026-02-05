import * as htmlToImage from "html-to-image";

export default function DownloadButton({ qrRef, format, disabled }) {

  const handleDownload = async () => {
    if (!qrRef.current) return;

    let dataUrl;

    if (format === "png") {
      dataUrl = await htmlToImage.toPng(qrRef.current);
    } else {
      dataUrl = await htmlToImage.toJpeg(qrRef.current, {
        quality: 0.95,
      });
    }

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `xplorica-qr.${format}`;
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      disabled={disabled}
      className="
        w-full bg-blue-600 hover:bg-blue-700
        disabled:bg-zinc-700
        py-2 rounded font-semibold transition
      "
    >
      Download QR
    </button>
  );
}

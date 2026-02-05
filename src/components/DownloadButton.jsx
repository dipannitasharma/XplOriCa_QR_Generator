import * as htmlToImage from "html-to-image";

export default function DownloadButton({
  qrRef,
  format,
  disabled,
  fileName,

}) {

  // Clean file name
  const sanitizeName = (name) => {
    return name
      .trim()
      .replace(/[^a-z0-9-_]/gi, "_")
      .toLowerCase();
  };

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

  const safeName = fileName
    ? sanitizeName(fileName)
    : "xplorica-qr";

  const finalName = `${safeName}.${format}`;

  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = finalName;
  link.click();
};


  return (
    <button
      onClick={handleDownload}
      disabled={disabled}
      className="
        w-full bg-blue-600 hover:bg-blue-700
        disabled:bg-zinc-700
        py-2 rounded font-semibold transition mt-5
      "
    >
      Download QR
    </button>
  );
}

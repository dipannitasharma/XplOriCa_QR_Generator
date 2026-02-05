export default function InputForm({
  text,
  setText,
  size,
  setSize,
  format,
  setFormat,
  fileName,
  setFileName,
}) {
  return (
    <div className="space-y-4">

      {/* Text */}
      <div>
        <label className="text-sm text-zinc-400">
          Enter Text / Link
        </label>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="https://xplorica.in"
          className="w-full mt-1 px-3 py-2 rounded bg-zinc-800 border border-zinc-700"
        />
      </div>

      {/* Size */}
      <div>
        <label className="text-sm text-zinc-400">
          QR Size (px)
        </label>

        <input
          type="number"
          min={150}
          max={500}
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="w-full mt-1 px-3 py-2 rounded bg-zinc-800 border border-zinc-700"
        />
      </div>

      {/* Format */}
      <div>
        <label className="text-sm text-zinc-400">
          Download Format
        </label>

        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="w-full mt-1 px-3 py-2 rounded bg-zinc-800 border border-zinc-700"
        >
          <option value="png">PNG</option>
          <option value="jpg">JPG</option>
        </select>
      </div>

      {/* File Name */}
      <div>
        <label className="text-sm text-zinc-400">
          Custom File Name
        </label>

        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="hacktonix-community"
          className="w-full mt-1 px-3 py-2 rounded bg-zinc-800 border border-zinc-700"
        />
      </div>

    </div>
  );
}

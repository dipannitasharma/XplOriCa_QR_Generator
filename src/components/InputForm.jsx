export default function InputForm({
  text,
  setText,
  size,
  setSize,
  format,
  setFormat,
}) {
  return (
    <div className="space-y-4">

      {/* Text Input */}
      <div>
        <label className="text-sm text-zinc-400">
          Enter Text / Link
        </label>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="https://xplorica.in"
          className="w-full mt-1 px-3 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Size Input */}
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

      {/* Format Select */}
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

    </div>
  );
}

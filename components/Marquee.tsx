const ITEMS = [
  ["lilac", "Fotografía"],
  ["mint", "Video Cinemático"],
  ["blush", "Dirección Creativa"],
  ["butter", "Diseño Visual"],
  ["lilac", "Editorial"],
] as const;

const dotColor: Record<string, string> = {
  lilac: "bg-lilac",
  mint: "bg-mint",
  blush: "bg-blush",
  butter: "bg-butter",
};

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y-[1.5px] border-lilac bg-surface py-3.5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map(([color, label], i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-ink2"
          >
            <span
              className={`h-[5px] w-[5px] flex-shrink-0 rounded-full ${dotColor[color]}`}
            />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Blobs({ opacity = 0.55 }: { opacity?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <span
        style={{ opacity }}
        className="absolute -left-[120px] -top-[80px] h-[520px] w-[520px] animate-drift rounded-full bg-lilac blur-[70px]"
      />
      <span
        style={{ opacity, animationDirection: "reverse", animationDuration: "15s" }}
        className="absolute -bottom-[60px] -right-[80px] h-[400px] w-[400px] animate-drift rounded-full bg-mint blur-[70px]"
      />
      <span
        style={{ opacity, animationDelay: "2s", animationDuration: "10s" }}
        className="absolute left-[40%] top-[30%] h-[300px] w-[300px] animate-drift rounded-full bg-blush blur-[70px]"
      />
      <span
        style={{ opacity, animationDelay: "1s", animationDuration: "9s" }}
        className="absolute bottom-[20%] left-[15%] h-[200px] w-[200px] animate-drift rounded-full bg-butter blur-[70px]"
      />
      <span
        style={{ opacity, animationDelay: "3s", animationDuration: "11s" }}
        className="absolute right-[20%] top-[20%] h-[180px] w-[180px] animate-drift rounded-full bg-sky blur-[70px]"
      />
    </div>
  );
}

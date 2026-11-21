import { User } from "lucide-react";

/*
  "Meet the Team" hero banner.
  `people` = [left, centre, right], each { name, title, image }.
*/

const Tile = ({ src, alt }) =>
  src ? (
    <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
  ) : (
    <div className="flex h-full w-full items-center justify-center">
      <User className="h-1/3 w-1/3 text-gray-400" />
    </div>
  );

const Label = ({ title, name, className = "", style }) => (
  <div
    className={`absolute z-30 whitespace-nowrap rounded-full border border-white/90 bg-white/95 px-4 py-2 sm:px-6 sm:py-2.5 text-center shadow-[0_12px_32px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.04)] ring-1 ring-black/5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)] ${className}`}
    style={{
      fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif",
      ...style,
    }}
  >
    <p className="text-[11px] sm:text-[15px] font-bold tracking-tight text-slate-900 leading-tight">
      {title}
    </p>
    <p className="mt-0.5 text-[10px] sm:text-[12.5px] font-semibold tracking-wide text-[#1e666e] leading-tight">
      {name}
    </p>
  </div>
);

export default function TeamBanner({ people = [], subtitle = "The People Behind ThoughtFlows" }) {
  const [left, centre, right] = people;

  return (
    <section className="relative overflow-hidden bg-[#f3f4f5] pt-32 pb-14 sm:pt-36 sm:pb-20">
      <style>{`
        @keyframes tfFloat { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
        .tf-float   { animation: tfFloat 6s ease-in-out infinite; }
        .tf-float-2 { animation: tfFloat 7s ease-in-out infinite 1s; }
        .tf-float-3 { animation: tfFloat 6.5s ease-in-out infinite 2s; }
      `}</style>

      {/* Soft rounded-tile background grid */}
      <div
        className="pointer-events-none absolute inset-0 grid grid-cols-4 sm:grid-cols-6 gap-4 p-4 opacity-80"
        style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)" }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-[28px] bg-white/70 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)]" />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-4">
        {/* Photo cluster */}
        <div className="relative mx-auto aspect-[16/9] w-full max-w-[640px]">
          {/* Dark frame behind the centre photo */}
          <div className="absolute left-[29%] top-[6%] h-[88%] w-[42%] rounded-[24px] sm:rounded-[36px] bg-neutral-900 shadow-2xl" />

          {/* Left photo */}
          {left && (
            <div className="tf-float-2 absolute left-[3%] top-[26%] z-10 w-[32%]">
              <div className="aspect-square -rotate-6 overflow-hidden rounded-[18px] sm:rounded-[28px] border-[3px] sm:border-4 border-white bg-gradient-to-b from-gray-100 to-gray-300 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                <Tile src={left.image} alt={left.name} />
              </div>
            </div>
          )}

          {/* Centre photo */}
          {centre && (
            <div className="tf-float absolute left-[33%] top-[16%] z-20 w-[34%]">
              <div className="aspect-square overflow-hidden rounded-[18px] sm:rounded-[28px] border-[3px] sm:border-4 border-white bg-gradient-to-b from-gray-100 to-gray-300 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <Tile src={centre.image} alt={centre.name} />
              </div>
            </div>
          )}

          {/* Right photo */}
          {right && (
            <div className="tf-float-3 absolute left-[64%] top-[20%] z-10 w-[32%]">
              <div className="aspect-square rotate-[8deg] overflow-hidden rounded-[18px] sm:rounded-[28px] border-[3px] sm:border-4 border-white bg-gradient-to-b from-gray-100 to-gray-300 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                <Tile src={right.image} alt={right.name} />
              </div>
            </div>
          )}

          {/* Floating name labels */}
          {left && <Label title={left.title} name={left.name} className="left-[0%] top-[6%] -rotate-3" />}
          {centre && <Label title={centre.title} name={centre.name} className="left-1/2 top-[1%] -translate-x-1/2 -rotate-2" />}
          {right && <Label title={right.title} name={right.name} className="right-[0%] bottom-[0%] rotate-3" />}
        </div>

        {/* Headline */}
        <h1
          className="relative z-30 -mt-4 sm:-mt-8 text-center font-medium leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-600"
          style={{ fontSize: "clamp(3rem, 11vw, 8.5rem)" }}
        >
          Meet the Team
        </h1>
        <p className="mt-4 sm:mt-6 text-center text-[10px] sm:text-sm font-medium uppercase tracking-[0.35em] text-gray-600">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

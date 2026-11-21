import { Phone, MapPin, User } from "lucide-react";

// Brand colours used by every card style — change these to restyle the whole page
export const CARD_ACCENT = "#36b0bd";
export const CARD_ACCENT_DARK = "#1e666e";

// Pastel backgrounds for the "pill" style (cycled per member)
const PILL_COLORS = ["#fde7b0", "#fce4ec", "#dbe8fb", "#f9d9cc", "#d3f0f2", "#e6dcfa"];

// Organic blob shapes for the "blob" style
const BLOB_SHAPES = [
  "62% 38% 55% 45% / 52% 60% 40% 48%",
  "45% 55% 38% 62% / 60% 42% 58% 40%",
  "55% 45% 62% 38% / 42% 55% 45% 58%",
];

// Format comma-separated phone numbers with a +91 prefix
const formatPhoneNumbers = (phoneString) => {
  if (!phoneString) return [];
  return phoneString
    .split(",")
    .map((num) => num.trim())
    .filter(Boolean)
    .map((num) => `+91 ${num.replace(/^(\+91|91)/, "").trim()}`);
};

const getDetails = ({ phone, branch, role }) => {
  const phones = formatPhoneNumbers(phone);
  const showBranch =
    branch && branch.trim().toLowerCase() !== (role || "").trim().toLowerCase();
  return { phones, showBranch, hasDetails: phones.length > 0 || showBranch };
};

const Photo = ({ src, alt, className = "", iconClass = "text-gray-400" }) =>
  src ? (
    <img src={src} alt={alt} loading="lazy" className={className} />
  ) : (
    <div className={`flex items-center justify-center ${className}`}>
      <User className={`h-1/3 w-1/3 ${iconClass}`} />
    </div>
  );

const ContactLines = ({ phones, showBranch, branch, className = "", justify = "" }) => (
  <>
    {showBranch && (
      <div className={`flex items-center gap-1.5 text-xs ${justify} ${className}`}>
        <MapPin size={13} className="shrink-0 text-[#1e666e]" />
        <span>{branch}</span>
      </div>
    )}
    {phones.map((num) => (
      <a
        key={num}
        href={`tel:${num.replace(/\s/g, "")}`}
        className={`mt-0.5 flex items-center gap-1.5 text-xs transition-colors hover:text-[#1e666e] hover:underline ${justify} ${className}`}
      >
        <Phone size={13} className="shrink-0 text-[#1e666e]" />
        <span>{num}</span>
      </a>
    ))}
  </>
);

/* UNIFIED SLEEK CARD — cohesive modern design matching the hero banner */
export function UnifiedSleekCard({ name, role, imageUrl, phone, branch, className = "" }) {
  const d = getDetails({ phone, branch, role });
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-3 sm:p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#36b0bd]/50 hover:shadow-[0_18px_38px_rgba(0,0,0,0.1)] ${className}`}
      style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}
    >
      {/* Photo container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200">
        <Photo
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between pt-3 text-center">
        <div>
          <p
            className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#1e666e] leading-snug line-clamp-1"
            title={role}
          >
            {role}
          </p>
          <h3
            className="mt-1 text-sm sm:text-base font-bold text-slate-900 leading-tight line-clamp-1"
            title={name}
          >
            {name}
          </h3>
        </div>

        {d.hasDetails && (
          <div className="mt-2.5 flex flex-col items-center gap-1 border-t border-slate-100 pt-2 text-slate-600">
            <ContactLines {...d} branch={branch} justify="justify-center" />
          </div>
        )}
      </div>
    </div>
  );
}

/* 1. PANEL — stepped colour panel with outlined vertical word (Pinterest "Board of Directors") */
function PanelCard({ name, role, imageUrl, label, ...rest }) {
  const d = getDetails({ ...rest, role });
  return (
    <div className="group relative w-full aspect-[17/30] overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute left-0 top-0 bottom-0 w-1/2 rounded-t-3xl overflow-hidden" style={{ backgroundColor: CARD_ACCENT }}>
        <span
          className="absolute top-3 left-1/2 -translate-x-1/2 rotate-180 whitespace-nowrap font-black lowercase leading-none tracking-tight"
          style={{ writingMode: "vertical-rl", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.45)" }}
        >
          {label}
        </span>
      </div>
      <div className="absolute left-0 right-0 top-[38%] bottom-0 rounded-tr-3xl" style={{ backgroundColor: CARD_ACCENT }} />
      <Photo src={imageUrl} alt={name} iconClass="text-white/70" className="absolute inset-0 h-full w-full object-cover object-top origin-bottom transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: `linear-gradient(to top, ${CARD_ACCENT_DARK} 0%, ${CARD_ACCENT}cc 45%, transparent 100%)` }} />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white">
        <h3 className="text-base sm:text-lg font-bold leading-tight">{name}</h3>
        <p className="mt-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-white/85 leading-snug">{role}</p>
        {d.hasDetails && (
          <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-32 group-hover:opacity-100">
            <ContactLines {...d} branch={rest.branch} className="text-white/90" />
          </div>
        )}
      </div>
    </div>
  );
}

/* 2. DARK — full-bleed portrait on a dark card ("mentors" reference) */
function DarkCard({ name, role, imageUrl, ...rest }) {
  const d = getDetails({ ...rest, role });
  return (
    <div className="group relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-[#0d1b1e] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#36b0bd]/60">
      <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 35%, ${CARD_ACCENT} 0%, ${CARD_ACCENT_DARK} 55%, #0d1b1e 100%)` }} />
      <Photo src={imageUrl} alt={name} iconClass="text-white/50" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] leading-snug" style={{ color: "#7fe3ec" }}>{role}</p>
        <h3 className="mt-1.5 text-base sm:text-xl font-medium text-white leading-tight">{name}</h3>
        {d.hasDetails && (
          <div className="mt-3 border-t border-white/15 pt-2">
            <ContactLines {...d} branch={rest.branch} className="text-gray-300" />
          </div>
        )}
      </div>
    </div>
  );
}

/* 3. BLOB — photo in an organic shape over a colour blob ("Our People" reference) */
function BlobCard({ name, role, imageUrl, index = 0, ...rest }) {
  const d = getDetails({ ...rest, role });
  const shape = BLOB_SHAPES[index % BLOB_SHAPES.length];
  return (
    <div className="group w-full text-center">
      <div className="relative mx-auto aspect-square w-full max-w-[220px]">
        <div
          className="absolute inset-[4%] translate-x-[6%] -translate-y-[2%] transition-transform duration-700 group-hover:rotate-12 group-hover:scale-105"
          style={{ borderRadius: shape, background: `linear-gradient(135deg, ${CARD_ACCENT} 0%, ${CARD_ACCENT_DARK} 100%)` }}
        />
        <div className="absolute inset-[8%] overflow-hidden bg-gray-100" style={{ borderRadius: "50% 50% 46% 54% / 55% 50% 50% 45%" }}>
          <Photo src={imageUrl} alt={name} className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" />
        </div>
      </div>
      <p className="mt-3 text-[10px] sm:text-xs font-medium uppercase tracking-wide leading-snug" style={{ color: CARD_ACCENT }}>{role}</p>
      <h3 className="text-base sm:text-lg font-extrabold text-gray-900 leading-tight">{name}</h3>
      <div className="mt-1" style={{ color: CARD_ACCENT_DARK }}>
        <ContactLines {...d} branch={rest.branch} justify="justify-center" />
      </div>
    </div>
  );
}

/* 4. PILL — tall capsule with name on top and photo capsule below (pill reference) */
function PillCard({ name, role, imageUrl, index = 0, ...rest }) {
  const d = getDetails({ ...rest, role });
  const bg = PILL_COLORS[index % PILL_COLORS.length];
  return (
    <div className="group relative w-full aspect-[1/2] overflow-hidden rounded-full transition-transform duration-300 hover:-translate-y-2" style={{ backgroundColor: bg }}>
      <div className="px-4 pt-[22%] text-center">
        <h3 className="text-sm sm:text-lg font-semibold text-gray-900 leading-tight">{name}</h3>
        <p className="mt-1 text-[10px] sm:text-xs text-gray-600 leading-snug">{role}</p>
        {d.phones[0] && (
          <a href={`tel:${d.phones[0].replace(/\s/g, "")}`} className="mt-1 block text-[10px] sm:text-xs font-medium text-gray-700 hover:underline">
            {d.phones[0]}
          </a>
        )}
      </div>
      <div className="absolute inset-x-[5%] bottom-[2.5%] h-[60%] overflow-hidden rounded-full bg-black/10 transition-all duration-500 group-hover:h-[64%]">
        <Photo src={imageUrl} alt={name} className="h-full w-full object-cover object-top" />
      </div>
    </div>
  );
}

/* 5. CIRCLE — round photo with a spinning gradient ring */
function CircleCard({ name, role, imageUrl, ...rest }) {
  const d = getDetails({ ...rest, role });
  return (
    <div className="group w-full text-center">
      <div className="relative mx-auto aspect-square w-full max-w-[190px]">
        <div
          className="absolute inset-0 rounded-full group-hover:animate-spin"
          style={{ background: `conic-gradient(${CARD_ACCENT}, #a7e9ef, ${CARD_ACCENT_DARK}, ${CARD_ACCENT})`, animationDuration: "3s" }}
        />
        <div className="absolute inset-[4px] rounded-full bg-white p-1.5">
          <div className="h-full w-full overflow-hidden rounded-full bg-gray-100">
            <Photo src={imageUrl} alt={name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>
      </div>
      <h3 className="mt-4 text-base sm:text-lg font-bold text-gray-900 leading-tight">{name}</h3>
      <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-wide text-gray-500 leading-snug">{role}</p>
      <div className="mt-1.5 text-gray-600">
        <ContactLines {...d} branch={rest.branch} justify="justify-center" />
      </div>
    </div>
  );
}

/* 6. POLAROID — tilted instant-photo cards that straighten on hover */
function PolaroidCard({ name, role, imageUrl, index = 0, ...rest }) {
  const d = getDetails({ ...rest, role });
  const tilt = index % 2 === 0 ? "-rotate-2" : "rotate-2";
  return (
    <div className={`group w-full bg-white p-3 pb-5 shadow-lg transition-all duration-300 ${tilt} hover:rotate-0 hover:scale-105 hover:shadow-2xl`}>
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <Photo src={imageUrl} alt={name} className="h-full w-full object-cover object-top" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-serif text-base sm:text-lg italic text-gray-900 leading-tight">{name}</h3>
        <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-wide leading-snug" style={{ color: CARD_ACCENT_DARK }}>{role}</p>
        <div className="mt-1 text-gray-500">
          <ContactLines {...d} branch={rest.branch} justify="justify-center" />
        </div>
      </div>
    </div>
  );
}

/* 7. TILE — rounded photo tile with a colour overlay showing contact details on hover */
function TileCard({ name, role, imageUrl, ...rest }) {
  const d = getDetails({ ...rest, role });
  return (
    <div className="group w-full">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl" style={{ backgroundColor: "#e3f5f7" }}>
        <Photo src={imageUrl} alt={name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-3 left-3 h-1.5 w-8 rounded-full" style={{ backgroundColor: CARD_ACCENT }} />
        {d.hasDetails && (
          <div
            className="absolute inset-x-0 bottom-0 translate-y-full p-4 text-white transition-transform duration-300 group-hover:translate-y-0"
            style={{ backgroundColor: `${CARD_ACCENT_DARK}e6` }}
          >
            <ContactLines {...d} branch={rest.branch} />
          </div>
        )}
      </div>
      <div className="mt-3 flex items-start gap-2">
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: CARD_ACCENT }} />
        <div>
          <h3 className="text-base font-bold text-gray-900 leading-tight">{name}</h3>
          <p className="mt-0.5 text-[10px] sm:text-xs uppercase tracking-wide text-gray-500 leading-snug">{role}</p>
        </div>
      </div>
    </div>
  );
}

const VARIANTS = {
  sleek: UnifiedSleekCard,
  panel: PanelCard,
  dark: DarkCard,
  blob: BlobCard,
  pill: PillCard,
  circle: CircleCard,
  polaroid: PolaroidCard,
  tile: TileCard,
};

export function TeamMember({ variant = "sleek", ...props }) {
  const Card = VARIANTS[variant] || UnifiedSleekCard;
  return <Card {...props} />;
}

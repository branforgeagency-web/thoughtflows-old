import React, { useEffect, useId, useRef, useState } from "react";

/**
 * Premium floating search bar: a large glowing pill, centered on an
 * atmospheric full-screen backdrop. Self-contained -- styles live in the
 * injected <style> tag below, layout/spacing via Tailwind utilities.
 *
 * Wording auto-adapts to the host project: pass `placeholder` /
 * `defaultValue` for your own searchable items (products, users,
 * locations, articles, commands, ...). With no props it falls back to
 * the generic "Search names" / "Actome" example.
 *
 * @param {Object} props
 * @param {string} [props.placeholder="Search names"]
 * @param {string} [props.defaultValue="Actome"] - initial value (uncontrolled mode)
 * @param {string} [props.value] - pass this + onChange to fully control the input
 * @param {(value: string) => void} [props.onChange] - fires on every keystroke (raw value)
 * @param {(value: string) => void} [props.onSearch] - fires on submit (Enter / icon click), trimmed
 * @param {boolean} [props.fullScreen=true] - wrap in a min-h-screen centered backdrop
 * @param {string} [props.className] - extra classes for the outer wrapper
 */
export function SearchBar({
  placeholder = "Search names",
  defaultValue = "Actome",
  value,
  onChange,
  onSearch,
  fullScreen = true,
  className = "",
}) {
  const reactId = useId();
  const inputId = `search-bar-${reactId}`;

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = isControlled ? value : internalValue;

  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pillRef = useRef(null);
  const rafRef = useRef(null);
  const submitTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      if (submitTimeoutRef.current != null) {
        window.clearTimeout(submitTimeoutRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const next = e.target.value;
    if (!isControlled) setInternalValue(next);
    if (onChange) onChange(next);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    if (submitTimeoutRef.current != null) {
      window.clearTimeout(submitTimeoutRef.current);
    }
    submitTimeoutRef.current = window.setTimeout(() => {
      setIsSubmitting(false);
    }, 540);
    if (onSearch) onSearch(currentValue.trim());
  };

  const handlePointerMove = (e) => {
    const pill = pillRef.current;
    if (!pill) return;
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      const rect = pill.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      pill.style.setProperty("--mx", `${x}%`);
      pill.style.setProperty("--my", `${y}%`);
      rafRef.current = null;
    });
  };

  const pill = (
    <div className="search-bar-stage">
      <div className="search-bar-glow" aria-hidden="true" />

      <form role="search" onSubmit={handleSubmit} className="search-bar-form">
        <div
          ref={pillRef}
          onMouseMove={handlePointerMove}
          className={`search-bar-pill${isFocused ? " is-focused" : ""}${
            isSubmitting ? " is-submitting" : ""
          }`}
        >
          <span className="search-bar-rim" aria-hidden="true" />
          <span className="search-bar-sweep" aria-hidden="true" />
          <span className="search-bar-pointer-glow" aria-hidden="true" />

          <label htmlFor={inputId} className="sr-only">
            {placeholder}
          </label>
          <input
            id={inputId}
            type="text"
            inputMode="search"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className="search-bar-input"
            placeholder={placeholder}
            value={currentValue}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          <button type="submit" className="search-bar-button" aria-label="Submit search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="#111214"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <line
                x1="16.2"
                y1="16.2"
                x2="21"
                y2="21"
                stroke="#111214"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div
      className={
        (fullScreen
          ? "relative flex min-h-screen w-full items-center justify-center overflow-hidden"
          : "relative flex w-full items-center justify-center overflow-hidden") +
        (className ? ` ${className}` : "")
      }
    >
      <style>{SEARCH_BAR_CSS}</style>
      <div className="search-bar-atmosphere" aria-hidden="true" />
      <div className="search-bar-vignette" aria-hidden="true" />
      {pill}
    </div>
  );
}

const SEARCH_BAR_CSS = `
.search-bar-atmosphere {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 70% 62% at 50% 42%, #f6f7f9 0%, #eceef1 48%, #dadde2 100%);
}

.search-bar-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  box-shadow: inset 0 0 10vw 2vw rgba(18, 20, 24, 0.10);
}

.search-bar-stage {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.search-bar-glow {
  position: absolute;
  left: 50%;
  top: 58%;
  width: min(640px, 92vw);
  height: 220px;
  transform: translate(-50%, -50%);
  background: radial-gradient(closest-side, rgba(255, 150, 60, 0.55), rgba(255, 150, 60, 0) 72%);
  filter: blur(34px);
  pointer-events: none;
  opacity: 0.7;
}

@media (prefers-reduced-motion: no-preference) {
  .search-bar-glow {
    animation: searchBarBreathe 4.4s ease-in-out infinite;
  }
}

@keyframes searchBarBreathe {
  0%, 100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.85; transform: translate(-50%, -46%) scale(1.07); }
}

.search-bar-form {
  position: relative;
  z-index: 1;
  width: min(640px, 100%);
}

.search-bar-pill {
  position: relative;
  width: 100%;
  height: 148px;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  background: linear-gradient(180deg, #f4f4f5 0%, #ebebed 100%);
  border: 1px solid rgba(20, 22, 26, 0.09);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.7), 0 18px 40px -18px rgba(20, 22, 26, 0.22);
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease;
}

.search-bar-pill:hover,
.search-bar-pill.is-focused {
  transform: translateY(-3px);
  border-color: rgba(255, 153, 51, 0.5);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 22px 46px -18px rgba(20, 22, 26, 0.26);
}

.search-bar-pill.is-submitting {
  animation: searchBarPress 0.52s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes searchBarPress {
  0% { transform: scale(1) translateY(0); }
  35% { transform: scale(0.975) translateY(2px); }
  100% { transform: scale(1) translateY(0); }
}

.search-bar-rim {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  box-shadow: 0 0 0 1px rgba(255, 214, 140, 0.55), 0 0 18px 2px rgba(255, 180, 90, 0.28);
  opacity: 0.6;
  transition: opacity 0.35s ease;
}

.search-bar-pill:hover .search-bar-rim,
.search-bar-pill.is-focused .search-bar-rim {
  opacity: 0.95;
}

@media (prefers-reduced-motion: no-preference) {
  .search-bar-rim {
    animation: searchBarRimPulse 2.8s ease-in-out infinite alternate;
  }
}

@keyframes searchBarRimPulse {
  0% { opacity: 0.45; }
  100% { opacity: 0.85; }
}

.search-bar-sweep {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.55), transparent);
  transform: translateX(-160%) skewX(-14deg);
  opacity: 0;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .search-bar-sweep {
    animation: searchBarSweep 5.2s ease-in-out infinite;
  }
}

@keyframes searchBarSweep {
  0% { transform: translateX(-160%) skewX(-14deg); opacity: 0; }
  8% { opacity: 0.5; }
  22% { opacity: 0; }
  100% { transform: translateX(280%) skewX(-14deg); opacity: 0; }
}

.search-bar-pointer-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background: radial-gradient(160px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.55), transparent 60%);
  transition: opacity 0.4s ease;
}

.search-bar-pill:hover .search-bar-pointer-glow {
  opacity: 1;
}

.search-bar-input {
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 42px;
  font-weight: 400;
  color: #111214;
  padding-left: 60px;
  padding-right: 12px;
}

.search-bar-input::placeholder {
  color: rgba(40, 42, 46, 0.35);
}

.search-bar-input:focus-visible {
  outline: 2px solid rgba(255, 153, 51, 0.6);
  outline-offset: -6px;
  border-radius: 9999px;
}

.search-bar-button {
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  width: 50px;
  height: 50px;
  margin-right: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: transform 0.25s ease, background-color 0.25s ease;
}

.search-bar-button:hover {
  background: rgba(20, 22, 26, 0.06);
  transform: scale(1.05);
}

.search-bar-button:focus-visible {
  outline: 2px solid rgba(255, 153, 51, 0.6);
  outline-offset: 2px;
}

@media (max-width: 640px) {
  .search-bar-pill { width: 86vw; height: 94px; }
  .search-bar-input { font-size: 28px; padding-left: 36px; }
  .search-bar-button { width: 40px; height: 40px; margin-right: 20px; }
  .search-bar-glow { height: 170px; }
}

@media (max-width: 390px) {
  .search-bar-pill { width: 90vw; height: 82px; }
  .search-bar-input { font-size: 22px; padding-left: 26px; }
  .search-bar-button { width: 34px; height: 34px; margin-right: 14px; }
  .search-bar-glow { height: 140px; }
}
`;

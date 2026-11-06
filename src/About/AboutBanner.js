import React, { useEffect, useRef, useState } from "react";
import AboutUsEditorial from './AboutUsEditorial';

const NAV_ITEMS = [
  { id: "we-are", label: "Who We Are", index: "01" },
  { id: "we-empower", label: "We Empower", index: "02" },
  { id: "our-motto", label: "Our Motto", index: "03" },
  { id: "vision-mission", label: "Vision-Mission", index: "04" },
  { id: "our-core-values", label: "Our Core Values", index: "05" },
];

function AboutBanner() {
  const [activeId, setActiveId] = useState(NAV_ITEMS[0].id);

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <section>
      <AboutUsEditorial />

      <style>{CSS}</style>
      <nav className="tf-subnav" aria-label="About page sections">
        <div className="tf-subnav-inner">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`tf-subnav-item${activeId === item.id ? " active" : ""}`}
              onClick={(e) => handleClick(e, item.id)}
            >
              <span className="tf-subnav-index">{item.index}</span>
              <span className="tf-subnav-label">{item.label}</span>
              <span className="tf-subnav-underline" />
            </a>
          ))}
        </div>
      </nav>
    </section>
  );
}

const CSS = `
.tf-subnav {
  position: relative;
  width: 100%;
  background: #ffffff;
  border-top: 1px solid rgba(16, 42, 67, 0.08);
  border-bottom: 1px solid rgba(16, 42, 67, 0.08);
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
}

.tf-subnav-inner {
  display: flex;
  width: 100%;
}

.tf-subnav-item {
  flex: 1 1 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 34px 16px 28px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tf-subnav-item + .tf-subnav-item {
  border-left: 1px solid rgba(16, 42, 67, 0.06);
}

.tf-subnav-item:hover,
.tf-subnav-item.active {
  background-color: rgba(21, 174, 187, 0.06);
}

.tf-subnav-index {
  display: block;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(16, 42, 67, 0.4);
  margin-bottom: 10px;
}

.tf-subnav-label {
  display: block;
  font-size: clamp(15px, 1.35vw, 20px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: #102A43;
  transition: color 0.3s ease;
}

.tf-subnav-item:hover .tf-subnav-label,
.tf-subnav-item.active .tf-subnav-label {
  background: linear-gradient(132deg, #0B3A66 0%, #15AEBB 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tf-subnav-underline {
  display: block;
  margin: 14px auto 0;
  width: 22px;
  height: 2px;
  background: rgba(16, 42, 67, 0.18);
  transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.35s ease;
}

.tf-subnav-item:hover .tf-subnav-underline,
.tf-subnav-item.active .tf-subnav-underline {
  width: 44px;
  background: linear-gradient(90deg, #0B3A66, #15AEBB);
}

@media (max-width: 900px) {
  .tf-subnav-inner {
    flex-wrap: wrap;
  }

  .tf-subnav-item {
    flex: 1 1 50%;
    padding: 26px 12px 22px;
  }

  .tf-subnav-item:nth-child(odd) {
    border-left: none;
  }

  .tf-subnav-item:nth-child(n + 3) {
    border-top: 1px solid rgba(16, 42, 67, 0.06);
  }
}

@media (max-width: 480px) {
  .tf-subnav-item {
    flex: 1 1 100%;
    border-left: none !important;
    padding: 20px 16px;
  }

  .tf-subnav-item:not(:first-child) {
    border-top: 1px solid rgba(16, 42, 67, 0.06);
  }

  .tf-subnav-label {
    font-size: 16px;
  }
}
`;

export default AboutBanner;

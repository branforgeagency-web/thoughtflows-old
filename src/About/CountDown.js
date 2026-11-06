import React, { useState, useEffect } from 'react';

const STATS = [
  { key: "count1", target: 35000, label: "Training" },
  { key: "count2", target: 30000, label: "Placements" },
  { key: "count3", target: 49, label: "Courses" },
  { key: "count4", target: 14, label: "Branch" },
];

function CountDown() {
  const [counts, setCounts] = useState({ count1: 0, count2: 0, count3: 0, count4: 0 });
  const duration = 3000;

  useEffect(() => {
    const intervalTime = 30;
    const ids = STATS.map(({ key, target }) => {
      const increment = target / (duration / intervalTime);
      const id = setInterval(() => {
        setCounts((prev) => {
          const next = Math.min(prev[key] + increment, target);
          if (next >= target) clearInterval(id);
          return { ...prev, [key]: next };
        });
      }, intervalTime);
      return id;
    });

    return () => ids.forEach(clearInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="tf-stats-section" aria-label="ThoughtFlows in numbers">
      <style>{CSS}</style>

      <div className="tf-stats-grid">
        {STATS.map((s, i) => (
          <div className="tf-stats-card tf-fadein" key={s.key} style={{ animationDelay: `${i * 100}ms` }}>
            <div className="tf-stats-number">{Math.floor(counts[s.key]).toLocaleString()}+</div>
            <div className="tf-stats-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="tf-stats-index">
        <span className="tf-index-line" aria-hidden="true" />
        <span>ThoughtFlows Academy / 05</span>
      </div>
    </section>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

.tf-stats-section, .tf-stats-section * {
  box-sizing: border-box;
}

.tf-stats-section {
  position: relative;
  width: 100%;
  background: #F7F9FC;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  padding: clamp(48px, 7vw, 88px) clamp(24px, 5.5vw, 96px);
}

.tf-stats-grid {
  max-width: 1360px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.tf-stats-card {
  background: #FFFFFF;
  border-radius: 22px;
  padding: clamp(28px, 3vw, 42px) 20px;
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.tf-stats-card:hover {
  transform: translateY(-4px);
}

.tf-stats-number {
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(32px, 3.4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #102A43;
  background: linear-gradient(132deg, #0B3A66 0%, #15AEBB 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.tf-stats-label {
  font-size: clamp(12px, 1vw, 14px);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #526477;
}

.tf-fadein {
  opacity: 0;
  transform: translateY(16px);
  animation: tfFadeUp 750ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes tfFadeUp { to { opacity: 1; transform: translateY(0); } }

.tf-stats-index {
  display: flex;
  align-items: center;
  gap: 9px;
  justify-content: flex-end;
  max-width: 1360px;
  margin: clamp(28px, 4vw, 44px) auto 0;
  color: rgba(16,42,67,0.43);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.tf-index-line {
  width: 28px;
  height: 1px;
  background: currentColor;
  display: inline-block;
}

@media (max-width: 900px) {
  .tf-stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .tf-stats-grid {
    grid-template-columns: 1fr;
  }
}
`;

export default CountDown;

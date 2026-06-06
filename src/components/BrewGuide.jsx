import React, { useState } from 'react';

export default function BrewGuide() {
  const [dose, setDose] = useState(18);
  const [ratioType, setRatioType] = useState('normale'); // ristretto, normale, lungo

  // Extraction rules based on ratio type
  const ratioDetails = {
    ristretto: {
      label: "Ristretto (1:1.5)",
      multiplier: 1.5,
      time: "20 - 24s",
      profile: "High concentration, thick syrupy mouthfeel, dominant sweetness, minimal bitterness, lower clarity.",
      tip: "Grind slightly finer than normale to hit target flow restriction within a shorter contact window."
    },
    normale: {
      label: "Normale (1:2)",
      multiplier: 2.0,
      time: "25 - 30s",
      profile: "Optimal extraction balance, medium-to-heavy body, clear acidity, balanced sweetness, pleasant lingering finish.",
      tip: "Standard baseline. Use this to gauge coffee freshness (off-gassing speed) and adjust for channeling."
    },
    lungo: {
      label: "Lungo (1:2.5)",
      multiplier: 2.5,
      time: "28 - 33s",
      profile: "High particle extraction clarity, lighter body, tea-like texture, higher bitterness potential, bright acidity.",
      tip: "Grind slightly coarser to prevent over-extraction and excessive bitterness from long exposure."
    }
  };

  const currentRatio = ratioDetails[ratioType];
  const yieldGrams = (dose * currentRatio.multiplier).toFixed(1);

  const pourOverSteps = [
    { title: "Bloom (0:00 - 0:45)", water: "50g", desc: "First 40% pour. Wets the grounds to release trapped CO2 gas. Tastes lean sweet if shortened, acidic if lengthened." },
    { title: "Sweetness (0:45 - 1:30)", water: "50g (100g total)", desc: "Second 40% pour. Controls sweetness balance. Pouring more water here increases sweetness contrast." },
    { title: "Strength 1 (1:30 - 2:15)", water: "50g (150g total)", desc: "Third pour. Begins strength adjustments. Keeps extraction running steadily." },
    { title: "Strength 2 (2:15 - 3:00)", water: "50g (200g total)", desc: "Fourth pour. Builds body profile. Ensure pour rate is vertical and gentle." },
    { title: "Final Draw (3:00 - 3:30)", water: "50g (250g total)", desc: "Fifth pour. Complete final drawdown. Swirl once gently to align bed. Tap to level." }
  ];

  return (
    <section id="brewguide" className="section">
      <div className="section-title-wrap">
        <span className="section-subtitle">Coffee Chemistry</span>
        <h2 className="section-title">Extraction Lab</h2>
      </div>

      <div className="brew-grid">
        {/* Interactive Espresso Calculator */}
        <div className="glass-card calculator-card">
          <h3>Espresso Ratio Calculator</h3>
          <p style={{ fontSize: '0.9rem', marginBottom: '24px' }}>
            Adjust the dry dose and selection ratio to compute the optimal liquid yield, target shot timing, and sensory profiles.
          </p>

          <div className="calculator-inputs">
            {/* Dose Slider */}
            <div className="calc-control">
              <div className="calc-label-row">
                <span>Dry Ground Dose:</span>
                <span className="calc-val">{dose}g</span>
              </div>
              <input
                type="range"
                min="15"
                max="22"
                step="0.5"
                value={dose}
                onChange={(e) => setDose(parseFloat(e.target.value))}
                className="calc-slider"
              />
            </div>

            {/* Ratio Selection Buttons */}
            <div className="calc-control">
              <span className="form-label" style={{ display: 'block', marginBottom: '8px' }}>Extraction Ratio:</span>
              <div className="calc-ratio-buttons">
                <button
                  type="button"
                  className={`ratio-btn ${ratioType === 'ristretto' ? 'active' : ''}`}
                  onClick={() => setRatioType('ristretto')}
                >
                  Ristretto (1:1.5)
                </button>
                <button
                  type="button"
                  className={`ratio-btn ${ratioType === 'normale' ? 'active' : ''}`}
                  onClick={() => setRatioType('normale')}
                >
                  Normale (1:2)
                </button>
                <button
                  type="button"
                  className={`ratio-btn ${ratioType === 'lungo' ? 'active' : ''}`}
                  onClick={() => setRatioType('lungo')}
                >
                  Lungo (1:2.5)
                </button>
              </div>
            </div>
          </div>

          {/* Calculator Output */}
          <div className="calculator-results">
            <div className="results-grid">
              <div className="result-box">
                <div className="result-label">Liquid Yield</div>
                <div className="result-val">{yieldGrams}g</div>
              </div>
              <div className="result-box">
                <div className="result-label">Extraction Time</div>
                <div className="result-val">{currentRatio.time}</div>
              </div>
            </div>

            <div className="result-note">
              <div className="result-note-title">Sensory Profile:</div>
              <p className="result-note-desc">{currentRatio.profile}</p>
              
              <div className="result-note-title" style={{ marginTop: '12px' }}>Extraction Tip:</div>
              <p className="result-note-desc" style={{ fontStyle: 'italic' }}>{currentRatio.tip}</p>
            </div>
          </div>
        </div>

        {/* Technical Brew Guide Card */}
        <div className="recipe-cards-container">
          <div className="glass-card recipe-card">
            <div className="recipe-header-row">
              <h3 className="recipe-title">Dial-In SOP (Standard Operating Procedure)</h3>
              <span className="recipe-detail-badge" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}>Espresso</span>
            </div>
            
            <div className="recipe-details-strip">
              <span className="recipe-detail-badge">Water Temp: 201°F (94°C)</span>
              <span className="recipe-detail-badge">Pre-infusion: 4s</span>
              <span className="recipe-detail-badge">Pressure: 9 Bar</span>
            </div>

            <div className="recipe-steps">
              <div className="recipe-step-item">
                <div className="step-num">1</div>
                <div className="step-text">
                  <strong>Purge & Prep:</strong> Purge group head to remove residual heat and grounds. Dry the portafilter basket completely with a clean cloth.
                </div>
              </div>
              <div className="recipe-step-item">
                <div className="step-num">2</div>
                <div className="step-text">
                  <strong>Weigh & WDT:</strong> Grind dose (e.g. 18g). Use WDT (needle tool) to break micro-clumps and achieve homogenous distribution. Tap basket vertically once.
                </div>
              </div>
              <div className="recipe-step-item">
                <div className="step-num">3</div>
                <div className="step-text">
                  <strong>Level Tamp:</strong> Apply flat pressure using a level tamper (minimum 30lbs). Inspect puck bed to ensure it is level to prevent channeling.
                </div>
              </div>
              <div className="recipe-step-item">
                <div className="step-num">4</div>
                <div className="step-text">
                  <strong>Lock & Run:</strong> Insert bottomless portafilter, start timer and extraction immediately. Monitor stream formation to ensure centered flow.
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card recipe-card">
            <div className="recipe-header-row">
              <h3 className="recipe-title">V60 Pour-over: Tetsu Kasuya 4:6 Method</h3>
              <span className="recipe-detail-badge" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}>Filter V60</span>
            </div>
            
            <div className="recipe-details-strip">
              <span className="recipe-detail-badge">Coffee: 15g (Coarse)</span>
              <span className="recipe-detail-badge">Water: 250g (93°C)</span>
              <span className="recipe-detail-badge">Ratio: 1:16.6</span>
            </div>

            <div className="recipe-steps">
              {pourOverSteps.map((step, idx) => (
                <div key={idx} className="recipe-step-item">
                  <div className="step-num">{idx + 1}</div>
                  <div className="step-text">
                    <strong>{step.title} | {step.water}:</strong> {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

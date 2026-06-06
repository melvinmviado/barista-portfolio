import React, { useState } from 'react';
import brewStationImg from '../assets/machine.jpg';
import wdtTool from '../assets/wdt.jpg';
import tamper from '../assets/tamper.jpg';
import portafilter from '../assets/portafilter.jpg';
import distributor from '../assets/distributor.jpg';

export default function Equipment() {
  const [openLogId, setOpenLogId] = useState(null);

  const machine = {
    id: "machine",
    name: "Breville Barista Express Espresso Machine",
    type: "Integrated Grinder & Single-Boiler Espresso Machine",
    desc: "A popular home espresso machine with a built-in conical burr grinder, PID temperature control, and thermocoil heating system. Paired with a bottomless portafilter for visual extraction feedback and shot diagnosis.",
    image: brewStationImg,
    specs: [
      "Pump: 15 BAR Italian vibratory pump with over-pressure valve",
      "Heating: Thermocoil system with PID temperature control (200°F default brew)",
      "Grinder: Integrated 30-setting conical burr grinder with dose control",
      "Modifications: Bottomless portafilter for visual extraction diagnostics"
    ],
    maintenance: [
      "Daily: Backflush with water using the blind basket; wipe steam wand and drip tray.",
      "Weekly: Backflush with tablets; clean grinder burrs.",
      "Monthly: Remove and soak group screen and portafilter basket; descale the boiler.",
      "Quarterly: Replace water filter."
    ]
  };

  const accessories = [
    {
      id: "wdt",
      name: "WDT Espresso Distribution Tool",
      type: "Coffee Distribution Tool",
      desc: "A needle distribution tool to break up clumps and redistribute grounds evenly before tamping.",
      image: wdtTool,
      specs: [
        "Needles: 0.4mm stainless steel needles in a circular pattern",
        "Compatibility: Fits 54mm portafilter baskets",
        "Purpose: Declumping and horizontal redistribution"
      ],
      maintenance: [
        "After each use: Wipe needles clean of coffee residue.",
        "Weekly: Rinse with warm water and dry thoroughly.",
        "Monthly: Inspect needles for bending or breakage."
      ]
    },
    {
      id: "tamper",
      name: "Normcore V4 Coffee Tamper 53.3mm",
      type: "Spring-Loaded Espresso Tamper",
      desc: "Spring-loaded tamper delivering consistent tamping pressure every time.",
      image: tamper,
      specs: [
        "Diameter: 53.3mm for Breville 54mm baskets",
        "Pressure: Calibrated 15kg spring mechanism",
        "Base: Flat stainless steel with leveling plate"
      ],
      maintenance: [
        "After each use: Wipe base and handle with a dry cloth.",
        "Weekly: Clean spring mechanism with a dry brush.",
        "Monthly: Check spring tension and lubricate if needed."
      ]
    },
    {
      id: "portafilter",
      name: "Normcore 54mm Bottomless Portafilter",
      type: "Bottomless Espresso Portafilter",
      desc: "Bottomless portafilter for direct visual feedback of extraction and channeling diagnostics.",
      image: portafilter,
      specs: [
        "Size: 54mm — compatible with Breville machines",
        "Material: Stainless steel with matte finish",
        "Basket: Includes precision 18g ridgeless basket"
      ],
      maintenance: [
        "After each use: Rinse thoroughly and dry completely.",
        "Weekly: Backflush with the blind basket.",
        "Monthly: Clean basket holes with a pin to prevent clogging."
      ]
    },
    {
      id: "distributor",
      name: "53mm Coffee Distributor",
      type: "Leveling Distribution Tool",
      desc: "Spin-leveling tool that evenly distributes grounds with a single rotation.",
      image: distributor,
      specs: [
        "Diameter: 53mm for Breville 54mm baskets",
        "Depth: Adjustable for different dose volumes",
        "Material: Stainless steel with anodized aluminum handle"
      ],
      maintenance: [
        "After each use: Brush off coffee residue from the base.",
        "Weekly: Wipe with a damp cloth and dry thoroughly.",
        "Monthly: Check alignment and recalibrate depth if needed."
      ]
    },
  ];

  const toggleMaintenanceLog = (id) => {
    if (openLogId === id) {
      setOpenLogId(null);
    } else {
      setOpenLogId(id);
    }
  };

  return (
    <section id="equipment" className="section">
      <div className="section-title-wrap">
        <span className="section-subtitle">Precision Tools</span>
        <h2 className="section-title">Home Coffee Bar</h2>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto 60px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
          Great espresso requires mechanical consistency. I operate a carefully curated home coffee corner, maintained under strict hygiene and calibration regimes. This hands-on experience teaches me how to care for commercial systems, troubleshoot extraction bugs, and respect the hardware.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '30px',
        alignItems: 'start'
      }}>
        <div className="glass-card equipment-card">
          <div className="equipment-img-wrapper">
            <img
              src={machine.image}
              alt={machine.name}
              className="equipment-img"
              loading="lazy"
            />
          </div>
          <span className="equipment-type">{machine.type}</span>
          <h3 className="equipment-card-title">{machine.name}</h3>
          <p className="equipment-desc">{machine.desc}</p>

          <ul style={{ listStyle: 'none', width: '100%', marginBottom: '0px', borderBottom: '0px', textAlign: 'left', fontSize: '0.85rem' }}>
            {machine.specs.map((spec, idx) => (
              <li key={idx} style={{ marginBottom: '8px', borderBottom: '1px solid var(--border)', paddingBottom: '6px' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{spec.split(': ')[0]}:</span> {spec.split(': ')[1]}
              </li>
            ))}
          </ul>

          <div className="maintenance-section" style={{ borderTop: 'none'}}>
            <button
              className={`maintenance-header ${openLogId === machine.id ? 'open' : ''}`}
              onClick={() => toggleMaintenanceLog(machine.id)}
              aria-expanded={openLogId === machine.id}
            >
              <span>⚙️ Maintenance & Care Log</span>
              <span className="maintenance-icon">▼</span>
            </button>
            <div className={`maintenance-content ${openLogId === machine.id ? 'open' : ''}`}>
              {machine.maintenance.map((step, idx) => (
                <div key={idx} className="maintenance-step">
                  <span className="maintenance-bullet">•</span>
                  <span className="step-text">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px'
        }}>
          {accessories.map((item) => (
            <div key={item.id} className="glass-card" style={{
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <div style={{
                width: '100%',
                height: '120px',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                border: '1px solid var(--border)'
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />
              </div>
              <span style={{
                color: 'var(--accent)',
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>{item.type}</span>
              <h4 style={{
                fontSize: '0.9rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.3
              }}>{item.name}</h4>
              <p style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                margin: 0,
                lineHeight: 1.4
              }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

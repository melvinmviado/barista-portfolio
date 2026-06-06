import React from 'react';

export default function About() {
  const skills = [
    { title: "Espresso Dialing-In", rating: "In Progression", desc: "Actively studying extraction yield and grind adjustments based on roast profiles and taste." },
    { title: "Milk Texturing (Microfoam)", rating: "Developing", desc: "Refining texturing for silky wet-paint microfoam and improving symmetry in my latte art pours." },
    { title: "Workflow Efficiency", rating: "Active Practice", desc: "Standardizing my clean-as-you-go home routine to build commercial speed and keep the bar immaculate." },
    { title: "Sensory Analysis", rating: "Learning", desc: "Developing my palate to identify extraction defects, channeling, and subtle tasting notes." },
    { title: "Guest Connection", rating: "Eager to Serve", desc: "Excited to bring a welcoming energy, build guest relationships, and represent your local cafe's values." },
    { title: "Equipment Care", rating: "Dedicated", desc: "Practicing consistent backflushing, shower screen scrubbing, and regular grinder calibrations." }
  ];

  return (
    <section id="about" className="section">
      <div className="section-title-wrap">
        <span className="section-subtitle">My Journey</span>
        <h2 className="section-title">The Barista Craft</h2>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="about-text">
          <h3>Continuous Learning & Growth</h3>
          <p>
            My journey in coffee began in my enjoyment of caffinated drinks and has quickly transformed into an everyday passion for understanding the science behind the perfect extraction. I see myself in a state of continuous progression—constantly researching, testing variables, and improving my skills.
          </p>
          <p>
            I believe that a great barista is always an apprentice first. Every shot pulled and every pitcher steamed is an opportunity to learn something new about flow rate, temperature stability, and milk chemistry. I have designed my home setup routines around standard cleanliness and weighing precision, treating every brew as an intentional practice session.
          </p>
          <p>
            I am highly motivated to transition from my home bar to a commercial cafe environment, eager to receive mentorship, work hard, and grow alongside experienced professionals.
          </p>

          <div style={{ marginTop: '40px' }}>
            <h4 style={{ marginBottom: '20px', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', color: 'var(--accent)' }}>My Core Standards:</h4>
            <div className="about-skills-grid">
              {skills.map((skill, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '20px', textAlign: 'left' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h5 style={{ margin: 0, fontSize: '1.05rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>{skill.title}</h5>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', backgroundColor: 'var(--accent-soft)', padding: '2px 8px', borderRadius: '4px' }}>
                      {skill.rating}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', margin: 0 }}>{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

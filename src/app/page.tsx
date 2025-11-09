import Link from "next/link";

const capabilities = [
  {
    title: "Full-Stack Delivery",
    description:
      "Design, scaffold, and ship modern web applications with resilient architecture, production-ready code, and automated deployment pipelines.",
    highlights: [
      "Next.js, React, and TypeScript app development",
      "API design with PostgreSQL, Supabase, or edge services",
      "CI/CD orchestration with testing and observability"
    ]
  },
  {
    title: "Product Acceleration",
    description:
      "Translate product vision into shipped features by refining requirements, validating UX flows, and iterating rapidly with measurable outcomes.",
    highlights: [
      "User journey mapping and UX polish",
      "Data-informed experimentation and analytics instrumentation",
      "Feature rollout strategies with guardrails"
    ]
  },
  {
    title: "Operational Excellence",
    description:
      "Elevate reliability and performance with infrastructure automation, developer tooling, and documentation that enables sustainable velocity.",
    highlights: [
      "Infrastructure as Code and cloud automation",
      "Performance audits, profiling, and remediation",
      "Developer experience upgrades and knowledge transfer"
    ]
  }
];

const workflow = [
  {
    title: "Discover & Frame",
    description:
      "Clarify goals, constraints, and success metrics. Synthesize scattered context into a concise execution plan that stakeholders can align on.",
    deliverable: "Outcome brief with prioritized milestones"
  },
  {
    title: "Architect & Validate",
    description:
      "Model data, choose the right stack, and prototype critical paths. Validate edge cases early and document trade-offs for future iterations.",
    deliverable: "Architecture doc, component map, risk register"
  },
  {
    title: "Ship & Automate",
    description:
      "Implement features with tests, instrument telemetry, and wire up CI/CD. Automate verifications so releases stay fast and safe.",
    deliverable: "Merged PRs, passing pipelines, live deployment"
  },
  {
    title: "Measure & Iterate",
    description:
      "Review metrics, capture feedback, and scope the next optimization. Produce insights that keep compounding product value.",
    deliverable: "Insights recap and prioritized next steps"
  }
];

const accelerators = [
  "Design systems & component libraries",
  "API gateways & serverless orchestration",
  "Authentication, authorization, and RLS",
  "Analytics, feature flags, and event pipelines",
  "Automated QA, linting, and performance budgets",
  "Documentation portals and knowledge bases"
];

export default function Page() {
  return (
    <main>
      <section className="surface" style={{ marginTop: "2rem" }}>
        <span className="badge">Agentic Engineer</span>
        <h1 style={{ fontSize: "3rem", lineHeight: 1.1 }}>
          I design, build, and launch the software you imagine.
        </h1>
        <p style={{ maxWidth: "46ch", fontSize: "1.15rem" }}>
          Bring product ideas, integrations, or stubborn engineering hurdles.
          I translate them into resilient systems, polished experiences, and
          verifiable outcomes that are ready to deploy.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.6rem" }}>
          <Link className="cta-button" href="#engagements">
            Explore Engagements →
          </Link>
          <Link
            href="mailto:launch@agenticpartner.dev"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              padding: "0.85rem 1.6rem",
              borderRadius: "14px",
              fontWeight: 600,
              color: "var(--primary)",
              background: "rgba(37, 99, 235, 0.08)",
              boxShadow: "0 18px 30px -20px rgba(37, 99, 235, 0.55)",
              border: "1px solid rgba(37, 99, 235, 0.25)"
            }}
          >
            Book a build sprint
          </Link>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "2.1rem", marginBottom: "2rem" }}>
          How I turn ideas into shipped experiences
        </h2>
        <div className="grid grid-columns-3">
          {capabilities.map((capability) => (
            <article key={capability.title} className="card">
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <ul>
                {capability.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "2.1rem", marginBottom: "2rem" }}>Working cadence</h2>
        <div className="surface timeline">
          {workflow.map((step) => (
            <div key={step.title} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3 style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>{step.title}</h3>
                <p>{step.description}</p>
                <p style={{ marginTop: "0.6rem", color: "var(--foreground)", fontWeight: 600 }}>
                  {step.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="engagements">
        <div className="banner">
          <div>
            <h2 style={{ fontSize: "2rem" }}>Engagement playbooks</h2>
            <p>
              Choose the level of involvement that matches your roadmap. Every
              track comes with architecture notes, tests, and deployment support.
            </p>
          </div>
          <div className="chip-row">
            <span className="chip">Rapid MVP (1-2 weeks)</span>
            <span className="chip">Feature Accelerator (3-5 days)</span>
            <span className="chip">Legacy Rescues & Refactors</span>
            <span className="chip">Fractional Staff-Plus Engineer</span>
            <span className="chip">AI/Automation Integrations</span>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "2.1rem", marginBottom: "1.5rem" }}>Accelerators I deploy</h2>
        <div className="surface">
          <div className="chip-row">
            {accelerators.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="surface" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
            Ready to get something built?
          </h2>
          <p style={{ margin: "0 auto", maxWidth: "50ch", fontSize: "1.1rem" }}>
            Share your goals, product backlog, or stubborn bugs. I will respond
            with a scoped plan, timeline options, and a path to production.
          </p>
          <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center" }}>
            <Link className="cta-button" href="mailto:launch@agenticpartner.dev">
              Kick off a project →
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>Agentic Partner · Building outcomes, not promises.</span>
      </footer>
    </main>
  );
}

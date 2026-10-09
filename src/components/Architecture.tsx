export function Architecture({
  kind,
}: {
  kind: 'signal' | 'scout' | 'stratus'
}) {
  if (kind === 'signal')
    return (
      <div
        className="architecture signal-art"
        role="img"
        aria-label="SignalSource architecture: customer booking interface connects to pricing and scheduling logic, Supabase data, Helcim payments, and Resend email."
      >
        <div className="art-caption">
          <span className="small-dot" /> SYSTEM OVERVIEW <span>01 / 03</span>
        </div>
        <div className="signal-interface">
          <div className="interface-heading">
            <span className="signal-logo">
              s<span>↗</span>
            </span>
            <span>
              SignalSource<small>Service booking</small>
            </span>
            <span className="interface-symbol">◈</span>
          </div>
          <div className="booking-path">
            <span>Service</span>
            <i />
            <span>Schedule</span>
            <i />
            <span>Booking</span>
          </div>
          <div className="booking-slots">
            {Array.from({ length: 14 }, (_, i) => (
              <i key={i} className={i === 9 ? 'chosen' : ''} />
            ))}
          </div>
          <div className="interface-footer">
            <span>One connected workflow</span>
            <span>↗</span>
          </div>
        </div>
        <div className="connector-line" />
        <div className="logic-node">
          <span>↳</span> Pricing & scheduling{' '}
          <span className="node-code">TS</span>
        </div>
        <div className="branch-lines" />
        <div className="service-nodes">
          <span>
            <b>▤</b>Supabase<small>Data</small>
          </span>
          <span>
            <b>↗</b>Helcim<small>Payments</small>
          </span>
          <span>
            <b>✉</b>Resend<small>Email</small>
          </span>
        </div>
        <span className="diagram-label">
          Architecture illustration · not a product screenshot
        </span>
      </div>
    )
  if (kind === 'scout')
    return (
      <div
        className="architecture scout-art"
        role="img"
        aria-label="Opportunity Scout pipeline: Playwright worker sends listings over HTTP to a FastAPI validator, which returns rule-based tiers for Discord routing."
      >
        <div className="art-caption">
          <span className="small-dot" /> AUTOMATION PIPELINE{' '}
          <span>02 / 03</span>
        </div>
        <div className="pipeline">
          <div className="pipeline-node">
            <span>01</span>
            <b>Discover</b>
            <small>Node.js + Playwright</small>
          </div>
          <span className="pipe-arrow">→</span>
          <div className="pipeline-node">
            <span>02</span>
            <b>Validate</b>
            <small>FastAPI + Pydantic</small>
          </div>
        </div>
        <div className="routing">
          <span className="route-label">RULE-BASED ROUTING</span>
          <div>
            <span>
              A <small>Priority</small>
            </span>
            <span>
              B <small>Review</small>
            </span>
            <span>
              C <small>Filtered</small>
            </span>
          </div>
        </div>
        <span className="diagram-label">Architecture illustration</span>
      </div>
    )
  return (
    <div
      className="architecture stratus-art"
      role="img"
      aria-label="Stratus One architecture: shared design tokens underpin reusable UI components and opportunity, task, quote, and pipeline workflows."
    >
      <div className="art-caption">
        <span className="small-dot" /> FRONTEND ARCHITECTURE{' '}
        <span>03 / 03</span>
      </div>
      <div className="stratus-layers">
        <div className="layer workflows">
          <span>Workflows</span>
          <div>
            <i>Opportunities</i>
            <i>Tasks</i>
            <i>Quotes</i>
          </div>
        </div>
        <div className="layer components">
          <span>Reusable components</span>
          <div>
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="layer tokens">
          <span>Semantic design tokens</span>
          <div>
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <span className="diagram-label">Architecture illustration</span>
    </div>
  )
}

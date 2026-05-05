/* ============ Pontos AI: Sections ============ */

function NavBar({ lang, setLang, content, mobileOpen, setMobileOpen }) {
  const langs = [
    { v: 'ru', l: 'RU' },
    { v: 'en', l: 'EN' },
    { v: 'el', l: 'ΕΛ' },
    { v: 'tr', l: 'TR' },
  ];
  return (
    <nav className="nav">
      <div className="nav-logo" data-cursor="hover">
        <svg viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 16 Q10 10, 16 16 T28 16" stroke="var(--gold, #c9a96e)" strokeWidth="1.5" fill="none" />
          <path d="M4 20 Q10 14, 16 20 T28 20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>
        <span>Πόντος AI</span>
      </div>

      <div className="nav-links">
        <a className="nav-link" href="#roadmap">{content.nav.work}</a>
        <a className="nav-link" href="#sources">{content.nav.services}</a>
        <a className="nav-link" href="#team">{content.nav.about}</a>
        <a className="nav-link" href="#support">{content.nav.contact}</a>
        <a className="nav-link" href="#chat" style={{ color: 'var(--gold)' }}>{content.nav.chat}</a>
      </div>

      <div className="nav-right">
        <div className="lang-toggle">
          {langs.map(({ v, l }) => (
            <button key={v} className={lang === v ? 'active' : ''} onClick={() => setLang(v)}>{l}</button>
          ))}
        </div>
        <button className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M6 6 L18 18 M6 18 L18 6" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <>
                <path d="M3 8 H21" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 16 H21" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        <a className="nav-link" href="#roadmap" onClick={() => setMobileOpen(false)}>{content.nav.work}</a>
        <a className="nav-link" href="#sources" onClick={() => setMobileOpen(false)}>{content.nav.services}</a>
        <a className="nav-link" href="#team" onClick={() => setMobileOpen(false)}>{content.nav.about}</a>
        <a className="nav-link" href="#support" onClick={() => setMobileOpen(false)}>{content.nav.contact}</a>
        <a className="nav-link" href="#chat" onClick={() => setMobileOpen(false)} style={{ color: 'var(--gold)' }}>{content.nav.chat}</a>
      </div>
    </nav>
  );
}

function Hero({ content }) {
  const t = useClock();
  const time = t.toLocaleTimeString('en-GB', { hour12: false, timeZone: 'Europe/Athens' });
  return (
    <section className="hero" id="top">
      <div className="hero-meta">
        <div className="hero-coords mono">
          <div className="hero-coords-line">{content.hero.coords}</div>
        </div>
        <div className="hero-coords mono">
          <div className="hero-coords-line">Trebizond · {time}</div>
        </div>
      </div>

      <div className="hero-label-line mono">— {content.hero.label}</div>

      <h1 className="hero-title">
        <span className="hero-title-line"><span>{content.hero.title1}</span></span>
        <span className="hero-title-line"><span>{content.hero.title2}</span></span>
        <span className="hero-title-line"><span><em>{content.hero.title3Em}</em>{content.hero.title3}</span></span>
      </h1>

      <div className="hero-bottom">
        <div className="hero-tagline">
          <span className="hero-tagline-label mono">{content.hero.taglineLabel}</span>
          {content.hero.tagline}
        </div>
        <div className="hero-cta" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#chat" className="btn btn-gold">
            {content.hero.cta} <span className="arrow">→</span>
          </a>
          <a href="#roadmap" className="btn">
            {content.hero.ctaSecondary} <span className="arrow">↓</span>
          </a>
        </div>
        <div className="hero-scroll mono">
          <span>{content.hero.scroll}</span>
          <span className="hero-scroll-line" />
        </div>
      </div>
    </section>
  );
}

function Marquee({ items }) {
  const loop = [...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((it, i) => (
          <React.Fragment key={i}>
            {i % 2 === 1 ? <em>{it}</em> : <span>{it}</span>}
            <span className="dot" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function StatsBand({ content }) {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="stats reveal-stagger">
        {content.stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label mono">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Manifesto({ content }) {
  return (
    <section id="manifesto">
      <div className="reveal">
        <div className="section-label">{content.manifesto.label}</div>
        <h2 className="section-title">
          {content.manifesto.title}<em>{content.manifesto.titleEm}</em>
        </h2>
      </div>
      <div className="manifesto reveal">
        <div className="manifesto-meta">
          {content.manifesto.meta.map(([k, v], i) => (
            <div className="manifesto-meta-item" key={i}>
              <span>{k}</span><span>{v}</span>
            </div>
          ))}
        </div>
        <div className="manifesto-text">
          {content.manifesto.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

function Pillars({ content }) {
  return (
    <section>
      <div className="reveal">
        <div className="section-label">{content.pillars.label}</div>
        <h2 className="section-title">
          {content.pillars.title} <em>{content.pillars.titleEm}</em>
        </h2>
      </div>
      <div className="pillars reveal-stagger">
        {content.pillars.items.map((p, i) => (
          <div className="pillar" key={i}>
            <span className="pillar-greek" style={{ fontSize: 48, fontStyle: 'normal' }}>{p.greek}</span>
            <div className="pillar-name">{p.name}</div>
            <div className="pillar-desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Sources({ content }) {
  const refs = useRef([]);
  useEffect(() => {
    const cleanups = refs.current.map(el => attachSpotlight(el));
    return () => cleanups.forEach(fn => fn && fn());
  }, []);
  return (
    <section id="sources">
      <div className="reveal">
        <div className="section-label">{content.services.label}</div>
        <h2 className="section-title">
          {content.services.title}<em>{content.services.titleEm}</em>
        </h2>
      </div>
      <div className="services-grid reveal-stagger">
        {content.services.items.map((s, i) => (
          <div className="service-card" key={i} ref={el => refs.current[i] = el}>
            <div className="service-card-num mono">{s.num}</div>
            <h3 className="service-card-title">{s.title}</h3>
            <p className="service-card-desc">{s.desc}</p>
            <div className="service-card-arrow">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Roadmap({ content }) {
  return (
    <section id="roadmap">
      <div className="reveal">
        <div className="section-label">{content.work.label}</div>
        <h2 className="section-title">
          {content.work.title}<em>{content.work.titleEm}</em>
        </h2>
      </div>
      <div className="work-list reveal-stagger">
        {content.work.items.map((w, i) => (
          <div className="work-item" key={i}>
            <div className="work-num">{w.num}</div>
            <div className="work-title">{w.title}</div>
            <div className="work-desc">{w.desc}</div>
            <div className="work-tags">
              {w.tags.map((t, j) => <span className="work-tag" key={j}>{t}</span>)}
            </div>
            <div className="work-arrow">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.4" fill="none" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ====== AI Chat — real Pontos AI via persei.io ====== */
function ChatBlock({ content }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [streamText, setStreamText] = useState('');
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const examples = content.chat.examples;

  // Auto-scroll on new messages
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, streamText]);

  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;
    setInput('');
    setLoading(true);
    setStreamText('');

    const newMessages = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);

    try {
      const res = await fetch('https://persei.io/api/openrouter-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash-preview',
          eternalId: 'pontos',
          stream: true,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          max_tokens: 1200,
          temperature: 0.7,
        }),
      });

      if (!res.ok) throw new Error('Network error ' + res.status);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') continue;
          try {
            const parsed = JSON.parse(data);
            const delta = parsed.choices?.[0]?.delta?.content || '';
            accumulated += delta;
            setStreamText(accumulated);
          } catch (_) {}
        }
      }

      setMessages(prev => [...prev, { role: 'assistant', content: accumulated }]);
      setStreamText('');
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ ' + err.message }]);
      setStreamText('');
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <section id="chat" className="chat-section">
      <div className="reveal">
        <div className="section-label">{content.chat.label}</div>
        <h2 className="section-title">
          {content.chat.title}<em>{content.chat.titleEm}</em>
        </h2>
      </div>

      <div className="chat-card reveal">
        <div className="chat-card-head">
          <div className="chat-avatar">Π</div>
          <div>
            <div className="chat-name">Πόντος AI</div>
            <div className="chat-sub mono">{content.chat.desc}</div>
          </div>
          <div className="chat-status mono">
            <span className={`chat-dot ${loading ? 'pulsing' : ''}`} />
            {loading ? '...' : 'online'}
          </div>
        </div>

        <div className="chat-body" ref={bodyRef} style={{ overflowY: 'auto', maxHeight: 420 }}>
          {/* Welcome bubble */}
          {messages.length === 0 && (
            <div className="chat-bubble">
              <div className="chat-bubble-meta mono">Πόντος AI · {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</div>
              <div>{content.chat.placeholder}</div>
            </div>
          )}

          {/* Message history */}
          {messages.map((m, i) => (
            <div key={i} className={`chat-bubble ${m.role === 'user' ? 'chat-bubble-user' : ''}`}>
              <div className="chat-bubble-meta mono">
                {m.role === 'user' ? content.chat.you || 'You' : 'Πόντος AI'} · {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>{m.content}</div>
            </div>
          ))}

          {/* Streaming response */}
          {streamText && (
            <div className="chat-bubble">
              <div className="chat-bubble-meta mono">Πόντος AI · typing…</div>
              <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>{streamText}<span className="chat-cursor">▌</span></div>
            </div>
          )}

          {/* Example chips — show only at start */}
          {messages.length === 0 && (
            <div className="chat-examples">
              {examples.map((e, i) => (
                <button key={i} className="chat-example" onClick={() => sendMessage(e)}>{e}</button>
              ))}
            </div>
          )}
        </div>

        <div className="chat-input-row">
          <input
            ref={inputRef}
            className="chat-input"
            value={input}
            onChange={(ev) => setInput(ev.target.value)}
            onKeyDown={handleKey}
            placeholder="νερόν · вода · water · su"
            disabled={loading}
          />
          <button
            className="btn btn-gold chat-send"
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
          >
            {loading ? '…' : content.chat.cta} <span className="arrow">{loading ? '' : '→'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function Team({ content }) {
  return (
    <section id="team">
      <div className="reveal">
        <div className="section-label">{content.team.label}</div>
        <h2 className="section-title">
          {content.team.title}<em>{content.team.titleEm}</em>
        </h2>
        <p className="section-lede">{content.team.desc}</p>
        <a href="https://t.me/+ZUxz9TkYneZmZDFi" target="_blank" rel="noreferrer" className="btn btn-gold" style={{ marginTop: 32 }}>
          {content.team.cta} <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}

function Support({ content }) {
  const refs = useRef([]);
  useEffect(() => {
    const cleanups = refs.current.map(el => attachSpotlight(el));
    return () => cleanups.forEach(fn => fn && fn());
  }, []);
  return (
    <section id="support">
      <div className="reveal">
        <div className="section-label">{content.support.label}</div>
        <h2 className="section-title">
          {content.support.title}<em>{content.support.titleEm}</em>
        </h2>
        <p className="section-lede">{content.support.desc}</p>
      </div>
      <div className="support-grid reveal-stagger">
        {content.support.items.map((it, i) => (
          <div className={`support-card ${it.disabled ? 'disabled' : ''}`} key={i} ref={el => refs.current[i] = el}>
            <div className="support-icon">{it.icon}</div>
            <h3 className="support-card-title">{it.title}</h3>
            <p className="support-card-desc">{it.desc}</p>
            {it.disabled
              ? <span className="support-cta-disabled mono">{it.cta}</span>
              : <a href="https://t.me/+ZUxz9TkYneZmZDFi" target="_blank" rel="noreferrer" className="support-cta">{it.cta} →</a>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer({ content }) {
  return (
    <footer className="footer" id="contact">
      <div className="footer-glyph">Π</div>
      <div className="reveal">
        <h2 className="footer-headline">{content.footer.headline}</h2>
        <p className="footer-sub mono">{content.footer.sub}</p>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <h5 className="mono">Πόντος AI · PONTOS</h5>
          <p style={{ fontSize: 14, color: 'var(--dim)', lineHeight: 1.6, maxWidth: '32ch' }}>
            36 000+ words · 2,600 years · 20 dialect regions. The digital brain of the Pontic Greek language.
          </p>
        </div>
        {content.footer.cols.map((c, i) => (
          <div className="footer-col" key={i}>
            <h5 className="mono">{c.h}</h5>
            {c.items.map((it, j) => <a key={j} href="#">{it}</a>)}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>{content.footer.legal}</span>
        <span>{content.footer.city}</span>
      </div>
    </footer>
  );
}

Object.assign(window, {
  NavBar, Hero, Marquee, StatsBand, Manifesto, Pillars, Sources, Roadmap, ChatBlock, Team, Support, Footer
});

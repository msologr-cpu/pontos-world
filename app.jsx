/* ============ Pontos AI: App root ============ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "language": "ru"
}/*EDITMODE-END*/;

/* Parse initial state from URL path: /lang/section */
function parseURL() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const parts = path.split('/').filter(Boolean);
  let lang = null;
  let section = 'home';
  const validLangs = ['ru', 'en', 'el', 'tr'];
  const validSections = ['roadmap', 'sources', 'team', 'support', 'chat'];

  if (parts.length >= 1 && validLangs.includes(parts[0])) {
    lang = parts[0];
    if (parts.length >= 2 && validSections.includes(parts[1])) {
      section = parts[1];
    }
  }
  // Also check INITIAL_LANG/INITIAL_SECTION from SSR pages
  if (!lang && window.INITIAL_LANG) lang = window.INITIAL_LANG;
  if (window.INITIAL_SECTION && window.INITIAL_SECTION !== 'home') section = window.INITIAL_SECTION;

  return { lang, section };
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const initial = parseURL();

  const [lang, setLangState] = useState(initial.lang || tweaks.language || 'ru');
  const [page, setPage] = useState(initial.section); // 'home' | 'chat' | 'roadmap' | etc
  const [theme, setThemeState] = useState(tweaks.theme || 'dark');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track a scroll target separately from the page view
  const scrollTargetRef = useRef(null);

  useEffect(() => { setThemeState(tweaks.theme || 'dark'); }, [tweaks.theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('lang', lang);
  }, [theme, lang]);

  // Handle browser back/forward
  useEffect(() => {
    const handlePop = () => {
      const { lang: newLang, section: newSection } = parseURL();
      if (newLang) setLangState(newLang);
      setPage(newSection);
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  // Scroll to section after render (only for non-chat, non-home sections on main page)
  useEffect(() => {
    if (page !== 'home' && page !== 'chat') {
      // Use requestAnimationFrame to ensure DOM is painted
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(page);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
      });
    }
  }, [page]);

  // Navigate function used by all links
  const navigateTo = (newLang, newSection) => {
    setLangState(newLang);
    setTweak('language', newLang);
    
    if (newSection === 'home') {
      setPage('home');
      window.history.pushState({}, '', `/${newLang}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (newSection === 'chat') {
      setPage('chat');
      window.history.pushState({}, '', `/${newLang}/chat`);
      window.scrollTo({ top: 0 });
    } else {
      // For roadmap, sources, team, support — always show main page and scroll
      setPage(newSection);
      window.history.pushState({}, '', `/${newLang}/${newSection}`);
    }
  };

  const setLang = (l) => {
    setLangState(l);
    setTweak('language', l);
    const url = `/${l}${page !== 'home' ? '/' + page : ''}`;
    window.history.pushState({}, '', url);
  };
  
  const setTheme = (t) => { setThemeState(t); setTweak('theme', t); };

  useReveal();

  const content = PONTOS_CONTENT[lang] || PONTOS_CONTENT.ru;
  const isChat = page === 'chat';

  return (
    <>
      <Cursor />
      <BackgroundCanvas theme={theme} />

      <div className="shell">
        <NavBar
          lang={lang} setLang={setLang}
          content={content}
          mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}
          navigateTo={navigateTo}
        />
        {isChat ? (
          <section id="chat" className="chat-section" style={{ paddingTop: 100 }}>
            <ChatBlock content={content} />
          </section>
        ) : (
          <>
            <Hero content={content} navigateTo={navigateTo} lang={lang} />
            <Marquee items={content.marquee} />
            <StatsBand content={content} />
            <Manifesto content={content} />
            <Pillars content={content} />
            <Sources content={content} />
            <Roadmap content={content} />
            <Team content={content} />
            <Support content={content} />
            <Footer content={content} />
          </>
        )}
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Theme · Тема">
          <TweakRadio
            value={theme}
            options={[
              { value: 'dark', label: 'Deep · Глубина' },
              { value: 'light', label: 'Bone · Кость' },
            ]}
            onChange={setTheme}
          />
        </TweakSection>
        <TweakSection title="Language · Язык">
          <TweakRadio
            value={lang}
            options={[
              { value: 'ru', label: 'RU' },
              { value: 'en', label: 'EN' },
              { value: 'el', label: 'ΕΛ' },
              { value: 'tr', label: 'TR' },
            ]}
            onChange={setLang}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

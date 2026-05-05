/* ============ Pontos AI: App root ============ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "language": "ru"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined' && window.INITIAL_LANG) return window.INITIAL_LANG;
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') || tweaks.language || 'ru';
  });

  const [section, setSectionState] = useState(() => {
    if (typeof window !== 'undefined' && window.INITIAL_SECTION) return window.INITIAL_SECTION;
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    const parts = path.split('/').filter(Boolean);
    let s = parts.length > 1 ? parts[1] : (parts.length === 1 && !['ru','en','el','tr'].includes(parts[0]) ? parts[0] : 'home');
    if (window.location.hash) s = window.location.hash.slice(1);
    return s === '' ? 'home' : s;
  });

  const [theme, setThemeState] = useState(tweaks.theme || 'dark');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/+$/, '') || '/';
      const parts = path.split('/').filter(Boolean);
      if (parts.length > 0 && ['ru','en','el','tr'].includes(parts[0])) {
        setLangState(parts[0]);
        setSectionState(parts.length > 1 ? parts[1] : 'home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (section && section !== 'home' && section !== 'chat') {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [section]);

  useEffect(() => { setThemeState(tweaks.theme || 'dark'); }, [tweaks.theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('lang', lang);
  }, [theme, lang]);

  const navigateTo = (newLang, newSection) => {
    setLangState(newLang);
    setSectionState(newSection);
    setTweak('language', newLang);
    const url = `/${newLang}${newSection && newSection !== 'home' ? '/' + newSection : ''}`;
    window.history.pushState({}, '', url);
  };

  const setLang = (l) => navigateTo(l, section);
  const setTheme = (t) => { setThemeState(t); setTweak('theme', t); };

  useReveal();

  const content = PONTOS_CONTENT[lang] || PONTOS_CONTENT.ru;
  const isChat = section === 'chat';

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
          <div style={{ paddingTop: 80, paddingBottom: 40, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ChatBlock content={content} />
          </div>
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

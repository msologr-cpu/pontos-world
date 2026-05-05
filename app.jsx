/* ============ Pontos AI: App root ============ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "language": "ru"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  
  const [lang, setLangState] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') || tweaks.language || 'ru';
  });

  const [theme, setThemeState] = useState(tweaks.theme || 'dark');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    if (hash && hash !== '#chat') {
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView();
      }, 50);
    }
  }, [hash]);

  useEffect(() => { setThemeState(tweaks.theme || 'dark'); }, [tweaks.theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('lang', lang);
  }, [theme, lang]);

  const setLang = (l) => { 
    setLangState(l); 
    setTweak('language', l); 
    const url = new URL(window.location);
    url.searchParams.set('lang', l);
    window.history.pushState({}, '', url);
  };
  const setTheme = (t) => { setThemeState(t); setTweak('theme', t); };

  useReveal();

  const content = PONTOS_CONTENT[lang] || PONTOS_CONTENT.ru;
  const isChat = hash === '#chat';

  return (
    <>
      <Cursor />
      <BackgroundCanvas theme={theme} />

      <div className="shell">
        <NavBar
          lang={lang} setLang={setLang}
          content={content}
          mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}
        />
        {isChat ? (
          <div style={{ paddingTop: 80, paddingBottom: 40, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ChatBlock content={content} />
          </div>
        ) : (
          <>
            <Hero content={content} />
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

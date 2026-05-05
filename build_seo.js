const fs = require('fs');
const path = require('path');

const template = fs.readFileSync('index.html', 'utf-8');

const languages = ['ru', 'en', 'el', 'tr'];
const sections = ['', 'roadmap', 'sources', 'team', 'support', 'chat'];

const metadata = {
  ru: {
    '': { title: 'Pontos AI · Цифровой мозг понтийского языка', desc: '36 000+ слов · 2 600 лет истории · 20 диалектных регионов.' },
    'roadmap': { title: 'Дорожная карта · Pontos AI', desc: 'План развития проекта Pontos AI.' },
    'sources': { title: 'Источники · Pontos AI', desc: 'Источники и лингвистическая база.' },
    'team': { title: 'Команда · Pontos AI', desc: 'Носители, ученые, инженеры.' },
    'support': { title: 'Поддержать · Pontos AI', desc: 'Помочь проекту развития понтийского языка.' },
    'chat': { title: 'Поговорить с Pontos AI', desc: 'Режим словаря. 36 000+ слов.' },
  },
  en: {
    '': { title: 'Pontos AI · Language Engine', desc: 'The digital brain of the Pontic Greek language. 36,000+ words.' },
    'roadmap': { title: 'Roadmap · Pontos AI', desc: 'Pontos AI development roadmap.' },
    'sources': { title: 'Sources · Pontos AI', desc: 'Linguistic sources and database.' },
    'team': { title: 'Team · Pontos AI', desc: 'Native speakers, researchers, engineers.' },
    'support': { title: 'Support · Pontos AI', desc: 'Support the language preservation project.' },
    'chat': { title: 'Talk to Pontos AI', desc: 'Dictionary Mode. 36,000+ words.' },
  },
  el: {
    '': { title: 'Πόντος AI · Έργο διάσωσης της γλώσσας', desc: 'Ο ψηφιακός εγκέφαλος της ποντιακής ελληνικής γλώσσας. 36.000+ λέξεις.' },
    'roadmap': { title: 'Πορεία · Πόντος AI', desc: 'Η πορεία ανάπτυξης του έργου.' },
    'sources': { title: 'Πηγές · Πόντος AI', desc: 'Πηγές και γλωσσική βάση.' },
    'team': { title: 'Ομάδα · Πόντος AI', desc: 'Ομιλητές, ερευνητές, μηχανικοί.' },
    'support': { title: 'Στήριξη · Πόντος AI', desc: 'Στηρίξτε το έργο διάσωσης της γλώσσας.' },
    'chat': { title: 'Μίλα στο Pontos AI', desc: 'Λειτουργία λεξικού. 36.000+ λέξεις.' },
  },
  tr: {
    '': { title: 'Pontos AI · Language Engine', desc: 'Pontus dilinin dijital beyni. 36.000+ kelime.' },
    'roadmap': { title: 'Yol haritası · Pontos AI', desc: 'Pontos AI gelişim yol haritası.' },
    'sources': { title: 'Kaynaklar · Pontos AI', desc: 'Dilsel kaynaklar ve veritabanı.' },
    'team': { title: 'Ekip · Pontos AI', desc: 'Anadil konuşanlar, araştırmacılar, mühendisler.' },
    'support': { title: 'Destek · Pontos AI', desc: 'Dil koruma projesini destekleyin.' },
    'chat': { title: 'Pontos AI ile konuş', desc: 'Sözlük Modu. 36.000+ kelime.' },
  }
};

languages.forEach(lang => {
  sections.forEach(section => {
    const meta = metadata[lang][section];
    if (!meta) return;

    let dir = path.join(__dirname, lang);
    if (section) {
      dir = path.join(dir, section);
    }

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Replace title
    let html = template.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
    
    // Inject OpenGraph meta tags
    const ogTags = `
  <meta name="description" content="${meta.desc}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.desc}" />
  <meta property="og:type" content="website" />
  <base href="/" />`;

    html = html.replace('</head>', `${ogTags}\n</head>`);
    
    // Inject global window variables so app.jsx knows where it landed without parsing URL manually
    const script = `\n  <script>window.INITIAL_LANG = '${lang}'; window.INITIAL_SECTION = '${section || 'home'}';</script>\n`;
    html = html.replace('<div id="root"></div>', `${script}<div id="root"></div>`);

    fs.writeFileSync(path.join(dir, 'index.html'), html);
    console.log(`Generated: /${lang}${section ? '/' + section : ''}/index.html`);
  });
});

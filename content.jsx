/* ============ Pontos AI: Real bilingual content (RU/EN) ============ */

const PONTOS_CONTENT = {
  ru: {
    nav: {
      work: 'Дорожная карта',
      services: 'Источники',
      about: 'Команда',
      contact: 'Поддержать',
      chat: 'Pontos AI',
    },
    hero: {
      coords: 'Εύξεινος Πόντος · VII в. до н.э. — наши дни',
      label: 'Проект сохранения языка',
      title1: 'Πόντος AI',
      title2: 'Language',
      title3Em: 'Engine',
      title3: '.',
      tagline: 'Цифровой мозг понтийского греческого языка. 36 000+ слов · 2 600 лет истории · 20 диалектных регионов.',
      taglineLabel: '« Ζήτω ο Πόντος » — Да здравствует Понт',
      cta: 'Поговорить с Pontos AI',
      ctaSecondary: 'Дорожная карта',
      scroll: 'Прокрутить · κύλιση',
    },
    marquee: ['Τραπεζοῦς', 'Sinope', 'Ἀμισός', 'Κερασοῦς', 'Κωνσταντινούπολις', 'Κριμαία', 'Красная Поляна'],
    stats: [
      { num: '36 000+', label: 'Слов в базе' },
      { num: '2 600', label: 'Лет истории' },
      { num: '20', label: 'Диалектных регионов' },
      { num: '4', label: 'Алфавита · алф.' },
    ],
    manifesto: {
      label: 'Архитектура проекта · 01',
      title: 'Понтийский греческий — ',
      titleEm: 'живой язык в цифре.',
      meta: [
        ['Основатель', 'Максимиан Соломонидис'],
        ['База', 'Красная Поляна · Трапезунд'],
        ['Платформа', 'Persei.io · Evera.world'],
        ['Языки', 'RU · EN · ΕΛ'],
      ],
      paragraphs: [
        <>Понтийский — наследие 2 600 лет, от черноморских колоний античности до сёл Трапезунда, Синопа и диаспоры. Мы строим <em>цифровой мозг</em> языка: словари, грамматику, этимологию и голоса носителей в одной живой системе.</>,
        <>Проект объединяет академические словари, фольклорные архивы и AI, который отвечает <em>только</em> из проверенной базы — без выдумок. Если слова нет — система говорит об этом честно.</>,
      ],
    },
    pillars: {
      label: 'Возможности · 02',
      title: 'Четыре опоры,',
      titleEm: 'один язык.',
      items: [
        { greek: '📖', name: 'Словарь', desc: 'Поиск по 36 000+ словам. Карточка слова: греческий, кириллица, латиница, этимология, диалект, источник.' },
        { greek: '🔡', name: 'Алфавиты', desc: 'Система понимает греческое, кириллическое, латинское и турецкое написание одного слова.' },
        { greek: '🎯', name: 'Без выдумок', desc: 'AI отвечает только из базы. Если слова нет — говорит об этом честно. Никаких галлюцинаций.' },
        { greek: '🚧', name: 'Скоро', desc: 'Полный чат с историей, грамматикой, культурой и песнями — встраивается прямо в этот сайт.' },
      ],
    },
    services: {
      label: 'База знаний · 03',
      title: 'Литература ',
      titleEm: 'и источники.',
      items: [
        { num: '/01', title: <>Живые <em>носители</em></>, desc: 'Слова, фразы, произношение, истории — голоса людей, для которых понтийский был родным языком дома.' },
        { num: '/02', title: <>Академические <em>словари</em></>, desc: 'Папаниколау, Андриотис, Опатос — классические лексикографические труды по понтийскому диалекту.' },
        { num: '/03', title: <>Фольклор и <em>песни</em></>, desc: 'Сказки, легенды, пословицы, тексты песен с вариантами и переводами — язык в живом бытовом употреблении.' },
        { num: '/04', title: <>Аудио и <em>видеозаписи</em></>, desc: 'Полевые записи речи, интервью, исполнения песен и танцев — фонетический портрет языка.' },
        { num: '/05', title: <>Исторические <em>архивы</em></>, desc: 'Документы, переписи, рукописи и хроники из понтийских общин — письменная память народа.' },
        { num: '/06', title: <>Грамматики и <em>правила</em></>, desc: 'Академические описания грамматики понтийского диалекта, морфологии, синтаксиса и фонетики.' },
        { num: '/07', title: <>Научные <em>статьи</em></>, desc: 'Лингвистические и исторические исследования понтийского греческого из академических изданий.' },
        { num: '/08', title: <>Топонимы и <em>география</em></>, desc: 'Названия сёл, городов, рек и гор — исторические и современные, в разных алфавитах.' },
        { num: '/09', title: <>Кулинарная <em>лексика</em></>, desc: 'Рецепты, названия блюд и продуктов — бытовой пласт языка, сохранившийся в семейной традиции.' },
        { num: '/10', title: <>Танцы и <em>обряды</em></>, desc: 'Названия танцев, регионы, описания движений — культурная лексика праздника и ритуала.' },
        { num: '/11', title: <>Биографии и <em>роды</em></>, desc: 'Тексты о выдающихся людях, родах и семьях — персональная история языка.' },
        { num: '/12', title: <>Религиозные <em>тексты</em></>, desc: 'Молитвы, гимны, записи церковной жизни понтийских общин.' },
        { num: '/13', title: <>Новые <em>поступления</em></>, desc: 'Диссертации, архивные материалы и полевые экспедиции, готовящиеся к включению в базу.' },
      ],
    },
    work: {
      label: 'Дорожная карта · 04',
      title: '20 этапов от ',
      titleEm: 'архива до диалога.',
      items: window.ROADMAP_DATA.ru,
    },
    chat: {
      label: 'Pontos AI · Режим словаря',
      title: 'Поговорить с ',
      titleEm: 'Pontos AI.',
      desc: '36 000+ слов · Греческий · Кириллица · Латиница · Турецкий',
      placeholder: 'Введите слово на любом алфавите — русском, греческом, латинском или турецком',
      examples: ['νερόν', 'вода', 'aman', 'Τραπεζοῦς', 'кровь', 'αίμαν'],
      cta: 'Открыть Pontos AI',
      systemMsg: 'Γεια σου! Я — цифровой мозг понтийского языка. Я знаю более 36 000 слов, понимаю 20 диалектов и могу объяснить происхождение любого термина. О чем бы вы хотели узнать?',
    },
    team: {
      label: 'Команда · 05',
      title: 'Носители, учёные, ',
      titleEm: 'инженеры.',
      desc: 'Вы носитель языка, филолог или исследователь? Присоединяйтесь — каждый голос бесценен.',
      items: [
        { name: 'Максимиан Соломонидис', role: 'AI-инженер, основатель Persei.io & Evera.world, создатель «Библиотеки вечных».', link: 'https://persei.io/?start=ref_solo013-eternals' },
      ],
      cta: 'Присоединиться к проекту',
    },
    support: {
      label: 'Поддержать · 06',
      title: 'Помочь ',
      titleEm: 'проекту.',
      desc: 'Раздел поддержки в разработке. Сейчас лучший способ помочь — поделиться проектом или связаться напрямую.',
      items: [
        { icon: '🗣️', title: 'Носитель языка', desc: 'Запишите слова, фразы, песни, пословицы — ваш голос бесценен.', cta: 'Написать' },
        { icon: '🔬', title: 'Исследователь', desc: 'Помогите с проверкой данных, этимологией, грамматикой.', cta: 'Написать' },
        { icon: '💛', title: 'Финансово', desc: 'Платёжный модуль скоро. Проект строится на энтузиазме и любви к языку.', cta: 'В разработке', disabled: true },
      ],
    },
    footer: {
      headline: <>Ζήτω ο <em>Πόντος.</em></>,
      sub: 'Да здравствует Понт.',
      cta: 'Связаться',
      cols: [
        { h: 'Проект', items: [
          { label: 'Дорожная карта', href: '#roadmap' },
          { label: 'Источники', href: '#sources' },
          { label: 'Команда', href: '#team' },
          { label: 'Поддержать', href: '#support' }
        ] },
        { h: 'Платформы', items: [
          { label: 'Evera.world', href: 'https://evera.world' },
          { label: 'Persei.io', href: 'https://persei.io' },
          { label: 'GitHub', href: 'https://github.com/msologr-cpu/pontos-world' }
        ] },
        { h: 'Сообщество', items: [
          { label: 'Telegram', href: 'https://t.me/+ZUxz9TkYneZmZDFi' },
          { label: 'Библиотека Вечных', href: 'https://persei.io/?start=ref_solo013-eternals' },
          { label: 'Ромиосини', href: 'https://romiosini.ru/' },
          { label: 'Патрида', href: 'https://rusgreek.ru/krasnaya-polyanaundefinedsochinskaya-gorodskaya-obschestvennaya-organizatsiya' }
        ] },
      ],
      legal: '© Pontos AI · 2026',
      city: 'Trebizond',
    },
  },

  en: {
    nav: {
      work: 'Roadmap',
      services: 'Sources',
      about: 'Team',
      contact: 'Support',
      chat: 'Pontos AI',
    },
    hero: {
      coords: 'Εύξεινος Πόντος · 7th c. BC — present',
      label: 'A language preservation project',
      title1: 'Πόντος AI',
      title2: 'Language',
      title3Em: 'Engine',
      title3: '.',
      tagline: 'The digital brain of the Pontic Greek language. 36,000+ words · 2,600 years of history · 20 dialect regions.',
      taglineLabel: '« Ζήτω ο Πόντος » — Long live Pontus',
      cta: 'Talk to Pontos AI',
      ctaSecondary: 'Roadmap',
      scroll: 'Scroll · κύλιση',
    },
    marquee: ['Τραπεζοῦς', 'Sinope', 'Ἀμισός', 'Κερασοῦς', 'Κωνσταντινούπολις', 'Κριμαία', 'Krasnaya Polyana'],
    stats: [
      { num: '36,000+', label: 'Words in the base' },
      { num: '2,600', label: 'Years of history' },
      { num: '20', label: 'Dialect regions' },
      { num: '4', label: 'Alphabets · alph.' },
    ],
    manifesto: {
      label: 'Project architecture · 01',
      title: 'Pontic Greek — ',
      titleEm: 'a living language, digitised.',
      meta: [
        ['Founder', 'Maximian Solomonidis'],
        ['Bases', 'Krasnaya Polyana · Trebizond'],
        ['Platform', 'Persei.io · Evera.world'],
        ['Languages', 'RU · EN · ΕΛ'],
      ],
      paragraphs: [
        <>Pontic Greek carries 2,600 years of heritage — from Black Sea antiquity to the villages of Trebizond, Sinope and the diaspora. We are building the <em>digital brain</em> of the language: dictionary, grammar, etymology and native voices, all in one living system.</>,
        <>The project unites academic dictionaries, folklore archives and AI that answers <em>only</em> from a verified base — no hallucinations. If a word isn't there, the system says so honestly.</>,
      ],
    },
    pillars: {
      label: 'Capabilities · 02',
      title: 'Four pillars,',
      titleEm: 'one language.',
      items: [
        { greek: '📖', name: 'Dictionary', desc: 'Search 36,000+ words. Each card: Greek, Cyrillic, Latin, etymology, dialect, source.' },
        { greek: '🔡', name: 'Any alphabet', desc: 'The system understands Greek, Cyrillic, Latin and Turkish spellings of the same word.' },
        { greek: '🎯', name: 'No fiction', desc: 'AI answers only from the base. If the word is missing it says so honestly. No hallucinations.' },
        { greek: '🚧', name: 'Coming soon', desc: 'Full chat with history, grammar, culture and songs — embedded directly into this site.' },
      ],
    },
    services: {
      label: 'Knowledge base · 03',
      title: 'Literature ',
      titleEm: 'and sources.',
      items: [
        { num: '/01', title: <>Living <em>speakers</em></>, desc: 'Words, phrases, pronunciation, stories — the voices of people for whom Pontic was the language spoken at home.' },
        { num: '/02', title: <>Academic <em>dictionaries</em></>, desc: 'Papanikolaou, Andriotis, Opatos — classical lexicographic works on the Pontic dialect.' },
        { num: '/03', title: <>Folklore and <em>songs</em></>, desc: 'Tales, legends, proverbs, song texts with variants and translations — the language in living everyday use.' },
        { num: '/04', title: <>Audio and <em>video</em></>, desc: 'Field recordings of speech, interviews, song and dance performances — a phonetic portrait of the language.' },
        { num: '/05', title: <>Historical <em>archives</em></>, desc: 'Documents, censuses, manuscripts and chronicles from Pontic communities — the written memory of the people.' },
        { num: '/06', title: <>Grammars and <em>rules</em></>, desc: 'Academic descriptions of Pontic grammar, morphology, syntax and phonetics.' },
        { num: '/07', title: <>Academic <em>papers</em></>, desc: 'Linguistic and historical research on Pontic Greek from scholarly publications.' },
        { num: '/08', title: <>Toponyms and <em>geography</em></>, desc: 'Names of villages, towns, rivers and mountains — historical and modern, across alphabets.' },
        { num: '/09', title: <>Culinary <em>lexicon</em></>, desc: 'Recipes, dish names, food vocabulary — the everyday layer of the language preserved in family tradition.' },
        { num: '/10', title: <>Dances and <em>customs</em></>, desc: 'Dance names, regions, descriptions of movements — the cultural vocabulary of festivity and ritual.' },
        { num: '/11', title: <>Biographies and <em>lineages</em></>, desc: 'Texts on notable people, clans and families — the personal history of the language.' },
        { num: '/12', title: <>Religious <em>texts</em></>, desc: 'Prayers, hymns and records of church life in Pontic communities.' },
        { num: '/13', title: <>New <em>acquisitions</em></>, desc: 'Dissertations, archival materials and field expeditions being prepared for inclusion in the base.' },
      ],
    },
    work: {
      label: 'Roadmap · 04',
      title: '20 stages from ',
      titleEm: 'archive to dialogue.',
      items: window.ROADMAP_DATA.en,
    },
    chat: {
      label: 'Pontos AI · Dictionary Mode',
      title: 'Talk to ',
      titleEm: 'Pontos AI.',
      desc: '36,000+ words · Greek · Cyrillic · Latin · Turkish',
      placeholder: 'Enter a word in any alphabet — Russian, Greek, Latin or Turkish',
      examples: ['νερόν', 'water', 'aman', 'Τραπεζοῦς', 'blood', 'αίμαν'],
      cta: 'Open Pontos AI',
      systemMsg: 'Γεια σου! I am the digital brain of the Pontic language. I know over 36,000 words, understand 20 dialects, and can explain the origin of any term. What would you like to know?',
    },
    team: {
      label: 'Team · 05',
      title: 'Native speakers, scholars, ',
      titleEm: 'engineers.',
      desc: 'Are you a native speaker, philologist or researcher? Join us — every voice is invaluable.',
      items: [
        { name: 'Maximian Solomonidis', role: 'AI Engineer, Founder of Persei.io & Evera.world, Creator of "The Library of Eternals".', link: 'https://persei.io/?start=ref_solo013-eternals' },
      ],
      cta: 'Join the project',
    },
    support: {
      label: 'Support · 06',
      title: 'Help the ',
      titleEm: 'project.',
      desc: 'The support section is in development. The best way to help right now is to share the project or reach out directly.',
      items: [
        { icon: '🗣️', title: 'Native speaker', desc: 'Record words, phrases, songs, proverbs — your voice is invaluable.', cta: 'Write' },
        { icon: '🔬', title: 'Researcher', desc: 'Help with data verification, etymology, grammar.', cta: 'Write' },
        { icon: '💛', title: 'Financially', desc: 'Payment module is coming. The project runs on enthusiasm and love for the language.', cta: 'In development', disabled: true },
      ],
    },
    footer: {
      headline: <>Ζήτω ο <em>Πόντος.</em></>,
      sub: 'Long live Pontus.',
      cta: 'Get in touch',
      cols: [
        { h: 'Project', items: [
          { label: 'Roadmap', href: '#roadmap' },
          { label: 'Sources', href: '#sources' },
          { label: 'Team', href: '#team' },
          { label: 'Support', href: '#support' }
        ] },
        { h: 'Platforms', items: [
          { label: 'Evera.world', href: 'https://evera.world' },
          { label: 'Persei.io', href: 'https://persei.io' },
          { label: 'GitHub', href: 'https://github.com/msologr-cpu/pontos-world' }
        ] },
        { h: 'Community', items: [
          { label: 'Telegram', href: 'https://t.me/+ZUxz9TkYneZmZDFi' },
          { label: 'Eternals Library', href: 'https://persei.io/?start=ref_solo013-eternals' },
          { label: 'Romiosini', href: 'https://romiosini.ru/' },
          { label: 'Patrida', href: 'https://rusgreek.ru/krasnaya-polyanaundefinedsochinskaya-gorodskaya-obschestvennaya-organizatsiya' }
        ] },
      ],
      legal: '© Pontos AI · 2026',
      city: 'Trebizond',
    },
  },
};

PONTOS_CONTENT.el = {
  nav: { work: 'Πορεία', services: 'Πηγές', about: 'Ομάδα', contact: 'Στήριξη', chat: 'Pontos AI' },
  hero: {
    coords: 'Εύξεινος Πόντος · 7ος αι. π.Χ. — σήμερα',
    label: 'Έργο διάσωσης της γλώσσας',
    title1: 'Πόντος AI',
    title2: 'Language',
    title3Em: 'Engine',
    title3: '.',
    tagline: 'Ο ψηφιακός εγκέφαλος της ποντιακής ελληνικής γλώσσας. 36.000+ λέξεις · 2.600 χρόνια ιστορίας · 20 διαλεκτικές περιοχές.',
    taglineLabel: '« Ζήτω ο Πόντος »',
    cta: 'Μίλα στο Pontos AI',
    ctaSecondary: 'Πορεία',
    scroll: 'Κύλιση · κύλιση',
  },
  marquee: ['Τραπεζοῦς', 'Σινώπη', 'Ἀμισός', 'Κερασοῦς', 'Κωνσταντινούπολις', 'Κριμαία', 'Krasnaya Polyana'],
  stats: [
    { num: '36.000+', label: 'Λέξεις στη βάση' },
    { num: '2.600', label: 'Χρόνια ιστορίας' },
    { num: '20', label: 'Διαλεκτικές περιοχές' },
    { num: '4', label: 'Αλφάβητα · αλφ.' },
  ],
  manifesto: {
    label: 'Αρχιτεκτονική · 01',
    title: 'Ποντιακή ελληνική — ',
    titleEm: 'ζωντανή γλώσσα στην ψηφιακή εποχή.',
    meta: [
      ['Ιδρυτής', 'Maximian Solomonidis'],
      ['Έδρες', 'Krasnaya Polyana · Τραπεζούντα'],
      ['Πλατφόρμα', 'Persei.io · Evera.world'],
      ['Γλώσσες', 'RU · EN · ΕΛ'],
    ],
    paragraphs: [
      <>Η ποντιακή κουβαλά 2.600 χρόνια κληρονομιάς — από την αρχαιότητα του Εύξεινου Πόντου μέχρι τα χωριά της Τραπεζούντας, της Σινώπης και της διασποράς. Χτίζουμε τον <em>ψηφιακό εγκέφαλο</em> της γλώσσας: λεξικό, γραμματική, ετυμολογία και φωνές ομιλητών.</>,
      <>Το έργο ενώνει ακαδημαϊκά λεξικά, λαογραφικά αρχεία και AI που απαντά <em>μόνο</em> από επαληθευμένη βάση — χωρίς ψευδαισθήσεις. Αν η λέξη δεν υπάρχει, το λέει τίμια.</>,
    ],
  },
  pillars: {
    label: 'Δυνατότητες · 02',
    title: 'Τέσσερις στυλοβάτες,',
    titleEm: 'μία γλώσσα.',
    items: [
      { greek: '📖', name: 'Λεξικό', desc: 'Αναζήτηση σε 36.000+ λέξεις. Κάρτα: ελληνικά, κυριλλικά, λατινικά, ετυμολογία, διάλεκτος, πηγή.' },
      { greek: '🔡', name: 'Κάθε αλφάβητο', desc: 'Το σύστημα αναγνωρίζει ελληνική, κυριλλική, λατινική και τουρκική γραφή της ίδιας λέξης.' },
      { greek: '🎯', name: 'Χωρίς εφευρέσεις', desc: 'Το AI απαντά μόνο από τη βάση. Αν λείπει, το παραδέχεται. Καμία ψευδαίσθηση.' },
      { greek: '🚧', name: 'Σύντομα', desc: 'Πλήρες chat με ιστορία, γραμματική, πολιτισμό και τραγούδια — ενσωματωμένο εδώ.' },
    ],
  },
  services: {
    label: 'Βάση γνώσης · 03',
    title: 'Λογοτεχνία ',
    titleEm: 'και πηγές.',
    items: [
      { num: '/01', title: <>Ζωντανοί <em>ομιλητές</em></>, desc: 'Λέξεις, φράσεις, προφορά, ιστορίες — φωνές ανθρώπων για τους οποίους η ποντιακή ήταν η γλώσσα του σπιτιού.' },
      { num: '/02', title: <>Ακαδημαϊκά <em>λεξικά</em></>, desc: 'Παπανικολάου, Ανδριώτης, Όπατος — κλασικά λεξικογραφικά έργα της ποντιακής διαλέκτου.' },
      { num: '/03', title: <>Λαογραφία και <em>τραγούδια</em></>, desc: 'Παραμύθια, θρύλοι, παροιμίες, στίχοι τραγουδιών με παραλλαγές και μεταφράσεις.' },
      { num: '/04', title: <>Ηχητικά και <em>βίντεο</em></>, desc: 'Επιτόπιες ηχογραφήσεις ομιλίας, συνεντεύξεις, εκτελέσεις τραγουδιών και χορών.' },
      { num: '/05', title: <>Ιστορικά <em>αρχεία</em></>, desc: 'Έγγραφα, απογραφές, χειρόγραφα και χρονικά από ποντιακές κοινότητες.' },
      { num: '/06', title: <>Γραμματικές και <em>κανόνες</em></>, desc: 'Ακαδημαϊκές περιγραφές της ποντιακής γραμματικής, μορφολογίας, σύνταξης και φωνητικής.' },
      { num: '/07', title: <>Επιστημονικά <em>άρθρα</em></>, desc: 'Γλωσσολογικές και ιστορικές έρευνες για την ποντιακή ελληνική από ακαδημαϊκές εκδόσεις.' },
      { num: '/08', title: <>Τοπωνύμια και <em>γεωγραφία</em></>, desc: 'Ονόματα χωριών, πόλεων, ποταμών και βουνών — ιστορικά και σύγχρονα, σε κάθε αλφάβητο.' },
      { num: '/09', title: <>Γαστρονομικό <em>λεξιλόγιο</em></>, desc: 'Συνταγές, ονόματα πιάτων, τρόφιμα — ο καθημερινός λεξιλογικός πλούτος της οικογενειακής παράδοσης.' },
      { num: '/10', title: <>Χοροί και <em>έθιμα</em></>, desc: 'Ονόματα χορών, περιοχές, περιγραφές κινήσεων — το πολιτιστικό λεξιλόγιο της γιορτής και του τελετουργίου.' },
      { num: '/11', title: <>Βιογραφίες και <em>γενεαλογία</em></>, desc: 'Κείμενα για επιφανείς προσωπικότητες, γενιές και οικογένειες — η προσωπική ιστορία της γλώσσας.' },
      { num: '/12', title: <>Θρησκευτικά <em>κείμενα</em></>, desc: 'Προσευχές, ύμνοι και αρχεία της εκκλησιαστικής ζωής των ποντιακών κοινοτήτων.' },
      { num: '/13', title: <>Νέες <em>αποκτήσεις</em></>, desc: 'Διατριβές, αρχειακό υλικό και επιτόπιες αποστολές που προετοιμάζονται για ένταξη στη βάση.' },
    ],
  },
  work: {
    label: 'Πορεία · 04',
    title: '20 στάδια από ',
    titleEm: 'το αρχείο στον διάλογο.',
    items: window.ROADMAP_DATA.el,
  },
  chat: {
    label: 'Pontos AI · Dictionary Mode',
    title: 'Μίλα στο ',
    titleEm: 'Pontos AI.',
    desc: '36.000+ λέξεις · Ελληνικά · Κυριλλικά · Λατινικά · Τουρκικά',
    placeholder: 'Πληκτρολογήστε μια λέξη σε οποιοδήποτε αλφάβητο — ελληνικό, κυριλλικό, λατινικό ή τουρκικό',
    examples: ['νερόν', 'νερό', 'aman', 'Τραπεζοῦς', 'αίμα', 'αίμαν'],
    cta: 'Άνοιγμα Pontos AI',
    systemMsg: 'Γεια σου! Είμαι ο ψηφιακός εγκέφαλος της ποντιακής γλώσσας. Γνωρίζω πάνω από 36.000 λέξεις, κατανοώ 20 διαλέκτους και μπορώ να εξηγήσω την προέλευση κάθε όρου. Τι θα θέλατε να μάθετε;',
  },
  team: {
    label: 'Ομάδα · 05',
    title: 'Ομιλητές, ερευνητές, ',
    titleEm: 'μηχανικοί.',
    desc: 'Είστε ομιλητής, φιλόλογος ή ερευνητής; Ελάτε μαζί μας — κάθε φωνή είναι ανεκτίμητη.',
    items: [
      { name: 'Μαξιμιανός Σολομωνίδης', role: 'Μηχανικός AI, Ιδρυτής Persei.io & Evera.world, Δημιουργός της "Βιβλιοθήκης των Αιωνίων".', link: 'https://persei.io/?start=ref_solo013-eternals' },
    ],
    cta: 'Συμμετοχή στο έργο',
  },
  support: {
    label: 'Στήριξη · 06',
    title: 'Βοηθήστε ',
    titleEm: 'το έργο.',
    desc: 'Η ενότητα στήριξης είναι υπό κατασκευή. Προς το παρόν, μοιραστείτε το έργο ή επικοινωνήστε απευθείας.',
    items: [
      { icon: '🗣️', title: 'Ομιλητής', desc: 'Καταγράψτε λέξεις, φράσεις, τραγούδια, παροιμίες — η φωνή σας είναι ανεκτίμητη.', cta: 'Γράψτε' },
      { icon: '🔬', title: 'Ερευνητής', desc: 'Βοηθήστε με επαλήθευση δεδομένων, ετυμολογία, γραμματική.', cta: 'Γράψτε' },
      { icon: '💛', title: 'Οικονομικά', desc: 'Σύντομα module πληρωμών. Το έργο τρέχει με ενθουσιασμό και αγάπη για τη γλώσσα.', cta: 'Υπό ανάπτυξη', disabled: true },
    ],
  },
  footer: {
    headline: <>Ζήτω ο <em>Πόντος.</em></>,
    sub: 'Long live Pontus.',
    cta: 'Επικοινωνία',
    cols: [
      { h: 'Έργο', items: [
        { label: 'Πορεία', href: '#roadmap' },
        { label: 'Πηγές', href: '#sources' },
        { label: 'Ομάδα', href: '#team' },
        { label: 'Στήριξη', href: '#support' }
      ] },
      { h: 'Πλατφόρμες', items: [
        { label: 'Evera.world', href: 'https://evera.world' },
        { label: 'Persei.io', href: 'https://persei.io' },
        { label: 'GitHub', href: 'https://github.com/msologr-cpu/pontos-world' }
      ] },
      { h: 'Κοινότητα', items: [
        { label: 'Telegram', href: 'https://t.me/+ZUxz9TkYneZmZDFi' },
        { label: 'Βιβλιοθήκη των Αιωνίων', href: 'https://persei.io/?start=ref_solo013-eternals' },
        { label: 'Ρωμιοσύνη', href: 'https://romiosini.ru/' },
        { label: 'Πατρίδα', href: 'https://rusgreek.ru/krasnaya-polyanaundefinedsochinskaya-gorodskaya-obschestvennaya-organizatsiya' }
      ] },
    ],
    legal: '© Pontos AI · 2026',
    city: 'Trebizond',
  },
};

PONTOS_CONTENT.tr = {
  nav: { work: 'Yol haritası', services: 'Kaynaklar', about: 'Ekip', contact: 'Destek', chat: 'Pontos AI' },
  hero: {
    coords: 'Karadeniz · MÖ 7. yy — günümüz',
    label: 'Bir dil koruma projesi',
    title1: 'Πόντος AI',
    title2: 'Language',
    title3Em: 'Engine',
    title3: '.',
    tagline: 'Pontus Rumcasının dijital beyni. 36.000+ kelime · 2.600 yıllık tarih · 20 lehçe bölgesi.',
    taglineLabel: '« Ζήτω ο Πόντος » — Yaşasın Pontus',
    cta: "Pontos AI ile konuş",
    ctaSecondary: 'Yol haritası',
    scroll: 'Kaydır · κύλιση',
  },
  marquee: ['Trabzon', 'Sinop', 'Samsun', 'Giresun', 'İstanbul', 'Kırım', 'Krasnaya Polyana'],
  stats: [
    { num: '36.000+', label: "Veritabanındaki kelime" },
    { num: '2.600', label: 'Yıllık tarih' },
    { num: '20', label: 'Lehçe bölgesi' },
    { num: '4', label: 'Alfabe · alf.' },
  ],
  manifesto: {
    label: 'Proje mimarisi · 01',
    title: 'Pontus Rumcası — ',
    titleEm: 'dijitalleşen yaşayan bir dil.',
    meta: [
      ['Kurucu', 'Maximian Solomonidis'],
      ['Merkezler', 'Krasnaya Polyana · Trabzon'],
      ['Platform', 'Persei.io · Evera.world'],
      ['Diller', 'RU · EN · ΕΛ · TR'],
    ],
    paragraphs: [
      <>Pontus Rumcası 2.600 yıllık bir mirası taşır — Karadeniz antik çağından Trabzon, Sinop ve diasporanın köylerine. Dilin <em>dijital beynini</em> inşa ediyoruz: sözlük, dilbilgisi, etimoloji ve anadil seslerini tek bir yaşayan sistemde.</>,
      <>Proje, akademik sözlükleri, folklor arşivlerini ve <em>yalnızca</em> doğrulanmış veriden cevap veren bir AI'ı bir araya getirir — uydurma yok. Kelime yoksa, sistem dürüstçe söyler.</>,
    ],
  },
  pillars: {
    label: 'Yetenekler · 02',
    title: 'Dört sütun,',
    titleEm: 'tek dil.',
    items: [
      { greek: '📖', name: 'Sözlük', desc: '36.000+ kelimede arama. Kart: Yunan, Kiril, Latin, etimoloji, lehçe, kaynak.' },
      { greek: '🔡', name: 'Her alfabe', desc: 'Sistem aynı kelimenin Yunan, Kiril, Latin ve Türk yazımını anlar.' },
      { greek: '🎯', name: 'Uydurma yok', desc: 'AI sadece veritabanından yanıt verir. Kelime yoksa dürüstçe söyler. Halüsinasyon yok.' },
      { greek: '🚧', name: 'Yakında', desc: 'Tarih, dilbilgisi, kültür ve şarkılarla tam sohbet — doğrudan bu siteye gömülü.' },
    ],
  },
  services: {
    label: 'Bilgi tabanı · 03',
    title: 'Edebiyat ',
    titleEm: 've kaynaklar.',
    items: [
      { num: '/01', title: <>Akademik <em>sözlükler</em></>, desc: 'Papanikolaou, Andriotis, Opatos — Pontus lehçesi üzerine klasik sözlük çalışmaları.' },
      { num: '/02', title: <>Folklor <em>arşivleri</em></>, desc: 'Şarkılar, atasözleri, masallar, ritüel metinler — dilin günlük yaşamdaki sesi.' },
      { num: '/03', title: <>Anadil <em>sesleri</em></>, desc: 'Pontus, Kafkasya, Yunanistan ve diaspora köylerinden saha kayıtları.' },
      { num: '/04', title: <>Beklenen <em>baskılar</em></>, desc: 'Yeni yayınlar, tezler ve eklenmek üzere hazırlanan arşiv materyali.' },
    ],
  },
  work: {
    label: 'Yol haritası · 04',
    title: 'Arşivden diyaloga ',
    titleEm: '20 aşama.',
    items: window.ROADMAP_DATA.tr,
  },
  chat: {
    label: 'Pontos AI · Dictionary Mode',
    title: "Pontos AI ile ",
    titleEm: 'konuş.',
    desc: '36.000+ kelime · Yunan · Kiril · Latin · Türk',
    placeholder: 'Herhangi bir alfabede bir kelime girin — Rusça, Yunanca, Latince veya Türkçe',
    examples: ['νερόν', 'su', 'aman', 'Τραπεζοῦς', 'kan', 'αίμαν'],
    cta: "Pontos AI'ı aç",
    systemMsg: 'Γεια σου! Ben Pontus dilinin dijital beyniyim. 36.000\'den fazla kelime biliyorum, 20 lehçeyi anlıyorum ve herhangi bir terimin kökenini açıklayabilirim. Ne öğrenmek istersiniz?',
  },
  team: {
    label: 'Ekip · 05',
    title: 'Anadil konuşurları, akademisyenler, ',
    titleEm: 'mühendisler.',
    desc: 'Anadil konuşuru, filolog veya araştırmacı mısınız? Bize katılın — her ses paha biçilmez.',
    items: [
      { name: 'Maximian Solomonidis', role: 'AI Mühendisi, Persei.io & Evera.world Kurucusu, "Ebediler Kütüphanesi" Yaratıcısı.', link: 'https://persei.io/?start=ref_solo013-eternals' },
    ],
    cta: 'Projeye katıl',
  },
  support: {
    label: 'Destek · 06',
    title: 'Projeye ',
    titleEm: 'yardım edin.',
    desc: 'Destek bölümü geliştiriliyor. Şu an en iyi yardım — projeyi paylaşmak veya doğrudan iletişime geçmek.',
    items: [
      { icon: '🗣️', title: 'Anadil konuşuru', desc: 'Kelimeleri, deyimleri, şarkıları, atasözlerini kaydedin — sesiniz paha biçilmezdir.', cta: 'Yaz' },
      { icon: '🔬', title: 'Araştırmacı', desc: 'Veri doğrulama, etimoloji, dilbilgisi konularında yardım edin.', cta: 'Yaz' },
      { icon: '💛', title: 'Maddi', desc: 'Ödeme modülü yakında. Proje, dile duyulan sevgi ve coşkuyla yürüyor.', cta: 'Geliştirme aşamasında', disabled: true },
    ],
  },
  footer: {
    headline: <>Ζήτω ο <em>Πόντος.</em></>,
    sub: 'Yaşasın Pontus.',
    cta: 'İletişim',
    cols: [
      { h: 'Proje', items: [
        { label: 'Yol haritası', href: '#roadmap' },
        { label: 'Kaynaklar', href: '#sources' },
        { label: 'Ekip', href: '#team' },
        { label: 'Destek', href: '#support' }
      ] },
      { h: 'Platformlar', items: [
        { label: 'Evera.world', href: 'https://evera.world' },
        { label: 'Persei.io', href: 'https://persei.io' },
        { label: 'GitHub', href: 'https://github.com/msologr-cpu/pontos-world' }
      ] },
      { h: 'Topluluk', items: [
        { label: 'Telegram', href: 'https://t.me/+ZUxz9TkYneZmZDFi' },
        { label: 'Ebediler Kütüphanesi', href: 'https://persei.io/?start=ref_solo013-eternals' },
        { label: 'Romiosini', href: 'https://romiosini.ru/' },
        { label: 'Patrida', href: 'https://rusgreek.ru/krasnaya-polyanaundefinedsochinskaya-gorodskaya-obschestvennaya-organizatsiya' }
      ] },
    ],
    legal: '© Pontos AI · 2026',
    city: 'Trebizond',
  },
};

window.PONTOS_CONTENT = PONTOS_CONTENT;

(function () {
  var LANG_KEY = "pds-lang";
  var CURR_KEY = "pds-currency";
  /** Orientačné kurzy z EUR (upravte podľa potreby). */
  var EUR_TO_USD = 1.09;
  var EUR_TO_CZK = 24.65;

  var STRINGS = {
    sk: {
      meta_title: "Peterdinis Solutions — IT, web a mobilný vývoj",
      meta_desc:
        "Peterdinis Solutions — full-stack IT, webový a mobilný vývoj. Softvér na mieru pre váš biznis.",
      preloader: "Pripravujeme zážitok",
      nav_services: "Služby",
      nav_pricing: "Cenník",
      nav_about: "O mne",
      nav_portfolio: "Portfólio",
      nav_contact: "Kontakt",
      nav_aria: "Hlavná navigácia",
      theme_light: "Prepnúť na svetlý režim",
      theme_dark: "Prepnúť na tmavý režim",
      theme_title_light: "Svetlý režim",
      theme_title_dark: "Tmavý režim",
      select_group_aria: "Jazyk a mena zobrazenia cien",
      select_lang_aria: "Jazyk stránky",
      select_curr_aria: "Mena pre ceny",
      select_lang_label: "Jazyk",
      select_curr_label: "Mena",
      nav_menu: "Menu",
      scroll_top: "Späť hore",
      skip: "Preskočiť na obsah",
      hero_badge: "Voľný termín pre nové projekty",
      hero_h1_1: "IT riešenia, web a mobil — end-to-end od",
      hero_h1_2: "full-stack vývojára",
      hero_lead:
        "Peterdinis Solutions vám pomôže dodať spoľahlivý softvér: od architektúry a API až po vyladené webové a mobilné zážitky.",
      hero_cta: "Začať konverzáciu",
      hero_github: "Portfólio na GitHub-e",
      hero_stack: "Blazor · .NET · TypeScript · Cloud-ready dodávka",
      services_title: "Čo dodávam",
      services_sub:
        "Praktické inžinierstvo naprieč stackom — od infraštruktúry až po rozhrania pripravené na produkciu.",
      s1_title: "IT riešenia",
      s1_body:
        "Návrh systémov, integrácie, cloud-ready backendy a udržateľné kódové základne, ktoré rastú s vaším tímom.",
      s1_li1: "API a dátové vrstvy",
      s1_li2: "Nastavenia šetrné k DevOps",
      s2_title: "Webový vývoj",
      s2_body:
        "Rýchle, prístupné SPA a full-stack webové aplikácie — moderné frameworky, solídny UX a výkon.",
      s2_li1: "Responzívne UI s ohľadom na prístupnosť",
      s2_li2: "SSR / SPA tam, kde to dáva zmysel",
      s3_title: "Mobilný vývoj",
      s3_body:
        "Multiplatformné a native-leaning mobilné riešenia napojené na API, s dôrazom na prehľadnosť a spoľahlivosť.",
      s3_li1: "Ciele iOS a Android",
      s3_li2: "Vzorce tolerantné k offline režimu",
      pricing_title: "Plány, ktoré rastú s projektom",
      pricing_sub:
        "Orientačné sadzby — každá spolupráca dostane jasnú ponuku po zladení rozsahu a časovej osi.",
      popular: "Obľúbené",
      price_from: "od",
      d_name: "Discovery",
      d_sub: "jednorazová session",
      d_body:
        "Zameraná pracovná session na objasnenie cieľov, rizík a najlepšieho technického smeru.",
      d_li1: "Až 90 minút (videohovor)",
      d_li2: "Písomné zhrnutie a ďalšie kroky",
      d_li3: "Orientačný odhad práce a rozpočtu",
      d_cta: "Objednať discovery",
      p_name: "Projekt",
      p_sub: "míľnik s fixným rozsahom",
      p_body:
        "End-to-end dodávka pre definovaný súbor funkcií — web, API alebo mobilný výsek s odovzdaním na staging.",
      p_li1: "Míľniky a demo cyklus",
      p_li2: "Zdrojový repozitár + poznámky k nasadeniu",
      p_li3: "2 týždne opráv po spustení",
      p_cta: "Vyžiadať ponuku",
      r_name: "Retainer",
      r_sub: "mesačne",
      r_body:
        "Priebežná kapacita na iterácie, podporu v produkcii a roadmapu s predvídateľnou dostupnosťou.",
      r_li1: "Rezervované hodiny a SLA podľa úrovne",
      r_li2: "Prioritný kanál",
      r_li3: "Mesačný review a plánovanie",
      r_cta: "Prediskutovať retainer",
      pricing_foot:
        "Môže platiť DPH / miestne dane. Finálna cena je potvrdená písomne pred začatím práce. Prepočty z EUR na USD alebo CZK sú orientačné.",
      about_title: "O mne",
      about_lead:
        "Som full-stack vývojár a rád preberám funkcie od databázy po UI. Či potrebujete nový produkt, refaktoring alebo priebežnú podporu, pracujem v malých, jasných iteráciách, aby ste vždy vedeli, kde sme.",
      about_li1: "Typovo bezpečné API, testy tam, kde záleží, a dokumentácia, ktorá prežije odovzdanie",
      about_li2: "Webové stacky (napr. React, Next.js, .NET) a pragmatická mobilná dodávka",
      about_li3: "Priama komunikácia — rozsah, kompromisy a časové rámce vopred",
      mindset_title: "Technologický prístup",
      mindset_body:
        "Uprednostňujem „nudnú“ technológiu tam, kde vyhráva, a siahnem po správnom nástroji, keď to problém vyžaduje. Kódová základňa by mala byť zmeniteľná s istotou — aj pre vás.",
      portfolio_title: "Portfólio",
      portfolio_lead:
        "Osobné portfólio je postavené na Next.js, TypeScript, Tailwind a ďalšom — ukážka štruktúry front-endu, animácií a detailov.",
      portfolio_featured: "Vybraný projekt",
      portfolio_project: "Osobné portfólio",
      portfolio_body:
        "Interaktívne UI, ukážka projektov a kontakt — optimalizované na prehľadnosť a výkon.",
      portfolio_repo: "Repozitár",
      portfolio_live: "Živá ukážka",
      contact_title: "Poďme spolupracovať",
      contact_lead:
        "Napíšte o produkte, časovej osi a stacku. Odpoviem s úprimným vyhodnotením zhody a ďalšími krokmi.",
      contact_reply: "Odpoveď zvyčajne do jedného pracovného dňa.",
      footer_tag:
        "Full-stack vývoj a IT konzultácie — od prvého náčrtu až po produkciu.",
      footer_pricing: "Cenník",
      footer_github: "GitHub",
      footer_live: "Živé portfólio",
      footer_email: "E-mail",
      footer_rights: "Všetky práva vyhradené.",
      notfound_meta_title: "404 — Peterdinis Solutions",
      notfound_meta_desc: "Požadovaná stránka neexistuje.",
      notfound_eyebrow: "404",
      notfound_title: "Stránka sa nenašla",
      notfound_body: "Táto adresa na webe neexistuje.",
      notfound_hint: "Skontrolujte URL alebo sa vráťte na úvod.",
      notfound_back: "Späť na úvod",
      notfound_contact: "Kontakt",
      error_meta_title: "Chyba — Peterdinis Solutions",
      error_meta_desc: "Pri spracovaní požiadavky vznikla chyba.",
      error_eyebrow: "Chyba",
      error_title: "Niečo sa pokazilo",
      error_lead:
        "Počas spracovania vašej požiadavky vznikla chyba. Skúste to prosím neskôr znova.",
      error_request_label: "ID požiadavky",
      error_try_home: "Späť na úvod",
      error_contact: "Kontakt",
      error_dev_title: "Režim vývoja",
      error_dev_p1:
        "V prostredí Development uvidíte podrobnejšie informácie o chybe priamo v konzole alebo na vývojovom serveri.",
      error_dev_p2:
        "Pre produkciu nepovoľujte Development — môže odhaliť citlivé údaje. Na lokálne ladenie nastavte premennú ASPNETCORE_ENVIRONMENT na Development a reštartujte aplikáciu.",
      eyebrow_services: "Schopnosti",
      eyebrow_pricing: "Cenník",
      eyebrow_about: "Kto som",
      eyebrow_portfolio: "Vybraná práca",
      eyebrow_contact: "Kontakt",
    },
    cs: {
      meta_title: "Peterdinis Solutions — IT, web a mobilní vývoj",
      meta_desc:
        "Peterdinis Solutions — full-stack IT, webový a mobilní vývoj. Software na míru pro váš byznys.",
      preloader: "Připravujeme zážitek",
      nav_services: "Služby",
      nav_pricing: "Ceník",
      nav_about: "O mně",
      nav_portfolio: "Portfolio",
      nav_contact: "Kontakt",
      nav_aria: "Hlavní navigace",
      theme_light: "Přepnout na světlý režim",
      theme_dark: "Přepnout na tmavý režim",
      theme_title_light: "Světlý režim",
      theme_title_dark: "Tmavý režim",
      select_group_aria: "Jazyk a měna zobrazení cen",
      select_lang_aria: "Jazyk stránky",
      select_curr_aria: "Měna pro ceny",
      select_lang_label: "Jazyk",
      select_curr_label: "Měna",
      nav_menu: "Menu",
      scroll_top: "Zpět nahoru",
      skip: "Přeskočit na obsah",
      hero_badge: "Volný termín pro nové projekty",
      hero_h1_1: "IT řešení, web a mobil — end-to-end od",
      hero_h1_2: "full-stack vývojáře",
      hero_lead:
        "Peterdinis Solutions vám pomůže dodat spolehlivý software: od architektury a API až po vyladěné webové a mobilní zážitky.",
      hero_cta: "Začít konverzaci",
      hero_github: "Portfolio na GitHubu",
      hero_stack: "Blazor · .NET · TypeScript · Cloud-ready dodávka",
      services_title: "Co dodávám",
      services_sub:
        "Praktické inženýrství napříč stackem — od infrastruktury až po rozhraní připravená na produkci.",
      s1_title: "IT řešení",
      s1_body:
        "Návrh systémů, integrace, cloud-ready backendy a udržitelné kódové báze, které rostou s vaším týmem.",
      s1_li1: "API a datové vrstvy",
      s1_li2: "Nastavení šetrná k DevOps",
      s2_title: "Webový vývoj",
      s2_body:
        "Rychlé, přístupné SPA a full-stack webové aplikace — moderní frameworky, solidní UX a výkon.",
      s2_li1: "Responzivní UI s ohledem na přístupnost",
      s2_li2: "SSR / SPA tam, kde to dává smysl",
      s3_title: "Mobilní vývoj",
      s3_body:
        "Multiplatformní a native-leaning mobilní řešení napojená na API s důrazem na přehlednost a spolehlivost.",
      s3_li1: "Cíle iOS a Android",
      s3_li2: "Vzory tolerantní k offline režimu",
      pricing_title: "Plány, které rostou s projektem",
      pricing_sub:
        "Orientační sazby — každá spolupráce dostane jasnou nabídku po sjednocení rozsahu a časové osy.",
      popular: "Oblíbené",
      price_from: "od",
      d_name: "Discovery",
      d_sub: "jednorázová session",
      d_body:
        "Cílená pracovní session k objasnění cílů, rizik a nejlepšího technického směru.",
      d_li1: "Až 90 minut (videohovor)",
      d_li2: "Písemné shrnutí a další kroky",
      d_li3: "Orientační odhad práce a rozpočtu",
      d_cta: "Objednat discovery",
      p_name: "Projekt",
      p_sub: "milník s fixním rozsahem",
      p_body:
        "End-to-end dodávka pro definovanou sadu funkcí — web, API nebo mobilní výřez s předáním na staging.",
      p_li1: "Milníky a demo cyklus",
      p_li2: "Zdrojový repozitář + poznámky k nasazení",
      p_li3: "2 týdny oprav po spuštění",
      p_cta: "Vyžádat nabídku",
      r_name: "Retainer",
      r_sub: "měsíčně",
      r_body:
        "Průběžná kapacita na iterace, podporu v produkci a roadmapu s předvídatelnou dostupností.",
      r_li1: "Rezervované hodiny a SLA podle úrovně",
      r_li2: "Prioritní kanál",
      r_li3: "Měsíční review a plánování",
      r_cta: "Prodiskutovat retainer",
      pricing_foot:
        "Může platit DPH / místní daně. Finální cena je potvrzena písemně před začátkem práce. Přepočty z EUR na USD nebo CZK jsou orientační.",
      about_title: "O mně",
      about_lead:
        "Jsem full-stack vývojář a rád přebírám funkce od databáze po UI. Ať potřebujete nový produkt, refaktoring nebo průběžnou podporu, pracuji v malých, jasných iteracích, abyste vždy věděli, kde jsme.",
      about_li1: "Typově bezpečná API, testy tam, kde záleží, a dokumentace, která přežije předání",
      about_li2: "Webové stacky (např. React, Next.js, .NET) a pragmatická mobilní dodávka",
      about_li3: "Přímá komunikace — rozsah, kompromisy a časové rámce předem",
      mindset_title: "Technologický přístup",
      mindset_body:
        "Upřednostňuji „nudnou“ technologii tam, kde vyhrává, a sáhnu po správném nástroji, když to problém vyžaduje. Kódová báze by měla být měnitelná s jistotou — i pro vás.",
      portfolio_title: "Portfolio",
      portfolio_lead:
        "Osobní portfolio je postaveno na Next.js, TypeScript, Tailwind a dalším — ukázka struktury front-endu, animací a detailů.",
      portfolio_featured: "Vybraný projekt",
      portfolio_project: "Osobní portfolio",
      portfolio_body:
        "Interaktivní UI, ukázka projektů a kontakt — optimalizováno na přehlednost a výkon.",
      portfolio_repo: "Repozitář",
      portfolio_live: "Živá ukázka",
      contact_title: "Pojďme spolupracovat",
      contact_lead:
        "Napište o produktu, časové ose a stacku. Odpovím s upřímným vyhodnocením shody a dalšími kroky.",
      contact_reply: "Odpověď obvykle do jednoho pracovního dne.",
      footer_tag:
        "Full-stack vývoj a IT konzultace — od prvního náčrtu až po produkci.",
      footer_pricing: "Ceník",
      footer_github: "GitHub",
      footer_live: "Živé portfolio",
      footer_email: "E-mail",
      footer_rights: "Všechna práva vyhrazena.",
      notfound_meta_title: "404 — Peterdinis Solutions",
      notfound_meta_desc: "Požadovaná stránka neexistuje.",
      notfound_eyebrow: "404",
      notfound_title: "Stránka nenalezena",
      notfound_body: "Tato adresa na webu neexistuje.",
      notfound_hint: "Zkontrolujte URL nebo se vraťte na úvod.",
      notfound_back: "Zpět na úvod",
      notfound_contact: "Kontakt",
      error_meta_title: "Chyba — Peterdinis Solutions",
      error_meta_desc: "Při zpracování požadavku došlo k chybě.",
      error_eyebrow: "Chyba",
      error_title: "Něco se pokazilo",
      error_lead:
        "Při zpracování vašeho požadavku došlo k chybě. Zkuste to prosím znovu později.",
      error_request_label: "ID požadavku",
      error_try_home: "Zpět na úvod",
      error_contact: "Kontakt",
      error_dev_title: "Režim vývoje",
      error_dev_p1:
        "V prostředí Development uvidíte podrobnější informace o chybě v konzoli nebo na vývojovém serveru.",
      error_dev_p2:
        "Pro produkci nepovolujte Development — může odhalit citlivé údaje. Pro lokální ladění nastavte proměnnou ASPNETCORE_ENVIRONMENT na Development a restartujte aplikaci.",
      eyebrow_services: "Schopnosti",
      eyebrow_pricing: "Ceník",
      eyebrow_about: "Kdo jsem",
      eyebrow_portfolio: "Vybraná práce",
      eyebrow_contact: "Kontakt",
    },
    en: {
      meta_title: "Peterdinis Solutions — IT, web, and mobile development",
      meta_desc:
        "Peterdinis Solutions — full-stack IT, web, and mobile development. Custom software built for your business.",
      preloader: "Preparing your experience",
      nav_services: "Services",
      nav_pricing: "Pricing",
      nav_about: "About",
      nav_portfolio: "Portfolio",
      nav_contact: "Contact",
      nav_aria: "Primary navigation",
      theme_light: "Switch to light mode",
      theme_dark: "Switch to dark mode",
      theme_title_light: "Light mode",
      theme_title_dark: "Dark mode",
      select_group_aria: "Language and currency for prices",
      select_lang_aria: "Site language",
      select_curr_aria: "Currency for prices",
      select_lang_label: "Language",
      select_curr_label: "Currency",
      nav_menu: "Menu",
      scroll_top: "Back to top",
      skip: "Skip to content",
      hero_badge: "Availability for new projects",
      hero_h1_1: "IT, web, and mobile — end-to-end from a",
      hero_h1_2: "full-stack developer",
      hero_lead:
        "Peterdinis Solutions helps you ship reliable software: from architecture and APIs to polished web and mobile experiences.",
      hero_cta: "Start a conversation",
      hero_github: "Portfolio on GitHub",
      hero_stack: "Blazor · .NET · TypeScript · Cloud-ready delivery",
      services_title: "What I deliver",
      services_sub:
        "Practical engineering across the stack — from infrastructure to interfaces ready for production.",
      s1_title: "IT solutions",
      s1_body:
        "System design, integrations, cloud-ready backends, and maintainable codebases that grow with your team.",
      s1_li1: "APIs and data layers",
      s1_li2: "Setups that play nicely with DevOps",
      s2_title: "Web development",
      s2_body:
        "Fast, accessible SPAs and full-stack web apps — modern frameworks, solid UX, and performance.",
      s2_li1: "Responsive UI with accessibility in mind",
      s2_li2: "SSR / SPA where it makes sense",
      s3_title: "Mobile development",
      s3_body:
        "Cross-platform and native-leaning mobile work wired to APIs, with clarity and reliability first.",
      s3_li1: "iOS and Android targets",
      s3_li2: "Patterns that tolerate offline use",
      pricing_title: "Plans that scale with the project",
      pricing_sub:
        "Indicative rates — every engagement gets a clear quote once scope and timeline are aligned.",
      popular: "Popular",
      price_from: "from",
      d_name: "Discovery",
      d_sub: "one-off session",
      d_body:
        "A focused working session to clarify goals, risks, and the best technical direction.",
      d_li1: "Up to 90 minutes (video call)",
      d_li2: "Written summary and next steps",
      d_li3: "Indicative effort and budget estimate",
      d_cta: "Book discovery",
      p_name: "Project",
      p_sub: "milestone with fixed scope",
      p_body:
        "End-to-end delivery for a defined feature set — web, API, or mobile slice with staging handoff.",
      p_li1: "Milestones and demo cycles",
      p_li2: "Source repository + deployment notes",
      p_li3: "Two weeks of fixes after launch",
      p_cta: "Request a quote",
      r_name: "Retainer",
      r_sub: "monthly",
      r_body:
        "Ongoing capacity for iterations, production support, and roadmap work with predictable availability.",
      r_li1: "Reserved hours and SLA by tier",
      r_li2: "Priority channel",
      r_li3: "Monthly review and planning",
      r_cta: "Discuss a retainer",
      pricing_foot:
        "VAT / local taxes may apply. Final pricing is confirmed in writing before work begins. EUR to USD or CZK conversions are indicative.",
      about_title: "About me",
      about_lead:
        "I'm a full-stack developer who likes owning features from database to UI. Whether you need a new product, a refactor, or ongoing support, I work in small, clear iterations so you always know where we stand.",
      about_li1: "Type-safe APIs, tests where they matter, and documentation that survives handoff",
      about_li2: "Web stacks (e.g. React, Next.js, .NET) and pragmatic mobile delivery",
      about_li3: "Straight talk on scope, trade-offs, and timelines up front",
      mindset_title: "Technical mindset",
      mindset_body:
        "I prefer \"boring\" technology where it wins, and I reach for the right tool when the problem demands it. A codebase should be changeable with confidence — for you, too.",
      portfolio_title: "Portfolio",
      portfolio_lead:
        "A personal portfolio built with Next.js, TypeScript, Tailwind, and more — a showcase of front-end structure, motion, and craft.",
      portfolio_featured: "Featured project",
      portfolio_project: "Personal portfolio",
      portfolio_body:
        "Interactive UI, project highlights, and contact — tuned for clarity and performance.",
      portfolio_repo: "Repository",
      portfolio_live: "Live demo",
      contact_title: "Let's work together",
      contact_lead:
        "Tell me about the product, timeline, and stack. I'll reply with an honest fit assessment and next steps.",
      contact_reply: "Usually within one business day.",
      footer_tag:
        "Full-stack development and IT consulting — from first sketch to production.",
      footer_pricing: "Pricing",
      footer_github: "GitHub",
      footer_live: "Live portfolio",
      footer_email: "Email",
      footer_rights: "All rights reserved.",
      notfound_meta_title: "404 — Peterdinis Solutions",
      notfound_meta_desc: "The requested page does not exist.",
      notfound_eyebrow: "404",
      notfound_title: "Page not found",
      notfound_body: "This URL does not exist on the site.",
      notfound_hint: "Check the URL or return to the home page.",
      notfound_back: "Back to home",
      notfound_contact: "Contact",
      error_meta_title: "Error — Peterdinis Solutions",
      error_meta_desc: "Something went wrong while processing your request.",
      error_eyebrow: "Error",
      error_title: "Something went wrong",
      error_lead:
        "An error occurred while processing your request. Please try again later.",
      error_request_label: "Request ID",
      error_try_home: "Back to home",
      error_contact: "Contact",
      error_dev_title: "Development mode",
      error_dev_p1:
        "In Development you'll see more detailed error information in the console or on the dev server.",
      error_dev_p2:
        "Don't enable Development in production — it can expose sensitive data. For local debugging set ASPNETCORE_ENVIRONMENT to Development and restart the app.",
      eyebrow_services: "Capabilities",
      eyebrow_pricing: "Pricing",
      eyebrow_about: "Who I am",
      eyebrow_portfolio: "Selected work",
      eyebrow_contact: "Contact",
    },
  };

  function readLang() {
    try {
      var v = localStorage.getItem(LANG_KEY);
      if (v === "sk" || v === "cs" || v === "en") return v;
    } catch (e) {}
    var nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("cs")) return "cs";
    if (nav.startsWith("en")) return "en";
    return "sk";
  }

  function readCurrency() {
    try {
      var v = localStorage.getItem(CURR_KEY);
      if (v === "eur" || v === "usd" || v === "czk") return v;
    } catch (e) {}
    return "eur";
  }

  function setLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
    document.documentElement.lang = lang;
    applyStrings(lang);
    applyPrices(readCurrency(), lang);
    syncLocaleSelects(lang, readCurrency());
    updateSelectAria(lang);
    updateMeta(lang);
    refreshThemeChrome(lang);
  }

  function setCurrency(cur) {
    try {
      localStorage.setItem(CURR_KEY, cur);
    } catch (e) {}
    applyPrices(cur, readLang());
    syncLocaleSelects(readLang(), cur);
  }

  function localeFor(lang) {
    if (lang === "cs") return "cs-CZ";
    if (lang === "en") return "en-GB";
    return "sk-SK";
  }

  function formatMoney(eurAmount, currency, lang) {
    var loc = localeFor(lang);
    if (currency === "usd") {
      var usd = Math.round(eurAmount * EUR_TO_USD);
      return new Intl.NumberFormat(loc, {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(usd);
    }
    if (currency === "czk") {
      var czk = Math.round(eurAmount * EUR_TO_CZK);
      return new Intl.NumberFormat(loc, {
        style: "currency",
        currency: "CZK",
        maximumFractionDigits: 0,
      }).format(czk);
    }
    return new Intl.NumberFormat(loc, {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(eurAmount);
  }

  function applyStrings(lang) {
    var t = STRINGS[lang];
    if (!t) return;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && t[key]) el.textContent = t[key];
    });
    var nav = document.querySelector("nav[aria-label]");
    if (nav && t.nav_aria) nav.setAttribute("aria-label", t.nav_aria);
    var scrollTopBtn = document.getElementById("pds-scroll-top");
    if (scrollTopBtn && t.scroll_top) scrollTopBtn.setAttribute("aria-label", t.scroll_top);
  }

  function applyPrices(currency, lang) {
    var t = STRINGS[lang];
    if (!t) return;
    document.querySelectorAll("[data-i18n-price]").forEach(function (el) {
      var eur = parseFloat(el.getAttribute("data-eur"), 10);
      if (isNaN(eur)) return;
      var from = el.getAttribute("data-price-from") === "true";
      var formatted = formatMoney(eur, currency, lang);
      el.textContent = from ? t.price_from + " " + formatted : formatted;
    });
  }

  function updateMeta(lang) {
    var t = STRINGS[lang];
    if (!t) return;
    var path = (location.pathname || "").replace(/\/$/, "").toLowerCase();
    var meta = document.getElementById("pds-meta-desc");
    if (path === "/error") {
      if (t.error_meta_title) document.title = t.error_meta_title;
      if (meta && t.error_meta_desc) meta.setAttribute("content", t.error_meta_desc);
    } else if (path === "/not-found") {
      if (t.notfound_meta_title) document.title = t.notfound_meta_title;
      if (meta && t.notfound_meta_desc) meta.setAttribute("content", t.notfound_meta_desc);
    } else {
      if (t.meta_title) document.title = t.meta_title;
      if (meta && t.meta_desc) meta.setAttribute("content", t.meta_desc);
    }
  }

  function refreshThemeChrome(lang) {
    var t = STRINGS[lang];
    var btn = document.getElementById("pds-theme-toggle");
    if (!btn || !t) return;
    var dark = document.documentElement.classList.contains("dark");
    btn.setAttribute("aria-label", dark ? t.theme_light : t.theme_dark);
    btn.setAttribute("title", dark ? t.theme_title_light : t.theme_title_dark);
  }

  function syncLocaleSelects(lang, cur) {
    document.querySelectorAll(".pds-lang-select").forEach(function (el) {
      if (lang === "sk" || lang === "cs" || lang === "en") el.value = lang;
    });
    document.querySelectorAll(".pds-curr-select").forEach(function (el) {
      if (cur === "eur" || cur === "usd" || cur === "czk") el.value = cur;
    });
  }

  function updateSelectAria(lang) {
    var t = STRINGS[lang];
    if (!t) return;
    document.querySelectorAll("[data-locale-group]").forEach(function (grp) {
      if (t.select_group_aria) grp.setAttribute("aria-label", t.select_group_aria);
    });
    document.querySelectorAll(".pds-lang-select").forEach(function (el) {
      if (t.select_lang_aria) el.setAttribute("aria-label", t.select_lang_aria);
    });
    document.querySelectorAll(".pds-curr-select").forEach(function (el) {
      if (t.select_curr_aria) el.setAttribute("aria-label", t.select_curr_aria);
    });
  }

  function initLocaleSelects() {
    document.querySelectorAll(".pds-lang-select").forEach(function (el) {
      el.addEventListener("change", function () {
        var v = el.value;
        if (v === "sk" || v === "cs" || v === "en") setLang(v);
      });
    });
    document.querySelectorAll(".pds-curr-select").forEach(function (el) {
      el.addEventListener("change", function () {
        var v = el.value;
        if (v === "eur" || v === "usd" || v === "czk") setCurrency(v);
      });
    });
  }

  window.PDS_refreshThemeAria = function () {
    refreshThemeChrome(readLang());
  };

  function init() {
    var lang = readLang();
    document.documentElement.lang = lang;
    var cur = readCurrency();
    applyStrings(lang);
    applyPrices(cur, lang);
    updateMeta(lang);
    syncLocaleSelects(lang, cur);
    updateSelectAria(lang);
    initLocaleSelects();
    refreshThemeChrome(lang);
    window.PDS_setLanguage = setLang;
    window.PDS_setCurrency = setCurrency;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

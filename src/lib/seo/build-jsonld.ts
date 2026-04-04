import { SITE_URL, absoluteUrl } from "$lib/site";

const SITE_NAME = "Peterdinis Solutions";

export type JsonLdGraph = {
  "@context": string;
  "@graph": Record<string, unknown>[];
};

export function buildJsonLd(opts: {
  pageUrl: string;
  pageTitle: string;
  description: string;
  lang: string;
}): JsonLdGraph {
  const { pageUrl, pageTitle, description, lang } = opts;
  const url = pageUrl.startsWith("http") ? pageUrl : absoluteUrl(pageUrl === "" ? "/" : pageUrl);

  const inLang = lang === "cs" ? "cs-CZ" : lang === "en" ? "en-GB" : "sk-SK";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        url: SITE_URL,
        description,
        sameAs: ["https://github.com/peterdinis"],
        knowsLanguage: ["sk", "cs", "en"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description,
        inLanguage: [inLang],
        publisher: { "@id": `${SITE_URL}/#person` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: pageTitle,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        inLanguage: inLang,
      },
    ],
  };
}

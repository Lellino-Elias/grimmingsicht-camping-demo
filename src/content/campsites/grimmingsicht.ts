import type { CampsiteConfig } from "../types";

const IMG = "/campsites/grimmingsicht";

const grimmingsicht: CampsiteConfig = {
  name: "Camping Grimmingsicht",
  shortName: "Grimmingsicht",
  slug: "grimmingsicht",
  ort: "Bad Mitterndorf",
  region: "Steiermark",
  brandKind: "Camping & Appartement",
  regionLong: "Steirisches Salzkammergut · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Dein Stellplatz mit Blick auf den Grimming",
  claimEmphasis: "auf den Grimming",
  emailDetail: "euer Wintercamping direkt am Loipeneinstieg",
  intro:
    "Mitten im Steirischen Salzkammergut, mit Blick auf die Berge: ein familiär geführter Platz, der Sommer wie Winter geöffnet ist — zum Wandern, Radeln, Langlaufen und einfach Ankommen.",

  statement: {
    text: "Durch die zentrale Gasanlage wird Wintercampen bei uns zum echten Vergnügen — Loipe und Tauplitzalm liegen gleich vor der Tür.",
    emphasis: "zentrale Gasanlage",
  },

  pillars: [
    {
      title: "Sommer wie Winter offen",
      text: "Der Platz ist das ganze Jahr geöffnet — im Sommer grünes Wanderland, im Winter verschneit mit Bergblick.",
      image: { src: `${IMG}/gallery-8dbe598b32.webp`, alt: "Camping Grimmingsicht mit Wohnwagen vor schneebedeckten Bergen" },
    },
    {
      title: "Loipe vor der Tür",
      text: "Direkter Einstieg ins Langlaufnetz des Steirischen Salzkammerguts; die Tauplitzalm erreichst du mit dem Skibus in rund 20 Minuten.",
      image: { src: `${IMG}/gallery-54adc18f80.webp`, alt: "Verschneiter Campingplatz Grimmingsicht im Winter mit Bergpanorama" },
    },
    {
      title: "Wandern & Radeln",
      text: "Rund um Bad Mitterndorf warten Wiesen, Wälder und Radwege für jede Kondition — vom Familienradler bis zur Bergtour.",
      image: { src: `${IMG}/gallery-aa2c950f03.webp`, alt: "Wohnwagen unter Bäumen am Camping Grimmingsicht im Sommer" },
    },
  ],

  usps: [
    "Ganzjährig geöffnet",
    "Stellplätze mit Strom",
    "Warmwasser inklusive",
    "Haustiere willkommen",
    "Zentrale Gasanlage",
    "Loipe & Tauplitzalm nah",
  ],

  trust: {
    heading: "Darauf ist am Grimmingsicht Verlass",
    headingEmphasis: "Verlass",
    intro:
      "Ein familiär geführter Platz mit zentraler Gasanlage, ebenen Stellplätzen und kurzen Wegen — warmes Wasser inklusive, deine Haustiere am Campingplatz herzlich willkommen.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-2d6424871f.webp`, alt: "Luftaufnahme von Camping Grimmingsicht mit Stellplätzen und Bergkulisse" },
  },

  breather: {
    image: { src: `${IMG}/gallery-7dcf948dff.webp`, alt: "Luftbild des Campingplatzes Grimmingsicht zwischen Wiesen und Bergen" },
    line: "Ländliche Ruhe, Berge ringsum — mitten im Steirischen Salzkammergut.",
  },

  camping: {
    heading: "Dein Platz in Bad Mitterndorf",
    intro:
      "Ebene Wiesen- und Schotterplätze mit Strom, warmes Wasser ohne Münzen und ein Sandplatz für laue Abende — Camping, das Sommer wie Winter funktioniert.",
    features: [
      {
        title: "Sandplatz & laue Abende",
        text: "Der Sandplatz fängt die Abendsonne ein — der ideale Ort, um einen Campingtag gemütlich ausklingen zu lassen.",
        image: { src: `${IMG}/gallery-826c7f406e.webp`, alt: "Sandplatz am Camping Grimmingsicht im Abendlicht" },
      },
      {
        title: "Ebene Stellplätze mit Strom",
        text: "Großzügige, ebene Plätze mit Stromanschluss — für Wohnwagen und Wohnmobil bis 8 Meter Länge.",
        image: { src: `${IMG}/gallery-360acb5d86.webp`, alt: "Luftbild der ebenen Stellplätze am Camping Grimmingsicht" },
      },
      {
        title: "Mitten im grünen Talboden",
        text: "Weite Wiesen, Bäume und Bergblick: der Platz liegt ruhig am Ortsrand von Bad Mitterndorf.",
        image: { src: `${IMG}/gallery-067ee49b9c.webp`, alt: "Luftaufnahme der Wohnwagen-Stellplätze im grünen Talboden" },
      },
      {
        title: "Winter im Salzkammergut",
        text: "Wenn Schnee fällt, wird der Platz zum Ausgangspunkt für Loipe, Winterwanderung und Pferdeschlittenfahrt.",
        image: { src: `${IMG}/gallery-8d5835caf3.webp`, alt: "Verschneites Bad Mitterndorf mit Kirchturm im Winter" },
      },
      {
        title: "Ganzjährig geöffnet",
        text: "Sommer wie Winter willkommen — Familie Bakker empfängt dich das ganze Jahr über persönlich.",
        image: { src: `${IMG}/gallery-58ff86392a.webp`, alt: "Eingangsschild von Camping Grimmingsicht mit Bergblick" },
      },
      {
        title: "Ländliche Ruhe",
        text: "Frische Bergluft, das Plätschern klarer Bäche und stille Wälder — Erholung für Jung und Alt.",
        image: { src: `${IMG}/gallery-2d8d47cc3c.webp`, alt: "Luftbild von Bad Mitterndorf mit Wiesen und Bergen" },
      },
    ],
  },

  mobilheime: {
    heading: "Lieber fest gemietet?",
    intro:
      "Kein eigener Wohnwagen? Miete dich in unseren Mietwohnwagen oder das Appartement ein — gemütlich eingerichtet und das ganze Jahr buchbar.",
    items: [
      {
        name: "Mietwohnwagen",
        kind: "bis 5 Personen",
        text: "Voll ausgestatteter Mietwohnwagen für max. 5 Personen (4 Erwachsene), inklusive Strom — das ganze Jahr buchbar. Wochenpreis.",
        image: { src: `${IMG}/gallery-2a4f96e94b.webp`, alt: "Sitzecke im Mietwohnwagen am Camping Grimmingsicht" },
        priceFrom: 490,
        features: ["bis 5 Personen", "Inkl. Strom", "7 Nächte"],
      },
      {
        name: "Appartement",
        kind: "6–8 Personen",
        text: "Modern renoviertes Appartement mit 3–4 Doppelzimmern für bis zu 8 Personen — ideal für Familien und Gruppen. Wochenpreis.",
        image: { src: `${IMG}/accommodation-2c63963e95.webp`, alt: "Essbereich im Appartement von Camping Grimmingsicht" },
        priceFrom: 820,
        features: ["bis 8 Personen", "3–4 Doppelzimmer", "Rauchfrei"],
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Bad Mitterndorf",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Salzkammergut-Bundesstraße B 145: von Trautenfels kommend bei der Billa links, von Bad Ischl nach der OMV-Tankstelle rechts — nach rund 200 m bist du da.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Bad Mitterndorf-Heilbrunn an der Salzkammergutbahn; die letzten Kilometer per Taxi oder Abholung nach Absprache.",
      },
      {
        title: "Im Winter",
        text: "Zur Tauplitzalm bringt dich der Skibus von Bad Mitterndorf in rund 20 Minuten ins Skigebiet.",
      },
    ],
  },

  galerie: {
    heading: "Ein Blick auf den Platz",
    headingEmphasis: "Blick",
    intro: "Vom Luftbild über die Stellplätze bis ins Appartement — ein paar Eindrücke von Camping Grimmingsicht.",
    tag: "Sommer & Winter",
    moreCount: 40,
    images: [
      { src: `${IMG}/gallery-99babadc71.webp`, alt: "Luftaufnahme des Campingplatzes mit Bach und Bergen" },
      { src: `${IMG}/gallery-2505962bd6.webp`, alt: "Wohnbereich im Appartement von Camping Grimmingsicht" },
      { src: `${IMG}/gallery-a3326c4cf4.webp`, alt: "Küche im Mietwohnwagen am Camping Grimmingsicht" },
      { src: `${IMG}/accommodation-01e37a27e0.webp`, alt: "Gemütlicher Wohnraum im Appartement" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz",
    headingEmphasis: "deinen Platz",
    intro: "Wähle Zeitraum und Personen — Familie Bakker meldet sich persönlich mit deiner Verfügbarkeit und einem genauen Preis.",
    pricesArePlaceholder: false,
    priceNote: "Richtwerte: Stellplatz Hauptsaison (Platz + 2 Erwachsene); Miet-Einheiten = Wochenpreis ÷ 7 — zzgl. Kurtaxe € 3 & Müllgebühr € 0,40 p. P./Nacht.",
    highlight: { title: "Ganzjährig geöffnet", text: "Sommer wie Winter — dank zentraler Gasanlage auch bei Schnee gemütlich warm." },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 25, perExtraGuest: 9 },
      { id: "mietwohnwagen", label: "Mietwohnwagen", perNight: 70 },
      { id: "appartement", label: "Appartement", perNight: 117 },
    ],
  },

  kontakt: {
    tel: "+43 (0) 3623 2985",
    telHref: "tel:+4336232985",
    mail: "camping@grimmingsicht.at",
    adresse: "Bad Mitterndorf 338 · 8983 Bad Mitterndorf · Steiermark",
    coords: { lat: 47.5551, lng: 13.92243 },
  },

  languages: ["DE", "NL", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Galerie", href: "#galerie" },
    ]},
    { label: "Mieten", href: "#mobilheime" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default grimmingsicht;

// ─────────────────────────────────────────────────────────────────
//  T2P Configuration — the only file you need to edit
// ─────────────────────────────────────────────────────────────────

const T2P_CONFIG = {

  // ── Access ────────────────────────────────────────────────────
  // Admins — see everything, audit log, all students
  superadmins: ["Admin"],

  // Staff list (auto-sorted alphabetically)
  staff: [
    "Chauncey", "Emily", "Jenna K.", "Jenna P.",
    "Jesse", "Liam", "Nathan",
    "Parthvi"
  ].sort(),

  // ── Level → Guide assignments ─────────────────────────────────
  // Students in each level are pre-assigned these guides by default.
  // Individual overrides can still be made in the editor.
  levelGuides: {
    LL: ["Jenna K.", "Jesse"],
    L1: ["Parthvi", "Nathan"],
    L2: ["Jenna P."],
    MS: ["Emily", "Chauncey"],
  },

  // ── Notifications ─────────────────────────────────────────────
  notifications: {
    enabled: true,
    emailjsServiceId:  "YOUR_SERVICE_ID",
    emailjsTemplateId: "YOUR_TEMPLATE_ID",
    emailjsPublicKey:  "YOUR_PUBLIC_KEY",
    notifyEmail: "zara.raheem@alpha.school",
    notifyName:  "Zara",
  },

  // ── Checkpoints ───────────────────────────────────────────────
  checkpoints: [
    { key: "w1", label: "Week 1 Baseline"      },
    { key: "w3", label: "Week 3: Checkpoint 1" },
    { key: "w5", label: "Week 5: Checkpoint 2" },
    { key: "w7", label: "Week 7: T2P"          },
  ],

  // ── S5 Workshops ──────────────────────────────────────────────
  defaultWorkshops: [
    "Mission Laika",
    "Innovation Day 1",
    "Grit Day",
    "Innovation Day 2",
    "Island Standard",
  ],

  // ── Students ──────────────────────────────────────────────────
  // Fields:
  //   n          : full name
  //   l          : "LL", "L1", "L2", or "MS"
  //   note       : optional note shown on card
  //   newS5      : true = new this session (hides "no patches" message)
  //   patchUrl   : link to their historic patch record (shown in editor)
  //   guides     : optional override — leave out to use levelGuides above
  students: [

    // ── LL ──────────────────────────────────────────────────────
    { n: "Colm Bowen",               l: "LL" },
    { n: "Fiadh Hogan",              l: "LL", note: "Joined S5" },
    { n: "Harper Lembo",             l: "LL" },
    { n: "Hildy (Alice) Grimm",      l: "LL" },
    { n: "Oliver McLeod",            l: "LL", note: "Joined S4" },

    // ── L1 ──────────────────────────────────────────────────────
    { n: "Ada Cone",                 l: "L1" },
    { n: "Blake Richheimer",         l: "L1" },
    { n: "Conan Hogan",              l: "L1" },
    { n: "Harvey Caulin",            l: "L1", note: "Joined S4" },
    { n: "Lola Propp",               l: "L1" },
    { n: "London Politi",            l: "L1" },
    { n: "Max Rzepecki",             l: "L1", note: "Moved to PR after S2", inactive: true },
    { n: "Oleander Poulson",         l: "L1", note: "Joined S4" },
    { n: "Raika Ackman",             l: "L1" },
    { n: "Van McDavid",              l: "L1" },
    { n: "Vasilios Giannopoulos",    l: "L1", note: "Joined S2" },

    // ── L2 ──────────────────────────────────────────────────────
    { n: "Annabelle Lembo",          l: "L2" },
    { n: "Casper White",             l: "L2", note: "Joined S4" },
    { n: "Catherine Henry",          l: "L2", note: "Joined S3" },
    { n: "Hunter Taback",            l: "L2", note: "Joined S3" },
    { n: "Jaya Vora",                l: "L2" },
    { n: "Liv Brodsky",              l: "L2" },
    { n: "Lucian McDavid",           l: "L2" },
    { n: "Nicholas Sidea",           l: "L2", note: "Joined S4" },
    { n: "Pax Ovitz",                l: "L2" },

    // ── MS ──────────────────────────────────────────────────────
    { n: "Ayla White",               l: "MS", note: "Joined S4" },
    { n: "Eli Slifka",               l: "MS" },
    { n: "Emma Slifka",              l: "MS" },
    { n: "Georgia Flaherty",         l: "MS", note: "Joined S4" },
    { n: "Glen-Eric Ostrander",      l: "MS" },
    { n: "Grace Lefkowitz",          l: "MS", note: "Joined S5", newS5: true },
    { n: "Leah Abramovich",          l: "MS" },
    { n: "Leonie Weernink",          l: "MS" },
    { n: "Max Brodsky",              l: "MS", note: "Joined S3" },
    { n: "Mireille (Mimi) Prospere", l: "MS" },
    { n: "Penelope Carrington",      l: "MS" },
    { n: "Yorgos Weernink",          l: "MS", note: "Joined S4" },

  ]
};

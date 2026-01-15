// Edit this file to customize projects and links.
// The site reads PROJECTS + SOCIAL and renders them automatically.

const SOCIAL = [
  // Example:
  // { label: "GitHub", href: "https://github.com/your-username" },
  // { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile/" },
];

const PROJECTS = [
  // CI&T Philippines
  {
    name: "DreamLab",
    company: "CI&T Philippines",
    platform: "Android",
    tags: ["Research", "Crowdsourcing"],
    description:
      "A specialist crowdsourcing app developed by Vodafone Foundation that accelerates research by using the processing power of dormant smartphones while users charge them at night.",
    links: [
      { label: "Info", href: "https://www.vodafone.com/vodafone-foundation/focus-areas/dreamlab-app", primary: true },
    ],
  },
  {
    name: "More to Explore",
    company: "CI&T Philippines",
    platform: "Android",
    tags: ["Travel", "Parks", "Maps"],
    description:
      "Guide app for Victoria’s forests: track, trail, and site details, directions, local map and GPS guidance, plus track open/close status and facilities.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=au.gov.vic.ffm.mte.android&hl=en", primary: true },
    ],
  },

  // Make Technology Inc.
  {
    name: "FyDa",
    company: "Make Technology Inc.",
    platform: "Web",
    tags: ["Gamification", "Entertainment"],
    description:
      "Interactive entertainment platform for comparing short videos/images and predicting popularity; correct guesses reward users with fyCoin (Φ).",
    links: [{ label: "Website", href: "https://fyda-production.azurewebsites.net/", primary: true }],
  },
  {
    name: "Pickup Coffee",
    company: "Make Technology Inc.",
    platform: "React Native",
    tags: ["E-commerce", "Ordering"],
    description:
      "Order-ahead coffee app: browse menu, select branch and pickup time, and get notified when the order is ready.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.pickupcoffee.pickupcoffee", primary: true },
    ],
  },
  {
    name: "CareSpan",
    company: "Make Technology Inc.",
    platform: "React Native",
    tags: ["Healthcare", "Appointments"],
    description:
      "Digital primary care app for member patients: schedule doctor appointments, get reminders, and access virtual consultation experience.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.carespanmobileapp.patient", primary: true },
    ],
  },

  // TwistResources Inc.
  {
    name: "On-The-House",
    company: "TwistResources Inc.",
    platform: "Web",
    tags: ["Real Estate"],
    description:
      "Real-estate research site for buying, selling, or renting: suburb insights, market trends, property values, and agent discovery.",
    links: [{ label: "Website", href: "https://www.onthehouse.com.au/", primary: true }],
  },
  {
    name: "CAV Mobile",
    company: "TwistResources Inc.",
    platform: "React Native",
    tags: ["N/A"],
    description: "Details not provided in the portfolio document.",
    links: [],
  },

  // Technology Elite Inc.
  {
    name: "OneFlare (Business)",
    company: "Technology Elite Inc.",
    platform: "Android",
    tags: ["Marketplace", "Leads"],
    description:
      "Business app to connect, quote, and chat with customers; job matching engine delivers leads based on business preferences.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=au.com.oneflare.businessapp&hl=en_AU", primary: true },
    ],
  },
  {
    name: "OneFlare (Customer)",
    company: "Technology Elite Inc.",
    platform: "Android",
    tags: ["Marketplace", "Services"],
    description:
      "Customer app to find local professionals, compare quotes, and manage jobs—from home renovations to personal services.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=au.com.oneflare.androidapp&hl=en", primary: true },
    ],
  },

  // McVean Pacific Intl. Offshoring
  {
    name: "GoldGramCoin",
    company: "McVean Pacific Intl. Offshoring",
    platform: "Android",
    tags: ["Crypto", "Fintech"],
    description:
      "Digital token linked to allocated 99.99% fine gold held in secure storage.",
    links: [{ label: "Info", href: "https://www.crunchbase.com/organization/goldgram-pte-ltd", primary: true }],
  },
  {
    name: "SBI Coin (SBI VC Trade)",
    company: "McVean Pacific Intl. Offshoring",
    platform: "Android",
    tags: ["Crypto", "Exchange"],
    description:
      "Crypto asset (virtual currency) app provided by SBI Group (features referenced in portfolio).",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.taotao_ex.android&hl=fil", primary: true },
    ],
  },
  {
    name: "Digital Asset Co",
    company: "McVean Pacific Intl. Offshoring",
    platform: "Web",
    tags: ["Blockchain", "Capital Markets"],
    description:
      "Blockchain network for regulated institutions to grow their capital markets business.",
    links: [{ label: "Website", href: "https://www.digitalasset.com/", primary: true }],
  },

  // Cloudstaff Inc.
  {
    name: "Cloudstaff Tap",
    company: "Cloudstaff Inc.",
    platform: "Android",
    tags: ["Productivity", "Workflow"],
    description:
      "“Design your own workflow” tool built for Cloudstaff clients with outsourced team members.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.cloudstaff.tap3&hl=en", primary: true },
    ],
  },
  {
    name: "Cloudstaff Rewards",
    company: "Cloudstaff Inc.",
    platform: "Android",
    tags: ["HR", "Rewards"],
    description:
      "Employee rewards app to reinforce desired behaviors, motivate employees, and improve performance.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.cloudstaff.rewardsv2&hl=en", primary: true },
    ],
  },
  {
    name: "Cloudstaff BoardRoom",
    company: "Cloudstaff Inc.",
    platform: "Android",
    tags: ["Scheduling"],
    description:
      "Room scheduling (meeting room) app (details not provided in the portfolio document).",
    links: [],
  },

  // Incubix Technologies
  {
    name: "SerbisU",
    company: "Incubix Technologies",
    platform: "Android",
    tags: ["Services", "Marketplace"],
    description: "Connecting service provider and customer.",
    links: [{ label: "Facebook", href: "https://www.facebook.com/SerbisuApp/?locale=tr_TR&_rdr", primary: true }],
  },
  {
    name: "MarinoDaily",
    company: "Incubix Technologies",
    platform: "Android",
    tags: ["News"],
    description: "News portal app for seafarers.",
    links: [{ label: "Download", href: "https://apkpure.net/marino-daily/com.marinodailyapp/download", primary: true }],
  },
  {
    name: "GigSplash",
    company: "Incubix Technologies",
    platform: "Android",
    tags: ["Events", "Music"],
    description: "Connecting local bands and event organizers/managers.",
    links: [{ label: "Facebook", href: "https://www.facebook.com/gigsplashcom/", primary: true }],
  },
  {
    name: "TeaChat",
    company: "Incubix Technologies",
    platform: "Android",
    tags: ["Education"],
    description: "Connecting teacher and student (details not provided in the portfolio document).",
    links: [],
  },
  {
    name: "BarangayWiFi",
    company: "Incubix Technologies",
    platform: "Android",
    tags: ["Security"],
    description: "Security app for homeowner, guard and admin (details not provided in the portfolio document).",
    links: [],
  },
];

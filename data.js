// Update SOCIAL + PROJECTS as needed. Experience timeline is also driven by this file.

const SOCIAL = [
  // { label: "GitHub", href: "https://github.com/kevinv03" },
  // { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile/" },
];

const EXPERIENCE = [
  {
    role: "Freelance Mobile Application Developer",
    company: "Big Cloud Services PH",
    location: "Alabang, Muntinlupa, Manila",
    dates: "Sep 2025 – Dec 2025",
    bullets: [
      "Developed a kiosk-style Android vending machine app using Kotlin + Jetpack Compose, integrated with Spring Boot backend for products, inventory, and transactions.",
      "Implemented secure online/offline payment flows (QR payments, caching with sync) and hardware integration to trigger vending operations.",
      "Integrated third-party AI recommendation engine for personalized product suggestions.",
    ],
  },
  {
    role: "Senior Mobile Application Developer",
    company: "CI&T Philippines",
    location: "Cubao, Quezon City",
    dates: "Aug 2024 – Aug 2025",
    bullets: [
      "Led development of flagship apps (DreamLab, More-to-Explore) using Kotlin, Jetpack Compose, and Android SDK.",
      "Applied Clean Architecture + MVI to improve maintainability and scalability.",
      "Enhanced stability and performance using optimization + Firebase Crashlytics monitoring.",
      "Collaborated in Agile sprints; supported QA and Play Store releases.",
    ],
  },
  {
    role: "Senior Mobile Application Developer",
    company: "Make Technology Inc.",
    location: "Makati City",
    dates: "Mar 2022 – Apr 2024",
    bullets: [
      "Delivered FyDa, Pickup Coffee, and CareSpan using Kotlin/Compose and React Native.",
      "Combined Android + React Native expertise to accelerate cross-platform delivery.",
      "Mentored junior developers; enforced coding standards and reduced technical debt.",
      "Implemented documentation and CI/CD pipelines for reliable deployments.",
    ],
  },
  {
    role: "Freelance Mobile Application Developer",
    company: "Lilypad Solutions Inc.",
    location: "",
    dates: "Sep 2022 – Apr 2023",
    bullets: [
      "Built GabayPH Android app using MVP architecture with Retrofit-based REST API integration.",
      "Guided junior developers through Android best practices and improved code quality.",
      "Partnered with backend developers for seamless API/service integration.",
    ],
  },
  {
    role: "Agile Software Engineer",
    company: "TwistResources Inc.",
    location: "Clark, Pampanga",
    dates: "Jul 2021 – Feb 2022",
    bullets: [
      "Developed On-The-House (real estate) and CAV-mobile (React Native) apps.",
      "Introduced JUnit and Mockito to increase coverage and improve stability.",
      "Supported sprint planning and delivery of Android features.",
    ],
  },
  {
    role: "Android Application Developer",
    company: "Technology Elite Inc.",
    location: "Clark, Pampanga",
    dates: "Aug 2020 – Jun 2021",
    bullets: [
      "Delivered OneFlare business and customer apps in Kotlin with MVVM and Material Design.",
      "Managed Play Store releases and improved delivery via CI/CD.",
      "Conducted code reviews and mentored peers to raise development standards.",
    ],
  },
  {
    role: "Android Developer",
    company: "McVean Pacific Intl. Offshoring",
    location: "",
    dates: "2019 – 2020",
    bullets: [
      "Developed secure cryptocurrency apps using MVP/MVVM with Retrofit and DI (Dagger).",
    ],
  },
  {
    role: "Software Engineer",
    company: "Cloudstaff Inc.",
    location: "",
    dates: "2017 – 2019",
    bullets: [
      "Built enterprise apps (Tap, Rewards, BoardRoom) in Kotlin to improve internal productivity.",
    ],
  },
  {
    role: "Android Developer",
    company: "Incubix Technologies",
    location: "",
    dates: "2014 – 2017",
    bullets: [
      "Delivered Java-based consumer apps (SerbisU, MarinoDaily, TeaChat, BarangayWiFi).",
    ],
  },
];

const PROJECTS = [
  {
    name: "DreamLab",
    company: "CI&T Philippines",
    platform: "Android",
    tags: ["Research", "Crowdsourcing"],
    description:
      "A specialist crowdsourcing app developed by Vodafone Foundation that accelerates research using the processing power of dormant smartphones while users charge them at night.",
    links: [
      { label: "Overview", href: "https://www.vodafone.com/vodafone-foundation/focus-areas/dreamlab-app", primary: true },
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
      "Digital primary care app: schedule doctor appointments, receive reminders, and access virtual consultation experience.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.carespanmobileapp.patient", primary: true },
    ],
  },
  {
    name: "On-The-House",
    company: "TwistResources Inc.",
    platform: "Web",
    tags: ["Real Estate"],
    description:
      "Real-estate research site: suburb insights, market trends, property values, and agent discovery.",
    links: [{ label: "Website", href: "https://www.onthehouse.com.au/", primary: true }],
  },
  {
    name: "CAV Mobile",
    company: "TwistResources Inc.",
    platform: "React Native",
    tags: ["N/A"],
    description: "Details not provided publicly in the portfolio document.",
    links: [],
  },
  {
    name: "OneFlare (Business)",
    company: "Technology Elite Inc.",
    platform: "Android",
    tags: ["Marketplace", "Leads"],
    description:
      "Business app to connect, quote and chat with customers; job matching engine delivers leads based on business preferences.",
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
      "Customer app to find local professionals, compare quotes, and manage jobs.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=au.com.oneflare.androidapp&hl=en", primary: true },
    ],
  },
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
    description: "Room scheduling (meeting room) app (details not provided in the portfolio document).",
    links: [],
  },
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

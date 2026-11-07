export const SITE = {
  website: "https://opalski-field-notes.netlify.app/", // single source for the site URL; change here when the domain changes
  author: "Mark Opalski",
  profile: "https://opalski-field-notes.netlify.app/about/",
  desc: "Short case studies on how systems, interfaces, and organizations succeed or fail depending on whether they were built around how people actually think, decide, and coordinate.",
  title: "Field Notes",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/MarkOpalski/inkyfingers/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/New_York", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

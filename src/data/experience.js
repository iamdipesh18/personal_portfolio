/*
  Experience data, mirrored from the master CV.
  - track: "software" | "data" | "media" (used by the filter on /experience)
  - featured: shown on the home page timeline
*/
export const experienceTracks = [
  { id: "all", label: "All" },
  { id: "software", label: "Software" },
  { id: "data", label: "Data & Operations" },
  { id: "media", label: "Media" },
];

export const experiences = [
  {
    period: "Sep 2026 — Present",
    role: "Data Entry Operator",
    company: "National Statistics Office (NSO), Nepal",
    employment: "Contractual",
    location: "Nepal",
    track: "data",
    current: true,
    featured: false,
    summary:
      "Entering National Economic Census 2082 data from paper-based census records into the designated digital data-entry system.",
    highlights: [
      "Enter data collected through the National Economic Census 2082 into the designated digital data-entry system.",
      "Transcribe information from collected paper-based census records into the required electronic format.",
      "Follow established data-entry procedures and organizational requirements while processing assigned records.",
    ],
    technologies: ["Data Entry", "Data Accuracy", "Census Records"],
  },
  {
    period: "May 2026 — Present",
    role: "Data Annotator",
    company: "CloudFactory",
    employment: "Part-time",
    location: "Remote",
    track: "data",
    current: true,
    featured: false,
    summary:
      "Performing guideline-based data annotation and labeling with a focus on accuracy and consistency.",
    highlights: [
      "Perform data annotation and labeling tasks according to project-specific guidelines and quality requirements.",
      "Review assigned data carefully and apply consistent labeling decisions based on provided instructions.",
      "Maintain accuracy, consistency, and attention to detail while working with structured annotation workflows.",
    ],
    technologies: ["Data Annotation", "Data Labeling", "Quality Guidelines"],
  },
  {
    period: "Apr 2026 — Jun 2026",
    role: "Enumerator — National Economic Census 2082",
    company: "National Statistics Office (NSO), Nepal",
    employment: "Contractual",
    location: "Beni, Myagdi",
    track: "data",
    current: false,
    featured: false,
    summary:
      "Government-appointed enumerator collecting economic and establishment data through field enumeration using official paper-based census forms.",
    highlights: [
      "Collected economic and establishment-related information through field enumeration using official paper-based census forms.",
      "Recorded information according to prescribed census questionnaires and field procedures.",
      "Worked directly with assigned establishments and maintained accuracy while collecting and recording field information.",
    ],
    technologies: ["Data Collection", "Field Enumeration", "Documentation"],
  },
  {
    period: "Feb 2026 — Jun 2026",
    role: "Junior Flutter Developer",
    company: "MarginTop Solutions",
    employment: "Full-time",
    location: "Kathmandu, Nepal",
    track: "software",
    current: false,
    featured: true,
    summary:
      "Built and maintained features for production Flutter apps including JFT & Skill Mock Test and Striide. Implemented Figma designs, integrated REST APIs, and worked with a Laravel backend team.",
    highlights: [
      "Developed and maintained Flutter features for the Japan Foundation Test (JFT) learning platform.",
      "Implemented responsive mobile interfaces and translated application requirements and UI designs into reusable Flutter components.",
      "Integrated REST APIs and handled asynchronous operations, JSON data, application states, and API-related error scenarios.",
      "Worked with structured application architecture and state management while maintaining readable and maintainable code.",
      "Used Postman and Hoppscotch for API testing, debugging, and verification of application-backend integrations.",
      "Collaborated with backend, QA, and design team members during feature development, testing, code review, and release activities.",
    ],
    technologies: ["Flutter", "Dart", "Provider", "REST APIs", "Postman", "Hoppscotch", "Git", "Figma"],
  },
  {
    period: "Feb 2026 — Mar 2026",
    role: "Video Editor / Social Media Content Assistant",
    company: "Independent Client Work",
    employment: "Freelance",
    location: "Nepal",
    track: "media",
    current: false,
    featured: false,
    summary:
      "Edited short-form social-media videos in CapCut for client content and digital publishing.",
    highlights: [
      "Edited short-form social-media videos using CapCut for client content and digital publishing.",
      "Handled video trimming, transitions, captions, audio synchronization, pacing, and basic visual effects.",
      "Prepared and formatted short-form video content for social-media platforms.",
      "Adapted video presentation and editing style according to content requirements and publishing formats.",
    ],
    technologies: ["CapCut", "Video Editing", "Social Media"],
  },
  {
    period: "May 2025 — Aug 2025",
    role: "Flutter Developer Intern",
    company: "BentRay Technologies",
    employment: "Internship",
    location: "Kathmandu, Nepal",
    track: "software",
    current: false,
    featured: true,
    summary:
      "Developed mobile interfaces in Flutter for foreign employment-related platforms and integrated them with PHP-based backend APIs.",
    highlights: [
      "Developed and maintained mobile application interfaces using Flutter and Dart for foreign employment-related digital platforms.",
      "Implemented responsive layouts and reusable UI components based on application requirements and design specifications.",
      "Integrated application interfaces with PHP-based backend APIs and handled asynchronous data updates.",
      "Assisted with debugging, UI improvements, integration issues, and maintaining consistent application behavior across supported devices.",
    ],
    technologies: ["Flutter", "Dart", "PHP APIs", "Git", "Firebase"],
  },
];

// Shown on /experience under "Beyond Code"
export const contentCreation = {
  name: "Dipverse18",
  handle: "@dipverse18",
  role: "Independent Digital Content Creator",
  period: "Ongoing",
  platforms: ["YouTube", "Instagram", "TikTok"],
  highlights: [
    "Create and publish travel, meme, and short-form reel content across personal digital platforms.",
    "Plan, edit, and prepare videos using CapCut, including trimming, transitions, captions, audio synchronization, pacing, and basic effects.",
    "Adapt video formats and presentation for YouTube, Instagram, and TikTok audiences.",
  ],
};

export interface AppPrivacyData {
  id: string;
  aliases?: string[];
  policyUrl?: string;
  termsUrl?: string;
  name: string;
  category: string;
  platform: string;
  stores: string[];
  storeUrl?: string;
  lastUpdated: string;
  summary: string;
  collectsPersonalData: boolean;
  collectsAnalytics: boolean;
  hasInAppPurchases: boolean;
  requiresInternet: boolean;
  localDataStored: string[];
  permissionsDescription: string;
  contactEmail: string;
  notes?: string;
}

export const appsPrivacyList: AppPrivacyData[] = [
  {
    id: 'cosmos-explorer',
    aliases: [
      'cosmos-explorer-3d',
      'cosmos-android',
      'com.devephotoncosmosapp',
      'playstore'
    ],
    name: 'Cosmos Explorer',
    category: 'Interactive 3D Solar System Simulation & Space Exploration',
    platform: 'Android (Google Play Store)',
    stores: ['Google Play Store'],
    lastUpdated: 'November 18, 2026',
    summary:
      'Cosmos Explorer is an interactive 3D solar system simulation and space exploration app for Android. It operates strictly locally on your device with zero personal data collection, zero telemetry, and zero tracking.',
    collectsPersonalData: false,
    collectsAnalytics: false,
    hasInAppPurchases: true,
    requiresInternet: false,
    localDataStored: [
      'Simulation speed, orbital time scales, and celestial camera bookmarks',
      'Graphics quality, shader details, and power-saving frame rate limits',
      'Narrative space stories and expedition progression saves (stored in local device sandbox via PlayerPrefs/JSON)',
      'Gyroscope and accelerometer real-time parallax tilt data (processed in volatile device RAM only)'
    ],
    permissionsDescription:
      'Cosmos Explorer requests standard Android permissions strictly for on-device features: Gyroscope and Accelerometer sensors to enable responsive tilt-reactive parallax effects (processed in volatile memory and never recorded or transmitted), SET_WALLPAPER to render the real-time 3D solar system as your live wallpaper if enabled, and Google Play Billing (BILLING) for optional feature and story unlocks securely managed by Google Play.',
    contactEmail: 'devphotonsupport@gmail.com',
    notes: 'Package ID: com.devephotoncosmosapp'
  },
  {
    id: 'cosmic-eye',
    aliases: [
      'cosmic-eye-live-interactive-3d-wallpaper',
      'cosmic-eye-wallpaper',
      'cosmos-eye',
      '9p21crl12g5s'
    ],
    name: 'Cosmic Eye Live Interactive 3D Wallpaper',
    category: 'Interactive 3D Live Wallpaper & Desktop Visualizer',
    platform: 'Microsoft Windows (Windows 10 / 11)',
    stores: ['Microsoft Store'],
    storeUrl: 'https://apps.microsoft.com/detail/9p21crl12g5s?hl=en-US&gl=IN',
    lastUpdated: 'September 21, 2026',
    summary:
      'Cosmic Eye Live Interactive 3D Wallpaper operates strictly locally on your Windows PC. It does not collect, store, transmit, or sell any personal data, telemetry, or device identifiers.',
    collectsPersonalData: false,
    collectsAnalytics: false,
    hasInAppPurchases: false,
    requiresInternet: false,
    localDataStored: [
      'Display resolution & target monitor preferences (for multi-display setups)',
      'Graphics quality, particle density, and shader presets',
      'Target frame rate limit (FPS cap) and performance power-saving toggles',
      'Local interaction sensitivity and camera view settings'
    ],
    permissionsDescription:
      'The application runs as an interactive desktop background on Windows. It processes local cursor movement solely in volatile memory (RAM) in real time to render responsive 3D visuals. It never monitors keystrokes, records screens, or tracks user behavior.',
    contactEmail: 'devphotonsupport@gmail.com',
    notes: 'Microsoft Store ID: 9p21crl12g5s | Store URL: https://apps.microsoft.com/detail/9p21crl12g5s?hl=en-US&gl=IN'
  },
  {
    id: 'productivity',
    aliases: [
      'productivityhub',
      'productivity-android',
      'com.ProductivityApp.Productivity',
      'com.devphotonproductivityhub',
      'productivity-hub'
    ],
    name: 'ProductivityHub',
    category: 'Offline-First Hourly Focus, Habit Tracking & Encrypted Vault',
    platform: 'Android (Google Play Store)',
    stores: ['Google Play Store'],
    storeUrl: 'https://play.google.com/store/apps/details?id=com.devphotonproductivityhub',
    lastUpdated: 'November 20, 2026',
    summary:
      'ProductivityHub is an offline-first hourly time-blocking, habit tracker, and markdown notes application for Android. All activity blocks, distraction records ("minus minutes"), habits, and notes are stored strictly on your local device with zero telemetry and optional local AES encryption.',
    collectsPersonalData: false,
    collectsAnalytics: false,
    hasInAppPurchases: false,
    requiresInternet: false,
    localDataStored: [
      '24-hour timeline blocks, activity descriptions, hurdle logs, and flow state flags',
      'Distraction deduction minutes ("minus minutes") and reason notes',
      'Habits completion records, streak counts, and activity templates',
      'Markdown notes and tags stored with optional local AES hardware-backed vault encryption',
      'Local UI theme, notification reminders, and custom snooze preferences'
    ],
    permissionsDescription:
      'ProductivityHub requests minimal Android permissions solely for on-device utility: USE_BIOMETRIC / USE_FINGERPRINT for authenticating and unlocking your local encrypted vault via Android BiometricPrompt (no biometric data is ever logged or shared), RECORD_AUDIO optionally for user-initiated voice assistant commands and speech logging (audio is never recorded in background), and READ/WRITE_CALENDAR strictly to sync your hourly blocks with your device calendar if explicitly requested.',
    contactEmail: 'devphotonsupport@gmail.com',
    notes: 'Package ID: com.devphotonproductivityhub | Direct URL: /android/productivity/privacy',
    termsUrl: '/android/productivity/terms'
  },
  {
    id: 'liedetector',
    aliases: [
      'neuralvox',
      'neuralvox-lie-detector',
      'liedetector-android',
      'com.devphoton.neuralvox',
      'voice-stress-analyzer'
    ],
    name: 'NeuralVox: Lie Detector Party Game',
    category: 'Voice Stress Analysis & Social Hot-Seat Interrogation Simulator',
    platform: 'Android (Google Play Store)',
    stores: ['Google Play Store'],
    lastUpdated: 'November 23, 2026',
    summary:
      'NeuralVox is a social party interrogation and voice stress analysis game for Android. All vocal frequency and tremor calculations are executed live in volatile memory (RAM) with zero audio storage, zero cloud uploads, and zero personal data collection.',
    collectsPersonalData: false,
    collectsAnalytics: false,
    hasInAppPurchases: false,
    requiresInternet: false,
    localDataStored: [
      'UI display theme preference (Light Mode / Dark Mode state)',
      'Selected party interrogation question deck',
      'Non-identifying audio sound effect volume toggles'
    ],
    permissionsDescription:
      'NeuralVox requests RECORD_AUDIO strictly during active 2-4 second baseline and interrogation response windows to compute real-time vocal pitch shifts and 8-14 Hz laryngeal tremor divergence in volatile device memory (RAM). Audio is never saved to files, never recorded in the background, and never transmitted to any external server. VIBRATE is optionally used for tactile haptic feedback during countdowns and verdict reveals.',
    contactEmail: 'devphotonsupport@gmail.com',
    notes: 'Package ID: com.devphoton.neuralvox | Direct URL: /android/liedetector/privacy | For entertainment & party game use only.',
    termsUrl: '/android/liedetector/terms'
  },
  {
    id: 'cosmic-explorer-xr',
    aliases: [
      'com.devphotoncosmicXR',
      'cosmic-explorer-quest',
      'cosmos-xr'
    ],
    policyUrl: '/XR/cosmic-explorer/privacy',
    termsUrl: '/XR/cosmic-explorer/terms',
    name: 'Cosmic Explorer (Meta Quest XR)',
    category: 'Educational VR Solar System & Spatial Exploration Simulation',
    platform: 'Meta Horizon OS (Meta Quest 2 / Pro / 3 / 3S)',
    stores: ['Meta Horizon Store'],
    lastUpdated: 'November 26, 2026',
    summary:
      'Cosmic Explorer (XR) runs locally on your Meta Quest headset with zero personal data collection, zero analytics SDKs, in-memory-only OpenXR pose processing, and on-device PlayerPrefs storage.',
    collectsPersonalData: false,
    collectsAnalytics: false,
    hasInAppPurchases: false,
    requiresInternet: false,
    localDataStored: [
      'UI theme mode, glass opacity, and skybox visibility preferences',
      'Simulation speed, distance scale units, and Earth scale multiplier',
      'Background ambient audio and button SFX mute toggles',
      'Onboarding completion flag and last selected celestial body'
    ],
    permissionsDescription:
      'While running, local OpenXR head, hand, and Touch controller poses are processed transiently in volatile memory solely for 6DoF rendering and spatial interaction and are never recorded or transmitted. The app requests no microphone, camera, passthrough video, eye tracking, or face tracking permissions, and makes zero background network requests.',
    contactEmail: 'devphotonsupport@gmail.com',
    notes: 'Package ID: com.devphotoncosmicXR | Privacy URL: /XR/cosmic-explorer/privacy | Terms URL: /XR/cosmic-explorer/terms'
  }
];

export function getAppPrivacy(slug: string): AppPrivacyData | undefined {
  const clean = slug.toLowerCase().trim();
  return appsPrivacyList.find(
    (app) => app.id === clean || (app.aliases && app.aliases.includes(clean))
  );
}

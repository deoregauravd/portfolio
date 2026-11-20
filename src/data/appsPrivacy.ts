export interface AppPrivacyData {
  id: string;
  aliases?: string[];
  name: string;
  category: string;
  platform: string;
  stores: string[];
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
      'cosmic-eye-wallpaper'
    ],
    name: 'Cosmic Eye Live Interactive 3D Wallpaper',
    category: 'Interactive 3D Live Wallpaper & Desktop Visualizer',
    platform: 'Microsoft Windows (Windows 10 / 11)',
    stores: ['Microsoft Store'],
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
    contactEmail: 'devphotonsupport@gmail.com'
  },
  {
    id: 'productivity',
    aliases: [
      'productivityhub',
      'productivity-android',
      'android/productivity',
      'android/productivity/privacy',
      'com.ProductivityApp.Productivity'
    ],
    name: 'ProductivityHub',
    category: 'Offline-First Hourly Focus, Habit Tracking & Encrypted Vault',
    platform: 'Android (Google Play Store)',
    stores: ['Google Play Store'],
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
    notes: 'Package ID: com.ProductivityApp.Productivity | Direct URL: /android/productivity/privacy'
  }
];

export function getAppPrivacy(slug: string): AppPrivacyData | undefined {
  const clean = slug.toLowerCase().trim();
  return appsPrivacyList.find(
    (app) => app.id === clean || (app.aliases && app.aliases.includes(clean))
  );
}

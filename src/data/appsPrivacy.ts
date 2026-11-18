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
  }
];

export function getAppPrivacy(slug: string): AppPrivacyData | undefined {
  const clean = slug.toLowerCase().trim();
  return appsPrivacyList.find(
    (app) => app.id === clean || (app.aliases && app.aliases.includes(clean))
  );
}

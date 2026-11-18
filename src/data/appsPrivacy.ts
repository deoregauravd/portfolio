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
    id: 'cosmic-eye',
    aliases: [
      'cosmic-eye-live-interactive-3d-wallpaper',
      'cosmic-eye-wallpaper',
      'cosmic-eye-android',
      'cosmos-android',
      'com.devephotoncosmosapp'
    ],
    name: 'Cosmic Eye Live Interactive 3D Wallpaper',
    category: 'Interactive 3D Live Wallpaper & Space Simulation',
    platform: 'Android & Windows (Google Play & Microsoft Store)',
    stores: ['Google Play Store', 'Microsoft Store'],
    lastUpdated: 'November 18, 2026',
    summary:
      'Cosmic Eye Live Interactive 3D Wallpaper operates strictly locally on your device. It does not collect, store, transmit, or sell any personal data, telemetry, or device identifiers.',
    collectsPersonalData: false,
    collectsAnalytics: false,
    hasInAppPurchases: true,
    requiresInternet: false,
    localDataStored: [
      'Display resolution, orientation preferences & target monitor settings',
      'Graphics quality, particle density, and shader performance presets',
      'Simulation speed, camera bookmarks, and parallax sensitivity settings',
      'Local progress and unlocked celestial bodies (stored in app sandbox via PlayerPrefs/JSON)',
      'Gyroscope and accelerometer real-time tilt inputs (processed in volatile device RAM only)'
    ],
    permissionsDescription:
      'The application requests standard permissions strictly for on-device features: SET_WALLPAPER to render the real-time 3D simulation as your home and lock screen wallpaper, Gyroscope/Accelerometer sensors to provide tilt-reactive parallax effects (processed in volatile memory and never recorded or transmitted), and Google Play Billing (BILLING) to facilitate optional in-app feature unlocks securely handled entirely by Google Play.',
    contactEmail: 'devphotonsupport@gmail.com',
    notes: 'Package ID: com.devephotoncosmosapp'
  }
];

export function getAppPrivacy(slug: string): AppPrivacyData | undefined {
  const clean = slug.toLowerCase().trim();
  return appsPrivacyList.find(
    (app) => app.id === clean || (app.aliases && app.aliases.includes(clean))
  );
}

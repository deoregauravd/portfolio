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
    contactEmail: 'support@devphoton.com'
  }
];

export function getAppPrivacy(slug: string): AppPrivacyData | undefined {
  const clean = slug.toLowerCase().trim();
  return appsPrivacyList.find(
    (app) => app.id === clean || (app.aliases && app.aliases.includes(clean))
  );
}

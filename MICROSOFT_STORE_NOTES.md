# 🪐 Cosmic Eye Live Interactive 3D Wallpaper
## Microsoft Store Submission & Certification Reference Guide

This document contains all the exact copy-paste information, system requirements, store links, and Unity build settings needed for your Microsoft Partner Center submission.

---

### 📁 Store Asset Files in This Project
- **Mars App Icon (High-Res 1024x1024)**: 
  - [`store_assets/mars_icon.jpg`](store_assets/mars_icon.jpg)
  - [`public/images/mars_icon.jpg`](public/images/mars_icon.jpg)
  - Live preview on your portfolio: `https://devphoton.com/images/mars_icon.jpg`

---

### 🌐 Official Live URLs (Active on Cloudflare)

| Field in Partner Center | Live URL |
| :--- | :--- |
| **Privacy Policy URL** | `https://devphoton.com/cosmic-eye/privacy` |
| **Support URL / Contact Info** | `https://devphoton.com/support` |
| **Support Email** | `gauravarchdesigner@gmail.com` |
| **Central Legal Directory** | `https://devphoton.com/privacy` |

---

### 📋 1. Notes for Certification (Copy & Paste Text)

Copy and paste the exact block below into the **"Notes for certification"** text box in Microsoft Partner Center:

```text
APPLICATION: Cosmic Eye Live Interactive 3D Wallpaper
DEVELOPER / PUBLISHER: Gaurav Deore (DevPhoton)
CONTACT EMAIL: gauravarchdesigner@gmail.com
SUPPORT URL: https://devphoton.com/support
PRIVACY POLICY: https://devphoton.com/cosmic-eye/privacy

--- TESTER / REVIEWER INSTRUCTIONS ---

1. APP OVERVIEW & FUNCTIONALITY:
Cosmic Eye Live Interactive 3D Wallpaper is a standalone interactive 3D desktop wallpaper and visualizer for Windows 10 and Windows 11. Upon launching, it renders a real-time 3D cosmic eye particle simulation that responds dynamically to mouse movement.

2. HOW TO INTERACT & TEST:
- Mouse Movement: Move your cursor across the screen to observe the interactive 3D camera pan, depth reaction, and particle dynamics.
- Settings Menu: Open the settings panel / tray to customize graphics presets, frame rate caps (FPS), and multi-monitor options.

3. HOW TO EXIT / CLOSE THE APPLICATION:
- Press the [Esc] key, or
- Right-click the application icon in the Windows System Tray (notification area at the bottom-right of the taskbar) and select "Exit" / "Quit", or
- Close the settings window / use the Quit button in the UI.

4. ACCOUNTS / CREDENTIALS:
- No user login, registration, or credentials are required.
- All features and visual modes are immediately accessible upon launch.

5. NETWORK & PERMISSIONS:
- The app operates completely offline. No internet connection, external APIs, or background servers are used.
- Zero personal data or telemetry is collected, stored, or transmitted.
- Configuration settings (resolution, FPS, graphics quality) are stored strictly on the local machine.

If you have any questions or require additional information during testing, please contact me directly at gauravarchdesigner@gmail.com.
```

---

### 💻 2. Hardware System Requirements

Fill in the fields on the **System Requirements** page as follows:

| Field | Minimum (Left Column) | Recommended (Right Column) |
| :--- | :--- | :--- |
| **NFC Proximity** | ❌ Unchecked | ❌ Unchecked |
| **Bluetooth LE** | ❌ Unchecked | ❌ Unchecked |
| **Telephony** | ❌ Unchecked | ❌ Unchecked |
| **Microphone** | ❌ Unchecked | ❌ Unchecked |
| **Memory** | **4 GB** *(or 6 GB)* | **8 GB** |
| **DirectX** | **Version 11** *(or Version 10)* | **Version 11** |
| **Dedicated GPU memory** | **Not specified** *(allows integrated Intel/AMD)* | **1 GB** |
| **Processor** | `Intel Core i3 / AMD Ryzen 3 or equivalent` | `Intel Core i5 / AMD Ryzen 5 or equivalent` |
| **Graphics** | `Intel UHD Graphics 620 / NVIDIA GeForce GT 730 or equivalent` | `NVIDIA GeForce GTX 1050 / AMD Radeon RX 560 or better` |

---

### 📦 3. Package URL & Architecture (Win32 Submission)

- **Architecture**: Select **`x64`**
- **Installer Type**: `.exe` (or `.msi`)
- **Package URL**: A direct HTTPS download link to your compiled setup executable (e.g. from GitHub Releases):  
  `https://github.com/deoregauravd/cosmic-eye/releases/download/v1.0.0/CosmicEye-Setup-x64.exe`
- **Silent Install Parameters** (if prompted):
  - Inno Setup: `/VERYSILENT /SUPPRESSMSGBOXES /NORESTART`
  - NSIS: `/S`
  - MSI: `/qn /norestart`

---

### 🛠️ 4. Recommended Unity Build & Player Settings

#### In Unity `Build Settings`:
- **Platform**: `Windows, Mac, Linux` > `Windows`
- **Architecture**: `Intel 64-bit (x86_64)`
- **Development Build**: ❌ `Unchecked`
- **Compression**: `LZ4HC`

#### In Unity `Project Settings > Player`:
- **Run In Background**: ✅ **Checked** *(Crucial for desktop live wallpapers)*
- **Visible In Background**: ✅ **Checked**
- **Fullscreen Mode**: `Windowed` or `Fullscreen Window` (Borderless)
- **Auto Graphics API for Windows**: ✅ **Checked** (Direct3D11 first)
- **Scripting Backend**: `Mono` or `IL2CPP`
- **Target Frame Rate (C# startup script)**:
  ```csharp
  void Awake() {
      Application.targetFrameRate = 60; // 60 FPS or 30 FPS battery saver
      QualitySettings.vSyncCount = 0;
  }
  ```

# OtO — Technical Reference for Sales & Marketing

> Quick answers to common technical questions. For full details, see [documentation.oto.software](https://documentation.oto.software)

---

## 1. System Requirements

| | **Windows** | **macOS** |
|---|---|---|
| **OS version** | Windows 10 (version 1607+) | macOS 10.15 (Catalina) or newer |
| **CPU** | x86-64 (Intel/AMD) | Apple Silicon (M1/M2) or Intel |
| **RAM** | 8+ GB (16 GB recommended for AI) | 8+ GB (16 GB recommended for AI) |
| **GPU** | Optional — NVIDIA with CUDA (e.g., GTX 1050+) for faster AI inference | N/A (Apple Silicon handles on-chip) |
| **Storage** | SSD recommended | SSD recommended |

**Q: Does OtO run on Linux?** No. OtO is a native app for Windows and macOS only. Companion apps (OtOView) run on Android.

**Q: Does OtO work on Apple Silicon (M1/M2/M3)?** Yes. macOS 10.15+ supports both Apple Silicon and Intel Macs.

---

## 2. Licensing

**Q: How much does OtO cost?**

| Plan | Price | Details |
|---|---|---|
| Demo (free) | $0 | All features, unlimited time. Watermark + occasional nag screen. |
| 5-day rental | $85 | One-time, no renewal. |
| 1-month rental | $249 | One-time, no renewal. |
| 1-year license | $990/year | Auto-renews, cancel anytime. |

**Q: Are there different editions (Freelance / Live / Network)?** No. Every license unlocks all features. There is only one OtO edition.

**Q: Is a subscription required?** No. The demo is free and unlimited (with watermark). The 5-day and 1-month plans are one-time payments with no auto-renewal. The 1-year plan is the only auto-renewing option.

**Q: Can I use the same license on multiple computers?** No. Each license is tied to one computer via a hardware security key. You can deactivate and move it to another computer at any time.

**Q: Can I use my license on both Windows and Mac?** Yes. Licenses are cross-platform. Deactivate on one OS, reactivate on the other.

**Q: How do I check my license expiration?** Go to the **OtO** menu (macOS) or **Help** menu (Windows) → *About my license...*

**Q: How do I move OtO to a new computer?** Deactivate via **Help** → *Disable your OtO license*, restart to see the registration module, then activate on the new machine.

**Q: How do updates work?** Click **Help** → *Check for updates*. OtO will download and prompt installation if a new version is available.

---

## 3. File Formats

**Q: What file format does OtO use?** OtO saves projects as `.prompt` files.

**Q: Can I import Word documents?** Yes. Use **File** → *Import docX* or click the import icon. Multiple files can be imported at once — each becomes a separate document in the rundown.

**Q: Can I import PowerPoint files?** You can import **notes** from a `.pptx` file via **File** → *Import Notes from .pptxX*. OtO extracts the speaker notes and automatically places `/ppt` Action Markers between each slide's notes. This does NOT import slide visuals.

**Q: Can I export to Word?** Yes. Use the global document tools (`...` at top of rundown) → *Convert to docX*. Selected documents are merged into a single Word file.

**Q: Can I copy-paste text from other software?** Yes, though .docX import is recommended to avoid formatting issues.

**Q: Can I merge project files?** Yes. **File** → *Import project* merges another `.prompt` file into your current project.

---

## 4. Teleprompter Display

**Q: How does the prompter display work?** When you click the toggle button, OtO opens a prompter window. If a secondary monitor is attached, it goes fullscreen on that display (the screen behind your beam-splitter glass). With no external display, it opens as a floating window on the primary screen.

**Q: Can I mirror the text horizontally (for beam-splitter glass)?** Yes. Click the mirror button or go to **Options** → *Activate Mirror Mode (ext. display)*.

**Q: Can I rotate the text 180° (for presidential/lectern prompters)?** Yes. Click the rotate button or go to **Options** → *Rotate external display*.

**Q: Can I set custom margins on the prompter display?** Yes. The margins dropdown lets you set left/right margins in pixels per project. Default values can be set in `⚙ Settings` → *General* → *Default safe text margins*.

**Q: Can I adjust line height?** Yes. In the margins dropdown, set line height as a percentage.

**Q: How do I toggle fullscreen on the prompter window?** **Options** → *Toggle display fullscreen*. Keyboard shortcut: `F11` (Windows) / `⌘+Enter` (Mac).

**Q: Can I disable the external prompter window entirely?** The prompter window only opens when you click the toggle button. Close it to revert to single-screen editing.

---

## 5. Scrolling & Speed

**Q: How do I scroll the text?** In prompting mode, use the speed slider, keyboard arrows (`↑` faster, `↓` slower), a Contour Shuttle device, or a MIDI controller.

**Q: Can I scroll backward?** Yes. Drag the speed slider below zero, use a bipolar controller (Shuttle wheel, MIDI PitchBend), or assign a "Reverse" button.

**Q: Can I pause scrolling?** Yes. Default shortcut is `⌘+Delete` (Mac) / `CTRL+Backspace` (Windows).

**Q: Can I customize the speed curve?** Yes. `⚙ Settings` → *Speed* lets you choose from preset curves (linear, exponential, logarithmic) or create custom ones. A *Global Speed Amplifier* adjusts overall sensitivity.

**Q: Can I control speed with a foot pedal?** Yes. Any MIDI-compliant foot pedal can be configured as a MIDI controller in `⚙ Settings` → *Controllers* → *MIDI* tab.

---

## 6. Controllers

**Q: What controllers does OtO support?**

| Controller | Connection | What It Controls |
|---|---|---|
| Contour Shuttle Xpress / Pro | USB | Jog wheel = speed (hardwired); buttons = assignable |
| Loupedeck CT | USB (emulates keyboard) | Central dial = speed; buttons = macros, pause, jump (custom profile available) |
| Any MIDI controller | USB / MIDI | Faders, knobs, buttons = freely assignable to speed, markers, commands |
| nOb controller | USB (MIDI) | Knob = speed/scroll |
| Dark Fader | USB (MIDI) | Fader = speed/scroll |
| TouchDAW (mobile app) | Wi-Fi (MIDI over network) | Any mapped control |
| Standard keyboard | Built-in | Customizable shortcuts |

**Q: Where can I get the Loupedeck profile for OtO?** Download from [oto.software/utils](https://oto.software/utils).

**Q: Can I use multiple controllers at the same time?** Yes. Keyboard, Shuttle, and MIDI controllers can all be active simultaneously.

**Q: Can I reassign any button/control?** Yes. In `⚙ Settings` → *Controllers*, click **Change** next to any command, then press/move the control you want to assign.

**Q: A control is already assigned to a different command — what do I do?** Click the **Delete** button next to the existing assignment to free it up first, then assign again.

---

## 7. Markers

### 7.1 Standard Markers

**Q: What is a marker?** A bookmark on a selected word (2–30 characters) that lets you quickly jump to that position in the script.

**Q: How do I create a marker?** Select text → click the marker button or press `CTRL+M` / `⌘+M`.

**Q: What marker types exist?**

| Type | Color | Purpose |
|---|---|---|
| Standard | Default | General bookmark |
| Presenter | Different color | Same as standard, but can be hidden from the prompter screen |
| Action | Special syntax | Triggers events (slides, MIDI, OSC, HTTP, etc.) |

**Q: Can I hide markers from the speaker's view?** Yes. Presenter Markers can be configured to not appear on the external display (`⚙ Settings` → *Markers and Timers* → *Show markers on external display*).

**Q: How do I navigate between markers?** Click the target icon next to the marker in the marker panel, or use `CTRL+PageDown` / `CTRL+PageUp` (Windows) or `⌘+PageDown` / `⌘+PageUp` (Mac).

**Q: Can I control where the text lands when jumping to a marker?** Yes. `⚙ Settings` → *Markers and Timers* → *Scroll Offset ▶ cue indicator* lets you define a +/-150px offset, and choose whether the marker lands at the bottom of the screen or at the cue indicator.

### 7.2 Action Markers

**Q: What is an Action Marker?** A marker that triggers an external event (slide change, MIDI note, OSC command, HTTP request, timer control) when the scroll position crosses the cue indicator.

**Q: What is the syntax?** `/group:command(option)`. Example: `/midi:e2(120)` triggers MIDI note E2 with velocity 120.

**Q: Can I trigger multiple actions from one marker?** Yes. Use the pipe syntax: `/ppt:next|midi:e2`. Or in v1.5+, use Macros to group multiple actions under a named macro.

**Q: Are Action Markers visible to the speaker?** No. The marker text itself is visible (it's a word in the script), but the action syntax is hidden in the marker description — invisible to the speaker during prompting.

**Q: When are Action Markers triggered?** Automatically, when the text scrolls and the marker crosses the cue indicator — **only in prompting mode**.

**Q: Can I disable auto-trigger and trigger manually?** Yes. `⚙ Settings` → *Markers and Timers* → *Advanced Settings for Action Markers* → disable *"Trigger Marker Action on Scroll"*. Then click the play button next to each marker to trigger manually, or use `CTRL+SHIFT+T` / `⌘+SHIFT+T` for the next action marker.

**Q: Can I trigger Action Markers during rehearsals without firing real commands?** Yes. Disable auto-trigger as above, or right-click a marker and select *Trigger Marker*.

**Q: Can I adjust the trigger position (offset)?** Yes. In the margins dropdown, set *Action Marker vertical Offset in pixels* — positive values trigger later, negative values trigger earlier.

**Q: Can I see a countdown to the next Action Marker?** Yes. Enable **Options** → *Show Timer*. The countdown appears in the time bar when the next marker is less than 150 seconds away. This can also be shown on the external prompter screen.

**Q: What is the Caller Support Window?** A dedicated floating window (enabled via **Options** → *Show Caller Support Window*) that displays upcoming cues, countdowns, cue types, and time-to-execution — designed for stage managers and show callers.

### 7.3 Action Marker Commands Reference

| Group | Command | Example | Effect |
|---|---|---|---|
| `ppt` | `next` | `/ppt:next` | Next slide |
| `ppt` | `previous` | `/ppt:previous` | Previous slide |
| `ppt` | `[number]` | `/ppt:3` | Go to slide 3 |
| `ppt` | `first` | `/ppt:first` | First slide |
| `ppt` | `last` | `/ppt:last` | Last slide |
| `midi` | `[note]` | `/midi:e2(120)` | Play note E2, velocity 120 |
| `midi` | `[cc#]` | `/midi:cc11(64)` | CC11 event, value 64 |
| `timer` | `[HHMMSS]` | `/timer:002004` | Set timer to 00:20:04 |
| `timer` | `reset` | `/timer:reset` | Reset timer |
| `timer` | `pause` | `/timer:pause` | Pause timer |
| `note` | `[any]` | `/note:welcome` | No-op (testing) |

---

## 8. PowerPoint & Keynote Integration

**Q: Can OtO control PowerPoint automatically from the script?** Yes. Place `/ppt:next` or `/ppt:3` Action Markers in the script. When the marker crosses the cue indicator, OtO advances the slide.

**Q: Does PowerPoint need to run on the same machine?** Either. For local control, PowerPoint runs on the same machine. For remote control, use the **OtOSlides** companion app on the machine running PowerPoint.

**Q: How do I set up local PowerPoint control?** Ensure *"Connect to PPT Server"* is **disabled** in `⚙ Settings` → *Network*. Launch PowerPoint in slideshow mode on the same machine.

**Q: How do I set up remote PowerPoint control?** Install **OtOSlides** (available at [oto.software/otoslides](https://oto.software/otoslides)) on the PowerPoint machine. Note the IP address shown in OtOSlides. In OtO, go to `⚙ Settings` → *Network* → *PowerPoint Server configuration*, enter the IP, enable network PowerPoint, and save.

**Q: Can I control Keynote on Mac?** Yes. Either enable *"Treat PPT markers as Keynote"* in `⚙ Settings` → *Markers* (local), or switch OtOSlides to Keynote mode (remote).

**Q: Can I still have a dedicated slide operator?** Yes. OtO's hybrid workflow supports both auto-triggering from script and manual control. The OtOSlides interface gives the operator visibility into the script's current position.

**Q: Can I import PowerPoint notes?** Yes. **File** → *Import Notes from .pptx* extracts all speaker notes and creates a document with automatic `/ppt` Action Markers between each slide's notes.

---

## 9. Network & Synchronization

**Q: How does OtO's network work?** OtO uses **peer-to-peer (P2P)** architecture — not server-client. All connected machines share the same documents and scroll position directly. There is no central server that can fail and take down the entire system.

**Q: How many machines can I connect?** Roughly a dozen devices (computers + mobile devices combined) is recommended. The full mesh topology becomes less reliable with too many nodes.

**Q: Do all machines need the same OS?** In theory, no. Windows and macOS machines can be mixed. However, for maximum reliability in critical productions, identical machines running the same OS with matching screen resolutions are recommended.

**Q: Do all machines need the same screen resolution?** Matching resolutions across all computers is recommended for consistent display fidelity.

**Q: What is a "Master" computer?** The master computer is the initial contact point — clients connect to it first to receive the information needed to join the P2P network. Once the P2P network is established, the master can fail without disrupting the show.

**Q: What is a "Leading" computer?** The leading computer is the one authorized to trigger Action Markers. Only one machine can be the leader at a time (to prevent duplicate triggers). Any machine can take over leadership by clicking the network icon → *Take over*.

**Q: Can client computers make edits?** By default, client UIs are locked to prevent accidental changes. Click the network icon → *Unlock UI* to enable collaborative editing.

**Q: How do I set up network mode?** Follow these steps **in order**:
1. Ensure all computers are on the same network.
2. On the master computer: enable network (`⚙ Settings` → *Network* → *Enable OtO Network*) and check *"Set this computer as OtO Network Master"*.
3. On client computers: enable network and enter the master's IP address in *OtO Master URL*.
4. Save all settings. Documents will now sync.

**Q: What is OtOView?** A free Android app that turns any smartphone or tablet into a wireless teleprompter display. Connect by scanning a QR code from the master computer.

**Q: Where can I download OtOView?** Google Play Store — search for "OtOView" (package: `com.oto.view`).

**Q: Is there an iOS version of OtOView?** Not yet — coming soon.

**Q: What is OtOSlides?** A small companion utility for Windows and Mac that runs on the presentation machine and receives remote slide commands from OtO over the network.

**Q: Does OtO require an internet connection?** No. OtO operates fully offline. Network connectivity is only needed for remote operators, cloud features, or OtOView connections.

---

## 10. MIDI, OSC & HTTP Integration

**Q: What show control protocols does OtO support?**
- **MIDI** — noteOn, noteOff, CC events (works with lighting consoles, DJ mixers, Ableton Live, synthesizers)
- **OSC** (Open Sound Control) — works with QLab, Blackmagic ATEM (via atemOSC), lighting consoles, media servers
- **HTTP** — GET/POST requests to any web-connected device
- **Macros** (v1.5+) — group multiple actions under one trigger

**Q: How do I set up an OSC network marker?**
1. Go to `⚙ Settings` → *Network* (or *Markers*) → click *Add*.
2. Choose **OSC** as network type, enter the IP address and port.
3. Define a group name and command.
4. Create an Action Marker with syntax `/groupname:command`.

**Q: How do dynamic network markers work?** In the address field, use `{{command}}` and `{{option}}` as placeholders. One configuration handles infinite variations. Example: `/hyperdeck/play-single-clip/{{command}}` — markers `/deck:2`, `/deck:3` all route through the same template but trigger different clips.

**Q: What is an example of a real OSC setup?** Controlling **QLab**: configure address `/cue/{{command}}/{{option}}` with port 53000. Marker `/qlab:2(play)` sends `/cue/2/play` to QLab.

**Q: What is an example of an HTTP setup?** Controlling a **Blackmagic HyperDeck** via Banyan AVBridge's OSC gateway. Configure `/hyperdeck/play-single-clip/{x}` and use markers like `/deck:2` to play clip #2.

---

## 11. AI Features

**Q: What AI features does OtO have?** Script summarization, rewriting, language adaptation, and text transformation via preset or custom prompts. Accessible from the global document tools (`...` at top of rundown) → *OtO AI*.

**Q: Can I use AI offline?** Yes. OtO supports local GGUF models (e.g., Llama-2, Mistral 7B 4-bit quantized). The entire process runs on your machine — no data leaves your computer.

**Q: What are the requirements for local AI?** A 4-bit quantized 7B model needs:
- **Windows**: 16 GB RAM, NVIDIA GPU with CUDA (e.g., GTX 1650+) — optional but recommended
- **Mac**: Apple Silicon (M1/M2) recommended, 8 GB RAM (16 GB recommended)

**Q: What remote AI providers are supported?** OpenAI, Mistral, or **any OpenAI-compatible API endpoint** (v1.5+). This means you can connect to custom enterprise endpoints or alternative providers.

**Q: Do I need an API key for remote AI?** Yes. You need an active subscription to the provider (OpenAI, Mistral, etc.) and a valid API key.

**Q: Where do I configure AI?** `⚙ Settings` → *General* → *AI provider*. Choose between local model (.gguf file) or remote model (OpenAI-compatible endpoint).

---

## 12. MOS Protocol (Broadcast Integration)

**Q: What is the MOS extension?** An extension (added in v1.5.2) that adds **Media Object Server (MOS)** protocol support, enabling OtO to connect to broadcast newsroom systems.

**Q: Which newsroom systems are supported?** iNews/MediaCentral (Avid), News Works, Octopus, and any MOS-compliant system.

**Q: What does MOS integration do?** Scripts, cues, and rundowns are automatically retrieved from the broadcast infrastructure. MOS-specific cues arrive with enhanced marker options.

**Q: Is MOS included in all licenses?** The MOS extension requires an active Pro or Enterprise subscription.

---

## 13. Language & Script Support

**Q: What languages does OtO support?** Over 100 languages via the IBM Plex typeface family. Specific coverage includes Arabic, Cyrillic, Devanagari, Greek, Hebrew, Japanese, Korean, Thai. Roboto covers Latin, Cyrillic, and Greek. Noto SC covers Simplified Chinese; Noto HK covers Hong Kong Chinese.

**Q: Does OtO support right-to-left (RTL) scripts?** Yes. Script direction is auto-detected on .docX import, PowerPoint notes import, and text paste. You can manually set it per document via the document tools → *Languages*.

**Q: Can I set hyphenation rules per language?** Yes. Enable *Allow Hyphens* per document. Hyphenation reflects the document's language setting.

---

## 14. Overlays & On-Screen Elements

**Q: What can be displayed on the prompter screen besides text?**

| Feature | What It Shows | How to Enable |
|---|---|---|
| Time Bar | Timer (HH:MM:SS:ii) + countdown to next Action Marker | **Options** → *Show Timer* |
| Title Bar | Document number, title, progress | `⚙ Settings` → *Markers and Timers* → *Prompter Screen Overlay Metadata* |
| Action Marker countdown | Time remaining + marker name (appears <150s) | `⚙ Settings` → *Markers and Timers* → *Show Time to Next Action Marker* |

---

## 15. Editing & Typography

**Q: What text formatting does OtO support?** Bold, italic, font color, highlighting, font size, font family. Formatting can apply to selected text, selected documents, or all documents.

**Q: What is the Mini Editor?** A secondary editing panel that lets you view upcoming text and make edits without moving the main prompter display — the speaker's view stays uninterrupted.

**Q: Can I sync the Mini Editor with the main editor?** Yes. Click the *Sync* button to create a one-way sync from the main editor to the Mini Editor.

**Q: Can I insert line breaks automatically?** Yes. The document tools include *Insert Line Breaks* which adds breaks after most punctuation to improve readability at large font sizes.

**Q: Can I enable hyphenation without modifying the text?** Yes. It's a display-only setting. Toggle it off at any time without reformatting.

**Q: What is "Enhanced Text Balance"?** A display-only mode that prevents widows and orphans (single short words on a line). Toggle on/off without modifying the text.

**Q: Can I split a document at the cursor?** Yes. Document tools → *Split at Cursor*. Creates a new document from the second half.

**Q: Can I merge documents?** Yes. Select multiple documents → document tools → *Merge*.

---

## 16. Keyboard Shortcuts (Default)

### Editing Mode

| Action | Mac | Windows |
|---|---|---|
| New project | `⌘+N` | `CTRL+N` |
| Import Word doc(s) | `⌘+Shift+I` | `CTRL+Shift+I` |
| Open project | `⌘+O` | `CTRL+O` |
| Save project | `⌘+S` | `CTRL+S` |
| Toggle prompting mode | `⌘+P` | `CTRL+P` |
| Search | `⌘+F` | `CTRL+F` |
| Bold | `⌘+B` | `CTRL+B` |
| Italic | `⌘+I` | `CTRL+I` |
| Create/delete marker | `⌘+M` | `CTRL+M` |
| Trigger next Action Marker | `⌘+Shift+T` | `CTRL+Shift+T` |
| Colors 1–5 | `⌘+⌥+1..5` | `CTRL+ALT+1..5` |
| Toggle highlight | `⌘+Shift+H` | `CTRL+Shift+H` |

### Prompting Mode

| Action | Mac | Windows |
|---|---|---|
| Toggle prompting mode | `⌘+P` | `CTRL+P` |
| Faster | `⌘+↑` | `CTRL+↑` |
| Slower | `⌘+↓` | `CTRL+↓` |
| Reverse direction | `⌘+Enter` | `CTRL+Enter` |
| Pause | `⌘+Delete` | `CTRL+Backspace` |
| Next marker | `⌘+PageDown` | `CTRL+PageDown` |
| Previous marker | `⌘+PageUp` | `CTRL+PageUp` |
| Next document | `⌘+⌥+↓` | `CTRL+ALT+↓` |
| Previous document | `⌘+⌥+↑` | `CTRL+ALT+↑` |

---

## 17. Troubleshooting

**Q: Keyboard shortcuts don't work in prompting mode.** The editor window likely has focus. Click in an empty area of the application for shortcuts to work.

**Q: Local PowerPoint slides don't trigger.** Make sure *"Connect to PPT Server"* is **disabled** in `⚙ Settings` → *Network*, and PowerPoint is in slideshow mode.

**Q: Remote PowerPoint slides don't trigger.** Verify the IP address and port match between OtO and OtOSlides. Append the port after a colon if non-default (e.g., `192.168.10.2:4001`).

**Q: The progress indicator is jumping or showing wrong values.** Click the topmost `...` in the Rundown panel → *Refresh Progress*.

**Q: OtO is slow.** Ensure system meets minimum specs. Try: set the external display as primary, lower the prompter screen resolution, close other applications.

**Q: I can't find the QR code for OtOView.** Verify network mode is enabled and this computer is set as the network master. The QR code appears in the network dropdown.

**Q: Network devices don't connect.** Most connection issues arise from incorrect connection order. Ensure the master computer is configured and saved first, then connect clients.

**Q: How do I transfer my settings to another computer?** Go to **Options** → *Open User Folder*. Copy `settings.json` to the same location on the other computer.

---

## 18. Compatibility & Integration Summary

| System / Protocol | Supported? | Notes |
|---|---|---|
| Windows 10/11 | Yes | Native |
| macOS 12+ | Yes | Native (Apple Silicon + Intel) |
| Linux | No | — |
| iOS | OtOView coming soon | Not yet available |
| Android | Yes | OtOView on Google Play |
| PowerPoint (local) | Yes | Auto-trigger from Action Markers |
| PowerPoint (remote) | Yes | Via OtOSlides companion app |
| Keynote (local) | Yes | Via "Treat PPT as Keynote" setting |
| Keynote (remote) | Yes | Via OtOSlides (Keynote mode) |
| MIDI | Yes | noteOn, noteOff, CC |
| OSC | Yes | Custom network markers |
| HTTP | Yes | GET/POST, custom headers/body |
| MOS | Yes | Via extension (v1.5.2+), Pro/Enterprise |
| QLab | Yes | Via OSC network markers |
| Blackmagic ATEM | Yes | Via atemOSC / Banyan AVBridge |
| Blackmagic HyperDeck | Yes | Via Banyan AVBridge OSC |
| Ableton Live | Yes | Via MIDI |
| Contour Shuttle | Yes | Xpress, Pro — native support |
| Loupedeck CT | Yes | Custom profile available |
| nOb / Dark Fader | Yes | MIDI — fully configurable |
| Any MIDI controller | Yes | Fully configurable |
| .docX import/export | Yes | Native |
| .pptx notes import | Yes | Notes only, with auto markers |
| Local AI (GGUF) | Yes | Offline, private |
| Remote AI (OpenAI API) | Yes | Any OpenAI-compatible endpoint |
| Remote AI (Mistral) | Yes | Native Mistral API support |

---

## 19. Data & Privacy

- **Offline by default**: OtO does not require internet for core functionality.
- **Local AI option**: Sensitive scripts never leave the machine when using local GGUF models.
- **Telemetry**: No mandatory telemetry. Demo version shows a random nag screen.
- **Network**: P2P connections are local network only — no cloud relay required.

---

*OtO v1.5.2 — For the latest version, check [documentation.oto.software](https://documentation.oto.software)*

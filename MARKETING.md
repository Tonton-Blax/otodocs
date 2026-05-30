Voici un guide pour le logiciel OtO, une application mac et PC innovante qui nous servira tout au long de la discussion pour affiner notre stratégie marketing:

```
# OtO — Text Orchestrator: Teleprompter & Event Orchestrator

> **Website**: [https://oto.software](https://oto.software)
> **Documentation**: [https://documentation.oto.software](https://documentation.oto.software)
> **LinkedIn**: [https://www.linkedin.com/company/otosoftware](https://www.linkedin.com/company/otosoftware)
> **Current Version**: 1.5.2 (April 2026)
> **Supported OS**: macOS (Monterey 12.0+), Windows 10 & 11

---

## 1. What Is OtO?

OtO (short for **Text Orchestrator**) is a professional teleprompter software that goes far beyond simple text scrolling. It is a **show control and event orchestration platform** that treats the script as a live coordination hub. Action Markers embedded directly in the text can trigger PowerPoint slides, lighting cues (MIDI/OSC), sound playback (QLab, Ableton Live), video playback (Blackmagic HyperDeck), HTTP requests, macros, and more — all synchronized to the scroll position of the prompter, without any voice recognition or separate timeline.

**Core principle**: *The script runs the show.*

---

## 2. Core Philosophy

OtO was built from the ground up for **live events and stage productions**, not just broadcast TV. Traditional teleprompter software matured in the broadcast newsroom — a controlled, repeatable environment. OtO recognizes that live events (corporate keynotes, conferences, theatre, concerts, worship services) demand **elasticity, cue-awareness, and real-time adaptability**.

| Aspect | Traditional Broadcast Prompter | OtO |
|---|---|---|
| Role of the script | Static reading aid | Active cue sheet & conductor's score |
| Slide control | Manual operator | Auto-triggered from scroll position |
| Show control | Separate timeline / operator | Embedded Action Markers in text |
| Networking | Server-client (single point of failure) | Peer-to-peer (no single point of failure) |
| Price point | $2,000–$20,000+ (hardware) | $0.85–$9.90/year (software) |

---

## 3. Key Features

### 3.1 Action Markers (The Game-Changer)

Action Markers transform any word in the script into a triggerable command. When that word crosses the **cue indicator ▶** during scrolling, OtO fires the attached event automatically.

**Supported action types:**

| Type | Syntax Example | What It Does |
|---|---|---|
| PowerPoint/Keynote | `/ppt:next`, `/ppt:3` | Advances to specific slide |
| MIDI | `/midi:e2(120)`, `/midi:cc11` | Sends MIDI note or CC event |
| OSC | Custom (e.g., `/qlab:2(play)`) | Controls QLab, lighting consoles, media servers |
| HTTP | Custom (POST/GET) | Triggers any web-connected device |
| Timer | `/timer:002004`, `/timer:reset` | Sets/pauses/resets countdown timer |
| Macros | Custom named groups | Triggers multiple actions simultaneously (v1.5) |
| Note | `/note:welcome` | Testing/demo annotation |

**Group actions**: Multiple commands can be chained with the pipe `|` syntax: `/ppt:next|midi:e2`

**Manual override**: Action Markers can be disabled on-scroll and triggered manually (click or keyboard shortcut `CTRL+SHIFT+T`) — ideal for rehearsals.

### 3.2 Network Markers (OSC & HTTP)

Beyond built-in commands, OtO lets users define **custom network markers** that send OSC or HTTP requests to any compatible device on the network:

- **Static markers**: Fixed command to a single target (e.g., play video #2 on a Blackmagic HyperDeck).
- **Dynamic markers**: Use `{{command}}` and `{{option}}` placeholders so a single configuration handles infinite variations (e.g., `/deck:2`, `/deck:3` → all routed through one template).
- Works with **QLab**, **Blackmagic ATEM** (via atemOSC/Banyan AVBridge), lighting consoles, media servers, video routers, and streaming software.

### 3.3 Peer-to-Peer Network (Fail-Safe)

Unlike most teleprompter solutions that use a **server-client** model (single point of failure), OtO uses a **peer-to-peer (P2P)** architecture:

- All connected machines share the same document and scroll position.
- If any machine (even the "master") fails, the network continues operating.
- A **leading computer** concept designates which machine triggers Action Markers (only one leader to avoid duplicate triggers).
- **OtOView** Android companion app connects any smartphone or tablet as a wireless prompter display.
- **OtOSlides** companion app controls PowerPoint/Keynote slides remotely over the network.
- Supports mix-and-match setups: HDMI, SDI, wireless tablets, other OtO machines as standalone displays.
- **QR code** connection: Scan a QR code from the master computer to connect OtOView instantly.

### 3.4 Hardware Controller Support

OtO treats hardware controllers as first-class citizens, not afterthoughts:

| Controller | Type | Best For |
|---|---|---|
| **Contour Shuttle Xpress/Pro** | Jog wheel + buttons | Smooth scrubbing, pause-to-scroll pacing |
| **Loupedeck CT** | Knobs + buttons + touch | Central dial for speed, buttons for macros/pause/cue jumps (custom profile available) |
| **MIDI controllers** | Faders, knobs, buttons | nOb, Dark Fader, foot pedals, keyboards, any MIDI-compliant device |
| **Keyboard** | Built-in | Basic control with customizable shortcuts |
| **Mobile apps** | TouchDAW etc. | Wireless MIDI control |

**Speed customization**: Adjustable acceleration curves (linear, exponential, logarithmic, or custom) and a global speed amplifier.

### 3.5 Companion Applications

- **OtOView** (Android): Wireless prompter display on tablets/smartphones. Connect via QR code. Ideal for speakers moving freely on stage.
- **OtOSlides** (Windows/Mac): Remote PowerPoint/Keynote slide controller. Runs on the presentation machine, receives triggers from OtO over the network.

### 3.6 AI Integration

- **Local AI**: Run offline GGUF models (e.g., Llama-2, Mistral 7B 4-bit quantized) — sensitive content never leaves the machine.
- **Remote AI**: Connect to any OpenAI-compatible API endpoint, including OpenAI, Mistral, or custom enterprise endpoints.
- **Use cases**: Script summarization, rewriting, language adaptation, and preset prompts optimized for teleprompting.

### 3.7 MOS Extension (v1.5.2)

Native **Media Object Server (MOS)** protocol support for broadcast newsroom integration. Works with iNews/MediaCentral, News Works, Octopus, and other MOS-compliant systems. Scripts, cues, and rundowns are automatically retrieved from the broadcast infrastructure.

### 3.8 Multi-Language & Script Support

- **Alphabets**: Arabic, Cyrillic, Devanagari, Greek, Hebrew, Japanese, Korean, Thai, Simplified Chinese (Noto SC), Hong Kong Chinese (Noto HK), and more — via IBM Plex and Roboto typefaces.
- **Directions**: Auto-detects LTR/RTL script direction.

### 3.9 Additional Features

- **Caller Support Window**: Dedicated floating window showing countdown to next Action Marker, cue type, and time-to-execution — invaluable for stage managers and show callers.
- **Time Bar overlay**: Countdown timer synced to scroll speed, visible on prompter screen.
- **Title Bar overlay**: Document number, title, and progress indicators on the prompter display.
- **Mirroring & Rotation**: Support for beam-splitter glass, presidential/lectern prompters.
- **Import**: .docX files, PowerPoint notes (with automatic Action Marker generation between slides), copy-paste.
- **Export**: .docX, .prompt project files.
- **Rundown management**: Multi-document support, drag-and-drop reordering, progress indicators, duration/word count widgets.
- **Offline operation**: No internet connection required.

---

## 4. Pricing Model

OtO offers transparent, subscription-free licensing:

| Plan | Price | Details |
|---|---|---|
| **Demo (Free)** | $0 | Unlimited time, all features. Watermark on prompter + occasional nag screen. |
| **5-Day Rental** | $85 | One-time, no commitment. Perfect for single gigs. |
| **1-Month Rental** | $249 | One-time, no renewal. |
| **1-Year License** | $990/year | Auto-renews, cancel anytime. Best value for regular users. |

All paid tiers include **every feature** — no artificial feature gating. Licensing is cross-platform (same license works on Windows and Mac).

---

## 5. Target Audiences

### Primary Audiences

| Audience | Pain Point | OtO Solution |
|---|---|---|
| **Live event & keynote operators** | Slides, lights, and audio are separate workflows; timing errors are common | Script-embedded triggers keep everything in sync; one operator manages the show from the teleprompter |
| **AV agencies & stage managers** | Fragmented multi-tool workflow (script in one app, cues in another, control in a third) | Single conductor's score: the script IS the cue sheet |
| **Corporate auditoriums & conference centers** | Expensive legacy hardware; complex setups for multiple speakers | Affordable software + wireless tablet integration; fast reconfiguration between sessions |
| **Newsrooms & production studios** | Legacy prompting ecosystems are costly and inflexible | Software-first MOS-compatible alternative at a fraction of the price; local AI for sensitive content |
| **Hotels & hospitality venues with event spaces** | Need repeatable, reliable prompter setups for diverse events (corporate, weddings, galas) | P2P fail-safe network; OtOView for wireless tablets; simple deployment across multiple rooms |
| **Theatres & performing arts venues** | Need precise cue triggering for sound, lighting, and video | OSC/MIDI markers synced to script; macro system for complex multi-cue moments |
| **Churches & worship centers** | Multiple services with different media requirements | Affordable licensing; easy volunteer training; integrated slide/media control |

### Emerging / Niche Audiences

| Audience | Use Case |
|---|---|
| **University lecture halls** | Faculty can self-operate teleprompter + slides from a single laptop; affordable departmental licensing |
| **Government & municipal AV teams** | Offline operation (security); fail-safe network for critical addresses |
| **Museums & visitor centers** | Interactive exhibits driven by timed or triggered text; multi-language support for international visitors |
| **Podcast & streaming studios** | Scripted shows with live media triggers; OtOView for guest/host prompters on tablets |
| **Trade show & exhibition booth managers** | Product demos with synchronized script + slide + video playback; quick setup/teardown per event cycle |
| **Training & simulation facilities** | Scripted scenarios with embedded cues for instructors; offline/local AI for sensitive training materials |
| **House of worship (broadcast ministries)** | Multi-camera, multi-service productions requiring reliable prompting with media integration |

---

## 6. Competitive Comparison

### OtO vs. Traditional Broadcast Teleprompter Hardware

| Factor | Autocue / Autoscript / Cuescript | OtO |
|---|---|---|
| **Price** | $2,000 – $20,000+ | $0.85 – $9.90/year |
| **Platform** | Hardware appliance + proprietary software | Software (Windows, macOS) — use any hardware |
| **Show control** | None (text display only) | Embedded Action Markers (MIDI, OSC, HTTP, PPT) |
| **Slide integration** | Manual operator | Auto-triggered from scroll position |
| **Networking** | Server-client (single point of failure) | Peer-to-peer (fail-safe, no single point of failure) |
| **Wireless display** | Proprietary / limited | OtOView Android app + QR code |
| **Ease of use** | Steep learning curve — trained operators | Intuitive — operators can learn in under a day |
| **Updates** | Infrequent (hardware) | Frequent (software) |
| **Multi-language** | Limited | 100+ languages, 7+ alphabets, RTL/LTR auto-detect |
| **AI features** | None | Local + remote AI for script enhancement |
| **MOS support** | Native (core feature) | Via extension (v1.5.2+) |

### OtO vs. Other Teleprompter Software

| Factor | CuePrompter (free web) | PowerPoint Presenter Mode | Remote Mouse Apps | Prezi | OtO |
|---|---|---|---|---|---|
| **Teleprompter** | Basic scrolling only | Speaker notes only | None | None | Full professional prompter |
| **Slide control** | None | Native (limited) | Forward/back only | Native (limited) | Auto-triggered from script |
| **Show control** | None | None | None | None | MIDI, OSC, HTTP, macros |
| **Pricing** | Free | Included with Office | Free/cheap | Subscription | $0.85–$9.90/year |
| **Hardware controllers** | None | Mouse/keyboard | Touch only | Touch only | Shuttle, Loupedeck, MIDI, keyboard |
| **Offline** | No (web) | Yes | Yes | Partial (cloud) | Yes |

### Key Differentiators Summary

1. **Script-as-conductor**: No other teleprompter treats the text as an active cue sheet that triggers external systems.
2. **Action Markers**: Proprietary embedded-command syntax that is invisible to the speaker but drives the entire show.
3. **Peer-to-peer fail-safe network**: Unlike every major competitor's server-client model, OtO's P2P architecture survives individual machine failure.
4. **Price-to-capability ratio**: Professional show control + teleprompter for under $10/year — 3 orders of magnitude less than hardware alternatives.
5. **Hardware controller ecosystem**: First-class support for Shuttle, Loupedeck, nOb, Dark Fader, and any MIDI device — not just keyboard/mouse.
6. **Offline-first + local AI**: Critical for security-conscious organizations (government, legal, enterprise).
7. **MOS broadcast integration**: Bridges the gap between live-event flexibility and broadcast studio reliability.

---

## 7. Use Cases & Example Setups

### IP + HDMI Setup
- 2+ computers connected via P2P network.
- Primary machine triggers Action Markers.
- HDMI switch handles prompter display failover.
- OtOView tablets for wireless speaker prompters.

### Full Network Setup
- Multiple OtO machines acting as standalone displays.
- Each machine's prompter window set to fullscreen.
- Ideal for presidential/lectern prompters with multiple screens.
- No HDMI cabling required beyond each display.

### Action Markers Setup
- OtO controls PowerPoint (local or remote via OtOSlides).
- MIDI signals to lighting console (e.g., Martin Professional).
- OSC commands to QLab for audio playback.
- HTTP requests to Blackmagic HyperDeck for video playback.

---

## 8. Technical Specifications

- **Windows**: Windows 10 (1607+), x86-64 CPU, 8+ GB RAM (16 GB recommended with AI), optional NVIDIA GPU w/ CUDA.
- **macOS**: macOS 10.15 (Catalina)+, Apple Silicon or Intel, 8+ GB RAM (16 GB recommended with AI).
- **Storage**: SSD recommended (especially for local AI models).
- **Network**: Any TCP/IP network (wired or wireless). No internet required for core functionality.
- **File format**: `.prompt` project files; `.docX` import/export.

---

## 9. Links

- **Website**: [https://oto.software](https://oto.software)
- **Documentation**: [https://documentation.oto.software](https://documentation.oto.software)
- **LinkedIn Page**: [https://www.linkedin.com/company/otosoftware](https://www.linkedin.com/company/otosoftware)
- **Blog**: [https://oto.software/blog](https://oto.software/blog)
- **Pricing & Download**: [https://store.oto.software](https://store.oto.software)
- **OtOView (Android)**: Google Play Store — `com.oto.view`
- **OtOSlides**: [https://oto.software/otoslides](https://oto.software/otoslides)
- **Loupedeck Custom Profiles**: [https://oto.software/utils](https://oto.software/utils)
- **Changelog**: [https://oto.software/release_notes](https://oto.software/release_notes)
- **Contact**: [https://oto.software/contact](https://oto.software/contact)

---

## 10. Blog Article Index

| Title | Topic |
|---|---|
| [Text as a Cue Sheet and Conductor's Score](https://oto.software/blog/teleprompter-cue-sheet-score) | Core philosophy — how OtO turns words into performance |
| [The Best Tools for Presentations and Remote PowerPoint Control](https://oto.software/blog/best-tools) | Comparison of OtO with PowerPoint, Prezi, Remote Mouse, CuePrompter |
| [Why Most Teleprompter Software Is Built for TV and Not Live Events](https://oto.software/blog/events-broadcast) | Broadcast vs. live-event paradigms; cue awareness |
| [Fail-Safe Teleprompting: How OtO Keeps You in Control](https://oto.software/blog/fail-safe-network) | P2P architecture, redundancy, wireless flexibility |
| [Comparing OtO vs Professional Teleprompter Solutions](https://oto.software/blog/comparing-teleprompter-solutions) | OtO vs. Autocue, Autoscript, Cuescript — features, pricing, usability |
| [OtO 1.5.2 — A New Era of Flexibility](https://oto.software/blog/oto-150-release) | v1.5 release notes: extensions, macros, AI freedom, MOS |
| [Best Controllers for Teleprompting](https://oto.software/blog/hardware-oto) | Shuttle, Loupedeck CT, nOb, Dark Fader, MIDI |

---

*OtO v1.5.2 — Built in the control room. © 2026 OtO Software.*
```

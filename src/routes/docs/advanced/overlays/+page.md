---
title: Overlays
order: 2
---

<script>
  import Number from "$lib/components/md/Number.svelte"
</script>


## Time Bar

When this option is enabled (Menu -> `Show timer` or `⚙ Settings` -> `Markers and Timers` -> `Timers` -> "Show Timer"), an overlay bar will appear at the top of the Prompter Editor <Number n=2 />. This **time bar** contains:

- A timer in the format `HH:MM:SS:ii`
- In prompter mode only: a countdown indicating the time remaining until the next Action Marker

<img src="/show-timer.webp" alt="timers" />

:::info[Info]
When the option is enabled, the timer is also visible on the prompter screen at the bottom of the window (the top area is reserved for document information).  
To show or hide the Action Markers countdown, go to `⚙ Settings` -> `Markers and Timers` -> `Show markers on external display`, and enable **"Show Time to Next Action Marker"**.
:::

### Action Marker Countdown

When using [Action Markers](/docs/markers/action-markers), a countdown will appear in the *time bar*, showing the time remaining until the next Action Marker:

- It becomes active when there are less than 2 minutes and 30 seconds (150 seconds) before the next marker.
- It displays the name of the next marker.
- The remaining time is proportional to the scrolling speed.

## Title Bar

<img src="/overlay-title-bar.jpg" alt="timers" />

For the **prompter screen only**, another horizontal overlay bar, the *title bar*, displays:

1. The document number, the total number of documents, and the title of the current document.
2. A progress indicator in percentage, relative to the current document, along with a global progress indicator.

You can choose to display either (or none) of these elements by going to `⚙ Settings` -> `Markers and Timers` -> `Prompter Screen Overlay Metadata`.

<img src="/overlay-title.jpg" alt="timers" />

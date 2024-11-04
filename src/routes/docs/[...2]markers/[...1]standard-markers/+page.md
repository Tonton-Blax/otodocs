---
title: Standard Markers
description: In OtO, markers are like small bookmarks that allow you to quickly navigate through all your documents.
---
# {$frontmatter.title}  
{$frontmatter.description}  

## Creating a Marker

To create a marker, you first need to select some text (usually a word, between 2 and 30 characters) in one of the two editors; then either click the create/delete marker button <Icon d="addMarker" /> in the toolbar <Number n=1 />, or use the `CTRL+M` or `CMD+M` shortcut. The marker will appear as text surrounded by a border, accompanied by its "description" in a small box at the bottom left of the marker, like this:
<Q type="marker" text="NORMAL MARKER" />

By default, this description will take the value of the marker text itself.
The marker will then be listed in the marker panel, which displays a list of all the markers from all documents, in the order they appear in the texts. If you don't see the marker panel, make sure it is enabled by clicking the button <Icon d="showMarkers" />.

## Renaming the Marker Description

Let's say you want to turn the word *"hello"* in a text into a marker. By default, the description will also be "hello," but if you want to remember why you placed a marker at this spot (to identify a scene shift, a speaker change, etc.), you can change the description content by clicking on the description label, as shown in the illustration below:
![Marker Renaming](/marker-rename.jpg) 
The marker will then appear as follows:
<Q type="marker" text="HELLO" meta="SCENE SHIFT"/>

## Selecting a marker

To select a marker (to toggle it's type for instance), you may either double-click on its text content in one of the two editors <Number n="2"/> / <Number n="4"/>, or double-click on the target Icon <Icon d="gotoDoc" /> next to the marker name in the marker list <Number n="5" />

## Changing the Marker Type

There are three types of markers:

<Q type="marker" text="Standard" meta="Standard Marker" />&nbsp;
<Q type="presenter" text="Presenter" meta="Presenter Marker" />&nbsp;
<Q type="actionMarker" text="Action" meta="Action Marker" />&nbsp;

Standard and presenter markers serve the same bookmarking purpose, just with different colors to help you see things more clearly. Additionally, presenter markers can be configured not to appear on the external prompter screen (to help you as the operator, without disrupting the speaker’s readability).
As for ActionMarkers, they are a powerful OtO feature explained in more detail [here](./action-markers).
You can change the marker type (toggle between Standard / Presenter. Action Markers require a [specfic syntax](./action-markers)) by first selecting it with a double-click in either editor, then clicking the button <Icon d="toggleMarkerType" />
![Marker Type Toggle](/marker-toggle.jpg)
Finally, you can configure which marker types should appear on the prompter screen by going to `Settings -> Markers and timers` then, select "Show markers on external display"

## Navigating Between Markers

To jump directly to any marker, click the <Icon d="gotoDoc" /> in the marker panel <Number n="5"/> . 

:::admonition type=warning
- BE CAREFUL! In ***Prompting mode*** <Number n="1b"/>, only the the _Prompting Editor_ <Number n="2"/> will scroll to the desired marker
- In ***Editing Mode*** however, A click on <Icon d="gotoDoc" /> will scroll the editor area (either  <Number n="2"/> or <Number n="4"/>) will scroll to that marker. This allows you, to keeping the _Prompter Editor_ display <Number n="4"/> in place to avoid distracting the speaker.
:::

:::admonition type=tip
To find the same text across editors, select one or more words and click the button <TextIcon text="Jump" icon="sync" /> <Number n="7"/> 
:::

To move to the next or previous marker, you can either:
- Click the buttons <Icon d="previousMarker" /> or <Icon d="nextMarker" />
- Use the shortcut on your physical controller (you can change the assignments in `Settings -> Controllers` then bind the input for the "Next" and "Previous" markers)
- The default keyboard shortcuts are `CTRL+PAGEDOWN` and `CTRL+PAGEUP`

- Last but not least, when navigating between markers, you can choose either to scroll the text so that the marker lands at the bottom of the screen—giving you, for example, time to anticipate upcoming Action Markers—or to scroll the text so that the marker aligns precisely with the cue indicator ▶. If desired, you can add an offset of +/- 150 pixels to fine-tune this positioning. Go to `⚙ Settings` → `Markers and Timers` → `Scroll Offset ▶ cue indicator` to enable or disable this behavior and set the aforementioned offset.
  
![marker-on-scroll-setting](/marker-scroll-offset.jpg)

:::admonition type="warning"
- This `Scroll Offset ▶ cue indicator` which controls the offset (in pixels) when navigating between markers setting for should not be confused with  `⚙ Settings` → `Markers and Timers` → `Action Marker Vertical Offset in Pixels`, which sets the default offset for triggering Action Markers 
:::


## Deleting a Marker

You can either double-click the button <Icon d="trash" /> (we don't want you to accidentally delete a marker with a single click!)
Or select the marker text in one of the two editors and click the button <Icon d="addMarker" />.
Finally, deleting the text containing the marker will, of course, also delete the marker."
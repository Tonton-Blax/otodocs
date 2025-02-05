---
title: FAQ and Troubleshooting
---

# {$frontmatter.title}

## Prompter display

**Keyboard shortcuts do not work when prompting**

It's likely you're focused in an editor window. You need to click elsewhere in the app (in any empty znoe) for the keyboard shortcuts to work.

**How to disable the prompter window fullscreen**

Go the **Options** menu then click on **Toggle display fullscreen**

## Licensing

**_Are licenses tied to an operating system?_**

No, you may use your license on Windows or Mac OtO Editions and even deactivate your license from one before reactivating on the other.

**_How can I find out when my license expires?_**

On Mac, go the **OtO** Menu (on Windows go to the **Help** menu instead) then click on "About my license..."

## Action Markers

**_When I navigate between markers, is it possible to land just before Action Markers so they don't trigger immediately?_**

Yes, refer to the [editing / Setting Margins and Offsets](/docs/oto-basics/editing#setting-margins-and-offsets) section.

## PowerPoint Markers

**_Local PowerPoint slides do not trigger_**

First, **make sure to disable** the _"Connect to PPT Server"_ option in `Settings -> Network`, as this is used for network connectivity and every `/ppt` marker would then try to trigger a remote PowerPoint server.
Also, make sur that your PowerPoint presentation is in slideshow mode.

**_Remote PowerPoint slides do not trigger_**

Make sure the port in the [OtO Slide Controller](/docs/markers/powerpoint-setup#controlloing-powerpoint-from-network) matches the one set in OtO in `⚙ Settings` → `Network` → \* *. To do so, simply append the port to the IP address after a colon `:`.
For example, if the IP of the *OtO Slide Controller\* machine is 192.168.10.2 and the port is 4001, enter: 192.168.10.2:4001 in the Powerpoint Connect configuration settings of the OtO Machine.

## Editing

**_Can I import Powerpoint files?_**

What you can do is import a .pptx file, which will only import the _notes_ of that .pptx and place [PPT Action Markers](/docs/markers/action-markers#action-marker-features) between each slide content

**_The progress indicator is jumping aroung and reports wrong values_**

If this happens, click on the **_topmost_** <Number n="3G" /> `...` dots in the [Rudown Panel](/docs/oto-basics/rundown), and select _"Refresh Progress"_

## Network

**_In network mode, can I connect different computers with different OS and resolutions?_**

In theory, yes, you can connect computers with different operating systems and resolutions. We've worked hard to ensure high display fidelity across various types of computers.

However, if you've chosen OtO, it's likely because you want to provide the highest level of security for your clients. The best way to ensure that level of reliability is to use computers of the same series, running the same operating system and with matching screen resolutions.

**_I installed the "OtOView" app on my mobile device but I can't see the QRCode_**

Ensure you've enabled Network Mode in `⚙ Settings` → `Network` then `Enable OtO network`, and also `Set this computer as OtO network Master`.
Save settings.
Then from OtO’s network settings dropdown <Icon d="network" stroke="none" fill="#ef4444"/>, click on the button <TextIcon icon="qrCode" text="QRCODE" />.

## Settings

**_How can I save or load my personal settings on another computer?_**

In the **_Options_** menu, select **_Open User Folder_**. This will open a file explorer or Finder window (on Mac) with the OtO folder.  
Inside this folder, you will find a file named _"settings.json"_. Copy it (on any support / platform) and overwrite the existing one on the other computer (by opening the "User Folder" again).

## Performance Issues

**_OtO is slow_**

* Start by ensuring that OtO meets the minimum recommended specifications mentioned in [this chapter](/docs/oto-basics/get-started#recommanded-specifications). 

* Often, the graphics card in your computer is configured to handle hardware acceleration for only one screen. 
In this case, we recommend setting the external screen as the primary display (and switching back if this is already the case). 
You can find instructions for performing this operation here: 
    * [For Windows](https://www.cedarville.edu/insights/computer-help/post/dual-screen-setup-for-desktop-computer-monitors) 
    * [For Mac](https://www.simplified.guide/macos/display-primary-change) 
* Lower the resolution of the teleprompter screen. 
* Close other applications.”



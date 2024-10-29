---
title: FAQ
---

# {$frontmatter.title}

## PowerPoint Markers

***Local PowerPoint slides do not trigger*** 

If you have the **Network** version, **make sure to disable** the *"Connect to PPT Server"* option in `Settings -> Network`, as this is used for network connectivity and every `//ppt` marker would then try to trigger a remote PowerPoint server.
Also, make sur that your PowerPoint presentation is in slideshow mode.

***Remote PowerPoint slides do not trigger*** 

Make sure the port in the [OtO Slide Controller](/docs/markers/powerpoint-setup#controlloing-powerpoint-from-network) matches the one set in OtO in `Settings` → `Network` → *  *. To do so, simply append the port to the IP address after a colon `:`.
For example, if the IP of the *OtO Slide Controller* machine is 192.168.10.2 and the port is 4001, enter: 192.168.10.2:4001 in the Powerpoint Connect configuration settings of the OtO Machine.

## Editing

***Can I import Powerpoint files***

What you can do is import a .pptx file, which will only import the *notes* of that .pptx and place [PPT Action Markers](/docs/markers/action-markers#action-marker-features) between each slide content

## Network

***In network mode, can I connect different computers with different OS and resolutions?***

In theory, yes, you can connect computers with different operating systems and resolutions. We've worked hard to ensure high display fidelity across various types of computers.

However, if you've chosen the network license, it's likely because you want to provide the highest level of security for your clients. The best way to ensure that level of reliability is to use computers of the same series, running the same operating system and with matching screen resolutions.

***I installed the "OtOView" app on my mobile device but I can't see the QRCode***

Ensure you've enabled Network Mode in `Settings` → `Network` then `Enable OtO network`, and also `Set this computer as OtO network Master`.
Save settings.
Then from OtO’s network menu <Icon d="network" stroke="none" fill="#ef4444"/>, click on the button <TextIcon icon="qrCode" text="QRCODE" />.

If you still can't see any of these options in the `Settings` Panel, you probably don't have the OtO **Network Edition** (you can check this by clicking the **Help** → **About** application menu, OtO edition name will appear, either *Demo*, *Freelance*, *Live* or *Network*).

---
title: Network Mode
---

# {$frontmatter.title}

If you have the **"Network Edition"** license, you gain access to OtO's network features, allowing you to synchronize multiple computers. This provides added security during your session, as you can seamlessly switch to another machine if one fails.

Unlike other presentation or teleprompter software, OtO operates in a peer-to-peer (P2P) mode rather than a client-server setup. All computers are interconnected directly, without relying on a server.

**Advantages of Peer-to-Peer Architecture:**
- **Increased Security**: The risk of failure is distributed across all connected machines, unlike in client-server architecture, where a server failure could take down the entire system.
- **Ease of Use**: It’s simpler to set up and less cumbersome in terms of cabling and devices, speeding up the deployment process.

![p2p-cs](/p2p-cs.png)

## Required Hardware

- At least two computers that meet OtO's minimum system requirements
- All computers must run the same operating system (either MacOS or Windows)
- Identical screen resolution across all computers
- All computers must be connected to the same network
- ***Display***: when prompting in network mode, you'll either need:
    - a video switch, HDMI, or other types of switches to toggle the teleprompter display when switching from one computer to another. Here are a few examples of robust and professional-grade HDMI and SDI switches (Blackmagic Design ATEM Mini Pro, Roland V-1HD HD Video Switcher, AJA KUMO 1616 SDI Router or Decimator Design DMON-QUAD for instance)
    - or a connected android display with [OtOView](#otoview) installed if you want to go wireless

## Master Computer

Although OtO’s peer-to-peer architecture doesn’t rely on a server, the concept of a **Master Computer** still exists. The master computer:

- Shares necessary connection information with the **client** computers
- Once all computers are connected, the network becomes fully peer-to-peer, meaning even the master can fail without disrupting the network.
- Triggers **ActionMarkers**, while clients follow along without triggering external events.
- Can be switched at any time to another computer if needed.

## Activating the Network

![Network Settings](/network-settings.jpg)

Activating network mode is simple but must ***imperatively*** be done **in the correct order**:

1. Ensure all computers are connected to the same network.
2. In the network settings ( <Icon d="settings"/> `Settings` → `Network`), activate the network option (**"Enable OtO Network"**), and note the displayed IP address.
3. If this is the main (master) computer, check the option **"Set this computer as OtO Network Master"**; if it's a client, leave this unchecked.
4. For client computers, enter the master computer's IP address in the **OtO Master URL** field.
5. Save your changes! Your documents are now synchronized.
6. Prompt and edit from the master computer—clients will automatically sync.
7. To switch a client computer to master, click the network icon <Icon d="network" stroke="none" fill="#ef4444"/> in the navigation bar and choose **"Take over"** from the dropdown menu.

## Network Status

![Network Settings](/network-dd.png)
<center>
<small><em>Network DropDown Menu, master and client versions</em></small>
</center>

To access the network status dropdown, click the <Icon d="network" stroke="none" fill="#ef4444"/> icon in the toolbar. This displays an overview of the status of all computers on the network, with their status indicated by color:

| COLOR                 | STATUS                          |  
|-----------------------|---------------------------------| 
|  <Round isBlue/>      | Master computer, online         | 
|  <Round isGreen/>     | Client computer, online         | 
|  <Round isRed/>       | Offline computer                | 

- The <TextIcon icon="openLock" text="Take over" /> / <TextIcon stroke="#ef4444" icon="closedLock" text="Currently leading" /> button allows you to switch a **client** to **master** (*"Take over"*). When a computer is the master, all others become clients, and the button becomes inactive, displaying "Currently leading."

- The "Status" line shows whether the computer is a **master** or **client**.

- The <TextIcon icon="qrCode" text="QRCODE" /> button generates a QR code. Scan it with the OtOView mobile app to turn any smartphone or tablet into a teleprompter display.

- The "*This machine IP*" line shows your machine's IP address.
  
## OtOView

OtOView is a mobile app developed specifically for OtO. Simple to use, it allows you to connect a tablet or smartphone (or even several devices!) to an OtO "master" computer that controls the scrolling of the text. This enables two main use cases:

1. Allows a speaker with a tablet or smartphone to move freely on stage or in a studio without having to rely solely on a camera prompter or speaker prompter.
2. Use a tablet as a wireless camera prompter screen.

***How to use OtOView:***
- Set up an OtO computer as the network ["master"](##master-computer).
- Download the app from the Google PlayStore (it will soon be available for Apple tablets and smartphones).
- Ensure the tablet or smartphone is connected to the same Wi-Fi network.
- From OtO’s network menu <Icon d="network" stroke="none" fill="#ef4444"/>, click on the button <TextIcon icon="qrCode" text="QRCODE" />.
- Scan this QRCode from the mobile app by clicking on <Number n="＋"/> then on <Icon d="qrCode" noborder />.
- You’re connected, and the device will now appear in the list of network devices.
- Repeat the procedure to connect other phones or tablets.
![network1](/otoview-1.jpg)

***OtOView Options***
- By clicking on <Number n="＋"/> and then on <Icon d="params" />, you access options to show or hide specific information.
![network1](/otoview-2.jpg)

### Troubleshooting and Faq

- Most network connection issues arise from incorrect connection order. Be sure to follow the steps outlined [above](#activating-the-network).
- Note that some connected computers or mobile devices may not immediately appear as offline after exiting or if the app crashes.
- It's recommended not to connect more than roughly a dozen of devices (mobiles and computers combined) at once. OtO’s serverless network architecture requires a full mesh topology, which could cause issues if too many machines are interconnected.

***In network mode, can I connect different computers with different OS and resolutions?***
In theory, yes, you can connect computers with different operating systems and resolutions. We've worked hard to ensure high display fidelity across various types of computers.

However, if you've chosen the network license, it's likely because you want to provide the highest level of security for your clients. The best way to ensure that level of reliability is to use computers of the same series, running the same operating system and with matching screen resolutions.

***I installed the "OtOView" app on my mobile device but I can't see the QRCode***
Ensure you've enabled Network Mode in `Settings` → `Network` then `Enable OtO network`, and also `Set this computer as OtO network Master`.
Save settings.
Then from OtO’s network menu <Icon d="network" stroke="none" fill="#ef4444"/>, click on the button <TextIcon icon="qrCode" text="QRCODE" />.

If you still can't see any of these options in the `Settings` Panel, you probably don't have the OtO **Network Edition** (you can check this by clicking the **Help** → **About** application menu, OtO edition name will appear, either *Demo*, *Freelance*, *Live* or *Network*).

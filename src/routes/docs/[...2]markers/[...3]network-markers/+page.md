---
title: Network Action Markers
---
# {$frontmatter.title}

OtO allows you to go even further than the predefined actionMarkers discussed in the [previous chapter](/docs/markers/action-markers), by enabling you to connect to any OSC or HTTP server. This allows you to trigger actions, such as playing a sound in Ableton Live® or starting a video on a BlackMagic Atem®. In OtO, this is called a **Network Action Marker**.

## Creating a Static Network Action Marker

Let’s walk through an example to better understand how to create these custom markers.

Custom action markers function just like "regular" [actionMarkers](/docs/markers/action-markers), but you need to define their specific details beforehand.

Let’s assume you want to control a Blackmagic HyperDeck using the excellent [Banyan AVBridge](https://www.banyan-av.com/avbridge#about).
According to the documentation, the OSC command to send is `/hyperdeck/play-single-clip/{x}`, where `{x}` refers to the video number in the HyperDeck.

We will first create a "static" custom marker, meaning a marker with a single command to trigger one action, for example, to play video number 2.

:::steps

!!!step title="Note the IP"|orientation="vertical"
Note the IP address of the machine you want to connect to, as well as the port (the default is port 3333).
!!!
!!!step title="Add the New Marker"|orientation="vertical"
In OtO, go to the settings and click the green "Add" button.
A modal window will appear with various fields:
![marker-osc-add-static](/marker-osc-add.jpg)
!!!
!!!step title="Fill the required information"|orientation="vertical"
  - In the "Network Type" field, choose **OSC**.
  - In the "Port" field, add the server port or ignore the field for default value
  - In "Group name" field, add something you will remember, like `deck`
  - In the "command" field, add the actual command, which is just `2` (the video clip we want to trigger)
!!!
!!!step title="Address/Command configuration"|orientation="vertical"
In the "URL / Address" field, enter the following:  
`10.10.7.10/hyperdeck/play-single-clip/`  
(Replace `10.10.7.10` with the IP address of the remote machine.
You should see in the Network Setting Window a new entry below the green <TextIcon text="add" color="white" bgColor="#367a59" icon="add" /> button with a reference to the maker we just created (note the trash and pen icon, to respectively edit or delete the marker)
![marker-osc-list](/marker-osc-list-static.jpg)
!!!
!!!step title="Create Marker"|orientation="vertical"
Next, create an actionMarker as we discussed in the [previous chapter](/docs/markers/action-markers) (select one or more words, then press the <Icon d="addMarker" /> or use `CTRL+M` or `⌘+M` on mac).
!!!
!!!step title="Save"|orientation="vertical"
Rename it to declare it as an actionMarker, using the syntax *group:command*. For our example, it would be:`//deck:2`
![marker-osc-list](/marker-network-description.jpg)
!!!
:::

We should now be able to trigger our shiny all new actionMarker, as a command that sends the previously defined OSC command to the Blackmagic HyperDeck. When triggered during your presentation, this marker will play the designated clip on the HyperDeck.

## Creating a Dynamic Network Action Marker

If you have many videos or events to trigger, it can quickly become tedious and inefficient to configure in the settings panel a new marker each time. In this case, you can create a dynamic marker.

Let’s go back to the example of video clips triggered via the address `/hyperdeck/play-single-clip/{x}`, where "x" can be any number (as long as the video exists in the HyperDeck).
We will do the same on our side.

The creation process is identical to static markers, so follow the steps up to step 5:

- Leave the "command" field empty (since the command is dynamic and will be interpreted at trigger time).
- In the address field, enter:  
  `10.10.7.10:3333/hyperdeck/play-single-clip/{{command}}`  
  Here, `{{command}}` acts as a placeholder, just like `{x}` in Banyan AVBridge’s documentation, allowing for a variable value.

- Save, and you can now quickly create as many markers as you have clips by renaming them, for example, `//deck:2`, `//deck:3`, etc.

This setup makes it easy to handle multiple dynamic events without needing to manually define each action in advance.

:::admonition type=info 
***HTTP SERVERS***

http servers work the same way, they're just more customizable since http is a more generic protocol. If you need to connect to an http server, you'll need to refer to the documentation of the server you wish to connect to check what method (POST or GET) is required.
You can add headers and body information with a JSON syntax (check the placeholders to get an example of how those should be formatted)
:::
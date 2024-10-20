---
title: Powerpoint Markers
---
# {$frontmatter.title}  

OtO allows remote control of PowerPoint slide transitions using a dedicated utility called OtO Slides, which can be installed on a remote machine (or even on the same machine). Action Markers starting with //ppt enable navigation to any specific slide.

## Setting-up powerpoint server

![otoslides](/otoslides.jpg)

To control the progress of a PowerPoint slideshow from OtO, you need to install the small utility "OtO Slide Controller" on the machine running the slideshow, which is available for download [here](https://oto.software/otoslides).

sOnce this application is installed on the other machine (or it can be the same machine), launch it, take note of the IP address displayed in the application, and set your presentation to full-screen slideshow mode.

Back in OtO, go to the `Settings -> Network` then in the field *"Powerpoint Server configuration"*, enable the network PowerPoint option, and enter the IP address (the IP will be displayed in **otslides** user interface). 


:::admonition type=warning
If you changed the `Server Port` in the *OtO Slide Controller* app, update the *Powerpoint Server configuration* field accordingly. Simply append the port to the IP address after a colon `:`. 

For example, if the IP is *192.168.10.2* and the port is 4001, enter:
`192.168.10.2:4001` in the *Powerpoint Server configuration* settings.
:::

You may click on the small <TextIcon text='CHECK'/> button at the end of the field to check if the server responds.
Confirm the changes, and you can now control your presentation remotely!)
![otoslides](/ppt-settings.jpg)

## Creating a PowerPoint marker

To learn how to create a marker, please refer to the [dedicated chapter](/docs/markers/action-markers). This chapter will provide detailed instructions and examples to help you understand the process thoroughly.

The syntax to enter as a description for creating a powerpoint actionMarker is:
`//ppt:command`

Here is the list of command supporterd by OtO and OtO-Slides to control powerpoint.

|  TYPE   | COMMAND     | EXAMPLES                                                                      |
|-------- | ----------- | ----------------------------------------------------------------------------- |
|  ppt    | [slide]     | `//ppt:3` Will go to slide 3                                                  |
|  ppt    | next        | `//ppt:next` (next slide)                                                     |
|  ppt    | previous    | `//ppt:previous` (previous slide)                                             |
|  ppt    | first       | `//ppt:first`                                                                 |
|  ppt    | last        | `//ppt:last`                                                                  |

## Importing Notes

You can also import notes from a .pptX file by navigating to the `File` menu and selecting` Import Notes from .pptX`

OtO will create a new text document from the powerpoint file, that aggregates all the notes from each slide in the presentation, separated by automatically created `//ppt` Action Markers corresponding to each slide. This setup allows the PowerPoint presentation to advance seamlessly as you read through the notes.

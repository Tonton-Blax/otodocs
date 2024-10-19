---
title: Editing text
---
# {$frontmatter.title}

OtO simplifies the process of editing and managing text for prompter / cued presentations, allowing you to efficiently import, format, and control documents with ease. Whether you're importing content from a .docX file or fine-tuning the formatting within the editor, OtO provides a flexible and intuitive interface designed for professional use.

In the following chapters, you'll learn how to import and edit documents, adjust formatting, use prompter mode, and work with markers—all essential skills for mastering OtO's text-editing features. Let's dive in!

## Importing Documents

- OtO can import any _.docX_ file. To do so, Either click on the <Icon d="importWord" /> toolbar icon or click on the `File → Import docX` menu.
- You can also Copy → Paste text content from any third-party software though we **strongly** suggest the .docX import way (less prone to formatting issues)
- You can select and open multiple files at once, they will appear in the Rundown&nbsp;/&nbsp;Document list panel <Number n="3"/>.
- To _save_ your new project, just click on the <Icon d="save" /> toolbar icon or click on the `File → save` or `File → save as` shortcut item and enter a name for your project, it will create a file with a _.prompt_ extension at the selected location.
- You can also import a project within an existing project by cliking on `File → Import project` menu item, which will basically merge the imported project with your current project.

:::admonition type=tip
You may also use keyboard shortcuts(click on the `File` menu to see the shortcut for some of the above commands)
:::

## Editing Documents

- OtO offers basic text processing features, such as <Icon d="bold" /> bold, <Icon d="italics" /> italic, <Icon d="fontColor" /> colors, and <Icon d="hilite" /> highlighting, as well as font size <Icon d="fontSize" /> and font family selection <Icon d="fontFamily" />.
Simply select the text you want to format and click the corresponding button on the toolbar.
- When it comes to font selection <Icon d="fontFamily" />, and font size<Icon d="fontSize" />, OtO takes a slightly different approach compared to traditional word processors to better suit the needs of teleprompter presentations. By default, changes made in either of these menus will apply to the entire current document. You can modify this behavior by using the "Apply to" dropdown in the font or size selection menu, where you can choose to apply changes to selected documents (use the rundown <Number n="3b" /> panel checkboxes to select multiple documents), all documents, or just the selected text.
- For color selection, the "Hilite" button acts as a toggle: when activated, the chosen color is applied as a highlight. This allows you to quickly apply both a color and a highlight from the same menu. Additionally, keyboard shortcuts `CTRL+ALT+1` (`⌘+ALT+1` on mac) through `CTRL+ALT+5` allow you to directly apply one of the first five colors (the same as in the dropdown menu), and the CTRL+ALT+H shortcut applies a predefined highlight.
  ![color-selection](/color-selection.jpg)
- You can also remove any previous formatting by clicking the <Icon d="clearFormat"/> button.


## Mini Editor <Number n="4" />

You may have already noticed that OtO provides two editing windows:  the _Prompter Editor_ Panel <Number n="2" />, and the _mini editor_ <Number n="4" />. Every time you enter text in the _Prompter Editor_, the text is updated in the _mini-editor_ and vice versa.

The top portion of the prompter editor displays exactly what the speaker sees on the external screen.
However, since the font size in this view is often very large, editing text directly can be cumbersome. Additionally, it’s difficult to anticipate upcoming text or get a comprehensive overview of the content.
This is where the _mini-editor_<Number n="2" /> comes in handy—it allows you to easily navigate through the document, preview the text ahead, and work on other sections without affecting the prompter screen. When you scroll within the mini-editor, it does not move the prompter display, allowing the speaker to stay focused on their current section while the operator works elsewhere.

This secondary editing window gives you the freedom to manage the text without disturbing the speaker’s flow, providing a powerful tool for operators. Here’s how you can make the most of it:

- The mini-editor allows you to preview and navigate through the upcoming text while in [prompter mode](/docs/oto-basics/prompting). You can scroll through the mini-editor without affecting the current position of the prompter screen, ensuring the speaker’s view remains uninterrupted.
- You can even edit the text directly in the mini-editor. However, be cautious—if you modify any text that appears before the speaker’s current position, the prompter will adjust and shift by a few lines.
- For added convenience, you can Sync (or rather “link”) the scrolling of the mini-editor to the Prompter Editor Panel by clicking the <TextIcon text="Sync" icon="sync" /> button. This creates a *one-way sync*, ensuring that what is displayed in the mini-editor matches what is shown in the Prompter Editor panel.
- 
:::admonition type=tip
When lost between the two editing panels ( <Number n="2"/> and  <Number n="4"/> ), you can easiliy find your way back by selecting one or several words in the _Prompter Editor_ or the _mini-editor_ before clicking the `Jump` button <Number n="7"/>, OtO will find the same selection in its counterpart editor.
:::

## Rundown Panel <Number n="3"/>
For a comprehensive overview of all the features available in this panel, refer to the [dedicated chapter](/docs/oto-basics/rundown). In the meantime, here's a brief introduction: 
- the _Rundown_ panel displays a list of all imported project documents.
- You can select multiple documents using the checkboxes <Number n="3b" /> beside each document. 
- The topmost checkbox allows you to select all documents at once.
- The active document (the one currently scrolling in the _Prompter Editor_ is signaled with a red dot <Round/>).
- Notice the current document progress indicator (not to be confused with the global progress indicator)
![progress](/search.jpg)

## Markers <Number n="5"/>
For a full understanding of OtO's powerful marker system, make sure to read the [main chapter](/docs/markers/standard-markers) and its sub-sections. However, here's a quick guide to get you started:

The _Markers_ sub-panel <Number n="5"/> keeps track of markers (which function like bookmarks). You can toggle the visibility of this sub-panel by clicking the <Icon d="showMarkers" /> button.
- To **create** a marker, select a short piece of text (1 to 3 words) in either the _mini-editor_ <Number n="4"/> or the _Prompter Editor_ Panel <Number n="2"/> and click the <Icon d="addMarker" /> toolbar button (or `CTRL+M` or `⌘+M` on mac). If you create a marker on text that already has one, doing this again will remove the existing marker.
- To **jump** to a marker, click the <Icon d="gotoDoc" /> button next to the marker in the _Markers_ sub-panel <Number n="5"/>. This will scroll either the _mini-editor_ <Number n="4"/> or the _Prompter Editor_ Panel <Number n="2"/> to that marker, depending on which one was last active.
- To **delete** a marker, double-click the <Icon d="trash" /> icon (this is designed to prevent accidental deletions).

:::admonition type=info
Markers are a key feature of OtO, and we strongly recommend reading the dedicated chapters to fully leverage their potential.
:::

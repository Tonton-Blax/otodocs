---
title: Controllers in OtO
---

# {$frontmatter.title}

Controllers are a key part of OtO's functionality, allowing for smooth, efficient, and precise control of the teleprompter. While OtO can be operated with just a keyboard and mouse, using dedicated hardware controllers significantly enhances the prompting experience for both the operator and speaker.

## Controller Types

OtO supports several types of controllers:

1. **Keyboard** - Basic control using keyboard shortcuts
2. **Contour Shuttle Devices** - Dedicated video editing controllers (Shuttle Xpress, Shuttle Pro)
3. **MIDI Controllers** - Any MIDI-compliant device including specialized controllers like nOb and Dark Fader
4. **Control Surfaces** - Devices like the Loupedeck that can be configured to work with OtO

## Configuring Controllers

To configure any controller in OtO, navigate to:
- `⚙ Settings` → `Controllers` in the main menu
- Or click the controller icon in the toolbar

![OtO Controller Settings](/settings-controllers.webp)

The settings panel has three tabs for configuring different controller types:
- **Keyboard** - For keyboard shortcuts
- **Shuttle** - For Contour Shuttle Xpress or Shuttle Pro devices
- **MIDI** - For any MIDI-compatible controller

### Keyboard Configuration

The keyboard tab allows you to assign various OtO commands to specific key combinations. This is particularly useful for:

- Setting up speed control keys (faster/slower)
- Creating keyboard shortcuts for essential functions
- Configuring marker navigation shortcuts

To assign a keyboard shortcut:
1. Click the **Change** button next to the command you want to assign
2. Press the key combination you wish to use
3. Click **Save** when you've completed your configuration

### Shuttle Device Configuration

[Contour Design's Shuttle](https://contourdesign.store/) controllers (Shuttle Xpress and Shuttle Pro) are highly recommended for professional teleprompter operation. These devices feature a jog wheel for precise control and multiple programmable buttons.

To configure a Shuttle device:
1. Connect your Shuttle device to your computer
2. In OtO's controller settings, select your device from the "Shuttle Controllers" dropdown
3. For each button, click **Change** and press the button on your controller you want to assign
4. Click **Save** when finished

**Note**: The jog/shuttle wheel functionality is automatically mapped to control scrolling speed and is not customizable.

### MIDI Controller Configuration

MIDI controllers offer the most flexibility and precision for controlling OtO. Any MIDI-compliant device can be configured, including:

1. **Standard MIDI Controllers** - Devices with faders, knobs, and buttons like the [nOb controller](https://www.nobcontrol.com/) or the [Dark Fader](https://dark-controller.com/darkfader/) is a sleek, minimalist MIDI controller featuring a high-quality 100mm fader that provides excellent precision for teleprompter control
2. **Specialized Controllers** - Such as the nOb and Dark Fader
3. **Mobile Apps** - MIDI control apps like TouchDaw
4. **DAW Controllers** - Music production controllers that output MIDI

To configure a MIDI controller:
1. Connect your MIDI device to your computer
2. In OtO's controller settings, select your device from the "MIDI Controllers" dropdown
3. Select the appropriate MIDI port if multiple options are available
4. For each command, click **Change** and move/press the control on your MIDI device you want to assign
5. Click **Save** when finished

#### Speed Control Considerations for MIDI

When configuring MIDI controllers for speed control, you have several options:

- **Speed Command**: Assign a continuous controller (CC) or PitchBend to directly control the scrolling speed. This is the most intuitive option for most users.
- **Faster/Slower Commands**: Similar to keyboard controls, these increment or decrement the speed with each press.
- **Reverse Command**: Assign a button to reverse the scrolling direction.

For the best experience with analog controllers (knobs, faders, etc.), we recommend:
- Assigning "Speed" to a continuous controller
- Using a bipolar controller (one that returns to center position) if available
- Alternatively, setting up "Reverse" on a separate button if using a unidirectional fader

:::admonition type=info
You cannot assign a key or button to a command that is already assigned. To resolve this, press the 'delete' button to free up the key or button, and then try again.
:::

## Loupedeck

The [Loupedeck CT controller](https://loupedeck.com/products/loupedeck-ct/) is the currently recommended way to control OtO. It can be configured to work with OtO through their custom software. This highly versatile controller offer a very convenient and smooth knob for precise scrolls, buttons, and touch controls for comprehensive OtO operation.

For Loupedeck configuration:
1. Install the Loupedeck software and load the [custom profiles](https://www.oto.software/#utilities) for OtO (available on [oto.software](https://oto.software) website).
2. Make sure the keyboard controler is enabled in the settings, and the reset the key bindings to factory settings if you changed them

## Speed Setting Configuration

Beyond assigning controls, you can fine-tune how controllers affect OtO's scrolling behavior by adjusting the speed settings:

1. Navigate to `⚙ Settings` → `Speed`
2. Select a preset acceleration curve or create your own
3. Adjust the "Global Speed Amplifier" to increase or decrease overall sensitivity

![OtO Speed Settings](/speed-settings.webp)

The acceleration curves determine how controller input translates to scrolling speed:
- **Linear** - Direct 1:1 mapping between input and speed
- **Exponential** - More precision at slower speeds, faster acceleration at higher inputs
- **Logarithmic** - Gentler initial response for fine control
- **Custom** - Create your own curve using the graphical editor

## Best Practices for Controller Setup

For professional teleprompting, we recommend:

1. **Use dedicated hardware** - While keyboards work, dedicated controllers provide better precision and feel
2. **Match the controller to your workflow** - Choose a controller that suits your specific needs:
   - Shuttle devices for general-purpose control
   - nOb or Dark Fader for precision speed control
   - Loupedeck or MIDI control surfaces for comprehensive control
3. **Practice with your controller** - Become familiar with your controller before using it in production
4. **Create custom acceleration curves** - Tailor the response to your preference and the specific controller
5. **Set up alternative control methods** - Always have a backup control method configured

With proper controller setup, OtO becomes an even more powerful tool for professional teleprompting, allowing operators to focus on the speaker rather than the interface. 
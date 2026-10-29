# Cyberpunk Red Agent Bridge (pjadga fork)

This is a fork of [SurrealTech's Cyberpunk Red Agent Bridge](https://gitlab.com/surrealtech/Cyberpunk-Red-Agent-Bridge)
(MIT licence, kept in `LICENSE.md`), for use with a self-hosted
[Cyberpunk Agent](https://gitlab.com/surrealtech/cyberpunk-red-agent). The code is upstream's 1.3.4; this
fork changes only the module's version (1.3.4.x) and where Foundry fetches updates from (this
repository's GitHub releases). It keeps upstream's module id, `cpr-agent`, so don't install
both.

**Pointing it at your own Agent:** in your Agent, open **Settings**, generate an **API Key** and click
**Copy Foundry Setup Code**; in Foundry, paste it in **Configure Settings → Agent Bridge → Quick
Setup**. That sets your Agent's address, channel, API key and Reverb key for the world. The built-in
default address is still upstream's hosted Agent.

**Manifest URL:** `https://github.com/pjadga/cpr-agent-bridge/releases/latest/download/module.json`

All credit for the module goes to its original author; upstream's README follows.

---

# Cyberpunk Red Agent Bridge

A Foundry VTT module that connects your Cyberpunk Red game to the Cyberpunk Agent web application, enabling real-time character synchronization, remote dice rolling, token movement and management.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
  - [Method 1: Install via Manifest URL (Recommended)](#method-1-install-via-manifest-url-recommended)
  - [Method 2: Manual Installation](#method-2-manual-installation)
- [Setup Guide](#setup-guide)
  - [Step 1: Enable the Module](#step-1-enable-the-module)
  - [Step 2: Configure World Settings (GM Only)](#step-2-configure-world-settings-gm-only)
  - [Step 3: Player Setup](#step-3-player-setup)
  - [Step 4: Assign Characters to Players (GM Only)](#step-4-assign-characters-to-players-gm-only)
- [Configuration Options](#configuration-options)
- [Troubleshooting](#troubleshooting)

---

## Requirements

- **Foundry VTT**: Version 12
- **Game System**: [Cyberpunk Red Core](https://foundryvtt.com/packages/cyberpunk-red-core) system
- **Agent Account**: An account on the Cyberpunk Agent platform (default: https://agent.surrealdisco.co.uk) the current hosting is free, but if you want to self host there is the source code on my [Gitlab repo](https://gitlab.com/surrealtech/cyberpunk-red-agent)

---

## Installation

### Best Method
1. Use the Foundry VTT Add-on Modules and search for the module "Cyberpunk Red Agent Bridge"!

### Method B: Install via Manifest URL (Recommended)

1. Open Foundry VTT and navigate to the **Add-on Modules** tab
2. Click **Install Module**
3. Paste the following manifest URL into the **Manifest URL** field:
   ```
   https://gitlab.com/surrealtech/Cyberpunk-Red-Agent-Bridge/-/raw/main/module.json
   ```
4. Click **Install**
5. Wait for the installation to complete

### Method C: Manual Installation

1. Download the `cpr-agent.zip` file from the [GitLab repository](https://gitlab.com/surrealtech/Cyberpunk-Red-Agent-Bridge)
2. Extract the contents to your Foundry VTT modules folder:
   - **Windows**: `%localappdata%/FoundryVTT/Data/modules/`
   - **macOS**: `~/Library/Application Support/FoundryVTT/Data/modules/`
   - **Linux**: `~/.local/share/FoundryVTT/Data/modules/` or your custom data path
3. Ensure the extracted folder is named `cpr-agent`
4. Restart Foundry VTT


---

## Setup Guide

### Step 1: Enable the Module

1. Launch your Cyberpunk Red world in Foundry VTT
2. Go to **Settings** -> **Manage Modules**
3. Find **Cyberpunk Red Agent Bridge** in the list
4. Check the box to enable it
5. Click **Save Module Settings**

### Step 2: Configure Settings (GM Only)

By default, the out of the box settings should work with the live Agent app as that is what it's designed for.
However, should you need to change any of them, here's a table to help with what they do:

1. Go to **Settings** -> **Module Settings**
2. Find the **Cyberpunk Red Agent Bridge** section

| Setting | Description | Default |
|---------|-------------|---------|
| **Agent URL** | The base URL of your Agent server | `https://agent.surrealdisco.co.uk` |
| **Channel ID** | A unique identifier for your game group (must match your Agent dashboard) | *(empty)* |
| **API Key** | Your personal API token from the Agent dashboard | *(empty)* |
| **Reverb Host** | Override for WebSocket host (leave blank to auto-detect) | *(empty)* |
| **Reverb Port** | WebSocket port (0 = auto-detect based on SSL) | `0` |
| **Reverb Use SSL** | Enable secure WebSocket connection (wss) | `true` |
| **Reverb App Key** | The Reverb application key | `itdsiqtx8cpskowawl1p` |
| **Debug Mode** | Enable verbose console logging for troubleshooting | `false` |

3. Click **Save Changes**

The reverb options are mainly there if you self-host the Agent app and need to setup custom tunnels and proxies.
The Debug option is there so you can see what is being sent and received between the Agent app. Good for troubleshooting if you are self-hosting.

### Step 3: Player Setup

Each player needs to link their Agent account:

1. **Create an Agent Account**:
   - Visit the Agent platform (e.g., https://agent.surrealdisco.co.uk)
   - Register for an account or log in

2. **Generate an API Key**:
   - Go to your Agent dashboard
   - Navigate to Config (bottom right)
   - Generate a new API key
   - Copy the key

3. **Configure Foundry**:
   - In Foundry VTT, go to **Settings** -> **Module Settings**
   - Find **Cyberpunk Red Agent Bridge**
   - Paste your API key into the **API Key (Sanctum Token)** field
   - Save your settings

4. **Verify Connection**:
   - You should see a notification: *"Cyberpunk Bridge: Online"*
   - Your account will be linked and you'll see: *"Agent: Account linked successfully."*
   - Once you're GM has assigned you a character, you'll be able to save them from the dropdown in Agent/Config.

### Step 4: Assign Characters to Players (GM Only)

Once players have linked their API keys, you can assign characters:

1. Go to **Settings** -> **Module Settings**
2. Find **Cyberpunk Red Agent Bridge**
3. Click **Manage Characters** under "Player Assignments"
4. In the assignment menu, you'll see:
   - A list of all players
   - Their API link status (✔ Linked or ❌ Missing)
   - Their Agent Link ID
   - A dropdown to assign characters

5. Select the appropriate character for each linked player
6. Click **Save Assignments**

The assignments will sync to the Agent platform, allowing players to interact with their characters through the Agent interface.

---

### Client Settings (Per Player)

| Setting | Scope | Description |
|---------|-------|-------------|
| API Key | Client | Personal API token from Agent dashboard |
| Debug Mode | Client | Enable detailed console logging |

---

## Troubleshooting

### "Cyberpunk Bridge: Online" notification doesn't appear

- **Check your API Key**: Ensure you've entered a valid API key in the module settings
- **Verify the Agent URL**: Make sure the URL is correct and accessible
- **Check your browser console** (F12): Look for error messages
- **Enable Debug Mode**: Turn on debug mode in settings to see detailed connection logs

### Players show "❌ Missing" in the assignment menu

- The player hasn't configured their API key yet
- Ask them to follow [Step 3: Player Setup](#step-3-player-setup)
- Use the refresh button (🔄) next to their name to update their status

### Connection drops or is unstable

- Check your network connection
- Verify the Reverb settings match your server configuration
- If using a custom server, ensure WebSocket ports are open
- Try toggling the SSL setting if you're having connection issues

### Rolls aren't being captured

- Ensure the GM is connected (the GM acts as the bridge for roll capture)
- Check that the character is properly assigned to the player
- Verify both the player and GM have valid API keys configured

### "Agent Link" shows "Pending..."

- The player's account hasn't fully synced yet
- Ask the player to save their settings again
- Use the **Refresh All Users** button in the assignment menu

### Rolls are not updating stats or item information

- The Agent ID is likely out of update (It is possible to have a link across many games)
- Use the Refresh button next to the user that is not receiving the synchronisation

---

## Features

Once configured, the Agent Bridge enables:

- **Real-time Character Sync**: Changes in Foundry automatically sync to the Agent
- **Remote Dice Rolling**: Roll skills, stats, attacks, and damage from the Agent interface
- **Combat Support**: Initiative rolls, attack rolls with DV calculation, damage rolls
- **Netrunning**: Program installation, rezzing, and interface ability rolls
- **Death Saves**: Track and roll death saves through the Agent
- **Token Movement**: Move tokens on the map via Agent commands
- **Live Updates**: Sheet changes, item updates, and equipment changes sync instantly

---

## License

See [LICENSE.md](https://gitlab.com/surrealtech/Cyberpunk-Red-Agent-Bridge/-/blob/main/LICENSE.md) for details.

---

## Support

For issues, feature requests, or contributions, visit the [GitLab repository](https://gitlab.com/surrealtech/Cyberpunk-Red-Agent-Bridge).

If you'd like to support development, you can buy me a coffee:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/V8M8238Q2V)
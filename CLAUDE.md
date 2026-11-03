# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands
This is a client-side web project. No build step is required.

- **Run/Preview**: Open `index.html` in a web browser.
- **Dependencies**: The project uses Phaser 3 and Firebase SDK via CDN.

## Architecture
The project is a simple single-page application (`index.html`) that combines a game engine and a backend service.

- **Frontend (Game)**: Built with [Phaser 3](https://phaser.io/). The game logic (preload, create, update) is contained within a `<script>` tag in `index.html`.
- **Backend (Authentication & Data)**: Integrated with [Firebase](https://firebase.google.com/) using the Compat SDK.
    - **Authentication**: Google Auth is used for user login.
    - **Database**: Firebase Realtime Database stores and retrieves user-specific game data.
- **Assets**: Game sprites and animations are located in the `img/` directory.

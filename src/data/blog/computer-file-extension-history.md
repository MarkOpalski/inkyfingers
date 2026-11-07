---
author: Mark Opalski
pubDatetime: 2026-07-14T00:00:00Z
title: The File Extension Is a 1974 Performance Hack That Became a Security Hole
draft: false
tags:
  - computing-history
  - systems-design
  - human-factors
description: How a 1970s disk-seek optimization in CP/M hardened into DOS and Windows load-bearing logic, then into a 25-year-later exploit vector. A short case study in how engineering tradeoffs outlive the constraints that justified them.
---

## The timeline

This is well-documented history. The steps were distinct and separated by decades, and each one followed logically from the last.

### 1960s–70s: the performance tradeoff

Early operating systems at MIT, Bell Labs, and IBM ran on hardware where every operation was expensive. Reading a file's first bytes to determine its type required a disk seek, measured in milliseconds on the hardware of the era, which was genuinely slow. Storing type information in the filename itself was readable from the directory index without opening the file at all. CP/M (1974) formalized the `filename.ext` structure with a 3-character extension limit. It was an explicit engineering tradeoff: correctness sacrificed for speed.

Unix arrived in the same window (1969–1973, Bell Labs, Ken Thompson and Dennis Ritchie) and made a deliberate counter-decision: Unix files carry no mandatory extension. The OS reads the file header instead, using magic bytes: a shell script starts with `#!/bin/sh`, an ELF binary starts with `0x7f454c46`. This is why the `file` command works correctly on Unix systems.

CP/M's convention spread through the microcomputer world regardless, because it was legible in a way Unix's magic-byte approach wasn't. A user could look at `.txt` and understand it. `0x7f454c46` meant nothing to them.

### 1980s: the assumption

MS-DOS (1981) inherited CP/M's extension model and hardcoded it deeper. DOS used extensions to determine which program opened a file: `.exe` runs directly, `.bat` runs as a script, `.com` runs as a raw binary. The extension stopped being a hint and became executable logic.

Windows 3.1 (1990) built its file association registry on top of that. Double-clicking a file triggered a registry lookup by extension. By this point the assumption was load-bearing: the entire user-facing model of "files have types" was implemented as "files have extensions."

### 1990s: the security surface

Windows 95 introduced hiding extensions for "known file types," inherited into Finder's later behavior as well. The stated rationale was reducing clutter. The security implication went unexamined: a user looking at `invoice.pdf.exe` saw `invoice.pdf` with a PDF icon, an icon an attacker could set manually.

The ILOVEYOU worm (2000) turned that gap into an exploit at scale. It spread as `LOVE-LETTER-FOR-YOU.TXT.vbs`, a Visual Basic script that read as a text file because Windows hid the `.vbs` extension. It infected roughly 10% of internet-connected Windows machines and caused an estimated $10 billion in damage.

Roughly 25 years elapsed between the original performance tradeoff and the moment it became a major security liability. Nobody designing for 1974 hardware was accounting for the threat model of 1999.

## How other systems handled the same problem

**Unix/Linux** never adopted mandatory extensions. File type is determined by magic bytes, so `file` is accurate and extensions carry no system meaning. Renaming `virus.txt` to `virus.exe` does nothing on Linux; execution depends on a separate permission bit.

**macOS** is a hybrid. It inherited Unix's magic-byte infrastructure, which is why `file` works correctly, but layered a Windows-style extension-based association system on top for the GUI, to stay familiar to users switching platforms. macOS knows the truth (magic bytes) and tells a convenient lie (extensions) depending on which layer is being asked.

**RISC OS** (Acorn, 1987) stored file type as filesystem metadata, a 12-bit number on the directory entry, entirely separate from the filename. Correct by design, but the metadata didn't survive a transfer to DOS.

**AmigaOS** (1985) took a similar approach, storing type information in the file's own data fork.

The pattern holds across all of them: every system that got type identity right stored it somewhere other than the filename, either in the file's own bytes or in filesystem metadata. Every system that got it wrong tied identity to the name, which is mutable, user-controlled, and trivially spoofed. The wrong approach won because it was simpler to implement, easier for a user to read at a glance, and DOS had the installed base.

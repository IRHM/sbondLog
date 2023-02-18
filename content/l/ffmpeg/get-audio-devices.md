---
title: Geting Audio Devices For Use With FFMpeg
date: 2023-02-18T20:56:55Z
description: "How to list audio devices available on your system for use with FFMpeg for Windows and Linux."
categories:
  - FFMpeg
  - PulseAudio
---

{{<link-heading "dshow">}}

Use this on Windows.

```bash
ffmpeg -list_devices true -f dshow -i ""
```

{{<link-heading "pulse (pactl)">}}

Use this on Linux with PulseAudio installed.

```bash
pactl list sources
```

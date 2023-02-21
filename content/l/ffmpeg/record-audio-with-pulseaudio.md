---
title: Record Audio Using FFMpeg With PulseAudio On Linux
date: 2023-02-21T20:26:59Z
description: "How to record audio from any input sources on your device with FFMpeg utilizing PulseAudio on Linux."
categories:
  - FFMpeg
  - PulseAudio
---

On Linux with PulseAudio installed.

{{<link-heading "List all devices">}}

To list all of our devices we can run this command:

```bash
pactl list sources
```

{{<link-heading "Record an audio device">}}

We will be using the `Source #Number` from the command above here. Replace the placeholder (`<Source Number>`) in the command below with it.

**Recording one input:**

```bash
ffmpeg -f pulse -i <Source Number> pulse.wav
```

**Recording multiple inputs:**

```bash
ffmpeg -f pulse -i <Source Number> -f pulse -i <Source Number> -map 0 -map 1 pulse.mp4
```

**Note:** To record desktop audio all you have to do is get the source id of the headphones/speakers the audio is playing to.

{{<link-heading "Windows?">}}

If you are on Windows, the command below should work for you or hopefully atleast get you in the right direction.

```bash
ffmpeg -f dshow -i audio="full audio device name" out.mp3
```

DirectShow Wiki For More Info: https://trac.ffmpeg.org/wiki/DirectShow

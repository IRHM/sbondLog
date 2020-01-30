---
title: Suddenly Not Seeing Shared Devices On Network Win10
date: 2019-04-27T09:43:26+01:00
description: "Not Seeing Shared Devices Anymore Win10"
categories:
  - Configuration
author: "sbondo1234"
authorspaceless: "sbondo1234"
---

{{< link-heading "What?" >}}

As you may know, Homegroup was removed from Windows 10 and the new Network tab replaced it. It is essentially the same thing, you can share files between different PCs across your network. I use this tool a lot when sharing files between PCs and it is very useful, whilst working.

If you have suddenly had your network tab stop showing certain PCs on your network consider this fix

{{< link-heading "The Fix" >}}

1. In the **⊞Windows Menu**, search for **Services** & open it.
2. Find **Function Discovery Provider Host** and double click to open.
3. Click Stop if already running.
4. Click the **Startup Type** dropdown dialog and change it to **Automatic (Delayed Start).**
5. Click **Apply**, then Start & finally Ok.
6. Repeat the process from steps 3-5 on the service Function Discovery Resource Publication.

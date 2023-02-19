---
title: How I Logged in on Debian With a Partially Broken Keyboard
date: 2023-02-19T12:38:45Z
description: "How I logged in on my Debian Linux machine without being able to type in my password"
categories:
  - Linux
---

{{<link-heading "How This Happened">}}

My laptop has broken keys, luckily just all the numbers and the letter `o`, but unluckily my password was `1234` (I know..).

I was only able to login previously because whilst I had access to a USB keyboard at home, I setup my bluetooth one to auto connect at login. Of course whilst I'm away I take just my bluetooth keyboard.

Yesterday I made a huge mistake, disconnecting the bluetooth keyboard and restarting the laptop because It randomly stopped working... of course I ended up locked out of my system not being able to type in my password `1234` on the broken laptop keyboard.

So I went to bed, cried myself to sleep and woke up without a plan. An hour later, I had a brain fart which resulted in the following steps.

{{<link-heading "Steps I Took To Login">}}

TL;DR I reset the password on my system (which was kind of scarily easy, but glad it was so at this point) by taking advantage of autocompletion in bash.

1. Start/restart to get to GRUB.
2. Click `e` to edit your linux installs boot script.
3. Go down to the line that specifies your linux kernel image and UUID (it starts with `linux`).
4. At the end of the line, add the following:

    ```
    init=/bin/bash
    ```
    so that you are left with something like this:
    ```
    linux /boot/vmlinuz-5.10.0-21-amd64 root=UUID=WHATEVER init=/bin/bash
    ```
5. Now hit `Ctrl+X` or `F10` to boot with the edits. Don't worry about coming back here to revert changes later, this will only apply them for this boot.
6. After booting you will be in the terminal, logged in as root. The filesystem will be in read-only (ro) mode, so run the following to remount it with read and write (rw) permissions.
    ```
    mount -n -o remount,rw /
    ```
7. Now we are able to write to the filesystem, we can update our users password:
    ```
    # If you'd like to change another users pass,
    # simply add their username after passwd with a space (eg passwd dobby)
    passwd
    ```
8. 🎉 We're done! Now we can reboot the system and log in with the new password we set.

{{<link-heading "Using autocompletion">}}

Here's how I figured out how to use letters that weren't working on my keyboard.

In my case, I needed the letter `o` to execute the remount command on step 6 above. I simply used `ls` to autocomplete to a folder on my system that had the letters I needed in them, then removed everything else and typed around the letters so they would go where needed to run the command.

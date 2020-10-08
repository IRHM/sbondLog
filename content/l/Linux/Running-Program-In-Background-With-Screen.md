---
title: Running Programs In The Background With Screen
date: 2020-10-05T19:48:45+01:00
description: "How to run programs in the background in a cli on linux"
categories:
  - Linux
author: "sbondo1234"
---

{{<link-heading "Installation">}}

Change `apt` to the package manager you want to use.

{{<highlight "shell session">}}
$ apt install screen
{{</highlight>}}

{{<link-heading "Usage">}}

### Run script in a 'screen'

{{<highlight "shell session">}}
$ screen ./scriptName.sh
{{</highlight>}}

### List screens

{{<highlight "shell session">}}
$ screen -ls
{{</highlight>}}

### Resume a screen session

#### One session running

{{<highlight "shell session">}}
$ screen -r
{{</highlight>}}

#### Multiple sessions running

If you have multiple screen sessions running, you have to list them first to get their ids:

{{<highlight "shell session">}}
$ screen -ls
There are screens on:
        784.pts-1.108124a2ab91  (10/05/20 19:18:54)     (Detached)
        622.pts-1.108124a2ab91  (10/05/20 18:56:33)     (Detached)
        1024.secretStuff        (01/05/53 00:00:00)     (Detached)
{{</highlight>}}

Then you can resume a session by using its ID (the first number before the `.` or name of the session):

{{<highlight "shell session">}}
$ screen -r 784
{{</highlight>}}

In my case, I could have replaced `784` in the command above with `622`, `1024` or `secretStuff`.

### Exit a screen
To exit a screen and let it run in the background you can, **while holding control press A + D**.

### Rename a screen
Replace `mySessionsID` with the id or name of the session you want to rename and 
`newName` with the desired name for the session.

{{<highlight "shell session">}}
$ screen -X -S mySessionsID sessionname newName
{{</highlight>}}

### Delete a screen
Replace `mySessionsID` with the id or name of the session you want to stop.

{{<highlight "shell session">}}
$ screen -X -S mySessionsID quit
{{</highlight>}}
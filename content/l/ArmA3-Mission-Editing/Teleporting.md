---
title: Teleporting
date: 2018-11-10T08:55:21+01:00
description: ""
categories:
  - ArmA3 Mission Editing
author: "sbondo1234"
authorspaceless: "sbondo1234"
---

{{< link-heading "Teleporting To Markers" >}}

To teleport players to markers we will be making use of both setPos & getMarkerPos.

First, we will have to place a marker down in the spot we want the players to be teleported to. You can do this in the ArmA 3DEN Editor, by going to Markers (F6), Icons and then selecting the marker you want to place down. I prefer to use 'Empty' markers under System since it doesn't show on the map.

After we have the marker placed down we will have to double click on it and change the Variable Name to something unique and clear so we can tell what it is for easily.

Once we have done everything above we can simply use the code below to teleport the player to the marker:

{{< highlight C >}}player setPos (getMarkerPos "Marker_Name");{{< /highlight >}}

Just change 'Marker_Name' and you are good to go, you have a line of code which will teleport the player to a specific marker! You can of course change 'player' to whatever you want as long as it is defined as something.

As an example, if we have the Variable Name of a player set to "player_1" we can alter the code a little to teleport just that player:

{{< highlight C >}}player_1 setPos (getMarkerPos "Marker_Name");{{< /highlight >}}

{{< link-heading "Teleporting To Coordinates" >}}

To teleport a player or anything to a specific coordinate we will have to find the coordinates we want to teleport them to.

To find coordinates in 3DEN Editor we can simply right-click wherever we want, go to Log and click on 'Log Position to Clipboard'. This will give us the position of our click in 3DEN Editor. You can also do this more precisely, by placing a marker down and logging the position of that to the clipboard. Both work!

<center>
  <div class="Image">
    <img src="https://ul.sbond.co/i/log/arma3/Logpositiontoclipboard.png"
    alt="Logging Position">
  </div>
</center>

The code we use is altered a little since now we aren't teleporting to a marker we don't need gerMarkerPos. We will only be using setPos.

{{< highlight C >}}player setPos [x,y,z];{{< /highlight >}}

Of course, you can still change 'player' to whatever you want.

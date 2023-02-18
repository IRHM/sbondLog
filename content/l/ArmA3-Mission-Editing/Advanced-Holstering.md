---
title: Advanced Holstering
date: 2018-10-13T05:02:44+01:00
description: "Advanced Holstering"
categories:
  - ArmA3 Mission Editing
---

{{<link-heading "What Is This?">}}

Believe it or not there is a very easy way to allow your character to put their primary weapon on their back and or pistol in their holster. This will work great in scenes you want to have a great cinematic effect. This will work wherever you put it and is a great line of code to have. Personally I think this works great in multiplayer missions to allow players to fully holster their weapons, instead of having to tap 'CTRL' twice just to put your gun down a bit.

{{<link-heading "How?">}}

There is a really simple line of code you can use below:

<pre><code class="c">player action ["SwitchWeapon", player, player, 100];</code></pre>

Remember this is just the code to activate the animation, you can do much more with it. I would personally add this into another script which activated this when a button is clicked.

{{<link-heading "How It Looks">}}

<center>
<img class="br3" src="https://ul.sbond.co/i/log/arma3/advancedholstering.png" alt="Advanced Holstering in Action" />
</center>

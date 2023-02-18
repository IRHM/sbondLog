---
title: Removing or Adding Items
date: 2018-10-22T08:24:44+01:00
description: "Removing or Adding Items"
categories:
  - ArmA3 Mission Editing
---

{{<link-heading "Adding Items">}}

You can use the commands below to start adding Items to players. Of course, you can change 'player' to whatever you want as long as you define it first.

Inside of the Speech Marks, you will put <a href="https://community.bistudio.com/wiki/Arma_3_CfgWeapons_Weapons" target="_blank" class="b bb bw pb1 no-underline black dim">classnames</a> for the items you want to be added to the player.

{{<highlight C>}}
player addHeadgear "classname goes here";
player addUniform "classname goes here";
player addVest "classname goes here";
player addBackpack "classname goes here";
player addGoggles "classname goes here"; //You use this command for face wear as well
{{</highlight>}}

{{<link-heading "Removing Items">}}

Removing items from players is very similar, you can simply use one of the commands below to remove specific items. You can still change 'player' to whatever you want, as long as it is defined!

{{<highlight C>}}
removeAllWeapons player;
removeAllItems player;
removeAllAssignedItems player;
removeUniform player;
removeVest player;
removeBackpack player;
removeHeadgear player;
removeGoggles player;
{{</highlight>}}

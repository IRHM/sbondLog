---
title: Placing Trees in Eden Editor
date: 2018-10-17T07:47:54+01:00
description: "Placing Trees in Eden Editor"
categories:
  - ArmA3 Mission Editing
author: "sbondo1234"
---

{{< link-heading "How Would I Do This?" >}}

To add a tree you first have to place down a game logic wherever you please and copy the code below into it:
{{< highlight C >}}_tree = createSimpleObject ["TREE NAME", [X,Y,Z]];{{< /highlight >}}

Once you have the code in there you are going to have to edit some things before your tree will be placed:

**First,** you are going to want to add the tree name you want from the list below and replace it with 'TREE NAME' in the code.

**Secondly,** you want to find the coordinates of the place you want the tree to be placed, to do this you can place down a random object, open it up and copy the X & Y from it and put it in the code. The 'Z' for the trees are a bit weird, you will have to experiment for each tree you place, I would start with 5 and if the tree is in the ground make the 'Z' bigger and if it's in the sky, lower the 'Z' value.

I have put the different trees below and what they look like so you don't have to manually try every one to see which you like. I have also put the 'Z' value that worked for me so you can use that first as a base value to start from, It won't always work but it will make it a bit easier for you.

{{< link-heading "Types of Trees" >}}

**Note:**The Z value is the one I used so you can start off with that before changing it higher or lower. ( Don't put the speech marks in the line of code ).

<center>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree1.jpg" alt="Tree1"/>
  <p class="BannerText">"a3\plants_f\Tree\t_BroussonetiaP1s_F.p3d" : Z = 5</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree2.jpg" alt="Tree2"/>
  <p class="BannerText">"a3\plants_f\Tree\t_FicusB1s_F.p3d" : Z = 5</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree3.jpg" alt="Tree3" />
  <p class="BannerText">"a3\plants_f\Tree\t_FicusB2s_F.p3d" : Z = 6.5</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree4.jpg" alt="Tree4" />
  <p class="BannerText">"a3\plants_f\Tree\t_FraxinusAV2s_F.p3d" : Z = 13.5</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree5.jpg" alt="Tree5" />
  <p class="BannerText">"a3\plants_f\Tree\t_OleaE1s_F.p3d": Z = 6.5</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree6.jpg" alt="Tree6" />
  <p class="BannerText">"a3\plants_f\Tree\t_OleaE2s_F.p3d": Z = 7</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree7.jpg" alt="Tree7" />
  <p class="BannerText">"a3\plants_f\Tree\t_PhoenixC1s_F.p3d" : Z = 5.5</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree8.jpg" alt="Tree8" />
  <p class="BannerText">"a3\plants_f\Tree\t_PhoenixC3s_F.p3d": Z = 11</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree9.jpg" alt="Tree9" />
  <p class="BannerText">"a3\plants_f\Tree\t_PinusP3s_F.p3d": Z = 7</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree10.jpg" alt="Tree10" />
  <p class="BannerText">"a3\plants_f\Tree\t_PinusS1s_F.p3d": Z = 5.5</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree11.jpg" alt="Tree11" />
  <p class="BannerText">"a3\plants_f\Tree\t_PinusS2s_b_F.p3d": Z = 10</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree12.jpg" alt="Tree12" />
  <p class="BannerText">"a3\plants_f\Tree\t_PinusS2s_F.p3d": Z = 9</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree13.jpg" alt="Tree13" />
  <p class="BannerText">"a3\plants_f\Tree\t_poplar2f_dead_F.p3d": Z = 10</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree14.jpg" alt="Tree14" />
  <p class="BannerText">"a3\plants_f\Tree\t_PopulusN3s_F.p3d": Z = 17</p>
</div>

<br>

<div class="Image Banner">
  <img src="https://ul.sbond.co/i/log/arma3/trees/tree15.jpg" alt="Tree15" />
  <p class="BannerText">"a3\plants_f\Tree\t_QuercusIR2s_F.p3d": Z = 11</p>
</div>

<br>
</center>

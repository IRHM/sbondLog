---
title: Hints
date: 2018-10-14T07:29:31+01:00
description: ""
categories:
  - ArmA3 Mission Editing
---

{{<link-heading "What Is This?">}}

Hints are something you can use very easily to alert players of something or tell them what they have to do next or what they have done. It basically gives the players or whoever you let see the hint a little box with text inside of it.

They are very useful in a lot of cases and are super easy to use!

{{<link-heading "How Do I Use Them?">}}

You can use Hints like such:

{{<highlight C>}}hint "Your Message";{{</highlight>}}

Hints are also very customisable with HTML commands which can be found
<a href="https://community.bistudio.com/wiki/Structured_Text" target="_blank" class="b bb bw pb1 no-underline black dim">here.</a>
It is pretty much HTML commands around the text you want to be changed with whatever you choose with also including the 'parseText' prefix. Like such:

{{<highlight HTML>}}
hint parseText "<t size='3'>hi</t>";
{{</highlight>}}

^ The code above makes a hint showing "hi" in big letters.

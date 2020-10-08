---
title: Simple While Loops
date: 2018-11-06T08:53:32+01:00
description: ""
categories:
  - ArmA3 Mission Editing
author: "sbondo1234"
---

{{<link-heading "While Loops?">}}

If you ever want to create a loop for whatever reason you can do
it easily with while loops.

{{<link-heading "How Do I Use Them?">}}

If you wanted to create a hint every 15 seconds you could very easily
execute this script once and have it do the rest of the work for you.

{{<highlight C>}}
while {true} do {
  hint "I'm A Hint";
  sleep 15;
};
{{</highlight>}}

You see a while statement checks if something is true or false and then
does something depending on which it is. In this particular line of code,
it will always be true because nothing is set to make it check anything so it
can never be anything other than true. You can, of course, re-purpose this code
to do anything.

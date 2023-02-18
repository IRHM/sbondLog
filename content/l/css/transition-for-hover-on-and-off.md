---
title: Different Transitions for in and out
date: 2019-09-30T22:57:24+01:00
description: "Different animations for when you go into and out of one"
categories:
  - CSS
  - WebDev
---

{{<link-heading "What I'm Talking About">}}

<button class="wbBtnNotSmooth" type="button">
  <p>Without Smooth Transition In & Out.</p>
</button>

<button class="wbBtn" type="button">
  <p>With Smooth Transition In & Out aka BILL</p>
</button>

You see how the one called Bill is smooth going in and out? That's what we want and
luckily there is an easy trick.

{{<link-heading "The Code">}}

{{<highlight css>}}
<style>
.wbBtn {
  border: 2px solid black;
  background-color: black;
  color: white;
  font-weight: bold;
  transition: all 500ms ease-in-out; /* Just put the transition here instead */
}

.wbBtn:hover {
  background-color: white;
  color: black;
  border-radius: 4px;
}
</style>

<button class="wbBtnNotSmooth" type="button">
  <p>Me Button</p>
</button>
{{</highlight>}}

All you have to do is add the same transition to the code without the ':hover'
element on it, and when you stop hovering, the button will do another transition
back to the way the button looked originally.

This extends to basically anything you can use a transition on.

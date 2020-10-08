---
title: Hide Scrollbar CSS
date: 2019-04-27T09:24:05+01:00
description: "Hide Scrollbar CSS"
categories:
  - CSS
  - WebDev
author: "sbondo1234"
---

{{<link-heading "What?">}}

If you have some elements on your page that are causing a scrollbar to appear, but you would prefer them not to you can use some easy code in CSS to stop it from happening.

You can use this trick on the specific tag or you can disable the scrollbar fully by putting it in the body tag.

{{<link-heading "How?">}}

To hide the scrollbars you can use the overflow value in CSS.

overflow = refers to both scrollbars
overflowX = refers to bottom scrollbar / side scrollbar
overflowY = refers to scrollbar on the right / down scrollbar
With that said we can move on to the values that different overflow can carry.

hidden = hides the scrollbar
visible = shows scrollbar (default)
scroll = always shows scrollbar no matter what
auto = shows whichever scrollbars it needs to
Alright, now that you know each value you can use with overflow I will show you an example of disabling the scrollbar for the whole page:

{{<highlight html>}}
<body style="overflow: hidden;">
...
</body>
{{</highlight>}}

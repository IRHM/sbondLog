---
title: Scale on Hover CSS
date: 2019-04-27T09:27:05+01:00
description: "Scaling elements on Hover with CSS"
categories:
  - CSS
  - WebDev
---

{{<link-heading "What Do You Mean?">}}

What I mean by 'Scale On Hover' is that when you hover over an element on your page it will scale up. I like to use this when you have something that is clickable and you want to add some 'smoothness' to it. It makes the whole page flow nicer if you use it correctly and you don't go over the top with it.

{{<link-heading "How?">}}

This is with CSS so go to your styles sheet and do the following:

{{<highlight css>}}
img {
  transition: all .2s ease-in-out;
}

img:hover {
  transform: scale(1.1);
}
{{</highlight>}}

I use the **img** tag because I want every image on my page to scale up when it is hovered on. If you only want certain things to scale when hovered on you can use their class instead.

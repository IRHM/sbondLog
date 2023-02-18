---
title: Shape Rendering SVG
date: 2019-10-02T15:07:09+01:00
description: "Shape Rendering Property Used on SVGs"
categories:
  - SVG
  - WebDev
---

{{<link-heading "geometricPrecision">}}

<div class="center">
  <svg width="279" height="136" viewBox="0 0 279 136" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="1" width="100" height="100" fill="black" shape-rendering="geometricPrecision"/>
    <path d="M150 33L208.024 135.75H91.9763L150 33Z" fill="black" shape-rendering="geometricPrecision"/>
    <ellipse cx="229" cy="51" rx="50" ry="51" fill="black" shape-rendering="geometricPrecision"/>
  </svg>
</div>

{{<highlight html>}}
<svg width="279" height="136" viewBox="0 0 279 136" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="1" width="100" height="100" fill="black" shape-rendering="geometricPrecision"/>
  <path d="M150 33L208.024 135.75H91.9763L150 33Z" fill="black" shape-rendering="geometricPrecision"/>
  <ellipse cx="229" cy="51" rx="50" ry="51" fill="black" shape-rendering="geometricPrecision"/>
</svg>
{{</highlight>}}

This method takes a little more processing power, but in the end I believe it is
totally worth it. You will be left with smoother edges becuase it can harness
the power of anti-aliasing.

{{<link-heading "crispEdges">}}

<div class="center">
  <svg width="279" height="136" viewBox="0 0 279 136" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="1" width="100" height="100" fill="black" shape-rendering="crispEdges"/>
    <path d="M150 33L208.024 135.75H91.9763L150 33Z" fill="black" shape-rendering="crispEdges"/>
    <ellipse cx="229" cy="51" rx="50" ry="51" fill="black" shape-rendering="crispEdges"/>
  </svg>
</div>

{{<highlight html>}}
<svg width="279" height="136" viewBox="0 0 279 136" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="1" width="100" height="100" fill="black" shape-rendering="crispEdges"/>
  <path d="M150 33L208.024 135.75H91.9763L150 33Z" fill="black" shape-rendering="crispEdges"/>
  <ellipse cx="229" cy="51" rx="50" ry="51" fill="black" shape-rendering="crispEdges"/>
</svg>
{{</highlight>}}

This method will be best for when you are trying the get the best straight edges.
It can achieve better looking straight lines because it can turn off anti-aliasing
when it sees them.

{{<link-heading "Other Values">}}

### Auto

This method is on by default and will leave it up to the user agent
to determine which mode the SVGs need to be put on so that they wont
take forever to load.

### optimizeSpeed

This method will optimize the SVGs so that they will load as fast as possible.
This can sometimes mean that anti-aliasing is turned off.

---
title: Vertically/Horizontally Align With Flexbox
date: 2019-10-02T15:46:09+01:00
description: "Vertically/Horizontally Align With Flexbox"
categories:
  - CSS
  - WebDev
author: "sbondo1234"
authorspaceless: "sbondo1234"
---

{{< link-heading "Example" >}}

<style>
  .ctr{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="ctr">
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="black"/>
  </svg>
</div>

{{<highlight html>}}
<style>
  .ctr{
    display: flex;
    align-items: center; /* vertical alignment */
    justify-content: center; /* horizontal alignment */
  }
</style>

<div class="ctr">
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="black"/>
  </svg>
</div>
{{</highlight>}}

This can extend to anything you could want to center.

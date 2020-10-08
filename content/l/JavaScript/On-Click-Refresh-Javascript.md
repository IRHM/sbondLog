---
title: On Click Refresh JavaScript
date: 2019-04-27T09:58:24+01:00
description: "On Click Refresh using JavaScript"
categories:
  - JavaScript
author: "sbondo1234"
---

{{<link-heading "What?">}}

If you have been looking to refresh the page with JavaScript, you are lucky. I have three different methods of achieving this, with the last two being pretty similar. I am going to make an image on my page (You can use anything such as text or a button) and then add the onclick function to it, so when it is clicked it refreshes the page.

{{<link-heading "Methods">}}

#### Method 1
In this method, I am going to add my image (You don't have to use an image) with the onclick function inside the image tag, like such:
{{<highlight HTML>}}
<img src="img/reset.png" alt="" onclick="clkRefresh()">
{{</highlight>}}

Then I am going to make the script tags and place the function inside of it, like such:

{{<highlight HTML>}}
<script>
  function clkRefresh() {
    document.location.reload()
  }
</script>
{{</highlight>}}

#### Method 2
This method is similar to method 1 above, but instead of creating a script somewhere you can simply add the line of code right into the onclick function inside the image tag. As such:

{{<highlight HTML>}}
<img src="img/reset.png" alt="" onclick="document.location.reload()">
{{</highlight>}}

#### Method 3 (no JS)
Method 3 is very simple, you can just add an 'a' tag around your image and point it to the page you are already on, like such:

{{<highlight HTML>}}
<a href="index.html">
  <img src="img/reset.png" alt="">
</a>
{{</highlight>}}

**index.html of course in, this example being the page that you are already on.**

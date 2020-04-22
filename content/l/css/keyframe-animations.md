---
title: Keyframe Animations
date: 2019-08-27T11:54:23+01:00
description: "@Keyframes"
categories:
  - CSS
  - WebDev
author: "sbondo1234"
---

{{< link-heading "Intro" >}}

Keyframes in CSS are very diverse, you can use them for many things... just get creative!

{{< link-heading "The Basics" >}}

This is going to be the truly barebones version of what you can do with
keyframes, but this is just an example which you should build on, on your own.

First you can 'include' the animations name in the class of your choosing as such:

{{< highlight css >}}
.randomClass{
  animation-name: exampleAnim;
  animation-duration: 5s;
}
{{< /highlight >}}

**Note:** Some browsers may need you to use **-webkit-** before **animation**,
 like: **-webkit-animation-name: sumAnim**

Secondly, we will be setting up the actual **keyframe** part:

{{< highlight css >}}
@keyframes exampleAnim{
  from  {color: red;}
  to  {color: blue;}
}
{{< /highlight>}}

The best part is, you can use any CSS property inside of keyframes,
so you can in theory, animate everything.

{{< link-heading "Animate In Increments" >}}

You can combine this method with the one shown above, if you really wanted to.
{{< highlight css >}}
@keyframes exampleAnim{
  0%    {color: red;}
  25%   {color: red;}
  50%   {color: red;}
  75%   {color: red;}
  100%  {color: red;}
}
{{< /highlight >}}

{{< link-heading "Misc." >}}

### Efficiency

Sometimes it may be easier for you if you just call animations like this:

{{< highlight css >}}
animation: repeatit 2s linear 0s infinite alternate;
{{< /highlight >}}

This is the much easier to write, but arguably harder to read version of
typing out each property one by one.

### Animation Properties:
You can search up the following, if you want to expand your knowledge.

{{< highlight css >}}
animation-name
animation-duration
animation-delay
animation-iteration-count
animation-direction
animation-timing-function
animation-fill-mode
{{< /highlight >}}

{{< link-heading "Real Example" >}}

<style>
.helloDiv{
  font-size: 18px;
  text-align: center;
  position: relative;
  width: 50px;
  border: 1px solid black;
  border-radius: 6px;
  animation: helloDivAnim 15s forwards infinite;
}

@keyframes helloDivAnim{
  0%    {left: 0; background-color: red;}
  50%   {left: 95%; background-color: lightblue;}
  100%  {left: 0; background-color: red;}
}
</style>

<div class="helloDiv">hello</div>

### Code:
{{< highlight css >}}
<div class="helloDiv">hello</div>

<style>
  .helloDiv{
    font-size: 18px;
    text-align: center;
    width: 50px;
    border: 1px solid black;
    border-radius: 6px;

    position: relative; // <-- important
    animation: helloDivAnim 15s infinite;
  }

  @keyframes helloDivAnim{
    0%    {left: 0; background-color: red;}
    50%   {left: 100%; background-color: lightblue;}
    100%  {left: 0; background-color: red;}
  }
</style>
{{< /highlight >}}
**Note:** If you don't set a property for your animation, then it will just
be set to it's default. So if you need to make a change, make sure you have
done so.

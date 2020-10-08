---
title: Make a Stopwatch C#
date: 2019-06-08T10:02:18+01:00
description: ""
categories:
  - CSharp
author: "sbondo1234"
---

{{<link-heading "Step 1">}}

Import ***System.Diagnostics:***
{{<highlight cs>}}
using System.Diagnostics;
{{</highlight>}}

{{<link-heading "Step 2">}}

Initialise the timer & start it:
{{<highlight cs>}}
Stopwatch timer = new Stopwatch();
timer.Start();
{{</highlight>}}

{{<link-heading "Step 3">}}

Stop the timer:
{{<highlight cs>}}
timer.Stop();
{{</highlight>}}

{{<link-heading "Step 4">}}

Display stopwatch results:
{{<highlight cs>}}
Console.WriteLine(overallTimer.Elapsed.Seconds.ToString() + "s");
{{</highlight>}}

You can use a multiple amount of different timings such as:

  - Milliseconds
  - Minutes
  - Hours
  - Days

You can put 'Total' before the unit of timing to give the exact amount of time
taken:

{{<highlight cs>}}
Console.WriteLine(overallTimer.Elapsed.TotalSeconds.ToString() + "s");
{{</highlight>}}

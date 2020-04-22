---
title: Reoccurring Events in MySQL
date: 2019-09-12T23:12:03+01:00
description: "Events in MySQL"
categories:
  - MySQL
author: "sbondo1234"
---

{{< link-heading "What are Events in MySQL?" >}}

Events in MySQL are something that can happen every x amount of time.
If you have something that you want to reoccur ever now and then,
you should consider using events.


{{< link-heading "Example" >}}

{{< highlight SQL >}}
CREATE EVENT IF NOT EXISTS `remove_login_attempts` # Create & Name Event
ON SCHEDULE EVERY 1 MINUTE # When to redo task
ON COMPLETION PRESERVE
ENABLE
DO

DELETE FROM login_attempts WHERE time < (NOW() - INTERVAL 15 MINUTE); # The code to run
{{< /highlight >}}

{{< link-heading "What Is The Code Doing" >}}

1. Create event and name it. <br>
{{< highlight SQL >}}
CREATE EVENT IF NOT EXISTS `remove_login_attempts`
{{< /highlight >}}

2. How long it should wait until it runs the code again <br>
{{< highlight SQL >}}
ON SCHEDULE EVERY 1 MINUTE
{{< /highlight >}}

3. Keep the event after it has ran  <br>
{{< highlight SQL >}}
ON COMPLETION PRESERVE
{{< /highlight >}}

4. Enable the event <br>
{{< highlight SQL >}}
ENABLE
{{< /highlight >}}

5. What code to run (This code should be after 'DO')  <br>
{{< highlight SQL >}}
DO
{{< /highlight >}}

6. The command/code to run (this is an example, you can tell it to do anything)  <br>
{{< highlight SQL >}}
DELETE FROM login_attempts WHERE time < (NOW() - INTERVAL 15 MINUTE);
{{< /highlight >}}

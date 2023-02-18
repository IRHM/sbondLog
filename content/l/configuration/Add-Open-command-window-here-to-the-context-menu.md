---
title: Add 'Open Command Window Here' to Context Menu
date: 2019-04-27T09:30:25+01:00
description: "Add 'Open Command Window Here' to Context Menu."
categories:
  - Configuration
---

{{<link-heading "What?">}}

When you Shift + Right Click on a folder you get to see more options. Normally without any configuration, you only see the Open PowerShell Window Here. If you follow the steps below you will learn how to add the Open Command Window Here option to the context menu.

{{<link-heading "Adding To Context Menu">}}

1. Open Run by searching it on the start menu or pressing **<div class="fa fa-windows"></div> Win Key + R.**

2. Type **'regedit'** in the run menu and hit enter.

3. Using the view on the left side, locate the following directory: HKEY_CLASSES_ROOT\Directory\shell\cmd

4. Right-click the **cmd** folder and click Permissions.

5. Click on the advanced button.

6. In the advanced window click **'change'** at the top next to 'Owner'.

7. In the new window click the Advanced... button at the bottom.

8. Now click the **'Find Now'** button and under 'Search Results:', select your profile and click OK.

9. Check the **Replace owner on subcontainers and objects box**.

10. Click **Apply**, then **Ok**.

11. On **'Permissions'** select the Administrators group.

12. Under **"Permissions for Administrators"** select Allow for the Full Control option.

13. Click Apply, then Ok.

14. Inside the **cmd** folder, right-click the **'HideBasedOnVelocityId'** DWORD and rename it to **'ShowBasedOnVelocityId'**.

{{<link-heading "Opening CMD From Dir Tree">}}

1. Click on the Navigation Bar and replace all of the text with **cmd**.
    <center><img src="https://ul.sbond.co/i/log/win/webreadcrumb.png" alt="Nav Bar" title="Nav Bar" /></center>
2. Click enter.

---
title: Get Apache Server Status w/ mod_status
date: 2020-02-09T10:12:56Z
description: "Get Apache Server Status w/ mod_status"
categories:
  - Apache
author: "sbondo1234"
---

{{<link-heading "Using mod_status">}}

1. Enable the mod in your config

    Find **mod_status** in your apache config file, by default it is commented
    out with a **#**. Just simply remove this.

    {{<highlight Apache>}}LoadModule status_module modules/mod_status.so{{</highlight>}}

2. Setup access point

    Now you are going to have to setup out access point, for this we will just
    make a <**Location**> in an appropriate config.

    {{<highlight Apache>}}
<Location /server-status>
  SetHandler server-status
  Require ip 192.168
</Location>
{{</highlight>}}

3. Access it

    This example is inside of a virtual host that is pointed to **example.com**
    so, we can access the server-status by going to **example.com/server-status**
    in our web browser.

    You are also able to use **example.com/server-status?refresh=5** to refresh
    the page every 5 seconds, of course you can change 5 to anything you want.

    The example is also requiring the ip accessing the page to be one from the
    local network where the server is be being run, however it is up to you if
    you want to keep it that way.

{{<link-heading "What it looks like">}}

![](https://ul.sbond.co/i/log/apache/status.png)

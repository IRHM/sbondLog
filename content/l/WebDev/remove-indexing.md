---
title: Remove Indexing on Your Site
date: 2019-04-27T10:34:17+01:00
description: ""
categories:
  - WebDev
author: "sbondo1234"
---

{{< link-heading "What?" >}}

If you go to your site and put a folder in the address bar instead of a file you will be greeted with folder indexing, which allows people to look at whatever is in that folder/directory. When allowed anyone can type in a 'normal' folder into the address bar on your site and then be greeted with an easy way of seeing every folder and every file on your site. There are many reasons you may not want people to be able to access the indexing of you site and lucky for you it is really simple to disable it.

{{< link-heading "How?" >}}

All you need is a <a href="https://log.sbond.co/log/webdev/making-.htaccess-and.htpassword/" class="b bb bw pb1 no-underline black dim">.htaccess<a> file. You can read here on how to make your own (Don't need .htpassword to remove indexing).

Once you have your .htaccess file, just right click on it and edit with your text editor and add this one line of code:
{{<highlight Apache>}}Options -Indexes{{</highlight>}}

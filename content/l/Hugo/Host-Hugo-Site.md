---
title: Hosting your Hugo Site
date: 2019-04-27T09:48:05+01:00
description: "Host Hugo Site"
categories:
  - Hugo
author: "sbondo1234"
---

{{<link-heading "What?">}}

Hugo is a static site generator which can be used to make fast, accessible and overall fast web pages.

This page will show you how to get your Hugo site up and running either on a web server of yours or on Github pages.

{{<link-heading "How?">}}

**First Steps**

1. Fully delete the public folder inside of your Hugo site.

2. In the terminal type hugo (this will re-build your site in the public folder).

**Down below there will be different tutorials depending on whether you want to use a web server or Github pages.**

#### <a class="b bb bw pb1 no-underline black dim" href="https://httpd.apache.org/" target="_blank">Web Server / Apache</a>
1. Go into the public folder and upload its contents onto your web server. (Upload to the htdocs folder for apache)

#### <a class="b bb bw pb1 no-underline black dim" href="https://pages.github.com/" target="_blank">Github Pages</a>

**Note: Replace `<username>` with your Github username.** Click on header link to view in-depth tutorial on Github's site if you are new to Github.

1. Make a **public** repository on Github named: `<username>.github.io`

2. Upload the contents of the public folder to the github repository.

With GitHub pages you aren't just limited to hosting a Hugo site, you can host any site you want, you just have to be willing to have the repository public and allow anyone to view/download its contents.

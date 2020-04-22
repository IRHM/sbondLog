---
title: Making Subdomains Which Redirect to Directory with .htaccess
date: 2019-04-27T10:15:10+01:00
description: ""
categories:
  - WebDev
author: "sbondo1234"
---

{{< link-heading "What?" >}}

A subdomain looks something like this: **wiki.sbond.co**

You will recognise one because it will have text before the actual domain, something like the **www.** you see before most sites. Luckily we have the .htaccess file because this all becomes a lot easier once you get into it.

{{< link-heading "How?" >}}

1.Make sure you have made your .htaccess file. You can learn how to make it here (Only make the .htaccess file).
2.Type the following lines of code into your .htaccess file:
{{<highlight Apache>}}
RewriteEngine on
RewriteCond %{HTTP_HOST} ^subdomain.example.com
RewriteRule ^(.*)$ https://example.com/directory/To/Point/To/$1 [L,NC,QSA]
{{</highlight>}}

If it doesn't work set up an A Record in your DNS configuration. Make the name * and point it towards your public IP address!

You are done! All thanks to the ease of use that comes with the .htaccess file. It really is a miracle. If there is anything you don't understand about the code I would recommend googling it! There are a lot of helpful answers on sites like StackOverflow!

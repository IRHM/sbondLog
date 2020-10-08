---
title: Change Subdomains Document Root In Apache Server
date: 2019-07-18T00:52:52+01:00
description: ""
categories:
  - Apache
author: "sbondo1234"
---

{{<link-heading "Step 1 - Create Subdomain">}}

If you don't have a subdomain on your apache server, you can follow
<a href="/l/apache/make-subdomains-on-apache/" target="_blank">
this tutorial</a> first and then come back.

{{<link-heading "Change Document Root">}}

In **'httpd-vhosts.conf'** change the **'Document Root'** for the correct
subdomain.

Mine, after editing, looks like this:

{{<highlight Apache>}}
<VirtualHost *:80>
  ServerName cd.sbond.co
  DocumentRoot "C:\Path\To\Custom\Dir"

  <Directory />
    Options FollowSymLinks
    AllowOverride All
  </Directory>
</VirtualHost>
{{</highlight>}}

{{<link-heading "Step 3 - Allow Access To Dir & Make Alias">}}

Go to your **'httpd.conf'** & find:
{{<highlight Apache>}}
<Directory />
  AllowOverride none
  Require all denied
</Directory>
{{</highlight>}}

Under it **paste** & **edit:**

{{<highlight Apache>}}
<Directory "C:\Path\To\Custom\Dir">
   Require all granted
</Directory>

Alias /Dir "C:\Path\To\Custom\Dir" // So you can access this dir easily
{{</highlight>}}

{{<link-heading "Step 4 - Test It">}}

Put a text **index** file in the custom dir you created and
type your subdomain into the address bar on your browser.

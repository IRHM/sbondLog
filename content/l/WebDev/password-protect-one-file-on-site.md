---
title: Password Protect One File on Your Site
date: 2019-04-27T10:27:51+01:00
description: "Basic password protection on one file"
categories:
  - WebDev
---

{{<link-heading "What?">}}

Instead of protecting the whole directory on your site there is a way to protect individual files in that directory.

{{<link-heading "How?">}}

**Before you start:** <a href="/l/webdev/making-.htaccess-and.htpassword/" target="_blank">Finish this tutorial here and then come back to complete this one</a>

Ok, once you have finished the other tutorial you can simply add the following code around the code you already have inside of your .htaccess file. Your code inside of your .htaccess file should look something like this (Change dog.html to your filename and type) :

{{<highlight Apache>}}

<FilesMatch "dog.html">
  AuthType Basic
  AuthName "Password Protected Area"
  AuthUserFile C:/xampp7/htdocs/i/.htpasswd
  Require valid-user
</FilesMatch>

{{</highlight>}}

<xmp></xmp>

If you want to make another file password protected then you can copy the code above and paste it below. Then just simply change the name of the file in the speech marks in the top line. If you plan on making two or more files password protected your .htaccess should now look like this:

{{<highlight Apache>}}
<FilesMatch "dog.html">
  AuthType Basic
  AuthName "Password Protected Area"
  AuthUserFile C:/xampp7/htdocs/i/.htpasswd
  Require valid-user
</FilesMatch>

<FilesMatch "dog2.html">
  AuthType Basic
  AuthName "Password Protected Area"
  AuthUserFile C:/xampp7/htdocs/i/.htpasswd
  Require valid-user
</FilesMatch>
{{</highlight>}}

**You can also change the AuthUserFile if you don't want the same passwords to work on both files.**

---
title: Password Protect A Directory on Your Site
date: 2019-04-27T10:19:57+01:00
description: ""
categories:
  - WebDev
author: "sbondo1234"
---

{{<link-heading "What Will You Be Using?">}}

To properly protect your directories/files on your public web server you will want to use back-end password protection. Front-end protecting with using things like JavaScript will not be very protecting of your files because, someone who goes on your page could simply click F12 and change your code, so they can type in a password they want it to be.

So you will most-likely be wanting to use back-end protection, unless you don't want your files to be protected on your site.

This page will teach you how to protect your page with back-end protection using .htaccess protection. This is one of the most secure ways to protect your web pages and files on your website.

**There is also A way to only password protect one file, so if that is what you are looking go <a href="http://localhost:1313/log/webdev/password-protect-one-file-on-site/" class="b bb bw pb1 no-underline black dim">here.</a>**

{{<link-heading "How?">}}

So, first you will need to create both files you will be needing. Make sure you place these files in the directory you want password protected. The files cant be text files, they don't have a file type. Read past this to know how to make them without a file type.

Make both of the following files ( Make sure you keep the period [.] before ht ) :
{{<highlight Apache>}}
.htaccess
.htpass
{{</highlight>}}
A little note, since your .htpass file is defined or located in the .htaccess file you can name it whatever you want as long as you change the filename in .htaccess. So I can have my .htpass file named .htNerds if I really wanted to.

Error logs are always your friend, if you find an error just look in your logs and you will find out more information about what it causing it.

{{<link-heading "Making Files Without A File Type">}}

There are actually two ways of achieving this and I will show you how to go through both of them now. The first one is easier, since it doesn't involve command line.

#### Way 1

In the first way you can simply create a text document, open it up with any text editor you may have and go to file >> Save as. When in the save as menu, click on Save as type, then change it to All types. Once it is changed to All types you can remove everything in the File name box and type in the name of whichever .ht file you are making. Repeat this process twice until you have both of the ht files you need.

#### Way 2

This is in Windows, If you are on any other platform I am sorry since I only use Windows. If you are not on Windows I am sure you can search this up and find your answer quite simply.

So first off you are going to want to open your Command Prompt by clicking your ⊞ Win key and then typing in **cmd**.

Once you are in CMD you are going to want to cd to the directory you want your .ht file to be made in. Like the following.

{{<highlight Apache>}} cd C:/xampp/htdocs/i {{</highlight>}}

When you have told it where to look you can now tell it what file to make for you like such:

{{<highlight Apache>}}type nul > .htFileName{{</highlight>}}

Of course you should change .htFileName to whatever you .ht file you are making.

{{<link-heading "Back To It">}}

Once you have made your .ht files you can move onto this part.

Now that you have your **.htaccess** file, you are going to want to open it up. Once it is opened you can type the following into it:

{{<highlight Apache>}}
AuthType Basic
AuthName "Please Enter A Password To Proceed"
AuthUserFile C:/xampp/htdocs/i/.htpass
Require valid-user
{{</highlight>}}

After AuthUserFile you are going to want to change the directory to wherever you have placed your .htpass file.

{{<link-heading "Setting Passwords">}}

Now that you are done with pretty much everything there is one last thing you have to do. Set some passwords!

Just open up your .htpass file and you can type in some logins that you want working. It is good to know that you can have multiple usernames and password working at the same time, just make sure to only have one username and password on a line.

Usernames and passwords should be entered on each line like this ( The username is before the colon [:] and the password is after ) :
{{<highlight Apache>}}
test2:$apr1$9zh58uHn$OaS9h.KS3ru3gpVz.NHVw.
{{</highlight>}}

{{<link-heading "Password Encryption">}}

You will want to use password encrypting software when putting them into your .htpass file to make sure you are much safer, this will make it much, much harder for anyone to find out what your password it by getting into your .htpass file. You are always safer storing passwords with encryption.

Some people might experience some errors if the encryption method used isn't readable by the server, if so you are just going to have to find another tool that can encrypt your passwords in whatever method your server understand.

Two sites that do this: <a class="b bb bw pb1 no-underline black dim" href="https://www.web2generators.com/apache-tools/htpasswd-generator" target="_blank">Web2Generators</a>
<a class="b bb bw pb1 no-underline black dim" href="http://www.htaccesstools.com/htpasswd-generator/" target="_blank">htAccessTools</a>

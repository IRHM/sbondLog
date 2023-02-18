---
title: Finding Directory of File Using PHP
date: 2019-04-27T10:08:21+01:00
description: "Finding Directory of File Using PHP"
categories:
  - WebDev
  - PHP
---

{{<link-heading "What?">}}

If you are using a hosting provider that doesn't tell you exactly where the directory of your files are you are going to have to use other methods of finding this out. One of the methods which I think is the simplest is using a small PHP script which will tell you exactly where you file is.

{{<link-heading "How?">}}

So first you are going to have to create a .php file, which you can name anything. After you have created the .php file, you will need to open it up in your text editor. Once it is open you can simply add the following lines of code:

{{<highlight PHP>}}
$dir = dirname(__FILE__);
echo "
  Full path to this dir: " . $dir . "
";
{{</highlight>}}

Once you have your .php file created and have them 2 lines of code in it, save it and upload it to your site. Now you can go to your site at the directory of the .php file like such:

{{<highlight PHP>}}www.example.com/filename.php{{</highlight>}}

When you have visited the file on your website you should be greeted with something like this (Of course the directory will be different for you) :

{{<highlight PHP>}}Full path to this dir: C:\webserver\htdocs\i{{</highlight>}}

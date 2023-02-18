---
title: How To Make Subdomains on Apache
date: 2019-05-10T23:14:03+01:00
description: ""
categories:
  - Apache
---

{{<link-heading "What?">}}

When I say 'subdomain' I am talking about the part that comes before the actual domain.

So the subdomain in this URL ***log.sbond.co*** is the part that says ***log***.

You can use subdomains to redirect to a different server which can show different content, but in this post, you will learn how to make a subdomain redirect to a directory in your site. This method will also make the subdomain stay in the address bar.

{{<link-heading "DNS Records">}}

Before we modify any files in your Apache Web Server, we are going to go to your ***DNS Records*** page.

You will want to make a new ***CNAME*** record.

Name it what you want your subdomain to be named & change the value to your domain (without subdomain in it).

{{<link-heading "Hosts File">}}

**Note: This step isn't necessary if you aren't trying to access the site from the server hosting the site.**

Find your ***hosts file.*** This should be located here:

{{<highlight bash>}}
# Windows
C:\Windows\System32\drivers\etc

# Linux
/etc/hosts
{{</highlight>}}

At the bottom of the hosts file add this, changing the domain to the one you are adding:

{{<highlight c>}}
127.0.0.1 subdomain.domain.com
{{</highlight>}}

With that done, you can save the file and exit it. ***(If you are unable to save the file, copy it to your desktop, edit it again and save it there. Then move it back and replace the old file with the new one or open your text editor with admin privileges)***

{{<link-heading "httpd-vhosts.conf">}}

Go to where you installed Apache/XAMPP & find the httpd-vhosts.conf.
***It will be in conf\extra and will look like this on XAMPP:***
{{<highlight c>}}
C:\xampp\apache\conf\extra
{{</highlight>}}

Open it up and Copy the code below and paste it at the bottom of the config file.

{{<highlight Apache>}}
<VirtualHost *:80>
  ServerAdmin webmaster@domain.com
  DocumentRoot "C:/xampp7/htdocs/"
  ServerName domain.com
  ErrorLog "logs/domain.com-error.log"
  CustomLog "logs/domain.com-access.log" common
</VirtualHost>
{{</highlight>}}

With the code above pasted at the bottom of the config, you can start editing it.

First, change all ***domain.com*** lines of text to your actual domain name.

Second, change the ***DocumentRoot*** to the root of your websites directory (***NOT THE DIRECTORY FOR YOUR SUBDOMAIN TO POINT TO***).

With all of that done, copy and paste your final code below each other.

With the ***second block of code, *** add the subdomain in front of the domain name & change the DocumentRoot to the folder you want the subdomain to point to.

Your config file should look something like this when you are done:

{{<highlight Apache>}}
<VirtualHost *:80>
    ServerAdmin webmaster@sbond.co
    DocumentRoot "C:/xampp7/htdocs/"
    ServerName sbond.co
    ErrorLog "logs/sbond.co-error.log"
    CustomLog "logs/sbond.co-access.log" common
</VirtualHost>

<VirtualHost *:80>
    ServerAdmin webmaster@log.sbond.co
    DocumentRoot "C:/xampp7/htdocs/log"
    ServerName log.sbond.co
    ErrorLog "logs/log.sbond.co-error.log"
    CustomLog "logs/log.sbond.co-access.log" common
</VirtualHost>
{{</highlight>}}

{{<link-heading "Done!">}}

With everything above completed correctly, you are ready to go.

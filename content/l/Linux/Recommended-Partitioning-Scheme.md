---
title: Recommended Partitioning Scheme
date: 2020-10-04T22:00:58+01:00
description: "Recommended partitioning scheme for linux"
categories:
  - Linux
author: "sbondo1234"
---

In most cases you are going to want to make seperate partitions 
for each of the following mount points:

- `/` (root)

- `/boot` or `/boot/efi`

- `/home`

- `swap`

{{<link-heading "/">}}

`/` is the top-level directory. Everything by default will be placed here 
unless a different file system is mounted in the path being written to, such as `/home`.

For a minimal installation 10-15 GiB will do, but if you want to make sure you have 
space for all of your packages 40 GiB is the safest option.

{{<link-heading "/boot">}}

`/boot` contains all boot related files. In most cases, 1 GiB is enough.

If you have a UEFI capable system, then instead partition for `/boot/efi`.

{{<link-heading "/home">}}

`/home` is used to store user data, such as videos, images and documents. 
This partition is useful to have so that your data is separate from OS files, 
but isn't necessary, especially for machines such as servers that don't have 
users storing their files.

{{<link-heading "swap">}}

`swap` is used when there isn't enough RAM available. If you run out of RAM and 
have no swap the kernel will start terminating processes, which 
will most likely lead to data loss.

Too much swap is usually a waste of storage space and can enable it to 
hide memory leaks.

If you want to use hibernation mode, you will have to have at least as much swap 
as you do RAM, though it is, recommended to have a little extra.

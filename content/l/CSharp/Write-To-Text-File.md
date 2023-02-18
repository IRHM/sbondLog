---
title: Write to Text File in C#
date: 2019-06-08T09:34:38+01:00
description: "How to write data to a file in C#"
categories:
  - CSharp
---

{{<link-heading "How">}}

There are two methods for this. The first method will keep adding on the new
data to the bottom of the text file, whilst the second method will overwrite
all previous things in the text file whenever new data is written.

{{<link-heading "Method 1 (Don't overwrite Any Data)">}}

{{<highlight cs>}}
TextWriter saveData = new StreamWriter(@"C:\Path\To\TextFile.txt", true);
saveData.WriteLine("Yo Bro");
saveData.Close();
{{</highlight>}}

{{<link-heading "Method 2 - (Overwrite Data)">}}

{{<highlight cs>}}
string text = "I went to the dog park.";
System.IO.File.WriteAllText(@"C:\Path\To\TextFile.txt", text);
{{</highlight>}}

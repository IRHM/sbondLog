---
title: Simple Calculator Python
date: 2019-04-27T10:03:37+01:00
description: ""
categories:
  - Python
---

{{<link-heading "What?">}}

This simple calculator program will allow the user to enter two (or more if you wish) numbers and then choose a method to use (+, -, /, *). We will use if statements.

### How?
Well, first we need to add 3 (or more) variables. The first two will be holding the user's numbers and the third will be the method they want to use (Both variables will be asking for the user's input as well). You can set your variable up similar to this:
{{<highlight Python>}}
num1 = input("Enter First Number: ")
num2 = input("Enter Second Number: ")
method = input("What Method? (+, -, /, *): ")
{{</highlight>}}

Once we have our variables set we will start on the if statements. The if statements will check what the user input for the method and according to what they chose we will change the outcome.

So now make your if statement similar to this:
{{<highlight Python>}}
if (method == "+") or (method == "add"):
result = float(num1) + float(num2)
{{</highlight>}}

The first line is checking to see if the user input '+' or 'add' and then the second line changes a variable called 'result' to add both numbers together. We use the 'float' function so that the numbers can be decimal as well as whole. **If you want to only accept whole numbers use Int() instead.**

Once you have your first if statement you can copy and paste it four times and then just change the operators as required. **Make sure you change everything in the first and second line to the method you are checking for.** So if you were checking if they chose division for their method you could write out this:

{{<highlight Python>}}
if (method == "/") or (method == "divide"):
result = float(num1) / float(num2)
{{</highlight>}}

After you have all of your if statement ready you can simply print out the variable 'result' and the result of anything typed into the calculator will appear! You can print out a variable as such:

{{<highlight Python>}}
print(result)
{{</highlight>}}

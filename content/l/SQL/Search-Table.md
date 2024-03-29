---
title: Search a Table in SQL
date: 2019-06-29T08:51:06+01:00
description: ""
categories:
  - SQL
---

{{<link-heading "The Code">}}

{{<highlight SQL>}}
SELECT * FROM info WHERE Name LIKE 'Keyword';
{{</highlight>}}

This way, you would get a 'sort of search', because you would have to type the name
of the item 100% correctly, otherwise no results would show up. I guess this is sort of
a 'strict' search, if something is slightly wrong, nothing would be returned.

{{<link-heading "Getting Less Strict">}}

To get less 'strict' you would have to use the **%** wildcard, which will take the
input keywords and find each item which has that keyword in it, depending on where you
put it.

If you put the **%** wildcard after the **query**, your results would have to have the
keyword at the beginning of the item you are trying to find, **this is the opposite** if you
put the wildcard at the end of the **query**.

{{<link-heading "Examples">}}

### If your table had this data:

<center class="page_search-table">
<table>
  <thead>
    <tr class="yellowBackground">
      <th>Name</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Purge</td>
      <td>TV Show</td>
    </tr>
    <tr>
      <td>The Deuce</td>
      <td>TV Show</td>
    </tr>
    <tr>
      <td>The Detour</td>
      <td>TV Show</td>
    </tr>
  </tbody>
</table>
</center>

### (1.) And your code was:
{{<highlight SQL>}}
SELECT * FROM info WHERE Name LIKE 'The%';
{{</highlight>}}

### (1.) Your output would be:
<center class="page_search-table">
<table>
  <thead>
    <tr class="pinkBackground">
      <th>Name</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Purge</td>
      <td>TV Show</td>
    </tr>
    <tr>
      <td>The Deuce</td>
      <td>TV Show</td>
    </tr>
    <tr>
      <td>The Detour</td>
      <td>TV Show</td>
    </tr>
  </tbody>
</table>
</center>

### (2.) If your code was:
{{<highlight SQL>}}
SELECT * FROM info WHERE Name LIKE 'he%';
{{</highlight>}}

### (2.) Your output would be:

<center class="page_search-table">
<table>
  <thead>
    <tr class="greenBackground">
      <th>Name</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>(Nothing)</td>
      <td>(Nothing)</td>
    </tr>
    <tr>
      <td>(Nothing)</td>
      <td>(Nothing)</td>
    </tr>
    <tr>
      <td>(Nothing)</td>
      <td>(Nothing)</td>
    </tr>
  </tbody>
</table>
</center>

### (3.) If your code was:
{{<highlight SQL>}}
SELECT * FROM info WHERE Name LIKE '%he%';
{{</highlight>}}

### (3.) Your output would be:
<center class="page_search-table">
<table>
  <thead>
    <tr class="cyanBackground">
      <th>Name</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Purge</td>
      <td>TV Show</td>
    </tr>
    <tr>
      <td>The Deuce</td>
      <td>TV Show</td>
    </tr>
    <tr>
      <td>The Detour</td>
      <td>TV Show</td>
    </tr>
  </tbody>
</table>
</center>

{{<link-heading "That's It!">}}

If you are looking to search through things such as **Descriptions**, this probably isn't
the way you want to search through them, you will most-likely want to use something like a
<a href="https://dev.mysql.com/doc/refman/8.0/en/fulltext-search.html" target="_blank" class="b bb bw pb1 no-underline black dim">Full-Text Search</a>.

<!DOCTYPE html>
<html xmlns="https://www.w3.ord/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<script src="https://log.sbond.ml/js/nav.js"></script>
	<link
	  rel="stylesheet"
	  href="http://log.sbond.ml/css/tachyons.min.css?v=6.1"
	/>
	<link rel="stylesheet" href="http://log.sbond.ml/css/styles.css" />
	<title>Search</title>
</head>
<body class="w-90 w-60-ns center center-ns mv2 mv5-ns sans-serif">

	<center>
	<nav class="f6 fw6 ttu tracked bg-black-90 pv4-ns ph4-m ph5-l opnav"
	style="top: -10px;">

	  <a class="link dim white dib mr3 nav-hide" href="https://log.sbond.ml/index.html" title="Home">
		Home</a>
	  <a class="link dim white dib mr3 nav-hide" href="https://log.sbond.ml/l">
		/Log</a>
	  <a class="link dim white dib mr3 nav-hide" href="https://log.sbond.ml/categories">
		/Categories</a>

	  <form action="/s/search.php" method="get">
	  <input type="text" name="q" placeholder="Search sbondLog..." id="searchTog"
	  autocomplete="off" class="search fw6 tracked bg-black-80 hidden">
	  </form>

	<div>
	  <i class="hamburger grow" onclick="hamburgerToggle(this)"></i>
	  <a href="/index.html" class="link dim logo logo-hidden"
	  >sbondLog</a>
	</div>

	<div id="hamburger-drop" class="fw6 tracked bg-black-80 hamburger-drop hidden"><br />
	  <a class="link dim white" href="https://log.sbond.ml/l/">
		/Log</a><br /><br />
	  <a class="link dim white" href="https://log.sbond.ml/categories/">
		/Categories</a><br /><br />
	</div>
	</nav>
	</center>
	<br /><br><br>

	<form action='./search.php' method='get'>
		<input type='text' name='q' size='50' placeholder="Search sbondLog..."
		autocomplete="off" value='<?php echo $_GET['q'] ?>' class="homeSearch center"/>
	</form>
	<br>
	
	<?php
	
		// turn off error reporting
		error_reporting(0);
		
		$q = $_GET['q'];
		$terms = explode(" ", $q);
		$query = "SELECT * FROM search WHERE ";
		
		foreach ($terms as $each){
			$i++;
			
			if ($i == 1)
				$query .= "keywords LIKE '%$each%' ";
			else
				$query .= "OR keywords LIKE '%$each%' ";
		}
		
		// connect 
		$con = mysqli_connect("localhost", "search", "QPJo9I2lqXtVqY0o");
		mysqli_select_db($con, "search");
		
		$query = mysqli_query($con, $query);
		$numrows = mysqli_num_rows($query);
		
		if ($numrows > 0){
			
			echo "<center>" . $numrows . " Result(s) found for \"<b>$q</b>\"</center>";
			
			while ($row = mysqli_fetch_assoc($query)){
				$id = $row['id'];
				$title = $row['title'];
				$date = $row['date'];
				$categories = $row['categories'];
				$description = $row['description'];
				$keywords = $row['keywords'];
				$link = $row['link'];
				
				$cat_split = explode(" ", $categories);
				$info = $description;
				$info = preg_replace('/[^A-Za-z0-9\-]/', ' ', $info);
				
				echo "<hr><li class='list pl0 lh-copy' id='list'><a href='$link' 
				class='f3 b dib black no-underline'>$title</a><br>
				<span class='f6 gray dib-ns'>" . date("d F, Y", strtotime($row['date']))
				. "</span>&nbsp
				<span style='font-size:11px;' class='cat no-underline white'>
				<b>$cat_split[0]</b></span>
				<span class='f6 db dib-ns'>$info</span>";
				
			}
			
		}
		else{
			echo "<center>No results found for \"<b>$q</b>\"</center>";
		}
		
		// disconnect
		mysqli_close($con)
	
	?>
	
</body>
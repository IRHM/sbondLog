<!DOCTYPE html>
<html xmlns="https://www.w3.ord/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link
	  rel="stylesheet"
	  href="http://log.sbond.ml/css/tachyons.min.css?v=7.3"
	/>
	<link rel="stylesheet" href="http://log.sbond.ml/css/styles.css?v=6.2" />
	<title>Search</title>
</head>
<style>
	a:link,
	a:visited,
	a:active{
		color: black;
	}
	.stat{
		font-family: poppinslight, sans-serif;
		float: left;
	  text-align: left;
		padding-right: 50px;
	}
</style>
<body class="w-90 w-60-ns center center-ns mv2 mv5-ns sans-serif">

	<nav class="f6 fw6 ttu tracked pv4-ns ph4-m ph5-l opnav"
	  style="top: -10px;">
	  <a class="link dim" href="https://log.sbond.ml/">
		Home</a>&nbsp;&nbsp;
	  <a class="link dim" href="https://log.sbond.ml/l/">
		/Log</a>&nbsp;&nbsp;
	  <a class="link dim" href="https://log.sbond.ml/categories/">
		/Categories</a>
	</nav><br><br>

	<form action="./search.php" method="get">
		<input type="text" name="q" size="50" placeholder="Search sbondLog..."
	autocomplete="off" class="homeSearch center w-70"/>
	</form>
	<br /><br /><br />
<?php
	$con = mysqli_connect("localhost", "search", "QPJo9I2lqXtVqY0o");
	mysqli_select_db($con, "search");

	$numr="SELECT title FROM search ORDER BY id";
?>

	<div class="stat">
		<?php
		if ($result=mysqli_query($con,$numr))
		  {
		  $rowcount=mysqli_num_rows($result);
		  printf("%d\n",$rowcount);
		  // Free mem for result
		  mysqli_free_result($result);
		  }
		 ?>
		 <h2>Posts</h2>
	</div>

	<!-- Get Last Input In DB  -->
	<div class="stat">
		<?php
			$getlast = mysqli_query($con, "SELECT * FROM search ORDER BY id DESC LIMIT 1");
			$printlast = mysqli_fetch_row($getlast);
			echo "<a class='bb no-underline black' href=" . $printlast[6] . ">$printlast[2]</a> <h2>Latest</h2>";
			mysqli_close($con)
		?>
	</div>

</body>
</html>

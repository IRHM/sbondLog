<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Search sbondLog</title>
    <link rel="stylesheet" href="http://log.sbond.co/css/tachyons.min.css?v=7.3"/>
    <link rel="stylesheet" href="http://log.sbond.co/css/styles.css?v=6.2"/>
    <style>
    	a:link,
    	a:visited,
    	a:active{
    		color: black;
    	}
    	.stat{
    		font-family: sans-serif;
    		float: left;
    	  text-align: left;
    		padding-right: 50px;
    	}
      body{
        font-family: sans-serif;
      }
    </style>
  </head>
  <body>
    <nav class="f6 fw6 ttu tracked pt4 pl5-ns ph5-l opnav">
  	  <a class="link dim ph2" href="https://log.sbond.co/">
  		  Home
      </a>
  	  <a class="link dim ph2" href="https://log.sbond.co/l/">
  		  /Log
      </a>
  	  <a class="link dim ph2" href="https://log.sbond.co/categories/">
  		  /Categories
      </a>
  	</nav>

    <form action="./search.php" method="get" class="pt6">
      <input type="text" name="q" size="50" placeholder="Search sbondLog..."
      autocomplete="off" class="homeSearch center w-70"/>
    </form>

    <?php
      require_once($_SERVER['DOCUMENT_ROOT'] . '/s/db_connect.php');

	  $query = "SELECT title FROM pages ORDER BY id";
	  $stmt = mysqli_stmt_init($conn);
	  if(!mysqli_stmt_prepare($stmt, $query)){
	    echo 'Request failed. Please try again.';
	    exit();
	  }
	  else{
	    //mysqli_stmt_bind_param($stmt, "", );
	    mysqli_stmt_execute($stmt);
	    $result = mysqli_stmt_get_result($stmt);
	    
	    while($row = mysqli_fetch_array($result)){
	  	
	    }
	  }
    ?>
	
	<div class="flex justify-center pt4">
	  <div class="stat">
	    <?php
	      $rowcount = mysqli_num_rows($result);
	      printf("%d\n",$rowcount);
	    ?>
	    <h2>Posts</h2>
	  </div>
	  
	  <div class="stat">
	    <?php
	      $query = "SELECT date, link FROM pages ORDER BY id DESC LIMIT 1";
	      $stmt = mysqli_stmt_init($conn);
	      if(!mysqli_stmt_prepare($stmt, $query)){
	        echo 'Request failed. Please try again.';
	        exit();
	      }
	      else{
	        //mysqli_stmt_bind_param($stmt, "", );
	        mysqli_stmt_execute($stmt);
	        $result = mysqli_stmt_get_result($stmt);
	        
	        while($row = mysqli_fetch_array($result)){
	      	  $date = $row['date'];
	  		  $link  = $row['link'];
	  		  
	  		  echo "<a href='$link'>$date</a>";
	        }
	      }
	    ?>
	    <h2>Latest</h2>
	  </div>
	</div>  

  </body>
</html>

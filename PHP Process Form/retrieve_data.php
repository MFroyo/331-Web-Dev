<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Response Recorded</title>
    <link rel="stylesheet" href="./styles/main.css">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <div id = "header_background" style="height:250px;">
    </div>

    <style>
        html {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #777;
        }
        body {
            width: 75%;
            border: 3px solid #333;
            border-radius: 20px;
            padding: 2em;
            margin: 20px auto;
            background-color: #eee;
        }
        h1 {
            text-align: center;
        }
        .text {
            font-family:'Courier New', Courier, monospace;
            background-color: white;
            padding: 1em;
        }
    </style>
</head>
<body>
    
<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $language = $_POST['fav_language'];
        $year_enrolled = $_POST['year-attending'];

    }
?>

<table>
    <thead>
        <tr>
        <td>Current Courses</td>
        <td>Favourite Language</td>
        <td>Year Enrolled</td>
        <td>Alternative Courses They Want</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <?php
        echo "<td>";
        if(!empty($_POST['current_courses'])) {
            foreach($_POST['current_courses'] as $curr_courses) {
                echo $curr_courses;
                echo ", ";
            }
        }
        echo "</td>";


        $a = array($language,$year_enrolled);
        for ($i=0; $i<count($a); $i++){
            echo "<td>";
            echo($a[$i]);
            echo "</td>";
        }
        echo "<td>";
        if(!empty($_POST['alt-courses'])) {
            foreach($_POST['alt-courses'] as $course) {
                echo $course;
                echo ", "; 
            }
        }
        echo "</td>";
        ?> 
      </tr>
     </tbody>
    </table>


</body>
</html>
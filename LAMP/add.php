<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Response Recorded</title>
    <link rel="stylesheet" href="./css/main.css">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
        html {
            font-family: Arial, Helvetica, sans-serif;
            background-color: gray;
        }
        body {
            width: 75%;
            border: 3px solid black;
            border-radius: 20px;
            padding: 2em;
            margin: 20px auto;
            background-color: white;
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
    //LINK https://csci331.cs.montana.edu/~q16c274/LAMP
        
        $servername = "localhost";
        $username = "root";
        $password = "mysql";
        $dbname = "db07";
    
    if ($_SERVER["REQUEST_METHOD"] == "GET") {

        $first = $_GET['first'];
        $last = $_GET['last'];
        $age = $_GET['age'];
        $country = $_GET['country'];
        
        //echo $first," ", $last, " ", $age, " ", $country;

    }
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "INSERT INTO randuser (first, last, age, country)
        VALUES ('$first', '$last', $age, '$country')";

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully for ", $first, ".<br>";
          } 
          else {
            echo "Error: " , $sql , "<br>" , $conn->error;
          }
          


        $sel = "SELECT first, last, age, country FROM randuser";

        $result = mysqli_query($conn, $sel);

        echo "<table>";
        echo "<thead>";
            echo "<tr>";
               echo "<td>First</td>";
               echo "<td>Last</td>";
               echo "<td>Age</td>";
               echo "<td>Country</td>";
            echo "</tr>";
        echo "</thead>";
        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {
              echo "<tr>","<td>", $row["first"], "</td>", "<td>", $row["last"],"</td>", "<td>" ,$row["age"],"</td>","<td>", $row["country"],"</td>","</tr>";;
            }
        
        }
    
        else {
            echo "0 results";
        }
        echo "</table>";
        $conn->close();
        
    ?>


</body>
</html>
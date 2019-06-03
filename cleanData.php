<?php 
$name=$_POST['name'];
// 创建连接   面向过程写法
$conn = mysqli_connect("localhost", "aya", "5UQfrpjyjtpD303l", "aya");
// Check connection
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}

$sql = "UPDATE ayaPlayer SET tmpScore = '0' WHERE name = '$name'";
mysqli_query($conn, $sql);

mysqli_close($conn);
?>
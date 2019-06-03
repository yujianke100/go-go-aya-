<?php 

$name=$_POST['name'];
$score=$_POST['score'];

// 创建连接   面向过程写法
$conn = mysqli_connect("localhost", "aya", "5UQfrpjyjtpD303l", "aya");
// Check connection
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}
mysqli_query($conn,'set names utf8');//设置字符集
$sql = "UPDATE ayaPlayer SET tmpScore = '$score' WHERE name = '$name'";
$result = mysqli_query($conn, $sql);
if ($result->num_rows <= 0) {
    echo "<script>window.location.href='./logIn/SignUp.html';alert('未知账号，排行更新失败！')</script>";
 }

mysqli_close($conn);

 ?>
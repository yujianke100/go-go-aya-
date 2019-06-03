<?php

$name=$_POST["name"];
$pass=$_POST["pass"];

// 创建连接   面向过程写法
$conn = mysqli_connect("localhost", "aya", "5UQfrpjyjtpD303l", "aya");
echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
// Check connection
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}
mysqli_query($conn,'set names utf8');//设置字符集
$sql = "SELECT name, password FROM ayaPlayer WHERE (name = '$name') AND (password = '$pass')";//查询这个表特定值
$result = mysqli_query($conn, $sql);//结果
if ($result->num_rows > 0) {
        echo "<script>window.location.href='../index.html';alert('快看看是谁来了!')</script>";
 } else {
  echo "<script>window.location.href='SignIn.html';alert('名字错了？还是神秘代码错了？')</script>";
 }
 
mysqli_close($conn);
?>
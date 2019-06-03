<?php 
$name=$_POST['name'];
$pass=$_POST['password'];
$score=$_POST['score'];
// 创建连接   面向过程写法
$conn = mysqli_connect("localhost", "aya", "5UQfrpjyjtpD303l", "aya");
// Check connection
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}
mysqli_query($conn,'set names utf8');//设置字符集
$sql = "SELECT name FROM ayaPlayer WHERE (name = '$name')";//查询这个表特定值
$result = mysqli_query($conn, $sql);//结果
if ($result->num_rows <= 0) {
    echo "<script>window.location.href='./logIn/SignUp.html';alert('未知账号，排行更新失败！')</script>";
 } else {
    $sql = "SELECT name, password FROM ayaPlayer WHERE (name = '$name') AND (password = '$pass')";//查询这个表特定值
    $result = mysqli_query($conn, $sql);//结果
    if ($result->num_rows > 0) {
        $sql = "UPDATE ayaPlayer SET score = if('$score' > score, '$score', score) WHERE name = '$name'";
        mysqli_query($conn, $sql);
        $sql = "UPDATE ayaPlayer SET tmpScore = '0' WHERE name = '$name'";
        mysqli_query($conn, $sql);
    } else {
        echo "<script>window.location.href='./logIn/SignIn.html';alert('账号与密码不匹配，排行榜更新失败！')</script>";
    }
 }
mysqli_close($conn);
 ?>
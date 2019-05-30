<?php 

$name=$_POST['name'];
$pass=$_POST['pass'];
$qrpass=$_POST['qrpass'];

// 创建连接   面向过程写法
$conn = mysqli_connect("localhost", "aya", "5UQfrpjyjtpD303l", "aya");
echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
// Check connection
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}
mysqli_query($conn,'set names utf8');//设置字符集
$sql = "SELECT name FROM ayaPlayer WHERE (name = '$name')";//查询这个表特定值
$result = mysqli_query($conn, $sql);//结果
if ($result->num_rows > 0) {
    echo "<script>window.location.href='./SignIn.html?id=0';alert('这个记者已经注册了！')</script>";
 } else {
    $sql = "INSERT INTO ayaPlayer(`name`,`password`)  VALUES ('$name', '$pass')";//查询这个表

    //判断是否成功
    if (mysqli_query($conn, $sql)) {
        echo "<script>window.location.href='SignIn.html';alert('注册成功！来搞大新闻吧！')</script>";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
 }


mysqli_close($conn);

 ?>
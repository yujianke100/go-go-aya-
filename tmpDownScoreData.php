<?php  
// 创建连接   面向过程写法
$name=$_POST['name'];
$conn = mysqli_connect("localhost", "aya", "5UQfrpjyjtpD303l", "aya");
// Check connection
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}
mysqli_query($conn,'set names utf8');//设置字符集


$sql = "SELECT tmpScore FROM ayaPlayer WHERE (name = '$name')";
$result = mysqli_query($conn,$sql);  
if (!$result) {
    printf("Error: %s\n", mysqli_error($conn));
    exit();
}

$rows = mysqli_fetch_array($result,MYSQL_ASSOC);

$str = json_encode($rows);//将数组进行json编码

echo $str;


mysqli_close($conn);
?>
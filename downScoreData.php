<?php  
// 创建连接   面向过程写法
$conn = mysqli_connect("localhost", "aya", "5UQfrpjyjtpD303l", "aya");
// Check connection
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}
mysqli_query($conn,'set names utf8');//设置字符集

class Data
{
    public $name;
    public $score;
}

// $sql = "SELECT name, score FROM ayaPlayer WHERE (name = '$name')";
$sql = "SELECT name, score FROM ayaPlayer ORDER BY score DESC";
$result = mysqli_query($conn,$sql);  
if (!$result) {
    printf("Error: %s\n", mysqli_error($conn));
    exit();
}

$jarr = array();
while ($rows = mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count = count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i = 0;$i < $count; $i ++){
        unset($rows[$i]);//删除冗余数据  
    }
    array_push($jarr,$rows);
}

$str = json_encode($jarr);//将数组进行json编码

echo $str;


mysqli_close($conn);
?>
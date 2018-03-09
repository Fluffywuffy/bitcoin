function tims() {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("myGraph").style.width = myArr[0] ;
     document.getElementById("myGraphOne").style.width = myArr[1];
      document.getElementById("myGraphTwo").style.width = myArr[2];
      document.getElementById("myGraphThree").style.width = myArr[3];
}
};

xmlhttp.open("GET", "json/bitcoin.json", true);
xmlhttp.send();
};

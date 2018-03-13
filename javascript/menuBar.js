function menuBar() { alert('hello');
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("menuHeader").innerHTML = myArr[0];
    document.getElementById("MenuOne").innerHTML = myArr[1] + myArr[2] + myArr[3] +
    myArr[4] + myArr[5] + myArr[6];
    document.getElementById("MenuTwo").innerHTML = myArr[7] + myArr[8] + myArr[9] +
    myArr[10] + myArr[11] + myArr[12] + myArr[13] + myArr[14];


}
};

xmlhttp.open("GET", "json/menuBar.json", true);
xmlhttp.send();
};

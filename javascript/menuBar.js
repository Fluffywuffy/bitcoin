function menuBar() { alert('hello');
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("MenuOne").innerHTML = myArr[0] + myArr[1] + myArr[2] + myArr[3] +
    myArr[4] + myArr[5];

}
};

xmlhttp.open("GET", "json/menuBar.json", true);
xmlhttp.send();
};



function about() {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("pageOne").style.width = myArr[0] + myArr[1];

}
};

xmlhttp.open("GET", "json/about.json", true);
xmlhttp.send();
};

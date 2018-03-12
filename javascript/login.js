function login() { 
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("pageOne").innerHTML = myArr[0] + myArr[1] + myArr[2] + myArr[3] +
    myArr[4] + myArr[5];

}
};

xmlhttp.open("GET", "json/login.json", true);
xmlhttp.send();
};

function loginpage() {
    var letter = document.getElementById("myInput").value;
    var text;
    if (letter === "c") {
        text = "<div onclick='menuBar()'>welcome timmy how are you would you like to veiw you info plase click me</div>";
         


    // If the letter is "b" or "d"
    } else if (letter === "b" || letter === "d") {
        text = "Close, but not close enough.";
        
    // If the letter is anything else
    } else {
        text = "Waaay off.. Please stay were you are at we will send some one to get you in a matare of seconds";
    }
    document.getElementById("pageOne").innerHTML = text;
}


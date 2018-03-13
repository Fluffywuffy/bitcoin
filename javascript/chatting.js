function chat() {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("pageOne").innerHTML = myArr[0] + myArr[1] + myArr[2] + myArr[3] +
    myArr[4] + myArr[5];

}
};

xmlhttp.open("GET", "json/chatting.json", true);
xmlhttp.send();
};

function chatter() {
    var computer = document.getElementById("mychat").value;
    var mytext;
    if (computer === "great" || computer === "good" || computer === "ok" || computer === "pretty good") {
        mytext = "thats good to hear I hope all stay that way best wishes!<br />do you like the site?" +
        "<input class='black'  id='mychatOne' type='text' placeholder='user Name'>" +
        "<button onclick='chatterOne()'>SUBMIT</button>";



    // If the letter is "b" or "d"
  } else if (computer === "losy" || computer === "bad") {
        mytext = "Sorry to hear this try to have a better day ";

    // If the letter is anything else
    } else {
        mytext = "thank you but don't under stand try again";
    }
    document.getElementById("pageOne").innerHTML = mytext;
}

function chatterOne() {
  var compute = document.getElementById("mychatOne").value;
  var myTexter;
   if (compute === "yes" || compute === "y" || compute === "ya") {
     myTexter = "this is a fun little site I have been playing with</br >" +
     "I am glade you like it ";

   } else if (compute === "no" || compute ==="n" || compute === "na") {
     myTexter = "sorry to hear you didn't like the site will try to make it easeir"
   }
   document.getElementById("pageOne").innerHTML = myTexter;
}

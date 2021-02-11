
var minLimit;
var maxLimit;
var generatedNumber;
var count = 0;



function range() {

    hide()
    
    var min = document.getElementById('from').value;
    var max = document.getElementById('to').value;

    if (min == '' || max == '') {
        var inputBox = min == '' ? "From" : "To"
        alert("Please enter the " + inputBox + " value")
        return
    }

    else if (max - min >= 200) {
        generatedNumber = Math.floor(Math.random() * (max - min) + min);
        hideRange()
        hide()
        checkCookie()

    }
    else {
        alert("Enter range with atleast a diffrence of 200");
    }
}


function checkNumber() {

    var num = document.getElementById("num").value;


        if (num > generatedNumber) {
            alert("Enter a smaller number--" + generatedNumber)
            count++;
            return

        }
        if (num < generatedNumber) {
            alert("Enter a larger number--" + generatedNumber)
            count++;
            return       
        }
    alert("Winner Winner Chicken Dinner...Total tries=" + count)
    setCookie("highest_point", count)
}

function setCookie(name, value) {
    var latestValue = name + "=" + value; 
    var x=getCookie("highest_point") 
    if(x>value || x == null )
    {

        document.cookie = latestValue;
    }
}

function getCookie(name) {
   

        cookiePair=document.cookie.split("=");

        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
  
    return null;
}

function checkCookie() {
    var highest_score = getCookie("highest_point");

    if (highest_score != null) {
        alert("Your previous least tries= " + highest_score);
    }

}

function hide() {

    var x = document.getElementById("numberDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function hideRange() {

    var x = document.getElementById("rangeHide");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


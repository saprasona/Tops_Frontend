// click event ===============================================
function checkFormValid() {
    let fn = document.getElementById("fname").value;
    let ln = document.getElementById("lname").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let ar = document.getElementById("addr").value;
    let city = document.getElementById("city").value;
    if (fn == "" || fn == null) {
        document.getElementById("msg1").innerText = "Enter Firstname";
        return false
    } else if (ln == "" || ln == false) {
        document.getElementById("msg2").innerText = "Enter Lastname";
        return false
    } else if (male == false && female == false) {
        document.getElementById("msg3").innerText = "Select Gender";
        return false
    } else if (ar == "" || ar == null) {
        document.getElementById("msg4").innerText = "Enter Address"
        return false;
    } else if (city == "-1") {
        document.getElementById("msg5").innerText = "Select City"
        return false;
    }
}


// blur event  ==================================================
// parameterized function
// blnk (paramenter/argument) = check input type
// msg (paramenter/argument) = display error msg
function blnkCheck(blnk, msg) {
    if (blnk.value == "" || blnk.value == null) {
        document.getElementById(msg).innerText = "Invalid value!!!"
        return false
    }
}
function checkradio(check, msg) {
    if (check.checked == false) {
        document.getElementById(msg).innerText = "Select value!!"
        return false
    } else {
        document.getElementById(msg).innerText = ""
        return false
    }
}
function dropcheck(sel, msg) {
    if (sel.value == "-1") {
        document.getElementById(msg).innerText = "Select value!!"
        return false
    } else {
        document.getElementById(msg).innerText = ""
        return false
    }
}

// keyboard event ============================================== 

function nameValid(checkname, msg) {
    let regEx = /^[a-zA-Z]*$/;
    if (!(regEx.test(checkname.value)) || checkname.value.length < 2) {
        document.getElementById(msg).innerText = "Enter proper name"
        return false;
    } else {
        document.getElementById(msg).innerText = ""
        return false;
    }
}
// address length check 
function checkAddress(addlength, msg) {
    if (addlength.value.length < 30) {
        document.getElementById(msg).innerText = "Enter proper address"
        return false;
    } else {
        document.getElementById(msg).innerText = ""
        return false;
    }
}

function calculate() {

    const marks1 = document.getElementById('marks1').value;
    const marks2 = document.getElementById('marks2').value;
    const marks3 = document.getElementById('marks3').value;
    const marks4 = document.getElementById('marks4').value;
    const marks5 = document.getElementById('marks5').value;
    const marks6 = document.getElementById('marks6').value;
    const marks7 = document.getElementById('marks7').value;

    var a, b, c, d, e, f, g;
    var total;
    var percentage;
    a = parseFloat(marks1.value);
    b = parseFloat(marks2.value);
    c = parseFloat(marks3.value);
    d = parseFloat(marks4.value);
    e = parseFloat(marks5.value);
    f = parseFloat(marks6.value);
    g = parseFloat(marks7.value);
    total = parseFloat(marks1) + parseFloat(marks2) + parseFloat(marks3) + parseFloat(marks4) + parseFloat(marks5) + parseFloat(marks6) + parseFloat(marks7);

    if (a > 50 || b > 50 || c > 50 || d > 50 || e > 50 || f > 50 || g > 50) {
        alert("please enter correct value");
    }
    else {
        document.getElementById("total").innerHTML = total;
        var percentage = total / 350 * 100;
        document.getElementById("percentage").innerHTML = percentage;
    }
    return false;

}
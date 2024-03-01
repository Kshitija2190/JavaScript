
function clickevent() {
    document.write("Welcome");
}
function load() {
    document.getElementById("bg").style.backgroundColor = "red";
    document.getElementById("bg").style.width = "300px";
    document.getElementById("bg").style.height = "300px";
}

function mouseoverevent() {
    alert("This is Javascript");
}
function focusevent() {
    document.getElementById("input1").style.background = " aqua";
}

function fun() {
    document.getElementById("para").innerHTML = "Hello World" + "<br>" + "Welcome to the  Javascript";
}
function fun1() {
    document.getElementById("heading").innerHTML = " Welcome to the javascript";
}
function fun2() {  
    var i = 0;
    var res = "Width = " + window.outerWidth + "<br>" + "Height = " + window.outerHeight;  
    document.getElementById("para").innerHTML = res;  
      
    var res1 = i += 1;  
    document.getElementById("s1").innerHTML = res1;  
    }  
    




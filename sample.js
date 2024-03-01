// To display the message in javascript -- Single line comments
/* To display the message in javscript

Multi line comments
*/
var name = 'ram' //Global variable
function msg() {
    alert("Hello Javascript");
}

function getcube(number) {
    alert(number * number * number);
}

function multiply() {
    // var emp=["Ram","Shyam","Ratan"];  
    var emp = new Array();
    emp[0] = 'Ram';
    emp[1] = 'Shyam';
    emp[2] = 'Ratan';
    emp[3] = 'Vishal';
    for (i = 0; i < emp.length; i++) {
        document.write(emp[i] + "<br/>");
    }
    emp.push('Rita')
    console.log(emp);
    emp.pop();
    console.log(emp);
    emp.splice(2)

    // var a = 5; // local variable - the variable which are defined inside the function
    // var b = 6;
    // var c = a * b;
    // var name = 'Kshitija';
    // var flag = 'Kshitija';
    // var c;

    // document.write("The multiplication is :", ++c);
    // //c++ => c+1 c+=1
    // // a+=20 // a = a+20;
    // console.log(name === c)
    // console.log(c);
    // document.write('Name is', name);
    // if (name == c) {
    //     console.log('It is equal');
    // } else {
    //     console.log('It is not equal')
    // }
    // var a = 45;
    // switch(a){
    //     case 10: document.write("a is equal to 10");
    //     break;
    //     case 15: document.write("a is equal to 15");
    //     break;
    //     case 20:document.write("a is equal to 20");
    //     break;
    //     default:
    //         document.write("a is not equal to 10, 15 or 20");    
    // }
    // for (i = 1; i <= 5; i++) {
    //     document.write(i + "<br/>")
    // }
    // var i = 11;
    // while (i <= 15) {
    //     document.write(i + "<br/>");
    //     i++;
    // }
    // var i = 21;
    // do {
    //     document.write(i + "<br/>");
    //     i++;
    // } while (i <= 25);

    // const person = { fname: "Ram", lname: "Dev", age: 25 }; // object literal

    // let txt = "";
    // for (let x in person) {
    //     txt += person[x] + " ";
    // }

    // console.log(txt);
    // var emp = new Object();
    // emp.id = 101;
    // emp.name = "Ravi Malik";
    // emp.salary = 50000;
    // document.write(emp.id + " " + emp.name + " " + emp.salary);

    // function emp(id,name,salary){  
    // 	this.id=id;  
    // 	this.name=name;  
    // 	this.salary=salary;  
    // 	}  
    // 	e=new emp("109","Vimal" ,"3000");  

    // 	document.write(e.id+" "+e.name+" "+e.salary);  
    // var abc = {id:123, name:'Ram'}
    //     console.log(Object.keys(abc));

}
function getDetails() {
    // var str="javascript";  
    // var w1 = "Hello";
    // var w2 = "World";
    // var w3 = w1.toUpperCase();
    var str = "This is JavaTpoint website";
    document.write(str);

    var data = "Hello World";
    console.log(data.substr(2, 4));
    document.writeln(data);
    // document.write(w3);  

}
function getName() {
    var name = document.getElementById(name);
}

function totalelements() {
    var allgenders = document.getElementsByName("gender");
    alert("Total Genders:" + allgenders.length);
}

function showcommentform() {
    var data = "Name:<input type='text' name='name'><br>Comment:<br><textarea rows='5' cols='80'></textarea>";
    document.getElementById('mylocation').innerHTML = data;
}
function validate() {
    var msg;
    // if (document.myForm.userPass.value.length > 5) {
    //     msg = "good";
    // }
    // else {
    //     msg = "poor";
    // }
    document.getElementById('mylocation').innerText = msg;
}
function timeout(){  
    // setTimeout(  
    // function(){  
    // alert("Welcome to Javascript after 2 seconds")  
    // },2000);  
    let arrNum = [15, 39, 20, 32, 30, 45, 22]
    function sumOfEle(num, ind) {
      return num + ind;
    }
    let arrNum2 = arrNum.reduce(sumOfEle)
    console.log(arrNum2)
    }  
    







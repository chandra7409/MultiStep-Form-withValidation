const btn=document.getElementById("btn");
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    var x =document.forms["form1"]["psw"].value;
    var y =document.forms["form1"]["DOB"].value;
    function checkNumber(){
        var letter=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if(letter.test(x)){
            return true;
        }
        alert("Pls enter the valid Phone number");
        return false;
    }
    function checkDOb(){
        var letter=/^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;
        if(letter.test(y)){
            return true;
        }
        alert("Pls enter the valid DOB");
        return false;
    }
    if(checkNumber()==true && checkDOb()==true){
        // window.location.href = "Next1.html";
        // window.location.replace("Next1.html");
        location.assign("Next1.html"); // or
// location = "http://www.mozilla.org";

    }
    
})
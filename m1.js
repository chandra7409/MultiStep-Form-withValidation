// var btn = document.querySelector(".btn-reload"); 
// btn.addEventListener("click", function(e){
//  e.preventDefault();
//  location.reload(true); 
// }); 
const btn=document.getElementById("btn");
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    var x =document.forms["form1"]["fname"].value;
    var y =document.forms["form1"]["lname"].value;
    var pattern=/^[A-Za-z]+$/;
    function Checkfname(){
       
        if(pattern.test(x)){
            return true;

        }
        alert("pls enter the first name");
        return false;
    }
    function Checklname(){
       
        if(pattern.test(y)){
            return true;

        }
        alert("pls enter the first name");
        return false;
    }
   if(Checkfname()==true && Checklname() == true){
        window.location.href = "Next.html";
        window.location.replace("Next.html");

   }

})




    // function checkValidate(){
    //     let x = document.forms["form1"]["fname"].value;
    //     if (x == "") {
    //       alert("First Name must be filled out");
    //       return false;
    //     }
    // }
    // function checkValidate(){
    //     let y = document.forms["form1"]["lname"].value;
    //     if (x == "") {
    //       alert("Last Name must be filled out");
    //       return false;
    //     }
    // }
   
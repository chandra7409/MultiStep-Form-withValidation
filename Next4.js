const btn=document.getElementById("btn");
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    var x =document.forms["form1"]["email"].value;
    var y =document.forms["form1"]["password"].value;
    function checkeamil(){
        var letter=/^([w-]+(?:.[w-]+)*)@((?:[w-]+.)*w[w-]{0,66}).([com net org]{3}(?:.[a-z]{6})?)$/i;
        if(letter.test(x)){
            return true;
        }
        alert("Pls enter the valid Email address");
        return false;
    }
    checkeamil();
    function checkpass(){
        var letter=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/;
        if(letter.test(y)){
            return true;
        }
        alert("Pls enter the valid Password");
        return false;
    }
    checkpass();
    
})
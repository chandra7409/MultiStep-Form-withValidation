const btn=document.getElementById("btn");
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    var x =document.forms["form1"]["cityname"].value;
    var y =document.forms["form1"]["pinCode"].value;
    var z =document.forms["form1"]["Statename"].value;
    var a =document.forms["form1"]["countryname"].value;
    var pattern=/^[A-Za-z]+$/;
    var pinco=/^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/;
    function CheckCityname(){
       
        if(pattern.test(x)){
            return true;

        }
        alert("pls enter the City name");
        return false;
    }
    function CheckPincode(){
       
        if(pinco.test(y)){
            return true;

        }
        alert("pls enter the Pincode");
        return false;
    }
    function CheckStatename(){
       
        if(pattern.test(x)){
            return true;

        }
        alert("pls enter the State name");
        return false;
    }
    function CheckCountryename(){
       
        if(pattern.test(x)){
            return true;

        }
        alert("pls enter the Country name");
        return false;
    }
   if(CheckCityname()==true && CheckPincode() == true &&CheckStatename()==true&& CheckCountryename()==true){
    window.location.href = "Next4.html";
    window.location.replace("Next4.html");
   }

})



















    
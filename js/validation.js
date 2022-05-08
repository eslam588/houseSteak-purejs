// start form validation

let form = document.getElementById('form');
let username = document.getElementById("inputname");
let email= document.getElementById("inputemail");
let phone = document.getElementById("inputphone");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validation();
})


function validation(){
    const usernamevalue= username.value.trim();
    const emailvalue= email.value.trim();
    const phonevalue= phone.value.trim();
    var pattern = /^[a-zA-Z]{3,15}( ([a-zA-Z]{3,15})+)+$/gm;
    if(usernamevalue.match(pattern)){
        username.style.border="1px solid green";
        document.getElementById("valid1").innerHTML=""; 
    }
    else{
        document.getElementById("valid1").innerHTML="Name is not valid !";
        username.style.border="1px solid #e74c3c";   
    }

    var pattern1 = /^\w.+@[0-9a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(emailvalue.match(pattern1)){
        document.getElementById("valid2").innerHTML="";
        email.style.border="1px solid green";
    }
    else{
        document.getElementById("valid2").innerHTML="email is not valid !";
        email.style.border="1px solid #e74c3c";

    }

    // /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{0,3}[-\s\.]?[0-9]{1,8}$/im
    
    let pattern2 = /01[0125][0-9]{8}$/;
    if(phonevalue.match(pattern2)){
        document.getElementById("valid3").innerHTML="";
        phone.style.border="1px solid green";
    }
    else{
        document.getElementById("valid3").innerHTML="Number phone is invalid !";
        phone.style.border="1px solid #e74c3c";

    }

    
}

// end form validation

const show= document.querySelector(".show-one"),
show2 = document.querySelector('.show2'),
show3 = document.querySelector('.show3'),
LogPW = document.querySelector('#LoginPW'),
CreatePW = document.querySelector('#CreatePW'),
ConPW = document.querySelector('#ConPW'),
alertIcon = document.querySelector('.alertIcon'),
alertText = document.querySelector('.text'),
checkbtn = document.querySelector("#Checkbutton");


// Show & Hide Password
function toggle(btnname, btn ){
    if(btnname.type==="password"){
        btnname.type="text";
        btn.classList.replace("fa-eye-slash", "fa-eye")
    }else{
        btnname.type="password"
        btn.classList.replace("fa-eye", "fa-eye-slash")
    }
}

show.addEventListener("click", ()=> toggle(LogPW, show));
show2.addEventListener("click",()=>toggle(CreatePW, show2));
show3.addEventListener("click", ()=>toggle(ConPW, show3));



// Password match
CreatePW.addEventListener("input", ()=>{
    let inputValue = CreatePW.value.trim();
    if(inputValue.length>=8){
        ConPW.removeAttribute('disabled');
        checkbtn.removeAttribute('disabled');
    }else{
        ConPW.setAttribute('disabled', true);
        checkbtn.setAttribute('disabled', true);
        ConPW.value= "";
        alertText.innerHTML = "Enter at least 8 characters";
        alertText.style.color = "#a6a6a6"
        alertIcon.style.display= "None"
    }
})

ConPW.addEventListener("input", ()=>{
    let inputValue=ConPW.value.trim();
    if(inputValue.length>=8){
        if(CreatePW.value===ConPW.value){
            alertText.style.color ="green"
            alertText.innerHTML ="Password Matched"
            alertIcon.classList.replace("fa-exclamation-circle", "fa-check-circle");
            alertIcon.style.color ="green"
            checkbtn.style.cursor = "pointer"

        }else{
            alertText.style.color = "red";
            alertText.innerHTML = "Password didn't match"
            alertIcon.style.display = "inline-block"
            alertIcon.classList.replace("fa-check-circle", "fa-exclamation-circle");
            alertIcon.style.color ="red"
        }
    }
    
})
    

    
    



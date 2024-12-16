

var finput_email = document.getElementById("femail_input")
var finput_pass = document.getElementById("fpassword_input")
var fp_incorrect = document.getElementById("fincorrect")
var fp_incorrectinput = document.getElementById("finput_incorrect")


var sinput_name = document.getElementById("sname_input")
var psname_valid = document.getElementById("namevalid")
var sinput_email = document.getElementById("semail_input")
var psemail_valid = document.getElementById("email_valid")
var sinput_pass = document.getElementById("spassword_input")
var pspass_valid = document.getElementById("pass_valid")
var sp_incorrect = document.getElementById("sincorrect")
var sp_success = document.getElementById("success")

var bow=document.getElementById("bow")

var listperson
if (localStorage.getItem("LIST") == null) {
    listperson = [];
}
else {
    listperson = JSON.parse(localStorage.getItem("LIST"))
  if(bow!=null){
    for(var i=0;i<listperson.length;i++){
        if(JSON.parse(localStorage.getItem("userlogged"))==listperson[i].email){
            bow.innerHTML+=" "+listperson[i].name
        }
    }
  }
    
}

function login() {
    if (finput_email.value == "" || finput_pass.value == "") {
        fp_incorrect.classList.remove("d-none")
    }
    else {
        fp_incorrect.classList.add("d-none")
    }

    if (localStorage.getItem("LIST") != null) {
        listperson = JSON.parse(localStorage.getItem("LIST"))
        for (var i = 0; i < listperson.length; i++) {
            if (listperson[i].email == finput_email.value && listperson[i].pass == finput_pass.value) {
                window.location.href = "home.html"
                localStorage.setItem("userlogged",JSON.stringify(listperson[i].email))
            }
            else{
                fp_incorrectinput.classList.remove("d-none")
            }
        }
        
    }
    clear()
}

function fvaildemail() {
    var regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (regexemail.test(finput_email.value) == true) {
        fp_incorrectinput.classList.add("d-none")
        finput_email.classList.add("is-valid")
        finput_email.classList.remove("is-invalid")
        fp_incorrect.classList.add("d-none")
        return true
    }
    else {
        fp_incorrectinput.classList.remove("d-none")
        finput_email.classList.remove("is-valid")
        finput_email.classList.add("is-invalid")
        fp_incorrect.classList.add("d-none")
        return false
    }

}
finput_email.addEventListener("change", fvaildemail)

function fvaildpassword() {
    var regexpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regexpass.test(finput_pass.value) == true) {
        fp_incorrectinput.classList.add("d-none")
        finput_pass.classList.add("is-valid")
        finput_pass.classList.remove("is-invalid")
        fp_incorrect.classList.add("d-none")
        return true
    }
    else {
        fp_incorrectinput.classList.remove("d-none")
        finput_pass.classList.remove("is-valid")
        finput_pass.classList.add("is-invalid")
        fp_incorrect.classList.add("d-none")
        return false
    }
}
finput_pass.addEventListener("change", fvaildpassword)

// -----------------------------------------------

var emailfound=document.getElementById("emailfound")

function signup() {
    if (sinput_email.value == "" || sinput_pass.value == "" || sinput_name.value == "") {
        sp_incorrect.classList.remove("d-none")
        sp_success.classList.add("d-none")
    }
    else {
        sp_incorrect.classList.add("d-none")
        sp_success.classList.remove("d-none")
    }

    if (svaildname() == true && svaildemail() == true && svaildpassword() == true) {
        var person = {
            name: sinput_name.value,
            email: sinput_email.value,
            pass: sinput_pass.value
        }

    }

        if (localStorage.getItem("LIST") == null) {
            listperson = [];
        }
        else {
            listperson = JSON.parse(localStorage.getItem("LIST"))
        }
            
        for (var i = 0; i < listperson.length; i++) {
            if (listperson[i].email == sinput_email.value) {
                emailfound.classList.remove("d-none")
                sp_success.classList.add("d-none")
                return; 
            }
        }
        listperson.push(person);
        emailfound.classList.add("d-none")
        sp_success.classList.remove("d-none")
        localStorage.setItem("LIST", JSON.stringify(listperson))

    clear()
}

function svaildname() {
    var regexname = /^[a-zA-Z]{2,30}$/
    if (regexname.test(sinput_name.value) == true) {
        psname_valid.classList.add("d-none")
        sinput_name.classList.add("is-valid")
        sinput_name.classList.remove("is-invalid")
        sp_incorrect.classList.add("d-none")
        return true
    }
    else {
        psname_valid.classList.remove("d-none")
        sinput_name.classList.remove("is-valid")
        sinput_name.classList.add("is-invalid")
        sp_incorrect.classList.add("d-none")
        return false
    }
}
sinput_name.addEventListener("change", svaildname)

function svaildemail() {
    var regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (regexemail.test(sinput_email.value) == true) {
        psemail_valid.classList.add("d-none")
        sinput_email.classList.add("is-valid")
        sinput_email.classList.remove("is-invalid")
        sp_incorrect.classList.add("d-none")
        return true
    }
    else {
        psemail_valid.classList.remove("d-none")
        sinput_email.classList.remove("is-valid")
        sinput_email.classList.add("is-invalid")
        sp_incorrect.classList.add("d-none")
        return false
    }
}
sinput_email.addEventListener("change", svaildemail)

function svaildpassword() {
    var regexpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regexpass.test(sinput_pass.value) == true) {
        pspass_valid.classList.add("d-none")
        sinput_pass.classList.add("is-valid")
        sinput_pass.classList.remove("is-invalid")
        sp_incorrect.classList.add("d-none")
        return true
    }
    else {
        pspass_valid.classList.remove("d-none")
        sinput_pass.classList.remove("is-valid")
        sinput_pass.classList.add("is-invalid")
        sp_incorrect.classList.add("d-none")
        return false
    }
}
sinput_pass.addEventListener("change", svaildpassword)

function clear() {
    finput_email.value = ""
    finput_pass.value = ""
    sinput_name.value = ""
    sinput_email.value = ""
    sinput_pass.value = ""
    finput_email.classList.remove("is-valid")
        finput_email.classList.remove("is-invalid")
        finput_pass.classList.remove("is-valid")
        finput_pass.classList.remove("is-invalid")
    sinput_name.classList.remove("is-valid")
    sinput_name.classList.remove("is-invalid")
    sinput_email.classList.remove("is-valid")
    sinput_email.classList.remove("is-invalid")
    sinput_pass.classList.remove("is-valid")
    sinput_pass.classList.remove("is-invalid")
    psname_valid.classList.add("d-none")
    psemail_valid.classList.add("d-none")
    pspass_valid.classList.add("d-none")
    
}



function logout(){
     window.location.href ="index.html"
    for(var i=0;i<listperson.length;i++){
        listperson.splice(listperson[i],1)
        localStorage.setItem("LIST",JSON.stringify(listperson))
    }
   
    clear()

}

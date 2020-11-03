window.onload = function () {

//--------------------input and error htmlCollection data---------------
var dataEntries = document.getElementsByTagName ('input');
var errors = document.getElementsByClassName('error-message');
var formData = document.getElementsByClassName('aplication-form')[0];

//-------------------individual input variables-------------------------
var name = dataEntries[0];
var email = dataEntries[1]; 
var pass = dataEntries[2];
var rePass = dataEntries[3];
var age = dataEntries[4];
var phoneNumber = dataEntries[5];
var address = dataEntries[6];
var city = dataEntries[7];
var postal = dataEntries[8];
var dni = dataEntries[9];

//--------------------Errors flags--------------------------------------
nameFlagError = 0;
emailFlagError = 0;
passFlagError = 0;
rePassFlagError = 0;
ageFlagError = 0;
phoneFlagError = 0;
addressFlagError = 0;
cityFlagError = 0;
postalFlagError = 0;
dniFlagError = 0;

errorAlert = 0;
//--------------------BLUR VALIDATION--------------------------------------------------

//--------------------name validation------------------------

name.onblur = function () {
    if (name.value.length < 6 || name.value.indexOf(' ') ==-1) {
        errors[0].style.display = "flex";
        nameFlagError = 1 ;
    } else {
        errors[0].style.display = "none";
        nameFlagError = 0 ;
    }
}

//-------------------email validation----------------------
email.onblur = function () {
    if(email.value.indexOf('@')!==-1 && email.value.indexOf('.com')!==-1) {
        errors[1].style.display = "none";
        emailFlagError = 0;
    } else {
        errors[1].style.display = "flex";
        emailFlagError = 1;
    }
}

//------------------------password validation--------------------
pass.onblur = function () {
    if (pass.value.length >= 8) {
        for(var i=0; i<pass.value.length; i++) {
            if (pass.value.charCodeAt(i) >= 48 && pass.value.charCodeAt(i) <=57 ) {
                var flagNumber = 1;
            } else if (pass.value.charCodeAt(i)>=97 && pass.value.charCodeAt(i) <= 122 ) {
                var flagLetter = 1;
            }
        }
        if (flagNumber ==1 && flagLetter ==1) {
            errors[2].style.display = "none";
            passFlagError = 0 ;
        } else {
            errors[2].style.display = "flex";
            passFlagError = 1 ;
        }
    } else {
        errors[2].style.display = "flex";
        passFlagError = 1 ;
        }
    }

//-----------------------repeat password validation----------------
rePass.onblur = function () {
    if ( rePass.value.indexOf(pass.value) !== -1 && rePass.value.length == pass.value.length ) {
        errors[3].style.display = "none";
        rePassFlagError = 0 ;
    } else {
        errors[3].style.display = "flex";
        rePassFlagError = 1 ;
    }
}


//-----------------------age validation-------------------------
age.onblur = function () {
    if (age.value % 1 == 0 && age.value >= 18) {
        errors[4].style.display = "none";
        ageFlagError = 0 ;
    } else {
        errors[4].style.display = "flex";
        ageFlagError = 1 ;
    }
}

//----------------------Phone Number validation-----------------
phoneNumber.onblur = function () {
    if (phoneNumber.value.length < 7 || phoneNumber.value.indexOf('_') !==-1 || phoneNumber.value.indexOf('-') !==-1 
    || phoneNumber.value.indexOf(' ') !==-1 || phoneNumber.value.indexOf('(') !==-1 || phoneNumber.value.indexOf(')') !==-1 ) {
        errors[5].style.display = "flex";
        phoneFlagError = 1 ;
    } else {
        errors[5].style.display = "none";
        phoneFlagError = 0 ;
    }
}

//----------------------Adress validation-----------------------
address.onblur = function () {
    if (address.value.length >= 5) {
        for(var i=0; i<address.value.length; i++) {
            if (address.value.charCodeAt(i) >= 48 && address.value.charCodeAt(i) <=57 ) {
                var flagNumber = 1;
            } else if (address.value.charCodeAt(i)>=97 && address.value.charCodeAt(i) <= 122 ) {
                var flagLetter = 1;
            } else if (address.value.indexOf(' ') !==-1) {
                var flagBlank =1;
            }
        }
        if (flagNumber == 1 && flagLetter == 1 && flagBlank == 1) {
            errors[6].style.display = "none";
            addressFlagError = 0 ;
        } else {
            errors[6].style.display = "flex";
            addressFlagError = 1 ;
        }
    } else {
        errors[6].style.display = "flex";
        addressFlagError = 1 ;
        }
}

//-----------------------City of residence----------------------
city.onblur = function () {
    if ( city.value.length >= 3 ) {
        errors[7].style.display = "none";
        cityFlagError = 0 ;
    } else {
        errors[7].style.display = "flex";
        cityFlagError = 1 ;
    }
}

//-----------------------Postal Number--------------------------
postal.onblur = function () {
    if ( postal.value.length >= 3 ) {
        errors[8].style.display = "none";
        postalFlagError = 0 ;
    } else {
        errors[8].style.display = "flex";
        postalFlagError = 1 ;
    }
}

//---------------------------DNI--------------------------------
dni.onblur = function () {
    if ( dni.value.length >= 7 && dni.value.length <=8 ) {
        errors[9].style.display = "none";
        dniFlagError = 0 ;
    } else {
        errors[9].style.display = "flex";
        dniFlagError = 1 ;
    }
}

 //--------------------------FOCUS------------------------------------------------

// Each error message will be hidden if the user focus on an input space.
for (var i=0; i<10; i++) {
    const dataError= errors[i] ;
    dataEntries[i].onfocus= function () {
        dataError.style.display = "none";
    }
}

//---------------------------SUBMIT-----------------------------------------------

formData.addEventListener ('submit', finalValidation);

function finalValidation () {

    var arrayInputsValues = ["DATA ENTERED:"] ;
    var arrayErrorAlert = [] ;

    if ( nameFlagError == 1 ) {
        arrayErrorAlert.push("Name: " + errors[0].innerHTML);
        errorAlert = 1;
    }
    
    if (emailFlagError==1) {
        arrayErrorAlert.push("E-mail: " + errors[1].innerHTML);
        errorAlert = 1;
    }
    
    if (passFlagError==1) {
        arrayErrorAlert.push("Password: " + errors[2].innerHTML);
        errorAlert = 1;
    }
    
    if (rePassFlagError==1) {
        arrayErrorAlert.push("Repeated Password: " + errors[3].innerHTML);
        errorAlert = 1;
    }
    
    if (ageFlagError==1) {
        arrayErrorAlert.push("Age: " + errors[4].innerHTML);
        errorAlert = 1;
    }
    
    if (phoneFlagError==1) {
        arrayErrorAlert.push("Phone Number: " + errors[5].innerHTML);
        errorAlert = 1;
    }
    
    if (addressFlagError==1) {
        arrayErrorAlert.push("Address: " + errors[6].innerHTML);
        errorAlert = 1;
    }
    
    if (cityFlagError==1) {
        arrayErrorAlert.push("City of residence: " + errors[7].innerHTML);
        errorAlert = 1;
    }
    
    if (postalFlagError==1) {
        arrayErrorAlert.push("Postal Number: " + errors[8].innerHTML);
        errorAlert = 1;
    }
    
    if (dniFlagError==1) {
        arrayErrorAlert.push("DNI: " + errors[9].innerHTML);
        errorAlert = 1;
    }
    
    if (errorAlert==1) {
        alert(arrayErrorAlert.join('\n'));
    } else {
        for (var i = 0 ; i < dataEntries.length-1 ; i++) {
            arrayInputsValues.push(dataEntries[i].value);
        }
        alert (arrayInputsValues.join('\n'));
    }
}

}

var isProfileValidated = function(state){
    
    if (state.password !== state.password2) {
        alert("The passwords you entered do not match");
        return false;
    }
    if (state.password.length < 8){
        alert("The password you entered is less than 8 charcters. Please try again");
        return false;
    }
    return true;
}

exports.isProfileValidated = isProfileValidated;


var isNumbered = function(state){
    
    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(state.zip);
    if(state.zip !=='' && !isValidZip){
        alert("Please enter correct zip code");
        return false;
    }

    if(isNaN(state.age)){
      alert("Please enter age as a number");
      return false;
    }

    if(isNaN(state.weight)){
        alert("Please enter weight as a number");
        return false;
    }

    if(isNaN(state.height)){
        alert("Please enter height as a number");
        return false;
    }
    

    return true;
}

exports.isNumbered = isNumbered;


var isExerciseValidated = function(state){
    
    if(isNaN(state.duration)){
        alert("Please enter duration as a number");
        return false;
    }
    if (state.description.length < 10){
        alert("The description you entered is less than 10 charcters. Please try again");
        return false;
    }
    return true;
}

exports.isExerciseValidated = isExerciseValidated;

'use strict';

const $regForm = $("#reg-form");
let USER_DATA;

function getFormData(){
    const signUpFormData = {
        "username" : $('input[name=username]').val(),
        "fName" : $('input[name=first-name]').val(),
        "lName" : $('input[name=last-name]').val(),
        "email" : $('input[name=email]').val(),
        "password" : $('input[name=password]').val()
    };
    return signUpFormData
};

$regForm.submit(async function(evt){
    evt.preventDefault();
    const formData = getFormData();

    try{
        USER_DATA = await User.register(formData);
    }
    catch (error){
        $regForm.prepend($(`<h5>${error}</h5>`));
    }
    localStorage.setItem('id', USER_DATA.user_id);
});

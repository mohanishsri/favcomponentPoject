import { AbstractControl, ValidationErrors } from "@angular/forms";


export class PasswordValidators{   

    static shouldNotBeOld(control:AbstractControl) {

        return new Promise ((resolve) => {                        
                if(control.value !== '1234')
                    resolve({shouldNotBeOld: true});
                else 
                    resolve(null);
        });        
       
    }   

    static passwordShouldMatch(control:AbstractControl){
        let newpassword = control.get('newpassword');
        let confirmpasswrod = control.get('confirmpassword');

        if(newpassword.value!=confirmpasswrod.value)
        {
            return {passwordShouldMatch: true};
        }
        else
        {
            return null;
        }
    }
}
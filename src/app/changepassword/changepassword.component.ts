import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

 form = new FormGroup(
              {
                oldpassword: new FormControl('', [Validators.required, PasswordValidators.shouldNotBeOld]),
                newpassword: new FormControl('', Validators.required),
                confirmpassword: new FormControl('', Validators.required)                
              });


              get oldpassword(){
                return this.form.get('oldpassword');
              }
              get newpassword(){
                return this.form.get('newpassword');
              }
              get confirmpassword(){
                return this.form.get('confirmpassword');
              }

}

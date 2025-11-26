import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormFieldConfig, ValidationConfig } from '../../Model/FormSignin.type';

@Component({
  selector: 'app-signupcomponent',
  imports: [ReactiveFormsModule ],
  templateUrl: './signupcomponent.html',
  styleUrl: './signupcomponent.css',
})
export class Signupcomponent {
    
      signupForm: FormGroup = new FormGroup({
        userId: new FormControl(0),
        emailId: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), ]), 
        fullName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        mobileNo: new FormControl('', [Validators.required, Validators.pattern('^\\d{10}$')])

      });

        
   signupFormConfig : FormFieldConfig[] = [
    { type: 'number', id: 'userId', label: 'User ID', placeholder:'id', autocomplete: 'username', validation: {} },
    { type: 'email', id: 'emailId', label: 'Email Address', placeholder:'email ... ', autocomplete: 'email', validation: { 'required': 'Email is required', 'email': 'Please enter a valid email address' } },
    { type: 'password', id: 'password', label: 'Password', placeholder:'password .. ', autocomplete: 'current-password', validation: { 'required': 'Password is required', 'minlength': 'Password must be at least 6 characters long' } },
    { type: 'text', id: 'fullName', label: 'Full Name', placeholder:'fullname ..', autocomplete: 'name', validation: {'required': 'username is required', 'minlength':'minlength 2 char '} },
    { type: 'tel', id: 'mobileNo', label: 'Mobile Number', placeholder:'mobile no ..', autocomplete: 'tel', validation: {'required': 'mobile is required', 'pattern':'mobile no is not valid '} }
  ];

  getValidationKeys(validation: ValidationConfig): string[] {
    return Object.keys(validation);
}

    onSaveUser(){
      const formValue = this.signupForm.value;
      console.log(formValue);
    }

}

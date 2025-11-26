import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFieldConfig, ValidationConfig } from '../../Model/FormSignin.type';

@Component({
  selector: 'app-logincomponent',
  imports: [ReactiveFormsModule, ],
  templateUrl: './logincomponent.html',
  styleUrl: './logincomponent.css',
})
export class Logincomponent {
  
   signupForm: FormGroup = new FormGroup({
        userId: new FormControl(0),
        emailId: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), ]), 
        fullName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        mobileNo: new FormControl('', [Validators.required, Validators.pattern('^\\d{10}$')])

      });

        
   signupFormConfig : FormFieldConfig[] = [
    { type: 'email', id: 'emailId', label: 'Email Address', placeholder:'email ... ', autocomplete: 'email', validation: { 'required': 'Email is required', 'email': 'Please enter a valid email address' } },
    { type: 'password', id: 'password', label: 'Password', placeholder:'password .. ', autocomplete: 'current-password', validation: { 'required': 'Password is required', 'minlength': 'Password must be at least 6 characters long' } },
  ];

  getValidationKeys(validation: ValidationConfig): string[] {
    return Object.keys(validation);
}

    onSaveUser(){
      const formValue = this.signupForm.value;
      console.log(formValue);
    }

}

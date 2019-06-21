import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
 import {  FormBuilder ,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{ 
  title = 'loginform';
  //  role:any=['trainee','QA','testing','developer','bpo']

  formcontrol=new FormControl();
  contactForm= new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    emailId:new FormControl(),
    mobileNumber:new FormControl(),
    Designation:new FormControl()
  });
constructor(public formbuilder:FormBuilder){
  this.createform();
}
createform(){
  this.contactForm=this.formbuilder.group({
    firstName:[null,[Validators.required,Validators.name]],
    lastName:[null,[Validators.required,Validators.name]],
    emailId: [null, [Validators.required, Validators.email],Validators.minLength(10)],
    mobileNumber:[null,Validators.required],
    Designation:[null,Validators.required]
  });
}
}















// getErrorMessage() {
//   return this.email.hasError('required') ? 'You must enter a value' :
//     this.email.hasError('email') ? 'Not a valid email' : '';




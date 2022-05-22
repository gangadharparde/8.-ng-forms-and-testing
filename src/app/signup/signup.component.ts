import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  gender='female';
  RegisterStudent(studentForm: NgForm): void {
    //To enable debugger in browser
    //debugger;  
    const firstName=studentForm.controls['firstName'].value;
    const lastName=studentForm.controls['lastName'].value;
    const email=studentForm.controls['email'].value;
    const gender = studentForm.controls['gender'].value;
    const branch = studentForm.controls['branch'].value;   
    const state = studentForm.controls['state'].value;   
    const termsAccepted = studentForm.controls['isAccept'].value;  //this is boolean true or false
    
    alert("Received Form: \n\tFirst Name: "+firstName+"\n\tLast Name: "+lastName+"\n\tEmail ID: "+email+"\n\tGender: "+gender+"\n\tBranch Name: "+branch+"\n\tState Name: "+state+"\n\tTerms and Conditions Accepted?: "+(termsAccepted?'Yes':'No'));
    console.log(studentForm.value);  //{ "firstName": "Gd", "lastName": "Java", "email": "gd@admin.com", "password": "A2#awsfewss", "gender": "male", "branch": "CSE", "state": "MH", "isAccept": true }
  }
  constructor() {
    // 
  }
  ngOnInit(): void {
      //
  }
  states: any[] = [
    { id: 'MH', name: 'Maharashtra' },
    { id: 'AP', name: 'Andhra Pradesh' },
    { id: 'TN', name: 'Chennai' },
    { id: 'GJ', name: 'Gujrat' }
  ];

  AfterChangedRadio(myRadio:NgModel){
    //debugger;
    console.log(myRadio);
  }
  AfterChangedForm(myForm:NgForm){
    //debugger;
    console.log(myForm);
  }
}

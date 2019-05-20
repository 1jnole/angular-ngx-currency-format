import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  myForm: FormGroup;
  constructor( private formBuilder : FormBuilder) {}

  ngOnInit() {
     /* Form listener where we define our validations rules*/
    this.myForm = this.formBuilder.group({
      basePrice: this.formBuilder.control(234234),
      discount: this.formBuilder.control(''),
      discountedPrice: this.formBuilder.control('')
    });
  }

  onSubmit(){
    console.log(+this.myForm.getRawValue().basePrice);
  }
}

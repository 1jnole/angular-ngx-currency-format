import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
      basePrice: this.formBuilder.control('', [Validators.pattern('\\d{1,2}[,.]\\d{1,2}')]),
      discount: this.formBuilder.control('',[ Validators.minLength(6)]),
      discountedPrice: this.formBuilder.control('')
    });
  }

  onSubmit(){
    console.log(+this.myForm.getRawValue().basePrice);
  }


}

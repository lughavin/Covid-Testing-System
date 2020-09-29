import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector:'app-test-exist',
  templateUrl:'./test-exist.component.html',
  styleUrls:['./test-exist.component.css']
})

export class TestExistComponent{

  patientList: any = ['returnee', 'quarantined', 'close contact', 'infected', 'suspected']

  form = new FormGroup({
    patient: new FormControl('', Validators.required)
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

  changePatient(e) {
    console.log(e.target.value);
  }
}

import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector:'app-test-update',
  templateUrl:'./test-RecordOfficer.component.html',
  styleUrls:['./test-RecordOfficer.component.css']
})

export class TestRecordOfficerComponent{
  hide=true;

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

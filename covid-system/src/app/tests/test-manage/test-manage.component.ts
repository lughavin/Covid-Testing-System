import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-test-manage',
  templateUrl: './test-manage.component.html',
  styleUrls:['./test-manage.component.css']
})

export class TestManageComponent{
  hide = true;

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


}

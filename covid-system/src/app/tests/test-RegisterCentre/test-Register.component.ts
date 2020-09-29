import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {Test} from '../test.model';
import {TestService} from '../test.service';

@Component({
  selector: 'app-test-new',
  templateUrl: './test-Register.component.html',
  styleUrls: ['./test-Register.component.css']
})

export class TestRegisterComponent{
  hide = true;

  enteredUsername = '';
  enteredPassword = '';
  enteredCondition = '';
  enteredSymptoms = '';
  @Output() testsCreated = new EventEmitter<Test>();

  constructor(public testService: TestService) {}

  onAddTest(form: NgForm){
    if (form.invalid){
      return;
    }

    this.testService.addTest(form.value.username, form.value.password, form.value.condition, form.value.symptoms);
    form.resetForm();
  }
}

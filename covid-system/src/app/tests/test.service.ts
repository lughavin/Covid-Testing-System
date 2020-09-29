import {Test} from './test.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class TestService {
 private tests: Test[] = [];


getTest() {
  return this.tests;
}

addTest(username: string, password: string, condition: string, symptoms: string) {
  const test: Test = {username: username, password: password, condition: condition, symptoms: symptoms};
  this.tests.push(test);
}
}

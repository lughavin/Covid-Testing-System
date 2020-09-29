import {Component, OnInit} from '@angular/core';

@Component({
  selector:'app-test-history',
  templateUrl:'./test-Report.component.html',
  styleUrls:['./test-Report.component.css']
})

export class TestReportComponent{
  displayedColumns: string[] = ['testID', 'name', 'patientType', 'symptoms', 'result', 'testDate', 'resultDate'];
  dataSource = Test_DATA;
}

export interface TestData {
  testID: number;
  name: string;
  patientType: string;
  symptoms: string;
  result: string;
  testDate: string;
  resultDate: string;
}

const Test_DATA: TestData[] = [
  {testID: 1, name: 'Shahryar', patientType: 'suspected', symptoms: 'none', result: 'clear', testDate: '1/1/2020', resultDate: '2/2/2020'}];

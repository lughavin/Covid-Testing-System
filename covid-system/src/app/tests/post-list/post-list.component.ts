import {Component, OnInit} from '@angular/core';
import {Test} from '../test.model';
import { TestService } from '../test.service';

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})

export class PostListComponent implements OnInit{
  tests: Test[] = [];

  constructor(public testsService: TestService) {
  }

  ngOnInit() {
    this.tests = this.testsService.getTest();
  }

}

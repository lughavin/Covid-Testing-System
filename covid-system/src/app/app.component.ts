import { Component } from '@angular/core';
import {Post} from './tests/post.model';
import {Test} from './tests/test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Post[] = [];
  storedTests: Test[] = [];

 onPostAdded(post){
   this.storedPosts.push(post)
 }

 onTestAdded(test){
  this.storedTests.push(test)
}
}

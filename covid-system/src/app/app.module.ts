import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './tests/post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './tests/post-list/post-list.component';
import { TestExistComponent } from './tests/test-exist/test-exist.component';
import { TestRecordOfficerComponent } from './tests/test-RecordOfficer/test-RecordOfficer.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestReportComponent } from './tests/test-Report/test-Report.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { TestManageComponent} from './tests/test-manage/test-manage.component';
import {TestRegisterComponent} from './tests/test-RegisterCentre/test-Register.component';

const appRoutes: Routes = [
  {path: 'create', component: PostCreateComponent},
  {path: 'list', component: PostListComponent},
  {path: 'exist', component: TestExistComponent},
  {path: 'record', component: TestRecordOfficerComponent},
  {path: 'report', component: TestReportComponent},
  {path: 'manage', component: TestManageComponent},
  {path: 'register', component: TestRegisterComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    NavbarComponent,
    Navbar2Component,
    PostListComponent,
    TestExistComponent,
    TestRecordOfficerComponent,
    TestReportComponent,
    TestManageComponent,
    TestRegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

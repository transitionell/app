import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { MDBBootstrapModule } from './typescripts/angular-bootstrap-md/free';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { StudentsComponent } from './students/students.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { TranslateComponent } from './translate/translate.component';
import { CommunityComponent } from './community/community.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomepageComponent,
    TeacherLoginComponent,
    DashboardComponent,
    ClassroomComponent,
    StudentsComponent,
    StudentListComponent,
    StudentDetailComponent,
    TranslateComponent,
    CommunityComponent,
    StudentRegistrationComponent,
    TeacherRegistrationComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
    // AgmCoreModule.forRoot({
    //   apiKey: 'google_maps_api_key'
    // })
  ],
  providers:[],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

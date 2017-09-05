import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component'
import { TranslateComponent } from './translate/translate.component';
import { CommunityComponent } from './community/community.component';
 
const appRoutes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage',  component: HomepageComponent },
  { path: 'login', component: TeacherLoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'classroom', component: ClassroomComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students:id', component: StudentDetailComponent},
  { path: 'translate', component: TranslateComponent },
  { path: 'community', component: CommunityComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
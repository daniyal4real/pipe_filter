import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Student} from "./model/models";
import {StudentComponent} from "./component/student/student.component";

const routes: Routes = [
  {path: 'student', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

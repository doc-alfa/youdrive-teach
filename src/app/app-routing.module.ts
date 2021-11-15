import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlackboardComponent } from './features/blackboard/blackboard.component';
import {
    SubheaderBlackboardComponent
} from './features/blackboard/subheader/subheader-blackboard.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LectureComponent } from './features/lecture/lecture.component';
import {
    SubheaderLectureComponent
} from './features/lecture/subheader/subheader-lecture.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'lecture', component: LectureComponent },
  { path: 'blackboard',
    component: BlackboardComponent,
  },
  {
    path: 'lecture',
    component: SubheaderLectureComponent,
    outlet: 'subheader'
  },
  {
    path: 'blackboard',
    component: SubheaderBlackboardComponent,
    outlet: 'subheader'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

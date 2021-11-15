import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
    NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule,
    NbSearchModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbTooltipModule, NbUserModule
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DraggableDirective } from './core/directives/draggable.directive';
import { DroppableDirective } from './core/directives/droppable.directive';
import { BlackboardComponent } from './features/blackboard/blackboard.component';
import {
    SubheaderBlackboardComponent
} from './features/blackboard/subheader/subheader-blackboard.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LectureComponent } from './features/lecture/lecture.component';
import {
    SubheaderLectureComponent
} from './features/lecture/subheader/subheader-lecture.component';

@NgModule({
  declarations: [
    AppComponent,
    LectureComponent,
    BlackboardComponent,
    DashboardComponent,
    SubheaderBlackboardComponent,
    SubheaderLectureComponent,
    DroppableDirective,
    DraggableDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbActionsModule,
    NbLayoutModule,
    NbButtonModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbTabsetModule,
    NbCardModule,
    NbIconModule,
    NbSearchModule,
    NbTooltipModule,
    NbUserModule,
    NgxGalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

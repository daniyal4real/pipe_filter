import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { TextPipe } from './pipe/text.pipe';
import { StudentComponent } from './component/student/student.component';
import { FilterPipe } from './pipe/filter.pipe';
import {FormsModule} from "@angular/forms";
import { BeverageComponent } from './component/beverage/beverage.component';
import { LogComponent } from './component/log/log.component';
import { RegComponent } from './component/reg/reg.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PostComponent } from './component/post/post.component';
import { FilmComponent } from './component/film/film.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { WidgetComponent } from './component/widget/widget.component';
import { DateComponent } from './component/date/date.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TextPipe,
    StudentComponent,
    FilterPipe,
    BeverageComponent,
    LogComponent,
    RegComponent,
    ProfileComponent,
    PostComponent,
    FilmComponent,
    WidgetComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

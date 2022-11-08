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
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

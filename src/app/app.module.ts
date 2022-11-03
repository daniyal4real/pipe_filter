import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { TextPipe } from './pipe/text.pipe';
import { StudentComponent } from './component/student/student.component';
import { FilterPipe } from './pipe/filter.pipe';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TextPipe,
    StudentComponent,
    FilterPipe
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

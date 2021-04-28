import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputCellComponent } from './input-cell/input-cell.component';
import { MyAnchorDirective } from './my-anchor.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputCellComponent,
    MyAnchorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

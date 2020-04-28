import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { SubComponent} from './sub.component';
import { EmbeddedViewComponent } from './embedded-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SubComponent,
    EmbeddedViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

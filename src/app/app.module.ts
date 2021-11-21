import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from "./component/components.module";
import {PagesModule} from "./pages/pages.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ // Importamos el modulo que queremos
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule, 
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

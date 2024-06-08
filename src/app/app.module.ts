import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TablesModule } from "./tables/tables.module";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TablesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

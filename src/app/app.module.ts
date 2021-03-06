import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";

import { DataService } from "./data.service";
import { AppComponent } from "./app.component";
import { RosterBoxComponent } from "./roster-box/roster-box.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [AppComponent, RosterBoxComponent, NavigationComponent],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}

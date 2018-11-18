import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { PanelComponent } from "./panel/panel.component"
import { WidgetComponent } from "./widget/widget.component"
import { FormsModule } from "@angular/forms"
import { CallService } from "./call.service"
import { HttpClientModule } from "@angular/common/http";
import { RingingComponent } from './ringing/ringing.component';
import { CallComponent } from './call/call.component';
import { FinishedComponent } from './finished/finished.component'

@NgModule({
  declarations: [AppComponent, PanelComponent, WidgetComponent, RingingComponent, CallComponent, FinishedComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CallService],
  bootstrap: [AppComponent],
})
export class AppModule {}

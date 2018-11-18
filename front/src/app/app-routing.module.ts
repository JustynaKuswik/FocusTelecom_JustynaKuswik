import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
import { RingingComponent } from './ringing/ringing.component';
import { CallComponent } from './call/call.component';
import { FinishedComponent } from './finished/finished.component';

const routes: Routes = [
  { path: '', component: WidgetComponent },
  { path: 'ringing/:number', component: RingingComponent },
  { path: 'call', component: CallComponent },
  { path: 'finished', component: FinishedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

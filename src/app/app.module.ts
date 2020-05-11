import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructListComponent } from './struct-list/struct-list.component';
import { StructDetailsComponent } from './struct-details/struct-details.component';

@NgModule({
  declarations: [AppComponent, StructListComponent, StructDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: StructListComponent },
      { path: 'structures/:structureId', component: StructDetailsComponent },
      { path: 'linkedlists', component: StructDetailsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

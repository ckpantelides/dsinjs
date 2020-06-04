import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Smooth scroll package
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructListComponent } from './struct-list/struct-list.component';
import { StructDetailsComponent } from './struct-details/struct-details.component';
import { LefthandNavComponent } from './lefthand-nav/lefthand-nav.component';

@NgModule({
  declarations: [AppComponent, StructListComponent, StructDetailsComponent, LefthandNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: StructListComponent },
      { path: 'structures/:structureId', component: StructDetailsComponent },
      { path: 'linkedlists', component: StructDetailsComponent },
    ]),
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

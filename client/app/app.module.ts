import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ThingsComponent } from './things/things.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'things', component: ThingsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ThingsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

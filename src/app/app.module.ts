import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { SurfspotsComponent } from './surfspots/surfspots.component';
import { SurfmapComponent } from './surfmap/surfmap.component';
import { SurfspotService } from '../app/surfspot.service';
import { SurfspotDetailComponent } from './surfspot-detail/surfspot-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SurfspotsComponent,
    SurfmapComponent,
    SurfspotDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'surfmap'),
    AngularFirestoreModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

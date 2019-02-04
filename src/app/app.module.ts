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
import { HttpClientModule } from '@angular/common/http';

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
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

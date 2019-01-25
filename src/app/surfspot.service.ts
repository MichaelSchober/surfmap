import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import * as mapboxgl from '../../node_modules/mapbox-gl/dist/mapbox-gl';
import { environment } from '../environments/environment';
import { GeoJson } from 'app/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurfspotService {

  constructor(private db: AngularFirestore) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    // console.log(this.db.collection('surfspots').valueChanges());
    // console.log(this.db.firestore.app.)
  }

  getSurfspots(): any {
    this.printAllSurfspots();
    return this.db.collection('data').valueChanges();
  }

  printAllSurfspots(): void {
    const docRef = this.db.collection('data').get().toPromise().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, ' => ', doc.data());
      });
    });
  }

  createSurfspot(data: GeoJson) {
    return this.db.collection('data').add(data);
  }

  // removeMarker($key: string) {
  //   return this.db.object('/markers/' + $key).remove()
  // }
  deleteSurfspot($key: string) {
    this.db.collection('data').doc($key).delete();
    // return this.db.object('/markers/' + $key).remove()
  }
}

import { Component, OnInit } from '@angular/core';

import { Surfspot } from '../shared/surfspot';
import { SurfspotService } from '../surfspot.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-surfspots',
  templateUrl: './surfspots.component.html',
  styleUrls: ['./surfspots.component.styl']
})
export class SurfspotsComponent implements OnInit {
  surfspots: Observable<Surfspot[]>;
  surfspotName: string;
  surfspotLat: number;
  surfspotLng: number;

  constructor(private surfspotService: SurfspotService) {
    this.surfspots = this.surfspotService.getSurfspotsWithId();
  }

  addSurfspot(name: string, coordinates: number[]): void  {
    this.surfspotService.createSurfspot({
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [this.surfspotLat, this.surfspotLng]
      },
      'properties': {
        'name': this.surfspotName
      }
    });
    this.surfspotName = '';
    this.surfspotLat = 0;
    this.surfspotLng = 0;
  }

  deleteSurfspot(id: string) {
    this.surfspotService.deleteSurfspot(id);
  }

  ngOnInit() {
    // this.surfspots = [
    //   { id: 1, name: 'Devils Rock', position: [30.506447, -9.687892]},
    //   { id: 2, name: 'Cro Cro', position: [30.512757, -9.688866]},
    //   { id: 3, name: 'Banana Point', position: [30.499948, -9.679441]},
    //   { id: 4, name: '12', position: [30.494568, -9.677420]},
    //   { id: 5, name: '11', position: [30.491009, -9.676741]},
    //   { id: 6, name: 'Anchor Point', position: [30.545283, -9.715362]}
    // ];
  }

}

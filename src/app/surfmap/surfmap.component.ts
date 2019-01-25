import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { SurfspotService } from '../surfspot.service';
import { FeatureCollection } from '../map';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

import * as mapboxgl from '../../../node_modules/mapbox-gl/dist/mapbox-gl';
import { initializeApp } from 'firebase';

@Component({
  selector: 'app-surfmap',
  templateUrl: './surfmap.component.html',
  styleUrls: ['./surfmap.component.styl']
})
export class SurfmapComponent implements OnInit {
  map: mapboxgl.map;
  mapPopup: mapboxgl.mapPopup;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 30.506447;
  lng = -9.687892;
  surfspots: AngularFirestoreCollection<any>;
  source: any;

  constructor(private surfspotService: SurfspotService) {
  }

  ngOnInit() {
    mapboxgl.accessToken = environment.mapbox.accessToken;

    // BrowserPolicy.content.allowOriginForAll('blob:');
    this.surfspots = this.surfspotService.getSurfspots();

    this.initializeMap();
  }

  switchLayer(layerId) {
    // let layerId = layer.target.id;
    this.map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
  }

  initializeMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });

    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true
    }));
    if (!navigator.geolocation) {
        alert('geolocation not available on your browser');
    }

    this.map.on('style.load', (event) => {
      this.addMapMarkers();
    });

    this.mapPopup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });

    this.map.on('mousemove', (e) => {
      this.mapPopup.setLngLat(e.lngLat)
            .setHTML('Lng: ' + e.lngLat.lng + ', Lat: ' + e.lngLat.lat)
            .addTo(this.map);
    });

    this.map.on('mouseout', (e) => {
      this.mapPopup.remove();
    });
  }

  addMapMarkers () {
    /// register source
    this.map.addSource('firebase', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: []
      }
   });
   /// get source
   this.source = this.map.getSource('firebase');

   /// subscribe to realtime database and set data source
   this.surfspotService.getSurfspots().subscribe(markers => {
     const data = new FeatureCollection(markers);
     this.source.setData(data);
   });

   /// create map layers with realtime data
   this.map.addLayer({
     id: 'firebase',
     source: 'firebase',
     type: 'symbol',
     layout: {
       'text-field': '{message}',
       'text-size': 24,
       'text-transform': 'uppercase',
       'icon-image': 'rocket-15',
       'text-offset': [0, 1.5]
     },
     paint: {
       'text-color': '#f16624',
       'text-halo-color': '#fff',
       'text-halo-width': 2
     }
   });
  }
}

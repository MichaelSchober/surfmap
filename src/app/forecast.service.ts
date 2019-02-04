import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { Surfspot } from './shared/surfspot';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(
    private http: HttpClient,
  ) { }
  
  getForecastForPoint (surfspot: Surfspot, params: string[]) {
    const paramsString = params.toString();
    const lat = surfspot.geometry.coordinates[0];
    const lng = surfspot.geometry.coordinates[1];
    const url = `https://api.stormglass.io/point?lat=${lat}&lng=${lng}&params=${paramsString}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': environment.stormglass.apiKey
      })
    };
    
    return this.http.get<{}>(url, httpOptions).pipe(
      tap(_ => console.log(`fetched forecast for lat: ${lat}, lng: ${lng}` ))
    );
  }
}

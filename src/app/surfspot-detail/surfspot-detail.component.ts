import { Component, OnInit, Input } from '@angular/core';
import { Surfspot } from 'app/shared/surfspot';
import { SurfspotService } from 'app/surfspot.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GeoJson } from 'app/shared/interfaces';
import { ForecastService } from 'app/forecast.service';

@Component({
  selector: 'app-surfspot-detail',
  templateUrl: './surfspot-detail.component.html',
  styleUrls: ['./surfspot-detail.component.styl']
})
export class SurfspotDetailComponent implements OnInit {
  @Input() surfspot: Surfspot;
  surfforecast: {};
  

  constructor(
    private route: ActivatedRoute,
    private surfspotService: SurfspotService,
    private location: Location,
    private forecastService: ForecastService
  ) { }

  ngOnInit(): void {
    this.getSurfspot();
  }

  getSurfspot(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.surfspotService.getSurfspot(id)
      .subscribe((surfspot) => {
        const forecastParams = ['waveHeight', 'swellHeight', 'swellPeriod', 'swellDirection'];
        this.surfspot = surfspot;
        this.forecastService.getForecastForPoint(surfspot, forecastParams)
          .subscribe(surfforecast => {this.surfforecast = surfforecast; console.log(surfforecast); });
      });
  }

  goBack(): void {
    this.location.back();
  }
}

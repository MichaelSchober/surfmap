import { Component, OnInit, Input } from '@angular/core';
import { Surfspot } from 'app/shared/surfspot';
import { SurfspotService } from 'app/surfspot.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GeoJson } from 'app/shared/interfaces';

@Component({
  selector: 'app-surfspot-detail',
  templateUrl: './surfspot-detail.component.html',
  styleUrls: ['./surfspot-detail.component.styl']
})
export class SurfspotDetailComponent implements OnInit {
  @Input() surfspot: Surfspot;

  constructor(
    private route: ActivatedRoute,
    private surfspotService: SurfspotService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSurfspot();
  }

  getSurfspot(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.surfspotService.getSurfspot(id)
      .subscribe((surfspot) => {
        this.surfspot = surfspot;
      });
  }

  goBack(): void {
    this.location.back();
  }
}

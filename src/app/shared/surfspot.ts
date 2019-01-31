import { GeoJson } from 'app/map';

export class Surfspot extends GeoJson {
    id: string;
    name: string;
    position: [number, number]; // latitude , longitude
}

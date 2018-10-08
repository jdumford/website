import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


class Response {
    message: string;
    rows: Array<any>;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

    readonly ROOT_URL = 'http://localhost:8000/';
    school: string[];
    year: number[];
    event: string[];
    region: string[];

    regionalsData = [];
    regionalsSchool = 'all';
    regionalsEvent = 'all';
    regionalsYear = 'all';
    regionalsGender = 'M';
    regionalsRegion = 'all';

    ncaaData = [];
    ncaaSchool = 'all';
    ncaaEvent = 'all';
    ncaaYear = 'all';
    ncaaRound = 'qualify';
    ncaaGender = 'M';

    constructor(private http: HttpClient) { }

    getRegionalsColumn(column) {
        this.http.get('http://localhost:3000/getRegionalsColumn/' + column)
        .subscribe((response: Response) => {
            this[column] = response.rows;
        });
    }

    refreshRegionalsTab() {
        const params = new HttpParams()
            .set('school', this.regionalsSchool)
            .set('event', this.regionalsEvent)
            .set('year', this.regionalsYear)
            .set('sex', this.regionalsGender)
            .set('region', this.regionalsRegion);

        this.http.get('http://localhost:3000/getNumberRegionalQualifiers', {params})
        .subscribe((res: Response) => {
            this.regionalsData = res.rows;
        });
    }

    refreshNCAATab() {
        const params = new HttpParams()
            .set('school', this.ncaaSchool)
            .set('event', this.ncaaEvent)
            .set('year', this.ncaaYear)
            .set('round', this.ncaaRound)
            .set('sex', this.ncaaGender);

        this.http.get('http://localhost:3000/getNumberNCAAQualifiers', {params})
        .subscribe((res: Response) => {
            this.ncaaData = res.rows;
        });
    }

  ngOnInit() {
      this.getRegionalsColumn('school');
      this.getRegionalsColumn('year');
      this.getRegionalsColumn('event');
      this.getRegionalsColumn('region');
      this.refreshRegionalsTab();
      this.refreshNCAATab();
  }

}

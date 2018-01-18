import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  tulos = 'Moikka moi!';

  constructor(private http: HttpClient) { }

  getJson() {
    interface Myinterface {
      license: string;
    }
    this.http.get<Myinterface>( url: 'assets/package.json').subscribe( (data) => {
      console.log(data);
      this.tulos = data.license;
    });
  }

  ngOnInit() {
    this.getJson();
  }

}

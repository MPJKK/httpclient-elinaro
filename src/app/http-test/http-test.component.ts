import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-http-test',
    templateUrl: './http-test.component.html',
    styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

    tulos = 'Moikka moi!';
    apitulos = '';
    apiosoite = 'http://media.mw.metropolia.fi/wbma';
    kuvaosoite = 'http://media.mw.metropolia.fi/wbma/uploads/';
    hslosoite = 'https://www.hsl.fi/newsApi';
    hsltulos = '';

    constructor(private http: HttpClient) {
    }

    getJson() {
        interface Myinterface {
            license: string;
        }

        this.http.get<Myinterface>('assets/package.json').subscribe(data => {
            console.log(data);
            this.tulos = data.license;
        });
    }

    getFromApi() {
        this.http.get(this.apiosoite + '/media').subscribe(data => {
           this.apitulos = this.kuvaosoite + (data[0].filename);
        });
    }


    getFromHsl () {
        this.http.get(this.hslosoite + '/7').subscribe(data => {
          this.hsltulos = this.hslosoite 

        });
    }

    ngOnInit() {
        this.getJson();
        this.getFromApi();
        this.getFromHsl();
    }

}

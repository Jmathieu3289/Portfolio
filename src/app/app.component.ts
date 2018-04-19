import { Component, AfterViewInit, ViewChild  } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    public map: google.maps.Map;
    @ViewChild('gmap') gmapElement: any;

    public locationList: Array<number[]> = [
        [43.046559, -87.912843, 1989],
        [49.835236, -97.146297, 2002],
        [35.713834, 139.680984, 2015],
        [37.508724, 127.034761, 2016],
        [21.174532, -86.884408, 2016],
        [48.829806, 2.361769, 2016],
        [50.935139, 4.247230, 2016],
        [51.515604, -0.137550, 2016],
        [52.514234, 13.333509, 2017]
    ]
  
    constructor() {
    }

    ngAfterViewInit(): void {

        this.map = new google.maps.Map(this.gmapElement.nativeElement, {
            zoom: 1,
            center: new google.maps.LatLng(43.046559, -87.912843),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow({});

        for (var i = 0; i < this.locationList.length - 1; i++) {
            ((i) => 
            setTimeout(() => {
                let location = this.locationList[i];
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(location[0], location[1]),
                    map: this.map,
                    animation: google.maps.Animation.DROP,
                    label: (i+1).toString()
                    });   
            }, (i+1) * 300))(i);
        }

    }

    public scrollToSection(id: string) {
        document.querySelector('#' + id).scrollIntoView({
            behavior: 'smooth'
        });
    }

}

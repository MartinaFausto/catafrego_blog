import { Component, AfterViewInit, OnDestroy } from '@angular/core';

import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';

import am5geodata_argentinaLow from '@amcharts/amcharts5-geodata/argentinaLow';


@Component({
    selector: 'app-map-argentina',
    templateUrl: './map-argentina.html',
    styleUrl: './map-argentina.scss'
})
export class MapArgentina implements AfterViewInit, OnDestroy {

    private root!: am5.Root;


    ngAfterViewInit() {

        this.root = am5.Root.new('argentinaMap');


        const chart = this.root.container.children.push(
            am5map.MapChart.new(this.root, {
                panX: 'none',
                panY: 'none',
                wheelX: 'none',
                wheelY: 'none'
            })
        );


        const polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(this.root, {
                geoJSON: am5geodata_argentinaLow
            })
        );


        polygonSeries.mapPolygons.template.setAll({
            fill: am5.color(0xe5e7eb),
            stroke: am5.color(0xffffff),
            strokeWidth: 1
        });


        polygonSeries.events.on('datavalidated', () => {

            chart.zoomToGeoPoint(
                {
                    latitude: -38,
                    longitude: -63
                },
                1.3
            );

        });


        const pointSeries = chart.series.push(
            am5map.MapPointSeries.new(this.root, {})
        );


        // Icona + nome
        pointSeries.bullets.push((root, series, dataItem) => {

      const place = dataItem.dataContext as any;

      const container = am5.Container.new(root, {
          centerX: am5.p50,
          centerY: am5.p50,
          layout: root.verticalLayout
      });


      const icon = am5.Label.new(root, {
          text: place.icon,
          fontSize: 32,
          centerX: am5.p50
      });


      const title = am5.Label.new(root, {
          text: place.title,
          fontSize: 14,
          fontWeight: '500',
          centerX: am5.p50,
          paddingTop: 5
      });


      container.children.push(icon);
      container.children.push(title);


      return am5.Bullet.new(root, {
          sprite: container
      });

        });


        pointSeries.data.setAll([

            {
                title: 'Buenos Aires',
                icon: '🍼',
                latitude: -34.6037,
                longitude: -58.3816
            },

            {
                title: 'San Carlos de Bariloche',
                icon: '🏠',
                latitude: -41.1335,
                longitude: -71.3103
            }

        ]);

    }


    ngOnDestroy() {

        if (this.root) {
            this.root.dispose();
        }

    }

}
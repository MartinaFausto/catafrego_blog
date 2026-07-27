import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-maps-work',
  imports: [],
  templateUrl: './maps-work.html',
  styleUrl: './maps-work.scss',
})
export class MapsWork implements AfterViewInit, OnDestroy {


  private root!: am5.Root;


  ngAfterViewInit(): void {

    this.root = am5.Root.new('chartdiv');

    this.root.setThemes([
      am5themes_Animated.new(this.root)
    ]);

    // 1. Creazione della mappa con trascinamento e sensibilità zoom
    const chart = this.root.container.children.push(
      am5map.MapChart.new(this.root, {
        projection: am5map.geoMercator(), // <-- Mappa completamente piatta!
        panX: "translateX",               // Cambia da "rotateX" a "translateX" per lo scorrimento piatto
        panY: "translateY",
        wheelSensitivity: 0.7
      })
    );

    // 2. Aggiunta dei controlli di Zoom (+ / -) e pulsante Home
    const zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(this.root, {}));
    zoomControl.homeButton.set("visible", true);

    // 3. Serie per i confini dei paesi (Poligoni)
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldLow
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xe5e7eb),
      stroke: am5.color(0x9ca3af),
      strokeWidth: 1.5
    });

    // 4. Serie per i punti sulla mappa (Marker)
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(this.root, {})
    );

    pointSeries.bullets.push(() => {
      const container = am5.Container.new(this.root, {});

      const pulse = container.children.push(
        am5.Circle.new(this.root, {
          radius: 10,
          fill: am5.color(0x22c55e),
          opacity: 0.4,
          interactive: false
        })
      );

      const circle = container.children.push(
        am5.Circle.new(this.root, {
          radius: 5,
          fill: am5.color(0x16a34a),
          tooltipText: "{title}",
          interactive: true
        })
      );

      pulse.animate({
        key: "scale",
        from: 1,
        to: 4,
        duration: 1200,
        loops: Infinity
      });

      pulse.animate({
        key: "opacity",
        from: 0.5,
        to: 0,
        duration: 1200,
        loops: Infinity
      });

      return am5.Bullet.new(this.root, {
        sprite: container
      });
    });

    // 5. Dati dei punti
    pointSeries.data.setAll([
      {
        title: "CITIES.JP",
        geometry: {
          type: "Point",
          coordinates: [140.7020, 42.8598]
        }
      },
      {
        title: "Bariloche",
        geometry: {
          type: "Point",
          coordinates: [-71.310309, -41.135412]
        }
      },
      {
        title: "Verbier",
        geometry: {
          type: "Point",
          coordinates: [7.2286, 46.0965]
        }
      },
      {
        title: "Granvalira",
        geometry: {
          type: "Point",
          coordinates: [1.6400, 42.5600]
        }
      },
      {
        title: "Ordino",
        geometry: {
          type: "Point",
          coordinates: [1.5332, 42.5562]
        }
      },
      {
        title: "Annecy",
        geometry: {
          type: "Point",
          coordinates: [6.1294, 45.8992]
        }
      },
      {
        title: "Murus Climbing Temple",
        geometry: {
          type: "Point",
          coordinates: [-8.60003, 41.11863]
        }
      }
    ]);

    chart.appear(1000, 100);
  }


  ngOnDestroy(): void {

    this.root?.dispose();

  }

}

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
        projection: am5map.geoNaturalEarth1(),
        panX: "rotateX",
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
          opacity: 0.4
        })
      );

      const circle = container.children.push(
        am5.Circle.new(this.root, {
          radius: 5,
          fill: am5.color(0x16a34a),
          tooltipText: "{title}"
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
        title: "Appennino Tosco Emiliano",
        geometry: {
          type: "Point",
          coordinates: [10.3, 44.3]
        }
      },
      {
        title: "Pirenei",
        geometry: {
          type: "Point",
          coordinates: [0.5, 42.5]
        }
      },
      {
        title: "Cammino Portoghese",
        geometry: {
          type: "Point",
          coordinates: [-8.6, 41.1]
        }
      }
    ]);

    chart.appear(1000, 100);
  }


  ngOnDestroy(): void {

    this.root?.dispose();

  }

}

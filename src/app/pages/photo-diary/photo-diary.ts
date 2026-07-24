import { Component } from '@angular/core';
import { PhotoGrid } from '../../components/photo-grid/photo-grid';

@Component({
  selector: 'app-photo-diary',
  imports: [PhotoGrid],
  templateUrl: './photo-diary.html',
  styleUrl: './photo-diary.scss',
})
export class PhotoDiary {

  photos: [number, number, number][] = [
        [10, 1200, 800],
        [11, 800, 1200],
        [15, 1400, 700],
        [16, 700, 1050],
        [17, 1000, 1000],
        [18, 1300, 650],
        [19, 600, 1200],
        [20, 1200, 900],
        [27, 750, 1125],
        [28, 1400, 800],
        [29, 800, 1100],
        [36, 1100, 700],
        [37, 650, 1300],
        [39, 1200, 750],
        [42, 900, 1200],
        [43, 1300, 800],
        [47, 700, 1400],
        [48, 1000, 800],
        [49, 800, 1000],
        [50, 1400, 600],
        [52, 600, 900],
        [53, 1200, 1200],
        [54, 900, 600],
        [55, 750, 1000],
        [56, 1100, 800],
        [57, 1400, 900],
        [58, 850, 1275],
        [59, 1000, 600],
        [60, 600, 1000],
        [64, 1300, 1300]
    ];
    images = this.photos.map(([id, w, h]) => `https://picsum.photos/id/${id}/${w}/${h}`);

}

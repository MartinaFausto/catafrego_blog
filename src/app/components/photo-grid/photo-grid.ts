import { Component, Input, signal } from '@angular/core';
import { GalleryModule } from 'primeng/gallery';
import { GalleryActiveIndexChangeEvent } from 'primeng/types/gallery';
import { ChevronLeft } from '@primeicons/angular/chevron-left';
import { ChevronRight } from '@primeicons/angular/chevron-right';
import { Replay } from '@primeicons/angular/replay';
import { Refresh } from '@primeicons/angular/refresh';
import { SearchPlus } from '@primeicons/angular/search-plus';
import { SearchMinus } from '@primeicons/angular/search-minus';
import { ArrowsH } from '@primeicons/angular/arrows-h';
import { ArrowsV } from '@primeicons/angular/arrows-v';
import { Download } from '@primeicons/angular/download';
import { Times } from '@primeicons/angular/times';

@Component({
  selector: 'app-photo-grid',
  imports: [GalleryModule, ChevronLeft, ChevronRight, Replay, Refresh, SearchPlus, SearchMinus, ArrowsH, ArrowsV, Download, Times],
  templateUrl: './photo-grid.html',
  styleUrl: './photo-grid.scss',
})
export class PhotoGrid {
    @Input() images: string[] = [];
    
    activeIndex: number = 0;
    open = signal(false);
    handleOpen(index: number) {
        this.activeIndex = index;
        this.open.set(true);
    }
    close() {
        this.open.set(false);
    }
    onActiveIndexChange(event: GalleryActiveIndexChangeEvent) {
        this.activeIndex = event.value;
    }
}

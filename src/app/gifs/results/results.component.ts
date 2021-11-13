import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [],
})
export class ResultsComponent implements OnInit {
  get resultados() {
    return this.gifService.res;
  }
  constructor(private gifService: GifsService) {}

  ngOnInit(): void {}
}

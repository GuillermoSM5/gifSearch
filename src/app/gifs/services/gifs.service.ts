import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'ZC7YBtMjx1lcNuqY8TSJuSac9BkML56V';
  private _historial: string[] = [];

  public res: Gif[] = [];
  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  buscarGifts(query: string = '') {
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
    //console.log(this._historial);
    this.http
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`
      )
      .subscribe((resp) => {
        console.log(resp.data);
        this.res = resp.data;
      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Think } from 'src/app/interfaces/think.interface';

@Injectable({
  providedIn: 'root',
})
export class ThinkService {
  /**
   * @TODO change value this variable to global environments
   */
  private DEFAULT_URL: string = 'http://localhost:3000/pensamentos';

  constructor(private httpClient: HttpClient) {}

  listAll() {
    return this.httpClient.get<Think[]>(this.DEFAULT_URL);
  }
}

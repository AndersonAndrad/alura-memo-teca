import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Think } from 'src/app/interfaces/think.interface';
import { HashUtil } from 'src/app/utils/hash.util';

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

  create(think: Omit<Think, 'id'>) {
    const id: string = HashUtil.generate();

    return this.httpClient.post<void>(this.DEFAULT_URL, { id, ...think });
  }
}

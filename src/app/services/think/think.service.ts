import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thinking } from 'src/app/interfaces/think.interface';
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
    return this.httpClient.get<Thinking[]>(this.DEFAULT_URL);
  }

  create(think: Omit<Thinking, 'id'>) {
    const id: string = HashUtil.generate();

    return this.httpClient.post<void>(this.DEFAULT_URL, { id, ...think });
  }

  delete(thinkId: string) {
    const url: string = `${this.DEFAULT_URL}/${thinkId}`;

    return this.httpClient.delete<void>(url);
  }

  getThinkById(thinkId: string) {
    const url: string = `${this.DEFAULT_URL}/${thinkId}`;

    return this.httpClient.get<Thinking>(url);
  }

  update(thinkingId: string, thinking: Omit<Thinking, 'id'>) {
    const url: string = `${this.DEFAULT_URL}/${thinkingId}`;
    return this.httpClient.put(url, thinking);
  }
}

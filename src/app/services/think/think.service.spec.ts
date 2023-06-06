import { HttpClient } from '@angular/common/http';
import { ThinkService } from './think.service';

describe('ThinkService', () => {
  let service: ThinkService;
  let httpClient: HttpClient;

  beforeEach(() => {
    service = new ThinkService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

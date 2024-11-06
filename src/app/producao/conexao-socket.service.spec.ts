import { TestBed } from '@angular/core/testing';

import { ConexaoSocketService } from './conexao-socket.service';

describe('ConexaoSocketService', () => {
  let service: ConexaoSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexaoSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

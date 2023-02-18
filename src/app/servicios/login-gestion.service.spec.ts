import { TestBed } from '@angular/core/testing';

import { LoginGestionService } from './login-gestion.service';

describe('LoginGestionService', () => {
  let service: LoginGestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginGestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

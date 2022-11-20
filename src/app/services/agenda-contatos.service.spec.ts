/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgendaContatosService } from './agenda-contatos.service';

describe('Service: AgendaContatos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgendaContatosService]
    });
  });

  it('should ...', inject([AgendaContatosService], (service: AgendaContatosService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserAccountService } from './user-account.service';

describe('UserAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAccountService]
    });
  });

  it('should ...', inject([UserAccountService], (service: UserAccountService) => {
    expect(service).toBeTruthy();
  }));
});

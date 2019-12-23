/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LayoutService } from './layout.service';
import { AppConstants } from 'smart-platform-services';
import { InvoiceConstants } from '@sharedServices/invoice.constants';
import { BuildClientConstantsService } from '@sharedServices/build-client-constants.service';

describe('Service: Layout', () => {
  let appConstants = jasmine.createSpyObj("AppConstants", [""]);
  let p2pConstants = jasmine.createSpyObj("InvoiceConstants", [""]);
  let constants = jasmine.createSpyObj("BuildClientConstantsService", [""]);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutService,
        { provide: AppConstants, useValue: appConstants },
        { provide: InvoiceConstants, useValue: p2pConstants },
        { provide: BuildClientConstantsService, useValue: constants },
      ]
    });
  });

  it('should ...', inject([LayoutService], (service: LayoutService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { DownloadExcelFileService } from './download-excel-file.service';

describe('DownloadExcelFileService', () => {
  let service: DownloadExcelFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadExcelFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

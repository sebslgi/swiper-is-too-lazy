import { PicsModule } from './pics.module';

describe('PicsModule', () => {
  let picsModule: PicsModule;

  beforeEach(() => {
    picsModule = new PicsModule();
  });

  it('should create an instance', () => {
    expect(picsModule).toBeTruthy();
  });
});

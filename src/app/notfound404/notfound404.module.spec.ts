import { Notfound404Module } from './notfound404.module';

describe('Notfound404Module', () => {
  let notfound404Module: Notfound404Module;

  beforeEach(() => {
    notfound404Module = new Notfound404Module();
  });

  it('should create an instance', () => {
    expect(notfound404Module).toBeTruthy();
  });
});

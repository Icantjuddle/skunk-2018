import { inject } from 'aurelia-framework';
import { StitchResources } from '../stitch_resources';

@inject(StitchResources)
export class Application {     
  constructor(StitchResources) {
    this.stitch = StitchResources;
    this.message = 'Hello world';
  }
}

import { Stitch } from 'mongodb-stitch-browser-sdk';

export class StitchResources {
  constructor() {
    this._client = Stitch.initializeDefaultAppClient('hackathon-kpnmx');
  }

  client() {
    return this._client;
  }
}

import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';

export class StitchResources {
  constructor() {
    this._client = Stitch.initializeDefaultAppClient('hackathon-kpnmx');
    this._people = this._client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('Hackathon').collection('People');
  }

  client() {
    return this._client;
  }
  people() {
    return this._people;
  }
}

import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';

export class GlobalState {
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

  id() {
    return this._client.auth.user.id;
  }

  pl() {
    return this._permission_level ? this._permission_level : 'none';
  }

  setPermissionLevel(pl) {
    console.log('PL is ', pl);
    this._permission_level = pl;
  }
}

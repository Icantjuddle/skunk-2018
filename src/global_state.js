import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import config_text from 'config-text';

export class GlobalState {
  constructor() {
    let appid = config_text.Stitch.appid;
    let dbname = config_text.db.name;
    let peopleName = config_text.db.collections.people;
    console.log(appid, dbname, peopleName);
    this._client = Stitch.initializeDefaultAppClient(appid);
    this._people = this._client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db(dbname).collection(peopleName);
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

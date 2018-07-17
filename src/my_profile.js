import { inject } from 'aurelia-framework';
import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import { GlobalState } from './global_state';

@inject(GlobalState)
export class MyProfile {
  constructor(GlobalState) {
    this.client = GlobalState.client();
    this.message = 'Hello world';
  }

  created() {
    const mongodb = this.client.getServiceClient(
    RemoteMongoClient.factory,
    'mongodb-atlas'
  );
  // Get a hook to the employees collection
    const ppl = mongodb.db('Hackathon').collection('People');
    let me = ppl.find({email: "ben.judd@10gen.com"})

  }
}

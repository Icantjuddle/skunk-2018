import { inject } from 'aurelia-framework';
import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import { StitchResources } from './stitch_resources';

@inject(StitchResources)
export class MyProfile {
  constructor(stitchResources) {
    this.client = stitchResources.client();
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

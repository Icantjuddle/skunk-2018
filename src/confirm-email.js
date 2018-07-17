import { inject } from 'aurelia-framework';
import { StitchResources } from './stitch_resources';
import { UserPasswordAuthProviderClient } from 'mongodb-stitch-browser-sdk';


@inject(StitchResources)
export class ConfirmEmail {
  constructor(stitchResources) {
    this.message = 'Hello world';
    this.client = stitchResources.client();
  }
  activate(params) {
    // Parse the URL query parameters
    const token = params['token'];
    const tokenId = params['tokenId'];
    // Confirm the user's email/password account
    const emailPassClient = this.client.auth.getProviderClient(
      UserPasswordAuthProviderClient.factory
    );
    emailPassClient.confirmUser(token, tokenId).then(() => {
      this.message = "Confirmed";
    }).catch((err) => {
      this.message = err;
    });
  }
}

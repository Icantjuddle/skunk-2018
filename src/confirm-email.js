import { inject } from 'aurelia-framework';
import { GlobalState } from './global_state';
import { UserPasswordAuthProviderClient } from 'mongodb-stitch-browser-sdk';


@inject(GlobalState)
export class ConfirmEmail {
  constructor(GlobalState) {
    this.message = 'Hello world';
    this.client = GlobalState.client();
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
      this.message = "Confirmed" ;
    }).catch((err) => {
      this.message = err;
    });
  }
}

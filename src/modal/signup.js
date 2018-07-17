import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { UserPasswordAuthProviderClient } from 'mongodb-stitch-browser-sdk';
import { GlobalState } from '../global_state';

@inject(DialogController, GlobalState)
export class SignupModal {
  constructor(controller, GlobalState) {
    this.controller = controller;
    this.client = GlobalState.client();
    this.answer = null;

    controller.settings.centerHorizontalOnly = true;
  }

  activate(message) {
    this.message = message;
  }

  doSignup() {
    if (this.email === undefined || this.pass === undefined) {
      this.errMsg = 'You must enter a valid email and password';
      return;
    }
    let emailPassClient = this.client.auth.getProviderClient(UserPasswordAuthProviderClient.factory);
    emailPassClient.registerWithEmail(this.email, this.pass)
      .then(() => {
        console.log("Successfully sent account confirmation email!");
        this.controller.ok();
      })
      .catch(err => {
        this.errMsg = err;
      });
  }
}

import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { UserPasswordCredential } from 'mongodb-stitch-browser-sdk';
import { StitchResources } from '../stitch_resources';

@inject(DialogController, StitchResources)
export class LoginModal {
  constructor(controller, stitchResources) {
    this.controller = controller;
    this.client = stitchResources.client();
    this.answer = null;

    controller.settings.centerHorizontalOnly = true;
  }

  activate(message) {
    this.message = message;
  }

  doLogin() {
    console.log('dologin called');
    if (this.email === undefined || this.pass === undefined) {
      this.errMsg = 'You must enter a valid email and password';
      return;
    }
    const credential = new UserPasswordCredential(this.email, this.pass);
    this.client.auth.loginWithCredential(credential).then((user) => {
      console.log('authenticated with user:' + user.id);
      this.controller.ok();
    }).catch(err => {
      this.errMsg = err;
    });
  }
}

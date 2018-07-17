import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { UserPasswordCredential } from 'mongodb-stitch-browser-sdk';
import { StitchResources } from '../stitch_resources';

@inject(DialogController, StitchResources)
export class LoginModal {
  constructor(controller, stitchResources) {
    this.controller = controller;
    this.stitch = stitchResources;
    this.client = stitchResources.client();
    this.answer = null;

    controller.settings.centerHorizontalOnly = true;
  }

  activate(message) {
    this.message = message;
  }

  doLogin() {
    if (this.email === undefined || this.pass === undefined) {
      this.errMsg = 'You must enter a valid email and password';
      return;
    }
    const credential = new UserPasswordCredential(this.email, this.pass);
    this.client.auth.loginWithCredential(credential).then((user) => {
      //TODO: Log
      this.stitch.people().updateOne({ email: this.email }, { stitch_id: user.id, email: this.email }, { upsert: true });
      this.controller.ok();
    }).catch(err => {
      this.errMsg = err;
    });
  }
}

import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { UserPasswordCredential } from 'mongodb-stitch-browser-sdk';
import { GlobalState } from '../global_state';
import {BindingSignaler} from 'aurelia-templating-resources';

@inject(DialogController, GlobalState, BindingSignaler)
export class LoginModal {
  constructor(controller, globalState, signaler) {
    this.controller = controller;
    this.stitch = globalState;
    this.client = globalState.client();
    this.signaler = signaler;
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
      this.stitch.people().updateOne({ stitch_id: user.id }, {$set: { stitch_id: user.id, email: this.email}}, { upsert: true });
      this.stitch.people().find({stitch_id: user.id}, {permission_level: 1}).asArray().then((plDoc) => {
        this.stitch.setPermissionLevel(plDoc[0].permission_level);
        this.signaler.signal('pl_change');
      });
      this.controller.ok();
    }).catch(err => {
      this.errMsg = err;
    });
  }
}

import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { StitchResources } from '../stitch_resources';

@inject(DialogController, StitchResources)
export class LogoutModal {
  constructor(controller, stitchResources) {
    this.controller = controller;
    this.client = stitchResources.client();
    this.isLoggedIn = this.client.auth.isLoggedIn;
    this.logoutMessage = this.isLoggedIn ? 'Log Out' : 'You are not logged in';
    this.answer = null;

    controller.settings.centerHorizontalOnly = true;
  }

  activate(message) {
    this.message = message;
  }

  doLogout() {
    this.client.auth.logout();
    this.controller.ok();
  }
}

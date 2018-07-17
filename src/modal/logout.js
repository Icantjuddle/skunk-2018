import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { GlobalState } from '../global_state';

@inject(DialogController, GlobalState)
export class LogoutModal {
  constructor(controller, GlobalState) {
    this.controller = controller;
    this.client = GlobalState.client();
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

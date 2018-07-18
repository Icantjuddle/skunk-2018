import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { GlobalState } from '../global_state';
import { BindingSignaler } from 'aurelia-templating-resources';

@inject(DialogController, GlobalState, BindingSignaler)
export class LogoutModal {
  constructor(controller, GlobalState, signaler) {
    this.controller = controller;
    this.gs = GlobalState;
    this.isLoggedIn = this.gs.client().auth.isLoggedIn;
    this.logoutMessage = this.isLoggedIn ? 'Log Out' : 'You are not logged in';
    this.signaler = signaler;
    this.answer = null;

    controller.settings.centerHorizontalOnly = true;
  }

  activate(message) {
    this.message = message;
  }

  doLogout() {
    this.gs.client().auth.logout().then(()=>{
      this.gs.setPermissionLevel('none');
      this.signaler.signal('pl_change');
      this.controller.ok();
    });
  }
}

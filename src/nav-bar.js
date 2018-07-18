import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { DialogService } from 'aurelia-dialog';
import { GlobalState } from './global_state';
import { SignupModal } from './modal/signup';
import { LoginModal } from './modal/login';
import { LogoutModal } from './modal/logout';

@inject(DialogService, GlobalState, Router)
export class NavBar {
  constructor(dialogService, globalState, router) {
    this.dialogService = dialogService;
    this.gs = globalState;
    this.router = router;
  }

  popLogin() {
    this.dialogService.open({ viewModel: LoginModal, model: 'Please Authenticate' }).then(response => {
      console.log(response);

      if (!response.wasCancelled) {
        console.log('OK');
      } else {
        console.log('cancelled');
      }
      console.log(response.output);
    });
  }
  popSignup() {
    this.dialogService.open({ viewModel: SignupModal, model: 'Signup' }).then(response => {
      console.log(response);
      if (!response.wasCancelled) {
        console.log('OK');
      } else {
        console.log('cancelled');
      }
    });
  }
  popLogout() {
    this.dialogService.open({ viewModel: LogoutModal, model: 'LogOut' }).then(response => {
      console.log(response);
      if (!response.wasCancelled) {
        console.log('OK');
      } else {
        console.log('cancelled');
      }
    });
  }

  isAdmin() {
    return this.gs.pl() !== 'none';
  }

  isLoggedIn() {
    return this.gs.client().auth.isLoggedIn;
  }
}

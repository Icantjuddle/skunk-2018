import { PLATFORM } from 'aurelia-pal';
import { inject } from 'aurelia-framework';
import { Redirect } from 'aurelia-router';
import { GlobalState } from './global_state';

export class App {
  configureRouter(config, router) {
    config.title = 'Hackathon';
    config.addAuthorizeStep(AuthorizeStep);
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: ['index', 'home', ''], moduleId: PLATFORM.moduleName('homepage'), title: 'Home' },
      { route: ['me'], moduleId: PLATFORM.moduleName('user-detail'), title: 'Me', settings: { auth: true } },
      { route: ['apply'], moduleId: PLATFORM.moduleName('application'), title: 'Apply', settings: { auth: true } },
      { route: ['browse'], moduleId: PLATFORM.moduleName('browse'), title: 'Browse Users', settings: { auth: true } },
      { route: ['confirm'], moduleId: PLATFORM.moduleName('confirm-email'), title: 'Confirm' }
    ]);
    config.fallbackRoute('index');
    this.router = router;
  }
}
@inject(GlobalState)
class AuthorizeStep {
  constructor(GlobalState) {
    this.stitch = GlobalState;
  }
  run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {
      if (!this.stitch.client().auth.isLoggedIn) {
        console.log('Not Authenticated');
        return next.cancel(new Redirect('home'));
      }
    }
    return next();
  }
}

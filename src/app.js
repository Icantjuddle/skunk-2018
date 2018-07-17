import { PLATFORM } from 'aurelia-pal';
import { inject } from 'aurelia-framework';
import {Redirect} from 'aurelia-router';
import { StitchResources } from './stitch_resources';

export class App {
  configureRouter(config, router) {
    config.title = 'Hackathon';
    config.options.pushState = true;
    config.addAuthorizeStep(AuthorizeStep);
    config.map([
      { route: ['index', 'home', ''], moduleId: PLATFORM.moduleName('homepage'), title: 'Home' },
      { route: 'me', moduleId: PLATFORM.moduleName('user-detail'), title: 'Me', settings:{auth:true} },
      { route: 'confirm/', moduleId: PLATFORM.moduleName('confirm-email'), title: 'Confirm' }
    ]);
    this.router = router;
  }
}
@inject(StitchResources)
class AuthorizeStep {
  constructor(stitchResources) {
    this.stitch = stitchResources;
  }
  run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {
      if (! this.stitch.client().auth.isLoggedIn) {
        console.log('Not Authenticated');
        return next.cancel(new Redirect('home'));
      }
    }
    return next();
  }
}

import { PLATFORM } from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Hackathon';
    config.options.pushState = true;
    config.map([
      { route: ['index', 'home', ''], moduleId: PLATFORM.moduleName('homepage'), title: 'Home' },
      { route: 'me', moduleId: PLATFORM.moduleName('my_profile'), title: 'Me'},
      { route: 'confirm/', moduleId: PLATFORM.moduleName('confirm-email'), title: 'Confirm'}
    ]);
    this.router = router;
  }
}

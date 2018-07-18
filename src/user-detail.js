import { inject } from 'aurelia-framework';
import { GlobalState } from './global_state';

@inject(GlobalState)
export class UserDetail {
  constructor(GlobalState) {
    this.stitch = GlobalState;
    this.me = {stitch_id: this.stitch.client().auth.user.id};
  }
}

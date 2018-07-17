import { inject } from 'aurelia-framework';
import {GlobalState} from './global_state';
import _ from 'lodash';

@inject(GlobalState)
export class Browse {     
  constructor(globalState) {
    this.gs = globalState;
    this.people = [];
  }

  created() {
    this.gs.people().find({}).asArray().then((persons) => {
      console.log(persons);
      this.people = persons;
    }).catch((err) =>{
      console.log(err);
    });
  }

  select(user) {
    this.selected = user.stitch_id;
    this.sel_user = user;//_.find(this.people, (p) => (p.stitch_id === user.stitch_id));
    return true;
  }
}

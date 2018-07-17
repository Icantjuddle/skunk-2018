import { inject } from 'aurelia-framework';
import { GlobalState } from './global_state';

@inject(GlobalState)
export class Application {
  constructor(GlobalState) {
    this.stitch = GlobalState;
    this.event_title = '2018f';
  }

  activate() {
    this.loadData();
  }

  onSave() {
    this.saveData();
  }
  onDiscard() {
    this.loadData();
  }
  loadData() {
    let id = this.stitch.client().auth.user.id;
    let projection = {};
    projection[this.event_title] = 1;
    this.stitch.people().find({ stitch_id: id }, projection).asArray()
      .then((user) => {
        if (user.length < 1) return;
        let me = user[0];
        if (!me[this.event_title]) return;
        this.why_come = me[this.event_title].why_come || '';
      });
  }

  saveData() {
    let updatData = {};
    updatData.why_come = this.why_come;
    let to_send = {};
    to_send.$set = {};
    to_send.$set[this.event_title] = updatData;
    if (this.why_come !== undefined) updatData.why_come = this.why_come;
    this.stitch.people().updateOne({ stitch_id: this.stitch.client().auth.user.id }, to_send, { upsert: false });
  }
}

import { inject } from 'aurelia-framework';
import { GlobalState } from './global_state';

@inject(GlobalState)
export class UserDetail {
  constructor(GlobalState) {
    this.stitch = GlobalState;
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

  saveData() {
    let updatData = {};
    if (this.phone !== undefined) updatData.phone_number = this.phone;
    this.stitch.people().updateOne({ stitch_id: this.stitch.client().auth.user.id }, {$set: updatData}, { upsert: false });
  }

  loadData() {
    let id = this.stitch.client().auth.user.id;
    this.stitch.people().find({ stitch_id: id }, { limit: 1 }).asArray()
      .then((me) => {
        this.email = me[0].email;
        this.phone = me[0].phone_number;
      });
  }
}

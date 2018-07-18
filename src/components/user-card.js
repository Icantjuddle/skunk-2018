import { inject } from 'aurelia-framework';
import { GlobalState } from '../global_state';
import shirtSizeList from '../../config/datasets/shirt_sizes/shirt_sizes.json'

@inject(GlobalState)
export class UserCard {   
  constructor(globalState) {
    this.shirt_sizes = shirtSizeList;
    this.gs = globalState;
  }

  activate(user) {
    this.user = user;
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
    updatData.shirt_size = this.size;
    this.gs.people().updateOne({ stitch_id: this.user.stitch_id }, {$set: updatData}, { upsert: false });
  }

  loadData() {
    let id = this.user.stitch_id;
    this.gs.people().find({ stitch_id: id }, { limit: 1 }).asArray()
      .then((me) => {
        this.email = me[0].email;
        this.phone = me[0].phone_number;
        this.size = me[0].shirt_size || "null";
      });
  }
}

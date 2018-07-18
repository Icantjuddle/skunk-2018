import { inject } from 'aurelia-framework';
import { GlobalState } from '../global_state';
import questions from '../../config/datasets/application/questions.json';

@inject(GlobalState)
export class RatingCard {   
  constructor(globalState) {
    this.event_title = '2018f';
    this.gs = globalState;
    this.rating = {};
    this.qs = questions;
    this.answers = {};
  }

  activate(user) {
    this.user = user;
    this.loadData();
  }

  saveRating() {
    this.saveData();
  }

  reloadRating() {
    this.loadData();
  }

  saveData() {
    let updatData = {
      ['ratings.' + this.event_title]: this.rating
    };
    this.gs.people().updateOne({ stitch_id: this.user.stitch_id }, {$set: updatData}, { upsert: false });
  }

  loadData() {
    let id = this.user.stitch_id;
    this.gs.people().find({ stitch_id: id }, { limit: 1 }).asArray()
      .then((hacker) => {
        console.log(hacker)
        this.answers = hacker[0][this.event_title] || {};
        let ratings = hacker[0].ratings;
        this.rating = ratings ? ratings[this.event_title] : {};
      });
  }
}

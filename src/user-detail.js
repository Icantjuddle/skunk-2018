import { inject } from 'aurelia-framework';
import { StitchResources } from './stitch_resources';

@inject(StitchResources)
export class UserDetail {
  constructor(stitchResources) {
    this.stitch = stitchResources;
  }

  activate() {
    let id = this.stitch.client().auth.user.id;
    this.stitch.people().find({ stitch_id: id }, { limit: 1 }).asArray()
      .then((me) => {
        this.email = me[0].email;
      });
  }

  onSave() {

  }
}

import { inject } from 'aurelia-framework';
import { DialogService } from 'aurelia-dialog';

@inject(DialogService)
export class Homepage {
  constructor(dialogService) {
    this.dialogService = dialogService;
    this.page_title = 'Welcome to the homepage';
  }
}

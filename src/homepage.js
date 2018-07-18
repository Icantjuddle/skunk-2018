import { inject } from 'aurelia-framework';
import { DialogService } from 'aurelia-dialog';
import html  from '../config/landing_left.html';
import md from '../config/landing_right.md';

@inject(DialogService)
export class Homepage {
  constructor(dialogService) {
    this.dialogService = dialogService;
    this.page_title = 'Welcome to the homepage';
    this.contentHtml = html;
    this.contentMd = md;
  }
}

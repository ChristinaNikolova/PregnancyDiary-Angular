import { Component, Input } from '@angular/core';

import IComment from '../../shared/models/comment/IComment';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css'],
})
export class SingleCommentComponent {
  @Input() comment: IComment;

  constructor() {}
}

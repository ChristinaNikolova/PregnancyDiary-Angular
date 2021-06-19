import { Component, Input, OnInit } from '@angular/core';

import IComment from '../../shared/models/comment/IComment';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css'],
})
export class SingleCommentComponent implements OnInit {
  @Input() comment: IComment;

  constructor() {}

  ngOnInit(): void {}
}

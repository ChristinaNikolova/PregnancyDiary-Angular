import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommentsService } from 'src/app/core/services/comment/comments.service';

const CONTENT_MIN_LEN = 3;
const CONTENT_MAX_LEN = 1000;

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css'],
})
export class CreateCommentComponent implements OnInit {
  @Input() articleId: string;
  @Output() postCommentEventEmitter = new EventEmitter<void>();
  createCommentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    this.createCommentForm = this.fb.group({
      content: ['', [Validators.required, Validators.minLength(CONTENT_MIN_LEN), Validators.maxLength(CONTENT_MAX_LEN)]],
    });
  }

  get f() {
    return this.createCommentForm.controls;
  }

  create(): void {
    if (this.createCommentForm.invalid) {
      return;
    }

    this.commentsService.create(this.createCommentForm.value.content, this.articleId).subscribe((_) => {
        this.createCommentForm.reset();
        this.postCommentEventEmitter.emit();
      });
  }
}

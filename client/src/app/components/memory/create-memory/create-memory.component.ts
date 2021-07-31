import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MemoriesService } from 'src/app/core/services/memory/memories.service';
import { isMemoryDateInvalid } from 'src/app/core/validators/dateValidator';

const TITLE_MIN_LEN = 5;
const TITLE_MAX_LEN = 100;
const CONTENT_MAX_LEN = 1000;

@Component({
  selector: 'app-create-memory',
  templateUrl: './create-memory.component.html',
  styleUrls: ['./create-memory.component.css'],
})
export class CreateMemoryComponent implements OnInit {
  public createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private memoriesService: MemoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  get f() {
    return this.createForm.controls;
  }

  get validMemoryDate(): boolean {
    return isMemoryDateInvalid(this.createForm.value.date);
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      date: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(TITLE_MIN_LEN), Validators.maxLength(TITLE_MAX_LEN)]],
      content: ['', [Validators.required, Validators.maxLength(CONTENT_MAX_LEN)]],
    });
  }

  create(): void {
    if (this.createForm.invalid ||
      isMemoryDateInvalid(this.createForm.value.date)
    ) {
      return;
    }

    const weekId = this.route.snapshot.params['id'];

    this.memoriesService
      .create(this.createForm.value, weekId)
      .subscribe((_) => {
        this.router.navigate([`/weeks/see-week/${weekId}`]);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MemoriesService } from 'src/app/core/services/memory/memories.service';
import { isMemoryDateInvalid } from 'src/app/core/validators/dateValidator';
import IUpdateMemory from '../../shared/models/memory/IUpdateMemory';

const TITLE_MIN_LEN = 5;
const TITLE_MAX_LEN = 100;
const CONTENT_MAX_LEN = 1000;

@Component({
  selector: 'app-update-memory',
  templateUrl: './update-memory.component.html',
  styleUrls: ['./update-memory.component.css'],
})
export class UpdateMemoryComponent implements OnInit {
  updateForm: FormGroup;
  memory: IUpdateMemory;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private memoriesService: MemoriesService
  ) {}

  get f() {
    return this.updateForm.controls;
  }

  get validMemoryDate(): boolean {
    return isMemoryDateInvalid(this.updateForm.value.date);
  }

  ngOnInit(): void {
    this.memory = this.route.snapshot.data['updateMemory'];

    this.updateForm = this.fb.group({
      date: [this.memory.formattedDate, [Validators.required]],
      title: [this.memory.title, [Validators.required, Validators.minLength(TITLE_MIN_LEN), Validators.maxLength(TITLE_MAX_LEN)]],
      content: [this.memory.content, [Validators.required, Validators.maxLength(CONTENT_MAX_LEN)]],
    });
  }

  update(): void {
    if (this.updateForm.invalid ||
      isMemoryDateInvalid(this.updateForm.value.date)
    ) {
      return;
    }

    const memoryId = this.route.snapshot.params['id'];
    const weekId = this.memory.weekId;

    this.memoriesService
      .update(this.updateForm.value, memoryId, weekId)
      .subscribe((_) => {
        this.router.navigate([`/weeks/see-week/${weekId}`]);
      });
  }
}

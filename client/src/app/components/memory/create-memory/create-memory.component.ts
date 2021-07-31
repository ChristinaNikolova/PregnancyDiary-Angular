import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  public memoriesCount = 1;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  public create(): void {
    // validate date
    if (this.createForm.invalid) {
      return;
    }

    // this.recipesService.create(this.createForm.value).subscribe((_) => {
    //   this.router.navigate(['/recipe/all']);
    // });
  }

  public get f() {
    return this.createForm.controls;
  }

  public get memories(): FormArray {
    return this.createForm.get('memories') as FormArray;
  }

  public addMemory() {
    const currentFormValue = this.createForm.value;
    this.memoriesCount++;
    this.buildForm();
    this.createForm.patchValue(currentFormValue);
  }

  // remove

  private buildForm(): void {
    this.createForm = this.fb.group({
      memories: this.fb.array(
        new Array(this.memoriesCount).fill(null).map((_, index) =>
          this.fb.group({
            date: ['', [Validators.required]],
            title: ['', Validators.required, Validators.minLength(TITLE_MIN_LEN), Validators.maxLength(TITLE_MAX_LEN)],
            content: ['', Validators.required, Validators.maxLength(CONTENT_MAX_LEN)],
          })
        )
      ),
    });
  }
}

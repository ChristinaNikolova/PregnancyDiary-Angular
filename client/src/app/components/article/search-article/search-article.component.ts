import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const QUERY_MIN_LEN = 3;

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.css'],
})
export class SearchArticleComponent implements OnInit {
  @Output() searchEventEmitter = new EventEmitter<string>();
  searchForm: FormGroup;
  isSearched: boolean;

  constructor(private fb: FormBuilder) {
    this.isSearched = false;
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      query: ['', [Validators.required, Validators.minLength(QUERY_MIN_LEN)]],
    });
  }

  get f() {
    return this.searchForm.controls;
  }

  search(): void {
    if (this.searchForm.invalid) {
      return;
    }

    this.isSearched = true;
    this.searchEventEmitter.emit(this.searchForm.value.query);
  }

  clear(): void {
    this.searchForm.reset();
    this.isSearched = false;
    this.searchEventEmitter.emit('');
  }
}

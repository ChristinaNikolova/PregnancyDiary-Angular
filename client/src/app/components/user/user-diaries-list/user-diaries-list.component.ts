import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from 'src/app/core/services/user/users.service';
import IDiaryRow from '../../shared/models/diary/IDiaryRow';

@Component({
  selector: 'app-user-diaries-list',
  templateUrl: './user-diaries-list.component.html',
  styleUrls: ['./user-diaries-list.component.css'],
})
export class UserDiariesListComponent implements OnInit {
  diaries$: Observable<IDiaryRow[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.diaries$ = this.usersService.getUserDiaries();
  }
}

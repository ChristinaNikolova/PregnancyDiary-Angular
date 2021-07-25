import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BabiesService } from 'src/app/core/services/baby/babies.service';
import IBabyDetails from '../../shared/models/baby/IBabyDetails';

@Component({
  selector: 'app-see-baby',
  templateUrl: './see-baby.component.html',
  styleUrls: ['./see-baby.component.css'],
})
export class SeeBabyComponent implements OnInit {
  @Input() diaryId: string;
  @Output() removeBabyEventEmitter = new EventEmitter();
  baby: IBabyDetails;

  constructor(
    private route: ActivatedRoute,
    private babiesService: BabiesService
  ) {}

  ngOnInit(): void {
    this.baby = this.route.snapshot.data['singleBaby'];
  }

  remove(): void {
    this.babiesService.remove(this.baby.id).subscribe((_) => {
      this.removeBabyEventEmitter.emit();
    });
  }
}

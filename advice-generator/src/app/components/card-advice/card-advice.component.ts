import { AdviceService } from './../../services/advice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-advice',
  templateUrl: './card-advice.component.html',
  styleUrls: ['./card-advice.component.css'],
})
export class CardAdviceComponent implements OnInit {
  advice: any;
  isLoading: boolean = false;
  constructor(private adviceService: AdviceService) {}

  ngOnInit(): void {
    this.getAdviceRandom();
  }

  getAdviceRandom() {
    this.modifyLoading();
    this.adviceService.getAdviceRandom().subscribe((res) => {
      this.modifyLoading();
      this.advice = res.slip;
    });
  }

  modifyLoading() {
    this.isLoading = !this.isLoading
  }
}

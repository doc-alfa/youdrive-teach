

import { Component, OnDestroy, OnInit } from '@angular/core';

import { CARS } from '../../../core/constants/cars.constant';
import { SIGNS } from '../../../core/constants/signs.constant';
import { CarObject } from '../../../core/models/car.model';
import { SignObject } from '../../../core/models/sign.model';

@Component({
  selector: 'app-subheader-lecture',
  templateUrl: './subheader-lecture.component.html',
  styleUrls: ['./subheader-lecture.component.scss']
})
export class SubheaderLectureComponent implements OnInit, OnDestroy {
  cars: CarObject[] = CARS;
  signs: SignObject[] = SIGNS;
  interval: any;
  time: number = 0;
  timeAsString: string = '00:00:00';

  constructor() { }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer():void {
    this.interval = setInterval(() => {
      this.time++;
      this.timeAsString = new Date(this.time * 1000).toISOString().substr(11, 8)
    }, 1000)
  }

}

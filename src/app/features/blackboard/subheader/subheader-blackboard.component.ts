

import { Component, OnDestroy, OnInit } from '@angular/core';

import { CARS } from '../../../core/constants/cars.constant';
import { SIGNS } from '../../../core/constants/signs.constant';
import { CarObject } from '../../../core/models/car.model';
import { SignObject } from '../../../core/models/sign.model';

@Component({
  selector: 'app-subheader-blackboard',
  templateUrl: './subheader-blackboard.component.html',
  styleUrls: ['./subheader-blackboard.component.scss']
})
export class SubheaderBlackboardComponent implements OnInit, OnDestroy {
  cars: CarObject[] = CARS;
  signs: SignObject[] = SIGNS;
  interval: any;
  time: number = 0;

  constructor() { }

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer():void {
    this.interval = setInterval(() => {
      this.time++;
    }, 1000)
  }

}

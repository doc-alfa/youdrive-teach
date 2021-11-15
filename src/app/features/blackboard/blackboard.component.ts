
import { Component, OnInit } from '@angular/core';

import { CARS } from '../../core/constants/cars.constant';
import { SIGNS } from '../../core/constants/signs.constant';
import { CarObject } from '../../core/models/car.model';
import { SignObject } from '../../core/models/sign.model';

@Component({
  selector: 'app-blackboard',
  templateUrl: './blackboard.component.html',
  styleUrls: ['./blackboard.component.scss']
})
export class BlackboardComponent implements OnInit {
  signs: SignObject[] = SIGNS;

  constructor() { }

  ngOnInit(): void {}

}
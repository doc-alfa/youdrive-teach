import interact from 'interactjs';

import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective implements OnInit {

  // @Input()
  // options: any;

  // @Output()
  // dropping: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    interact(this.elementRef.nativeElement)
      .dropzone({
        ondropactivate: function (event) {
        },
        ondragenter: function (event) {
          const draggableElement = event.relatedTarget
          const dropzoneElement = event.target
          draggableElement.classList.add('item-on-board')
        },
        ondragleave: function (event) {
          event.relatedTarget.classList.remove('item-on-board')
        },
        ondrop: function (event) {
        },
        ondropdeactivate: function (event) {
        }
      })
  }
}
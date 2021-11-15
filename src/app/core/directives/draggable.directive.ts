import interact from 'interactjs';

import {
    Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output
} from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit {
  rotation: number = 0;

  @HostListener('dblclick') onMouseEnter() {
    this.rotation += 90;
    if (this.rotation >= 360) {
      this.rotation = 0;
    }
    let transformValue: string = this.element.nativeElement.style.transform.toString();

    // remove rotate statement
    transformValue = transformValue.replace(/rotate\(.{1,3}deg\)/i, "").trim();

    const rotateString: string = 'rotate(' + this.rotation + 'deg)';
    // ad new rotate statement
    this.element.nativeElement.style.transform = transformValue + ' ' + rotateString;
  }

  // @Input()
  // model: any;

  // @Input()
  // options: any;

  // @Output()
  // draggableClick = new EventEmitter();

  // private currentlyDragged = false;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    interact(this.element.nativeElement)
      .draggable({
        inertia: false,
        modifiers: [
          // interact.modifiers.restrictRect({
          //   restriction: 'parent',
          //   endOnly: true
          // })
        ],
        autoScroll: false,
        listeners: { move: this.dragMoveListener },
        onstart: function(event) {
          var box = event.target.parentElement;
          var rect = box.getBoundingClientRect();

          // store the center as the element has css `transform-origin: center center`
          box.setAttribute('data-center-x', rect.left + rect.width / 2);
          box.setAttribute('data-center-y', rect.top + rect.height / 2);
          // get the angle of the element when the drag starts
          // box.setAttribute('data-angle', this.getDragAngle(event));
        },
        onmove: function(event) {
          var box = event.target.parentElement;

          var pos = {
            x: parseFloat(box.getAttribute('data-x')) || 0,
            y: parseFloat(box.getAttribute('data-y')) || 0
          };

          // var angle = this.getDragAngle(event);

          // update transform style on dragmove
          // box.style.transform = 'translate(' + pos.x + 'px, ' + pos.y + 'px) rotate(' + angle + 'rad' + ')';
        },
        onend: function(event) {
          var box = event.target.parentElement;

          // save the angle on dragend
          // box.setAttribute('data-angle', this.getDragAngle(event));
        },
      })

  }

  dragMoveListener(event: any) {
    const target = event.target
    // keep the dragged position in the data-x/data-y attributes
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    let newTransform: string = 'translate(' + x + 'px, ' + y + 'px)';

    if (target.style.transform.match(/rotate\(.{1,3}deg\)/i)) {
      newTransform += target.style.transform.match(/rotate\(.{1,3}deg\)/i)[0];
    }

    target.style.transform = newTransform;

    // update the position attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
  }

  getDragAngle (event: any): number {
    var box = event.target.parentElement;
    var startAngle = parseFloat(box.getAttribute('data-angle')) || 0;
    var center = {
      x: parseFloat(box.getAttribute('data-center-x')) || 0,
      y: parseFloat(box.getAttribute('data-center-y')) || 0
    };
    var angle = Math.atan2(center.y - event.clientY,
      center.x - event.clientX);
    return angle - startAngle;
  }

}
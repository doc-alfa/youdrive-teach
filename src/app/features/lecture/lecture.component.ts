import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  constructor() { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '1200px',
        height: '900px',
        thumbnailsColumns: 8,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 1200,
        width: '100%',
        height: '900px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        thumbnailsRows: 2,
        thumbnailsArrows: true,
        thumbnailsMoveSize: 4,
        thumbnailsRemainingCount: true,
        thumbnailClasses: ['thumbnail']
      },
      {
        breakpoint: 800,
        preview: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/objects/slides/L9/Folie0.gif',
        medium: 'assets/objects/slides/L9/Folie0.gif',
        big: 'assets/objects/slides/L9/Folie0.gif'
      },
      {
        small: 'assets/objects/slides/L9/Folie2.png',
        medium: 'assets/objects/slides/L9/Folie2.png',
        big: 'assets/objects/slides/L9/Folie2.png',
      },
      // {
      //   small: 'assets/objects/slides/L9/Folie3.png',
      //   medium: 'assets/objects/slides/L9/Folie3.png',
      //   big: 'assets/objects/slides/L9/Folie3.png',
      // },
      {
        small: 'assets/objects/slides/L9/Folie4.png',
        medium: 'assets/objects/slides/L9/Folie4.png',
        big: 'assets/objects/slides/L9/Folie1.png',
      },
      {
        small: 'assets/objects/slides/L9/Folie5.png',
        medium: 'assets/objects/slides/L9/Folie5.png',
        big: 'assets/objects/slides/L9/Folie5.png',
      },
      {
        small: 'assets/objects/slides/L9/Folie6.png',
        medium: 'assets/objects/slides/L9/Folie6.png',
        big: 'assets/objects/slides/L9/Folie16.png',
      },
      {
        small: 'assets/objects/slides/L9/Folie7.png',
        medium: 'assets/objects/slides/L9/Folie7.png',
        big: 'assets/objects/slides/L9/Folie7.png',
      },
      {
        small: 'assets/objects/slides/L9/Folie8.png',
        medium: 'assets/objects/slides/L9/Folie8.png',
        big: 'assets/objects/slides/L9/Folie8.png',
      },
    ];
  }

}

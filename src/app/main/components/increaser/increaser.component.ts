import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: []
})
export class IncreaserComponent implements OnInit {

  @ViewChild('txtProgress', { static: false }) txtProgress: ElementRef;

  @Input() title = 'Leyenda';
  @Input() progress = 50;

  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges(value: number) {

    if ( value >= 100 ) {
      this.progress = 100;
    } else if ( value <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    this.txtProgress.nativeElement.value = this.progress;
    this.valueChanged.emit(this.progress);
  }

  changeValue(value: number) {
    if ( this.progress >= 100 && value > 0 ) {
      this.progress = 100;
      return;
    }

    if ( this.progress <= 0 && value < 0 ) {
      this.progress = 0;
      return;
    }

    this.progress = this.progress + value;
    this.valueChanged.emit(this.progress);
    this.txtProgress.nativeElement.focus();
  }

}

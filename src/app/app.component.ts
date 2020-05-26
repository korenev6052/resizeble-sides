import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CdkDragEnd, CdkDragMove, CdkDragStart} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private _leftSide: ElementRef;
  @ViewChild('leftSide', {read: ElementRef, static: false}) set leftSide(leftSide: ElementRef) {
    this._leftSide = leftSide;
    this.leftSideWidth = leftSide.nativeElement.offsetWidth;
    console.log('init leftSideWidth', this.leftSideWidth);
  }
  get leftSide(): ElementRef {
    return this._leftSide;
  }

  private _rightSide: ElementRef;
  @ViewChild('rightSide', {read: ElementRef, static: false}) set rightSide(rightSide: ElementRef) {
    this._rightSide = rightSide;
    this.rightSideWidth = rightSide.nativeElement.offsetWidth;
    console.log('init rightSideWidth', this.rightSideWidth);
  }
  get rightSide(): ElementRef {
    return this._rightSide;
  }

  @ViewChild('handler', {read: ElementRef, static: false}) handler: ElementRef;

  private leftSideWidth: number = null;
  private rightSideWidth: number = null;

  constructor() {}

  ngOnInit() {}

  onDragStatrted(start: CdkDragStart) {
    console.log('start', start);
  }

  onDragMoved(move: CdkDragMove) {
    const translation = move.distance.x;
    const resizedLeftSideWidth = this.leftSideWidth + translation;
    const resizedRightSideWidth = this.rightSideWidth - translation;
    this.leftSide.nativeElement.style.width = `${resizedLeftSideWidth}px`;
    this.rightSide.nativeElement.style.width = `${resizedRightSideWidth}px`;
    console.log(resizedLeftSideWidth);
    console.log(resizedRightSideWidth);
  }

  onDragEnded(end: CdkDragEnd) {
    this.leftSideWidth = this.leftSide.nativeElement.offsetWidth;
    this.rightSideWidth = this.rightSide.nativeElement.offsetWidth;
    console.log('end leftSideWidth', this.leftSideWidth);
    console.log('end rightSideWidth', this.rightSideWidth);
  }

}

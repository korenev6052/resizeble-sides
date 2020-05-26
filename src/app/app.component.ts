import {Component} from '@angular/core';
import {CdkDragEnd, CdkDragMove, CdkDragStart} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onDragStatrted(start: CdkDragStart) {
    console.log('start', start);
  }

  onDragMoved(move: CdkDragMove) {
    console.log('move', move);
  }

  onDragEnded(end: CdkDragEnd) {
    console.log('end', end);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  context?: CanvasRenderingContext2D;

  @ViewChild("mycanvas") mycanvas: any;

  title = 'canvas-tutorial';

  ngOnInit(): void {
    let canvas = this.mycanvas.nativeElement;
    let context = canvas.getContext('2d');
    context.clearRect(0,0,300,300);
  }
 
}

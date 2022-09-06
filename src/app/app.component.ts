import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  context?: CanvasRenderingContext2D;

  title = 'canvas-tutorial';

  ngOnInit(): void {
    let canvas =  <HTMLCanvasElement> document.getElementById("canvas");
    let ctx = canvas?.getContext('2d');
    var img = new Image();
    if(ctx) {
      debugger;
      //context.clearRect(0,0,300,300);
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, 900, 900);
    }
    
    //context?.drawImage(img, 0, 0);
    //img.src = ".././assets/images/f097075ec37cdbf9e77ef4887dc22a6e.jpg";
  }
 
}

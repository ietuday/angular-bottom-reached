import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  statusText: string = "not reached";

  constructor(lc: NgZone) {
     window.onscroll = () => {
         let status = "not reached";
         let windowHeight = "innerHeight" in window ? window.innerHeight
             : document.documentElement.offsetHeight;
         let body = document.body, html = document.documentElement;
         let docHeight = Math.max(body.scrollHeight,
             body.offsetHeight, html.clientHeight,
             html.scrollHeight, html.offsetHeight);
         let windowBottom = windowHeight + window.pageYOffset;
         if (windowBottom >= docHeight) {
           status = 'bottom reached';
         }
         lc.run(() => {
           this.statusText = status;
         });
      };
  }
}

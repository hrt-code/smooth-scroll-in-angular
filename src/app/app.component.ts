import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  isShowScrollTop: boolean = false;
  isShowScrollBottom: boolean = false;
  topPosToStartShowing = 100;
  bottomPosToEndShowing = 1000;

  constructor() { }


  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if ((scrollPosition + this.bottomPosToEndShowing) < document.body.scrollHeight)
      this.isShowScrollBottom = true
    else
      this.isShowScrollBottom = false;


    if (scrollPosition >= this.topPosToStartShowing)
      this.isShowScrollTop = true;
    else
      this.isShowScrollTop = false;

  }



  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  gotoDown() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }


}

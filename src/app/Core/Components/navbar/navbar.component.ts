import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Change navbar background and shadow while scrolling:
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let navbar = document.querySelector('.navbar') as HTMLElement;
    if(window.pageYOffset > navbar.clientHeight) {
      navbar.classList.add('bg-white');
      navbar.classList.add('shadow');
    } else {
      navbar.classList.remove('bg-white');
      navbar.classList.remove('shadow');
    }
  }

}

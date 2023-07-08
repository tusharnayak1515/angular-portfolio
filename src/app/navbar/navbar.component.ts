import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public showMenu:boolean = false;
  public showIcons: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver) { 
    this.breakpointObserver.observe('(min-width: 980px)')
      .subscribe(result => {
        this.showIcons = !result.matches;
      });
  }

  ngOnInit(): void {
    this.breakpointObserver.observe('(min-width: 980px)')
      .subscribe(result => {
        this.showIcons = !result.matches;
      });
  }

  toggleMenu = ()=> {
    this.showMenu = !this.showMenu;
  } 
  
}

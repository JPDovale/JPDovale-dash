import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationEnd, Router, RouterModule } from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  routerActive = ''

  constructor(private router: Router) {
    this.routerActive = this.router.url
  }

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.routerActive = this.router.url
      }
    })
  }
}

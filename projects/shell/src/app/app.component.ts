import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BSimple Academy';
  isHovered: boolean = false;

  isNightMode: boolean | undefined;
  constructor(private router: Router) {}
  ngOnInit() {}

  navigateToHomePage() {
    this.router.navigate(['/']);
  }

  hoverTitle(isHovered: boolean) {
    this.isHovered = isHovered;
  }

  navigateToProjetos() {
    this.router.navigate(['/projeto']);
  }

  navigateToColaborators() {
    this.router.navigate(['/colaborator']);
  }

  navigateToTraining() {
    this.router.navigate(['/Training']);
  }

  navigateToHoliday() {
    this.router.navigate(['/association']);
  }



  isSidebarOpen = false;

    toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

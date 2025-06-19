import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   sidebarOpen = false;
constructor(private router: Router) {}
 departments = [
  { name: 'Fruits & Vegetables', icon: 'fa fa-apple', route: 'fruitsvegetables' },
  { name: 'Supplements', icon: 'fa fa-medkit', route: 'Supplement' },
  { name: 'Dairy, Bread & Eggs', icon: 'fa fa-shopping-basket', route: 'DailyBreadeggs' },
  { name: 'Package Foods', icon: 'fa fa-cutlery', route: 'PackageFoods' },
  { name: 'Beauty & Care', icon: 'fa fa-heartbeat', route: 'beautyCare' },
  { name: 'Health & Wellness', icon: 'fa fa-stethoscope', route: 'HealthWellness' },
  { name: 'Baby & Infants', icon: 'fa fa-child', route: 'BabyInfants' },
  { name: 'Home Care', icon: 'fa fa-home', route: 'HomeCare' },
  { name: 'Hot Offers', icon: 'fa fa-fire', route: 'HotOffers' },
];


  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }



  // In your component.ts
showLoginForm = false;
username = '';
password = '';

toggleLoginForm() {
  this.showLoginForm = !this.showLoginForm;
}

onLogin() {
  if (this.username && this.password) {
    alert(`Logging in as ${this.username}`);
    this.showLoginForm = false;
    // Actual login logic goes here
  }
}
@HostListener('document:click', ['$event'])
handleClickOutside(event: Event) {
  const clickedInside = (event.target as HTMLElement).closest('.user-icon-wrapper');
  if (!clickedInside) {
    this.showLoginForm = false;
  }
}

}

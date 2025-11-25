import { NgClass, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgClass, NgIf],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMobileMenuOpen = signal(false);
  navLinks = [
      {text: 'Home', to: '/'},
      {text: 'Todos', to: '/todos'},
      {text: 'Login', to: '/login'},
      {text: 'Signup', to: '/signup'},
    ]  
  
toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
}



}

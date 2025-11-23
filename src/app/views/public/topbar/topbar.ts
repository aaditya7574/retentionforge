import { Component, ElementRef, HostListener, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ThemeService } from '../../../utils/theme/theme-service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from "@angular/router";
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-topbar',
  imports: [
    RouterModule,
    CommonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar  {
  isScrolled = false;
  isMobileMenuOpen = false;
  mobileServicesOpen = false;
  isShowDesktopMenu = false;
  constructor(private router: Router) { }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 30;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.mobileServicesOpen = false;
  }

  toggleMobileServices() {
    this.mobileServicesOpen = !this.mobileServicesOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
    this.mobileServicesOpen = false;
    this.isShowDesktopMenu = false;
    
  }

  isServicesPageActive(): boolean {
    const currentUrl = this.router.url;
    return currentUrl.startsWith('/services/');
  }
}

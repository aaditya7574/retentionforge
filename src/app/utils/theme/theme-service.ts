import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'liquor-theme';

  constructor() {
    // Load saved theme or default to dark
    const saved = localStorage.getItem(this.THEME_KEY) || 'dark';
    this.setTheme(saved as 'light' | 'dark');
  }

  toggleTheme() {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.THEME_KEY, theme);
  }

  isLight(): boolean {
    return document.documentElement.getAttribute('data-theme') === 'light';
  }
}

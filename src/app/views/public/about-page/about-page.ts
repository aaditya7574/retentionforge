import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

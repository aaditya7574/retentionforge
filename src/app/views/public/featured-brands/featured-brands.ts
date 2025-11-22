import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-brands',
  imports: [
    CommonModule
  ],
  templateUrl: './featured-brands.html',
  styleUrl: './featured-brands.scss',
})
export class FeaturedBrands {
  brands:any = [
    { name: 'Crown Royal', logo: '/assets/images/crownroyal.jpg', alt: 'Crown Royal' },
    { name: 'New Belgium Brewing', logo: '/assets/images/newbelgiumbrewing.png', alt: 'New Belgium Brewing' },
    { name: 'Jim Beam', logo: '/assets/images/bulleit-logo.avif', alt: 'Jim Beam' },
    { name: 'Captain Morgan', logo: '/assets/images/red-logo.avif', alt: 'Captain Morgan' },
    { name: 'Sorel', logo: '/assets/images/red-logo.avif', alt: 'Sorel' },
    { name: 'Bulleit Frontier Whiskey', logo: '/assets/images/bulleit-logo.avif', alt: 'Bulleit' },
    { name: 'Inspiro Tequila', logo: '/assets/images/logo-inspiro.svg', alt: 'Inspiro Tequila' },
    { name: 'Simply Spiked', logo: '/assets/images/ss_logo.png', alt: 'Simply Spiked' },
    { name: "Maker's Mark", logo: '/assets/images/red-logo.avif', alt: "Maker's Mark" },
    { name: 'Pacifico Clara', logo: '/assets/images/red-logo.avif', alt: 'Pacifico Clara' },
  ];
}

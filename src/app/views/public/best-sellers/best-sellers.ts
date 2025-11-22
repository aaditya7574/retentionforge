import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-best-sellers',
  imports: [CommonModule, RouterLink],
  templateUrl: './best-sellers.html',
  styleUrl: './best-sellers.scss',
})
export class BestSellers {
  bestSellers: any[] = [
    {
      name: 'Jameson Irish',
      type: 'Whiskey',
      price: '9.90',
      oldPrice: '11.00',
      discount: '20%',
      discountColor: '#ff4757',
      rating: '4.9',
      reviews: '2,329',
      image: '/assets/images/download-removebg-preview.png'
    },
    {
      name: 'Absolut',
      type: 'Original Vodka',
      price: '44.99',
      oldPrice: '49.99',
      discount: '28%',
      discountColor: '#ff6b7a',
      rating: '4.8',
      reviews: '1,970',
      image: '/assets/images/images-removebg-preview.png'
    },
    {
      name: 'Meiomi Pinot Noir',
      type: 'Red Wine',
      price: '42.99',
      oldPrice: '49.99',
      discount: '30%',
      discountColor: '#ff3838',
      rating: '4.9',
      reviews: '2,039',
      image: '/assets/images/images__1_-removebg-preview.png'
    },
    {
      name: 'Oban 14 Year',
      type: 'Single Malt',
      price: '12.90',
      oldPrice: '16.00',
      discount: '40%',
      discountColor: '#ff2d42',
      rating: '4.9',
      reviews: '2,329',
      image: '/assets/images/Oban-14-Year-Old-Whisky.webp'
    }
  ];

  // Helper to generate star icons dynamically
  getFullStars(rating: string): number {
    return Math.floor(parseFloat(rating));
  }

  hasHalfStar(rating: string): boolean {
    return parseFloat(rating) % 1 >= 0.5;
  }
}

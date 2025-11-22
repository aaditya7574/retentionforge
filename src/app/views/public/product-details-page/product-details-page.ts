import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-details-page.html',
  styleUrl: './product-details-page.scss',
})
export class ProductDetailsPage {
  quantity = 1;

  product:any = {
    name: 'Oban 14 Year Single Malt Scotch',
    image: '/assets/images/Oban-14-Year-Old-Whisky.webp',
    rating: '4.9',
    reviews: '2,329',
    price: 89.90,
    oldPrice: 129.00,
    discount: '30%',
    description: 'A classic coastal Highland malt with notes of orange peel, smoke, sea salt, and a sweet maltiness. Aged 14 years in oak casks, this is a perfectly balanced single malt whisky.',
    type: 'Single Malt Scotch',
    sku: 'OBAN-14-750'
  };

  increment() { this.quantity++; }
  decrement() { if (this.quantity > 1) this.quantity--; }

  addToCart() {
    console.log(`Added ${this.quantity} x ${this.product.name} to cart`);
    // Add your cart service logic here
  }

  reviews = [
    {
      name: "Alex Morgan",
      avatar: "/assets/reviews/avatar1.jpg",
      rating: 5,
      date: "November 15, 2025",
      title: "Absolutely Stunning!",
      comment: "The quality exceeded my expectations. Worth every penny!",
      helpful: 42,
      images: ["/assets/images/images__1_-removebg-preview.png", "/assets/images/images__1_-removebg-preview.png"]
    },
    // ... more reviews
  ];

  // Helper methods
  getRatingPercentage(stars: number): number {
    // Mock distribution - replace with real data
    const counts:any = { 5: 68, 4: 22, 3: 7, 2: 2, 1: 1 };
    return (counts[stars] || 0);
  }

  getReviewCount(stars: number): number {
    const counts:any = { 5: 136, 4: 44, 3: 14, 2: 4, 1: 2 };
    return counts[stars] || 0;
  }
}

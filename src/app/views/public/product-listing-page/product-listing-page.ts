import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-listing-page',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-listing-page.html',
  styleUrl: './product-listing-page.scss',
})
export class ProductListingPage {
  mobileFiltersOpen = false;

  allProducts = [
    { id: 1, name: 'Jameson Irish', type: 'Whiskey', price: 9.90, oldPrice: 11.00, discount: '20%', discountColor: '#ff4757', rating: 4.9, reviews: '2,329', image: '/assets/images/download-removebg-preview.png', category: 'Whiskey', brand: 'Jameson' },
    { id: 2, name: 'Absolut', type: 'Original Vodka', price: 44.99, oldPrice: 49.99, discount: '28%', discountColor: '#ff6b7a', rating: 4.8, reviews: '1,970', image: '/assets/images/images-removebg-preview.png', category: 'Vodka', brand: 'Absolut' },
    { id: 3, name: 'Meiomi Pinot Noir', type: 'Red Wine', price: 42.99, oldPrice: 49.99, discount: '30%', discountColor: '#ff3838', rating: 4.9, reviews: '2,039', image: '/assets/images/images__1_-removebg-preview.png', category: 'Wine', brand: 'Meiomi' },
    { id: 4, name: 'Oban 14 Year', type: 'Single Malt', price: 12.90, oldPrice: 16.00, discount: '40%', discountColor: '#ff2d42', rating: 4.9, reviews: '2,329', image: '/assets/images/Oban-14-Year-Old-Whisky.webp', category: 'Whiskey', brand: 'Oban' }
  ];

  filteredProducts = [...this.allProducts];

  categories = [
    { name: 'Whiskey', count: 48, checked: false },
    { name: 'Vodka', count: 32, checked: false },
    { name: 'Wine', count: 56, checked: false },
    { name: 'Gin', count: 21, checked: false },
  ];

  brands = [
    { name: 'Jameson', count: 12, checked: false },
    { name: 'Absolut', count: 8, checked: false },
    { name: 'Oban', count: 5, checked: false },
    { name: 'Meiomi', count: 10, checked: false },
  ];

  discounts = [
    { label: '10% off or more', checked: false, min: 10 },
    { label: '20% off or more', checked: false, min: 20 },
    { label: '30% off or more', checked: false, min: 30 },
  ];

  priceRange = 200;
  minRating = 0;
  sortBy = 'featured';

  toggleMobileFilters() {
    this.mobileFiltersOpen = !this.mobileFiltersOpen;
  }

  get activeFiltersCount() {
    return (
      this.categories.filter(c => c.checked).length +
      this.brands.filter(b => b.checked).length +
      this.discounts.filter(d => d.checked).length +
      (this.priceRange < 200 ? 1 : 0) +
      (this.minRating > 0 ? 1 : 0)
    );
  }

  applyFilter() {
    let temp = [...this.allProducts];

    const selectedCats = this.categories.filter(c => c.checked).map(c => c.name);
    if (selectedCats.length > 0)
      temp = temp.filter(p => selectedCats.includes(p.category));

    const selectedBrands = this.brands.filter(b => b.checked).map(b => b.name);
    if (selectedBrands.length > 0)
      temp = temp.filter(p => selectedBrands.includes(p.brand));

    temp = temp.filter(p => p.price <= this.priceRange);

    if (this.minRating > 0)
      temp = temp.filter(p => p.rating >= this.minRating);

    const activeDiscounts = this.discounts.filter(d => d.checked);
    if (activeDiscounts.length > 0) {
      const minDisc = Math.max(...activeDiscounts.map(d => d.min));
      temp = temp.filter(p => parseInt(p.discount || '0') >= minDisc);
    }

    switch (this.sortBy) {
      case 'price-low':
        temp.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        temp.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        temp.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        temp.sort((a, b) => parseInt(b.discount) - parseInt(a.discount));
        break;
    }

    this.filteredProducts = temp;
  }

  clearAllFilters() {
    this.categories.forEach(c => (c.checked = false));
    this.brands.forEach(b => (b.checked = false));
    this.discounts.forEach(d => (d.checked = false));
    this.priceRange = 200;
    this.minRating = 0;
    this.sortBy = 'featured';
    this.filteredProducts = [...this.allProducts];
  }

  getFullStars(rating: number) {
    return Math.floor(rating);
  }

  hasHalfStar(rating: number) {
    return rating % 1 >= 0.5;
  }

  addToCart(product: any) {
    console.log('Added to cart:', product.name);
  }
}

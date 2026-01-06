import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  imports: [],
  templateUrl: './partners.html',
  styleUrl: './partners.scss',
})
export class Partners implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}

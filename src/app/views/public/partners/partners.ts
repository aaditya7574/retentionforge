import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-partners',
  imports: [RouterLink],
  templateUrl: './partners.html',
  styleUrl: './partners.scss',
})
export class Partners implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}

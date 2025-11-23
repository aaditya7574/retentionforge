import { Component, OnInit } from '@angular/core';
import { Topbar } from "../topbar/topbar";
import { Hero } from "../hero/hero";
import { BestSellers } from "../best-sellers/best-sellers";
import { FeaturedBrands } from "../featured-brands/featured-brands";
import { Footer } from "../footer/footer";
import { ValueProposition } from "../value-proposition/value-proposition";
import { ServicesOverview } from "../services-overview/services-overview";
import { SocialProof } from "../social-proof/social-proof";
import { FinalCta } from "../final-cta/final-cta";

@Component({
  selector: 'app-welcome',
  imports: [Hero, ValueProposition, ServicesOverview, SocialProof, FinalCta],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss',
})
export class Welcome implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

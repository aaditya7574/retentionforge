import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Footer } from "../../views/public/footer/footer";
import { Topbar } from "../../views/public/topbar/topbar";

@Component({
  selector: 'app-public-layouts',
  imports: [RouterOutlet, Footer, Topbar],
  templateUrl: './public-layouts.html',
  styleUrl: './public-layouts.scss',
})
export class PublicLayouts {

}

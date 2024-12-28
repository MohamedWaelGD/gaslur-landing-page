import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSRulePlugin);
  }
}

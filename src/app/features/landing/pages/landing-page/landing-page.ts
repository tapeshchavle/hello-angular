import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { FeaturesList } from '../../components/features-list/features-list';

@Component({
  selector: 'app-landing-page',
  imports: [Hero, FeaturesList],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}

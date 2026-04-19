import { Component } from '@angular/core';

@Component({
  selector: 'app-features-list',
  imports: [],
  templateUrl: './features-list.html',
  styleUrl: './features-list.css',
})
export class FeaturesList {
  features = [
    { id: 1, icon: '🚀', title: 'Lightning Fast', description: 'Built with Angular 18 for incredibly fast render speeds and optimal performance.' },
    { id: 2, icon: '🔒', title: 'Highly Secure', description: 'Industry-standard security practices integrated seamlessly from core to deployment.' },
    { id: 3, icon: '📈', title: 'Scalable Architecture', description: 'A flexible structure allowing easy incorporation of new enterprise modules.' }
  ];
}

import { Component } from '@angular/core';
import { HeaderComponent } from '../app/component/header/header.component';
import { RouterOutlet } from '@angular/router';
import { RewardsListingComponent } from './component/rewards-listing/rewards-listing.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,RewardsListingComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rewards-portal';
}

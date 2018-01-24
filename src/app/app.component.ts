import { Component } from '@angular/core';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PortfolioService]
})

export class AppComponent {
  title = 'app workss!!!';
}
